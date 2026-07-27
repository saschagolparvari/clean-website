/**
 * Konfiguration für die Google-Bewertungen-Sektion.
 *
 * Hier müssen nur die folgenden 3 Werte eingetragen werden – siehe Anleitung
 * in der Projekt-Dokumentation bzw. dem Chat, in dem diese Datei erstellt wurde.
 */

// 1) Die Widget-ID aus dem kostenlosen Elfsight-Dashboard
//    (Elfsight.com -> Google Reviews Widget -> Place ID/Profil eintragen -> Widget-ID kopieren)
//    Beispiel: "abcd1234-ef56-7890-abcd-1234567890ab"
export const ELFSIGHT_WIDGET_ID = "53fdb1e3-698d-423d-9427-ba8f1f1964b6";

// 2) Link zum öffentlichen Google-Unternehmensprofil (für "Alle Bewertungen ansehen")
//    Zu finden über: Google-Unternehmensprofil oder Google Maps -> "Teilen" -> Link kopieren
export const GOOGLE_PROFILE_URL = "https://share.google/4VJ29eEeY2mKwtSTs";

// 3) Direktlink zum Schreiben einer Bewertung.
//    WICHTIG: Bei neueren "share.google"-Links funktioniert ein einfaches Anhängen
//    von "/review" NICHT zuverlässig (anders als bei alten g.page-Links).
//    Diesen Link bitte separat holen: im Google-Unternehmensprofil (Google Business
//    Profile) unter "Bewertungen" -> "Mehr Bewertungen erhalten" / "Get more reviews"
//    -> dort den generierten Kurzlink kopieren und hier eintragen.
//    Bis dahin verlinkt der Button automatisch auf das allgemeine Profil (siehe unten).
const GOOGLE_WRITE_REVIEW_URL_RAW = "PLATZHALTER-GOOGLE-BEWERTUNG-SCHREIBEN-LINK";

export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_WRITE_REVIEW_URL_RAW.startsWith(
  "PLATZHALTER"
)
  ? GOOGLE_PROFILE_URL
  : GOOGLE_WRITE_REVIEW_URL_RAW;
