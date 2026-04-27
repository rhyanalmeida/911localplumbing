import { STATUSES } from "../../constants/statuses";

export interface InspectionStatusNotesValue {
  status: string;
  rough: string;
  final: string;
  notes: string;
}

export interface InspectionStatusNotesProps {
  value: InspectionStatusNotesValue;
  onChange: (patch: Partial<InspectionStatusNotesValue>) => void;
}

export function InspectionStatusNotes({ value, onChange }: InspectionStatusNotesProps) {
  return (
    <fieldset>
      <legend>Inspection Status & Notes</legend>
      <label>
        Status
        <select value={value.status} onChange={(e) => onChange({ status: e.target.value })}>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Rough
        <input type="date" value={value.rough} onChange={(e) => onChange({ rough: e.target.value })} />
      </label>
      <label>
        Final
        <input type="date" value={value.final} onChange={(e) => onChange({ final: e.target.value })} />
      </label>
      <label>
        Notes
        <textarea rows={4} placeholder="Any additional notes about this permit..." value={value.notes} onChange={(e) => onChange({ notes: e.target.value })} />
      </label>
    </fieldset>
  );
}
