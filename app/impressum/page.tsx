
import Link from "next/link";

export const metadata = {
  title: "Impressum | Clean Service Gashi",
  description: "Impressum von Clean Service Gashi in Hagen.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-teal-700 hover:underline"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-10 text-4xl font-bold tracking-tight">
          Impressum
        </h1>

        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-teal-700">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="leading-8">
              Clean Service Gashi
              <br />
              Inhaber: Blerim Gashi
              <br />
              Heinitzstraße 8
              <br />
              58097 Hagen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-teal-700">
              Kontakt
            </h2>
            <p className="leading-8">
              Telefon:{" "}
              <a
                href="tel:+4917632872879"
                className="hover:text-teal-700 hover:underline"
              >
                0176 32872879
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:gashi-cleanservice@outlook.de"
                className="break-all hover:text-teal-700 hover:underline"
              >
                gashi-cleanservice@outlook.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-teal-700">
              Rechtsform
            </h2>
            <p>Einzelunternehmen</p>
          </section>
        </div>
      </div>
    </main>
  );
}
