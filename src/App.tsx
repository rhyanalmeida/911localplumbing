import { useState } from "react";
import { CompanyFilter } from "./components/CompanyFilter";
import { PermitForm } from "./components/PermitForm";
import { PermitsList } from "./components/PermitsList";
import { StatusSummary } from "./components/StatusSummary";

export default function App() {
  const [company, setCompany] = useState<string>("All");

  return (
    <main className="app">
      <header className="app__header">
        <h1>911 Local Plumbing</h1>
        <p className="app__subtitle">Permit Tracker</p>
      </header>

      <section className="app__controls card">
        <CompanyFilter value={company} onChange={setCompany} />
        <StatusSummary company={company} />
      </section>

      <section className="app__form">
        <PermitForm />
      </section>

      <section className="app__list card">
        <h2 className="section-title">Permits</h2>
        <PermitsList company={company} />
      </section>
    </main>
  );
}
