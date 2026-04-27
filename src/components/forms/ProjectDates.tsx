// Stub — unit 10 finalizes.
export interface ProjectDatesValue {
  plumbing_inspector: string;
  project_start_date: string;
  project_finish_date: string;
}

export interface ProjectDatesProps {
  value: ProjectDatesValue;
  onChange: (patch: Partial<ProjectDatesValue>) => void;
}

export function ProjectDates(_props: ProjectDatesProps) {
  return <fieldset><legend>Inspection & Project Dates</legend></fieldset>;
}
