import { useState } from "react";
import { CompanyFilter } from "./components/CompanyFilter";
import { Login } from "./components/Login";
import { PermitForm } from "./components/PermitForm";
import { PermitsList } from "./components/PermitsList";
import { StatusSummary } from "./components/StatusSummary";
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const [company, setCompany] = useState<string>("All");
  const { session, loading, signOut } = useAuth();

  if (loading) return <p className="app__loading muted">Loading...</p>;
  if (!session) return <Login />;

  return (
    <main className="app">
      <header className="app__header">
        <div>
          <h1>911 Local Plumbing</h1>
          <p className="app__subtitle">Permit Tracker</p>
        </div>
        <div className="app__header-actions">
          <span className="muted">{session.user.email}</span>
          <button className="btn" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
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
