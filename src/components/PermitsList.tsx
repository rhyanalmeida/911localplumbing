import { usePermits } from "../hooks/usePermits";
import type { Permit } from "../types/permit";

export interface PermitsListProps {
  company: string;
}

const DASH = "—";

function formatDate(value: string | null): string {
  if (!value) return DASH;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return DASH;
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
}

function formatString(value: string | null | undefined): string {
  if (value === null || value === undefined || value === "") return DASH;
  return value;
}

export function PermitsList(props: PermitsListProps) {
  const { data, isLoading } = usePermits({
    company: props.company === "All" ? undefined : props.company,
  });

  if (isLoading) {
    return <div>Loading{"…"}</div>;
  }

  const permits: Permit[] = data ?? [];

  if (permits.length === 0) {
    return <div>No permits yet.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Address</th>
          <th>Job #</th>
          <th>Permit #</th>
          <th>Status</th>
          <th>Received</th>
          <th>Install</th>
          <th>Rough</th>
          <th>Final</th>
        </tr>
      </thead>
      <tbody>
        {permits.map((permit) => (
          <tr key={permit.id}>
            <td>{formatString(permit.customer_name)}</td>
            <td>{formatString(permit.customer_telephone)}</td>
            <td>{formatString(permit.company)}</td>
            <td>{formatString(permit.address)}</td>
            <td>{formatString(permit.job_number)}</td>
            <td>{formatString(permit.permit_number)}</td>
            <td>{formatString(permit.status)}</td>
            <td>{formatDate(permit.received_date)}</td>
            <td>{formatDate(permit.date_of_install)}</td>
            <td>{formatDate(permit.rough)}</td>
            <td>{formatDate(permit.final)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
