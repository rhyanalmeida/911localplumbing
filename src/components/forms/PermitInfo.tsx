import { PAYMENT_TYPE_VALUES } from "../../types/permit";

export interface PermitInfoValue {
  permit_needed: string;
  permit_submitted: string;
  permit_number: string;
  permit_cost: string;
  payment_type: string;
}

export interface PermitInfoProps {
  value: PermitInfoValue;
  onChange: (patch: Partial<PermitInfoValue>) => void;
}

export function PermitInfo({ value, onChange }: PermitInfoProps) {
  return (
    <fieldset className="form-section">
      <legend>Permit Information</legend>
      <div className="form-grid">
        <label className="form-grid__full">
          Permit Needed
          <input
            type="text"
            placeholder="e.g., Plumbing, Backflow (leave empty if no permit needed)"
            value={value.permit_needed}
            onChange={(e) => onChange({ permit_needed: e.target.value })}
          />
        </label>
        <label>
          Permit Submitted
          <input
            type="date"
            value={value.permit_submitted}
            onChange={(e) => onChange({ permit_submitted: e.target.value })}
          />
        </label>
        <label>
          Permit Number
          <input
            type="text"
            value={value.permit_number}
            onChange={(e) => onChange({ permit_number: e.target.value })}
          />
        </label>
        <label>
          Permit Cost ($)
          <input
            type="number"
            step="0.01"
            min="0"
            value={value.permit_cost}
            onChange={(e) => onChange({ permit_cost: e.target.value })}
          />
        </label>
        <label>
          Payment Type
          <select
            value={value.payment_type}
            onChange={(e) => onChange({ payment_type: e.target.value })}
          >
            <option value="">Select...</option>
            {PAYMENT_TYPE_VALUES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
    </fieldset>
  );
}
