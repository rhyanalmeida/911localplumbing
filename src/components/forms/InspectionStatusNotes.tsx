// Stub — unit 9 finalizes.
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

export function InspectionStatusNotes(_props: InspectionStatusNotesProps) {
  return <fieldset><legend>Inspection Status & Notes</legend></fieldset>;
}
