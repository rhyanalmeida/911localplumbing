// Stub — unit 14 finalizes.
export interface CompanyFilterProps {
  value: string;
  onChange: (next: string) => void;
}

export function CompanyFilter(_props: CompanyFilterProps) {
  return <select><option value="All">All</option></select>;
}
