import { COMPANY_VALUES, type Company } from "../types/permit";

export const COMPANIES = COMPANY_VALUES;
export type { Company };

export function isCompany(value: string): value is Company {
  return (COMPANIES as readonly string[]).includes(value);
}
