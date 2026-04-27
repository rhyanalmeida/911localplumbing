// Stub — unit 7 finalizes.
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

export function CustomerJobInfo(_props: CustomerJobInfoProps) {
  return <fieldset><legend>Customer & Job Information</legend></fieldset>;
}
