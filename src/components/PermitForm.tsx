import { useReducer, useState } from "react";
import { CustomerJobInfo } from "./forms/CustomerJobInfo";
import { PermitInfo } from "./forms/PermitInfo";
import { InspectionStatusNotes } from "./forms/InspectionStatusNotes";
import { ProjectDates } from "./forms/ProjectDates";
import { InspectionHoursTownhall } from "./forms/InspectionHoursTownhall";
import { useCreatePermit } from "../hooks/usePermits";
import type { Company, NewPermit, PaymentType, Status } from "../types/permit";

interface FormState {
  customer_name: string;
  customer_telephone: string;
  job_number: string;
  company: string;
  received_date: string;
  date_of_install: string;
  address: string;
  permit_needed: string;
  permit_submitted: string;
  permit_number: string;
  permit_cost: string;
  payment_type: string;
  status: string;
  rough: string;
  final: string;
  notes: string;
  plumbing_inspector: string;
  project_start_date: string;
  project_finish_date: string;
  inspection_hours_townhall: string;
}

function todayIsoDate(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function makeInitialState(): FormState {
  return {
    customer_name: "",
    customer_telephone: "",
    job_number: "",
    company: "",
    received_date: todayIsoDate(),
    date_of_install: "",
    address: "",
    permit_needed: "",
    permit_submitted: "",
    permit_number: "",
    permit_cost: "",
    payment_type: "",
    status: "Open",
    rough: "",
    final: "",
    notes: "",
    plumbing_inspector: "",
    project_start_date: "",
    project_finish_date: "",
    inspection_hours_townhall: "",
  };
}

function formReducer(state: FormState, patch: Partial<FormState>): FormState {
  return { ...state, ...patch };
}

function emptyToNull(v: string): string | null {
  return v.trim() === "" ? null : v;
}

function parseCost(v: string): number | null {
  if (v.trim() === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function buildPayload(state: FormState): NewPermit {
  return {
    customer_name: state.customer_name,
    customer_telephone: emptyToNull(state.customer_telephone),
    job_number: state.job_number,
    company: emptyToNull(state.company) as Company | null,
    received_date: emptyToNull(state.received_date),
    date_of_install: emptyToNull(state.date_of_install),
    address: state.address,
    permit_needed: emptyToNull(state.permit_needed),
    permit_submitted: emptyToNull(state.permit_submitted),
    permit_number: emptyToNull(state.permit_number),
    permit_cost: parseCost(state.permit_cost),
    payment_type: emptyToNull(state.payment_type) as PaymentType | null,
    status: state.status as Status,
    rough: emptyToNull(state.rough),
    final: emptyToNull(state.final),
    notes: emptyToNull(state.notes),
    plumbing_inspector: emptyToNull(state.plumbing_inspector),
    project_start_date: emptyToNull(state.project_start_date),
    project_finish_date: emptyToNull(state.project_finish_date),
    inspection_hours_townhall: emptyToNull(state.inspection_hours_townhall),
  };
}

export function PermitForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(
    formReducer,
    undefined,
    makeInitialState,
  );
  const createPermit = useCreatePermit();

  const handleChange = (patch: Partial<FormState>) => dispatch(patch);

  const reset = () => dispatch(makeInitialState());

  const handleCancel = () => {
    setIsOpen(false);
    reset();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPermit.mutateAsync(buildPayload(state));
    setIsOpen(false);
    reset();
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => setIsOpen(true)}
      >
        New Permit Entry
      </button>
    );
  }

  return (
    <div className="card">
      <div className="card__header">
        <h2>New Permit Entry</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <CustomerJobInfo
          value={{
            customer_name: state.customer_name,
            customer_telephone: state.customer_telephone,
            job_number: state.job_number,
            company: state.company,
            received_date: state.received_date,
            date_of_install: state.date_of_install,
            address: state.address,
          }}
          onChange={handleChange}
        />
        <PermitInfo
          value={{
            permit_needed: state.permit_needed,
            permit_submitted: state.permit_submitted,
            permit_number: state.permit_number,
            permit_cost: state.permit_cost,
            payment_type: state.payment_type,
          }}
          onChange={handleChange}
        />
        <InspectionStatusNotes
          value={{
            status: state.status,
            rough: state.rough,
            final: state.final,
            notes: state.notes,
          }}
          onChange={handleChange}
        />
        <ProjectDates
          value={{
            plumbing_inspector: state.plumbing_inspector,
            project_start_date: state.project_start_date,
            project_finish_date: state.project_finish_date,
          }}
          onChange={handleChange}
        />
        <InspectionHoursTownhall
          value={{
            inspection_hours_townhall: state.inspection_hours_townhall,
          }}
          onChange={handleChange}
        />
        {createPermit.error && (
          <p className="form-error">
            {(createPermit.error as Error).message}
          </p>
        )}
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn--primary"
            disabled={createPermit.isPending}
          >
            {createPermit.isPending ? "Saving..." : "Add Permit"}
          </button>
          <button
            type="button"
            className="btn"
            onClick={handleCancel}
            disabled={createPermit.isPending}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
