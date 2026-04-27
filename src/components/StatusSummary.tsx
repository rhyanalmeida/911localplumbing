import { STATUSES } from "../constants/statuses";
import { usePermits } from "../hooks/usePermits";
import type { Company } from "../types/permit";

export interface StatusSummaryProps {
  company: string;
}

export function StatusSummary({ company }: StatusSummaryProps) {
  const filter =
    company === "All" ? undefined : { company: company as Company };
  const { data, isLoading } = usePermits(filter);

  const counts: Record<string, number> = {};
  for (const s of STATUSES) counts[s] = 0;
  if (data) for (const p of data) counts[p.status] = (counts[p.status] ?? 0) + 1;
  const total = data?.length ?? 0;

  return (
    <div className="status-summary">
      <span className="status-summary__total">
        Total: {isLoading ? "—" : total}
      </span>
      {STATUSES.map((s) => (
        <span
          key={s}
          className={`pill pill--${s.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {s} ({isLoading ? "—" : counts[s]})
        </span>
      ))}
    </div>
  );
}
