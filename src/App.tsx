import { CompanyFilter } from "./components/CompanyFilter";
import { PermitForm } from "./components/PermitForm";
import { PermitsList } from "./components/PermitsList";
import { StatusSummary } from "./components/StatusSummary";

export default function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>911 Local Plumbing — Permit Tracker</h1>
      </header>
      <section className="app__controls">
        <CompanyFilter value="All" onChange={() => {}} />
        <StatusSummary company="All" />
      </section>
      <section className="app__form">
        <PermitForm />
      </section>
      <section className="app__list">
        <PermitsList company="All" />
      </section>
    </main>
  );
}
