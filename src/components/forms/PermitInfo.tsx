// Stub — unit 8 finalizes.
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

export function PermitInfo(_props: PermitInfoProps) {
  return <fieldset><legend>Permit Information</legend></fieldset>;
}
