import { COMPANIES } from "../../constants/companies";

export interface CustomerJobInfoValue {
  customer_name: string;
  customer_telephone: string;
  job_number: string;
  company: string;
  received_date: string;
  date_of_install: string;
  address: string;
}

export interface CustomerJobInfoProps {
  value: CustomerJobInfoValue;
  onChange: (patch: Partial<CustomerJobInfoValue>) => void;
}

export function CustomerJobInfo({ value, onChange }: CustomerJobInfoProps) {
  return (
    <fieldset className="form-section">
      <legend>Customer &amp; Job Information</legend>
      <div className="form-grid">
        <label>
          Customer Name *
          <input
            type="text"
            required
            value={value.customer_name}
            onChange={(e) => onChange({ customer_name: e.target.value })}
          />
        </label>
        <label>
          Customer Telephone
          <input
            type="tel"
            value={value.customer_telephone}
            onChange={(e) => onChange({ customer_telephone: e.target.value })}
          />
        </label>
        <label>
          Job Number *
          <input
            type="text"
            required
            value={value.job_number}
            onChange={(e) => onChange({ job_number: e.target.value })}
          />
        </label>
        <label>
          Company
          <select
            value={value.company}
            onChange={(e) => onChange({ company: e.target.value })}
          >
            <option value="">Select...</option>
            {COMPANIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Received Date
          <input
            type="date"
            value={value.received_date}
            onChange={(e) => onChange({ received_date: e.target.value })}
          />
        </label>
        <label>
          Date of Install
          <input
            type="date"
            value={value.date_of_install}
            onChange={(e) => onChange({ date_of_install: e.target.value })}
          />
        </label>
        <label className="form-grid__full">
          Address *
          <input
            type="text"
            required
            value={value.address}
            onChange={(e) => onChange({ address: e.target.value })}
          />
        </label>
      </div>
    </fieldset>
  );
}
