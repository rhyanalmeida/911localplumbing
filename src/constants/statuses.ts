// Stub — unit 3 finalizes.
import type { Status } from "../types/permit";

export const STATUSES: readonly Status[] = [
  "Open",
  "In Progress",
  "Issued",
  "No Permit",
  "Closed",
  "Kurt Needed",
];

export const DEFAULT_STATUS: Status = "Open";
