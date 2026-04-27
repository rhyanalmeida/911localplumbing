export interface ProjectDatesValue {
  plumbing_inspector: string;
  project_start_date: string;
  project_finish_date: string;
}

export interface ProjectDatesProps {
  value: ProjectDatesValue;
  onChange: (patch: Partial<ProjectDatesValue>) => void;
}

export function ProjectDates({ value, onChange }: ProjectDatesProps) {
  return (
    <fieldset className="form-section">
      <legend>Inspection &amp; Project Dates</legend>
      <div className="form-grid">
        <label>
          Plumbing Inspector #
          <input
            type="text"
            value={value.plumbing_inspector}
            onChange={(e) => onChange({ plumbing_inspector: e.target.value })}
          />
        </label>
        <label>
          Project Start Date
          <input
            type="date"
            value={value.project_start_date}
            onChange={(e) => onChange({ project_start_date: e.target.value })}
          />
        </label>
        <label>
          Project Finish Date
          <input
            type="date"
            value={value.project_finish_date}
            onChange={(e) => onChange({ project_finish_date: e.target.value })}
          />
        </label>
      </div>
    </fieldset>
  );
}
