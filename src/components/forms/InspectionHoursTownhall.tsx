export interface InspectionHoursTownhallValue {
  inspection_hours_townhall: string;
}

export interface InspectionHoursTownhallProps {
  value: InspectionHoursTownhallValue;
  onChange: (patch: Partial<InspectionHoursTownhallValue>) => void;
}

export function InspectionHoursTownhall({
  value,
  onChange,
}: InspectionHoursTownhallProps) {
  return (
    <fieldset className="form-section">
      <legend>Inspection Hours &amp; Townhall</legend>
      <label>
        <textarea
          rows={3}
          placeholder="Inspection hours, townhall details, etc."
          value={value.inspection_hours_townhall}
          onChange={(e) =>
            onChange({ inspection_hours_townhall: e.target.value })
          }
        />
      </label>
    </fieldset>
  );
}
