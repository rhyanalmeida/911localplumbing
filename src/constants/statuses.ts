import { STATUS_VALUES, type Status } from "../types/permit";

export const STATUSES = STATUS_VALUES;
export type { Status };
export const DEFAULT_STATUS: Status = "Open";

export function isStatus(value: string): value is Status {
  return (STATUSES as readonly string[]).includes(value);
}
