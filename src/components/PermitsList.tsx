import { usePermits } from "../hooks/usePermits";
import type { Company, Permit } from "../types/permit";

export interface PermitsListProps {
  company: string;
}

function fmtDate(v: string | null): string {
  if (!v) return "—";
  const [y, m, d] = v.split("-");
  if (!y || !m || !d) return v;
  return `${m}/${d}/${y}`;
}

function fmtText(v: string | null): string {
  return v && v.trim() !== "" ? v : "—";
}

function fmtCost(v: number | null): string {
  if (v === null || v === undefined) return "—";
  return `$${v.toFixed(2)}`;
}

export function PermitsList({ company }: PermitsListProps) {
  const filter =
    company === "All" ? undefined : { company: company as Company };
  const { data, isLoading, error } = usePermits(filter);

  if (isLoading) return <p className="muted">Loading permits...</p>;
  if (error)
    return <p className="form-error">Error: {(error as Error).message}</p>;
  if (!data || data.length === 0) return <p className="muted">No permits yet.</p>;

  return (
    <div className="table-wrap">
      <table className="permits-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Address</th>
            <th>Job #</th>
            <th>Permit #</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Received</th>
            <th>Install</th>
            <th>Rough</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p: Permit) => (
            <tr key={p.id}>
              <td>{fmtText(p.customer_name)}</td>
              <td>{fmtText(p.customer_telephone)}</td>
              <td>{fmtText(p.company)}</td>
              <td>{fmtText(p.address)}</td>
              <td>{fmtText(p.job_number)}</td>
              <td>{fmtText(p.permit_number)}</td>
              <td>
                <span
                  className={`pill pill--${p.status.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {p.status}
                </span>
              </td>
              <td>{fmtCost(p.permit_cost)}</td>
              <td>{fmtDate(p.received_date)}</td>
              <td>{fmtDate(p.date_of_install)}</td>
              <td>{fmtDate(p.rough)}</td>
              <td>{fmtDate(p.final)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
