
import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Clean Service Gashi",
  description: "Datenschutzhinweise von Clean Service Gashi.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-block text-teal-700 hover:underline"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-10 text-4xl font-bold">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              1. Verantwortlicher
            </h2>
            <p className="mt-3 leading-7">
              Clean Service Gashi<br />
              Inhaber: Blerim Gashi<br />
              Heinitzstraße 8<br />
              58097 Hagen<br />
              Deutschland<br />
              Telefon: 0176 32872879<br />
              E-Mail: gashi-cleanservice@outlook.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              2. Hosting und Serverprotokolle
            </h2>
            <p className="mt-3 leading-7">
              Diese Website wird über Vercel bereitgestellt.
              Beim Aufruf können technische Daten wie
              IP-Adresse, Zeitpunkt des Zugriffs,
              angeforderte Inhalte und Browserinformationen
              verarbeitet werden. Dies dient der sicheren
              und zuverlässigen Bereitstellung der Website.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse liegt im sicheren
              Betrieb unseres Internetauftritts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              3. Kontaktaufnahme
            </h2>
            <p className="mt-3 leading-7">
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp
              kontaktieren, verarbeiten wir die von Ihnen
              mitgeteilten Informationen zur Bearbeitung
              Ihrer Anfrage. Je nach Anlass erfolgt dies
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              oder Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse besteht in der
              Beantwortung geschäftlicher Anfragen.
              Die Daten werden gelöscht, sobald sie für
              diesen Zweck nicht mehr erforderlich sind
              und keine Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              4. Google Maps
            </h2>
            <p className="mt-3 leading-7">
              Auf dieser Website ist Google Maps eingebunden.
              Anbieter ist Google Ireland Limited,
              Gordon House, Barrow Street, Dublin 4, Irland.
              Beim Laden der Karte können personenbezogene
              Daten, insbesondere die IP-Adresse, an Google
              übermittelt werden. Die Nutzung der Karte
              dient der Darstellung unseres Einsatzgebiets.
              Soweit eine Einwilligung erforderlich ist,
              erfolgt die Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              5. Google-Bewertungen über Elfsight
            </h2>
            <p className="mt-3 leading-7">
              Zur Darstellung von Kundenbewertungen
              verwenden wir einen Dienst von Elfsight.
              Beim Laden des Bewertungswidgets können
              technische Verbindungsdaten an den Anbieter
              übertragen werden. Soweit hierfür eine
              Einwilligung erforderlich ist, ist
              Art. 6 Abs. 1 lit. a DSGVO die Rechtsgrundlage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              6. Ihre Datenschutzrechte
            </h2>
            <p className="mt-3 leading-7">
              Sie haben nach Maßgabe der DSGVO das Recht
              auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch.
              Erteilte Einwilligungen können Sie jederzeit
              mit Wirkung für die Zukunft widerrufen.
              Außerdem können Sie sich bei einer
              Datenschutzaufsichtsbehörde beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-teal-700">
              7. Weitere Informationen
            </h2>
            <p className="mt-3 leading-7">
              Die Bereitstellung personenbezogener Daten
              bei einer freiwilligen Kontaktaufnahme ist
              grundsätzlich nicht gesetzlich vorgeschrieben.
              Ohne die erforderlichen Kontaktdaten können
              wir Ihre Anfrage gegebenenfalls nicht
              beantworten. Eine automatisierte
              Entscheidungsfindung einschließlich Profiling
              findet bei der Bearbeitung von Kontaktanfragen
              nicht statt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
