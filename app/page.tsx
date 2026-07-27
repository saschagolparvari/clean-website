import GoogleReviews from "./components/GoogleReviews";
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_WRITE_REVIEW_URL,
} from "./components/googleReviewsConfig";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import { galleryItems } from "./components/galleryData";

export default function Home() {
  const services = [
    {
      title: "Büroreinigung",
      description:
        "Gründliche Reinigung von Arbeitsplätzen, Sanitärbereichen und Gemeinschaftsflächen – für ein gepflegtes Büroklima.",
    },
    {
      title: "Treppenhausreinigung",
      description:
        "Regelmäßige Reinigung von Treppen, Geländern und Eingangsbereichen – ordentlich, sicher und einladend.",
    },
    {
      title: "Glas & Fensterreinigung",
      description:
        "Streifenfreie Fenster- und Glasreinigung innen/außen – inklusive Rahmen, Falzen und Fensterbänken.",
    },
    {
      title: "Unterhaltsreinigung Privat & Gewerbe",
      description:
        "Planbare, wiederkehrende Reinigung nach Ihren Intervallen – zuverlässig, diskret und flexibel.",
    },
    {
      title: "Wintergartenpflege",
      description:
        "Reinigung von Glasflächen, Profilen und schwer zugänglichen Bereichen – damit Ihr Wintergarten wieder strahlt.",
    },
    {
      title: "Gartenpflege",
      description:
        "Pflege von Grünflächen, Hecken und Außenanlagen – sauberer Eindruck rund ums Objekt das ganze Jahr.",
    },
    {
      title: "Bauendreinigung",
      description:
        "Reinigung nach Bau- oder Renovierungsarbeiten – von grobem Schmutz bis zur bezugsfertigen Endreinigung.",
    },
    {
      title: "Winterdienst",
      description:
        "Schnee- und Eisbeseitigung auf Wegen und Zufahrten – für sichere Zugänge bei winterlichen Bedingungen.",
    },
    {
      title: "Photovoltaikanlagen",
      description:
        "Schonende Reinigung von PV-Modulen – zur Reduktion von Verschmutzungen und für optimale Lichtaufnahme.",
    },
    {
      title: "Steinreinigung",
      description:
        "Reinigung von Steinflächen und Mauern – entfernt typische Verschmutzungen und frischt die Optik sichtbar auf.",
    },
    {
      title: "Pflasterreinigung",
      description:
        "Gründliche Reinigung von Pflastersteinen und Einfahrten – für ein gepflegtes Erscheinungsbild im Außenbereich.",
    },
    {
      title: "Grundreinigung",
      description:
        "Intensive Reinigung für stark beanspruchte Bereiche – ideal bei Wechsel, nach Bedarf oder saisonal.",
    },
    {
      title: "Privatreinigung",
      description:
        "Zuverlässige Reinigung für Haushalt und Wohnung – individuell abgestimmt auf Ihre Räume und Wünsche.",
    },
    {
      title: "Gewerbereinigung",
      description:
        "Professionelle Reinigung für Praxen, Läden und Betriebe – saubere Ergebnisse, die Eindruck machen.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
         

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium hover:text-teal-600"
            >
              Leistungen
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-teal-600"
            >
              Galerie
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-teal-600"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-teal-600"
            >
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Angebot anfragen
            </a>
            <a
              href="https://wa.me/4917632872879?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-teal-600 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-start bg-teal-600 text-white">
        <div className="flex flex-col justify-center">
         

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Professionelle Gebäudereinigung
            <br />
            in Hagen & Umgebung
          </h1>

          

         

<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            
            <div className="flex flex-wrap gap-4">
             <a
              href="#contact"
              className="rounded-2xl bg-teal-600 px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              Jetzt anfragen
            </a>
            <a
              href="#gallery"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50"
            >
              Vorher / Nachher ansehen
            </a>
           
  

 
 </div>
          <div className="flex items-center justify-center">
  <img
    src="/logo.png"
    alt="Clean Service Gashi Logo"
    className="w-[420px] max-w-full bg-white p-6 rounded-2xl shadow-lg"
  />
</div>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">Zuverlässig</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Gründlicher Service
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">Flexibel</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Termine nach Bedarf
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">Sauber</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sichtbare Ergebnisse
              </p>
            </div>
          </div>
        </div>

       
  
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Vorher / Nachher
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Einblicke in unsere Arbeit – ziehen Sie den Regler, um den
            Unterschied zu sehen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <BeforeAfterSlider
              key={item.title}
              title={item.title}
              beforeSrc={item.before}
              afterSrc={item.after}
            />
          ))}
        </div>
      </section>

<section id="bewertungen" className="bg-slate-50 py-14">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
        Kundenbewertungen
      </p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Saubere Arbeit, die überzeugt
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Das sagen unsere Kunden auf Google über uns – die Bewertungen
        aktualisieren sich automatisch.
      </p>
    </div>

    <GoogleReviews />

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href={GOOGLE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
      >
        Alle Bewertungen bei Google ansehen
      </a>
      <a
        href={GOOGLE_WRITE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
      >
        ⭐ Jetzt Bewertung abgeben
      </a>
    </div>
  </div>
</section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Professionelle Reinigung für private und gewerbliche Kunden
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Über uns
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Zuverlässige Reinigung mit hohem Anspruch
          </h2>

          <div className="mt-6 text-base leading-8 text-slate-600">
            Clean-Service Gashi steht für gründliche, flexible und professionelle
            Gebäudereinigung in Hagen und Umgebung. Unser Anspruch ist es, jede
            Fläche sichtbar sauber zu hinterlassen und unseren Kunden einen
            Service zu bieten, auf den sie sich verlassen können.
          </div>

          <div className="mt-6 space-y-2 text-slate-700">
            <p>✔ Zuverlässige und gründliche Reinigung</p>
            <p>✔ Flexible Terminvereinbarung</p>
            <p>✔ Für Privat- und Gewerbekunden</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900">
            Warum Kunden uns wählen
          </h3>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
            <p>
              <span className="text-teal-600">✔</span> Gründliche und
              zuverlässige Reinigung
            </p>
            <p>
              <span className="text-teal-600">✔</span> Flexible
              Terminvereinbarung
            </p>
            <p>
              <span className="text-teal-600">✔</span> Für Privat- und
              Gewerbekunden
            </p>
            <p>
              <span className="text-teal-600">✔</span> Einsatzgebiet: Hagen &
              Umgebung
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Einsatzgebiet
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Reinigung in Hagen & Umgebung
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Clean Service Gashi ist in Hagen und Umgebung für Privatkunden und
              Gewerbekunden im Einsatz.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              title="Google Maps Hagen"
              src="https://www.google.com/maps?q=58097%20Hagen&z=11&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Jetzt unverbindlich anfragen
            </h2>
            <p className="mt-4 max-w-md text-slate-300">
              Senden Sie uns Ihre Anfrage bequem über das Formular. Wir melden
              uns schnellstmöglich zurück.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
                So läuft&apos;s ab
              </p>
              <p>
                <span className="font-semibold text-white">1) Anfrage senden</span>{" "}
                – per Formular oder WhatsApp, gern mit kurzen Details.
              </p>
              <p>
                <span className="font-semibold text-white">2) Rückmeldung</span>{" "}
                – wir klären Umfang, Termin und Besonderheiten.
              </p>
              <p>
                <span className="font-semibold text-white">
                  3) Angebot &amp; Umsetzung
                </span>{" "}
                – transparentes Angebot, anschließend professionelle
                Reinigung.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://wa.me/4917632872879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600"
              >
                📱 Direkt über WhatsApp anfragen
              </a>
              <a
                href="mailto:gashi-cleanservice@outlook.de"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                ✉️ Anfrage per E-Mail stellen
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-xl">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
              />
              <input
                type="text"
                placeholder="E-Mail oder Telefonnummer"
                className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
              />
              <textarea
                placeholder="Ihre Nachricht"
                className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-600"
              />
              <button
                type="submit"
                className="rounded-2xl bg-teal-600 px-5 py-4 font-semibold text-white transition hover:bg-teal-700"
              >
                Anfrage senden
              </button>
            </div>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/4917632872879?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-teal-600 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-700"
      >
        WhatsApp
      </a>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Clean Service Gashi</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Professionelle Reinigung für Privat- und Gewerbekunden in Hagen &
              Umgebung.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Leistungen
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Gebäudereinigung</li>
              <li>Fensterreinigung</li>
              <li>Treppenhausreinigung</li>
              <li>Gartenreinigung</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Kontakt
            </h4>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Hagen & Umgebung</p>
              <a
                href="https://wa.me/4917632872879?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung."
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-teal-700"
              >
                WhatsApp schreiben
              </a>
              <a href="#contact" className="block hover:text-teal-700">
                Kontaktformular
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-6 pt-6 text-sm text-slate-500">
          © 2026 Clean Service Gashi. Alle Rechte vorbehalten.
        </div>
      </footer>
    </main>
  );
}