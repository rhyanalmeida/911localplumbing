import { COMPANIES } from "../constants/companies";

export interface CompanyFilterProps {
  value: string;
  onChange: (next: string) => void;
}

export function CompanyFilter({ value, onChange }: CompanyFilterProps) {
  return (
    <label className="filter">
      <span className="filter__label">Filter by company</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All Companies</option>
        {COMPANIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </label>
  );
}
