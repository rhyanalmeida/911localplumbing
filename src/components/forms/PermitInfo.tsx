export interface PermitInfoValue {
  permit_needed: string;
  permit_submitted: string;
  permit_number: string;
  permit_cost: string;
  payment_type: string;
}

export interface PermitInfoProps {
  value: PermitInfoValue;
  onChange: (patch: Partial<PermitInfoValue>) => void;
}

export function PermitInfo({ value, onChange }: PermitInfoProps) {
  return (
    <fieldset>
      <legend>Permit Information</legend>

      <label>
        Permit Needed
        <input
          type="text"
          value={value.permit_needed}
          placeholder="e.g., Plumbing, Backflow (leave empty if no permit needed)"
          onChange={(e) => onChange({ permit_needed: e.target.value })}
        />
      </label>

      <label>
        Permit Submitted
        <input
          type="date"
          value={value.permit_submitted}
          onChange={(e) => onChange({ permit_submitted: e.target.value })}
        />
      </label>

      <label>
        Permit Number
        <input
          type="text"
          value={value.permit_number}
          onChange={(e) => onChange({ permit_number: e.target.value })}
        />
      </label>

      <label>
        Permit Cost ($)
        <input
          type="number"
          step="0.01"
          min="0"
          value={value.permit_cost}
          onChange={(e) => onChange({ permit_cost: e.target.value })}
        />
      </label>

      <label>
        Payment Type
        <select
          value={value.payment_type}
          onChange={(e) => onChange({ payment_type: e.target.value })}
        >
          <option value="">Select...</option>
          <option value="Cash">Cash</option>
          <option value="Check">Check</option>
          <option value="Credit Card">Credit Card</option>
          <option value="ACH">ACH</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </fieldset>
  );
}
