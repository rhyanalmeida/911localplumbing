import { STATUSES } from "../constants/statuses";
import { usePermits } from "../hooks/usePermits";

export interface StatusSummaryProps {
  company: string;
}

export function StatusSummary(props: StatusSummaryProps) {
  const { data, isLoading } = usePermits({
    company: props.company === "All" ? undefined : props.company,
  });

  if (isLoading) {
    return (
      <div className="status-summary">
        <span className="status-summary__total">Total: —</span>
        {STATUSES.map((status) => (
          <span
            key={status}
            className="status-summary__pill status-summary__pill--skeleton"
          >
            {status} (—)
          </span>
        ))}
      </div>
    );
  }

  const permits = data ?? [];
  const counts = new Map<string, number>(STATUSES.map((s) => [s, 0]));
  for (const permit of permits) {
    counts.set(permit.status, (counts.get(permit.status) ?? 0) + 1);
  }

  return (
    <div className="status-summary">
      <span className="status-summary__total">Total: {permits.length}</span>
      {STATUSES.map((status) => (
        <span key={status} className="status-summary__pill">
          {status} ({counts.get(status) ?? 0})
        </span>
      ))}
    </div>
  );
}
