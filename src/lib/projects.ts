import projectAurora from "@/assets/project-aurora.jpg";
import projectSaga from "@/assets/project-saga.jpg";
import projectLumen from "@/assets/project-lumen.jpg";
import layoutAsset from "@/assets/Layout.png.asset.json";
import section1Asset from "@/assets/Section_1.png.asset.json";
import section2Asset from "@/assets/Section_2.png.asset.json";
import shortcutAsset from "@/assets/shortcut.png.asset.json";
import statuser1 from "@/assets/statuser-1.png.asset.json";
import statuser2 from "@/assets/statuser-2.png.asset.json";
import statuser3 from "@/assets/statuser-3.png.asset.json";
import statuser4 from "@/assets/statuser-4.png.asset.json";
import statuser5 from "@/assets/statuser-5.png.asset.json";
import statuser6 from "@/assets/statuser-6.png.asset.json";
import statuser7 from "@/assets/statuser-7.png.asset.json";
import annonserDemo from "@/assets/mine-annonser-demo.mp4.asset.json";

export type ProjectSection = {
  heading: string;
  body: string[];
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  kind?: "image" | "video";
  portrait?: boolean;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  discipline: string;
  year: string;
  summary: string;
  image: string;
  alt: string;
  tall?: boolean;
  intro: string;
  meta: { label: string; value: string }[];
  sections: ProjectSection[];
  gallery?: ProjectGalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "kommunikasjon-for-helsepersonell",
    index: "01",
    title: "Kommunikasjon for helsepersonell",
    discipline: "E-MELDINGER OG CHAT",
    year: "2025",
    summary:
      "I kommunehelsesektoren er det mange aktører som skal samarbeide om pasientbehandling.",
    image: projectAurora,
    alt: "E-meldinger innboks for helsepersonell vist på skjerm i et sykehjemskontor",
    intro:
      "I kommunehelsesektoren skal mange aktører samarbeide om samme pasient. Jeg designet en samlet flate for e-meldinger og chat, slik at helsepersonell slipper å lete etter informasjon på tvers av systemer.",
    meta: [
      { label: "Rolle", value: "Produktdesigner" },
      { label: "År", value: "2025" },
      { label: "Flate", value: "Desktop" },
      { label: "Bidrag", value: "Research, interaksjon, UI" },
    ],
    sections: [
      {
        heading: "Utfordringen",
        body: [
          "Meldinger fra fastlege, sykehus og interne kollegaer kom inn i ulike kanaler, med ulike varslingsmønstre og uten felles pasientkontekst. Det gjorde det vanskelig å se hva som faktisk krevde oppfølging.",
          "Målet var å redusere tiden helsepersonell bruker på å orientere seg, uten å skjule informasjon de er faglig ansvarlige for.",
        ],
      },
      {
        heading: "Prosess",
        body: [
          "Jeg observerte arbeidsdagen på sykehjem og i hjemmetjenesten, kartla meldingstypene og prioriterte dem etter hvor tidskritiske de er.",
          "Deretter testet jeg flere innboksmodeller: én samlet liste, gruppering per pasient og gruppering per avsender. Pasientkonteksten vant tydelig — det er pasienten de tenker i, ikke systemet.",
        ],
      },
      {
        heading: "Løsningen",
        body: [
          "En innboks med tydelig status og avsender, pasientkort ved siden av meldingstråden, og en lesevisning som holder hele historikken tilgjengelig uten å kreve navigasjon bort fra tråden.",
          "Språket er nøkternt og handlingsorientert: hva har skjedd, hva må gjøres, og av hvem.",
        ],
      },
    ],
    gallery: [
      {
        src: layoutAsset.url,
        alt: "Skjermbilde av dialogen «Helsefaglig dialog» med avsender, mottaker, tema, emne og notat",
        caption:
          "Ny e-melding: skjemaet holder pasientkonteksten i venstre kolonne, mens dialogen forklarer hvilke mottakere som faktisk støtter meldingstypen.",
        wide: true,
      },
      {
        src: shortcutAsset.url,
        alt: "Mottakersøk med snarveier til fagområder og «Sist brukt av deg»",
        caption:
          "Snarveier og «sist brukt» kutter det mest repetitive søket etter mottaker.",
        wide: true,
      },
      {
        src: section1Asset.url,
        alt: "Rekke med mobilskjermer som viser flyten for å starte en ny samtale",
        caption:
          "Mobilflyten for ny samtale, skjerm for skjerm — fra tomt utgangspunkt til valgte mottakere og sendt melding.",
        wide: true,
      },
      {
        src: section2Asset.url,
        alt: "To mobilskjermer med chat-tråden «Påskeferien»",
        caption:
          "Chat-tråden i to varianter: med og uten avsendernavn og lest-status.",
        wide: true,
      },
    ],
  },
  {
    slug: "min-arbeidsdag",
    index: "02",
    title: "Min arbeidsdag",
    discipline: "APP FOR HJEMMESYLEPLEIEN",
    year: "2025",
    summary:
      "Vinteren og våren 2025 jobbet jeg med en native app for ansatte i hjemmesykepleien. Målet var å destillere de mest kritiske funksjonene for den brukergruppen i en app MVP",
    image: projectSaga,
    alt: "Mobilskjermer fra app for hjemmesykepleien: besøk med oppgaver og beskjeder",
    intro:
      "Vinteren og våren 2025 jobbet jeg med en native app for ansatte i hjemmesykepleien. Oppgaven var å destillere de mest kritiske funksjonene ned til en MVP som fungerer med én hånd, i bevegelse, mellom besøk.",
    meta: [
      { label: "Rolle", value: "Produktdesigner" },
      { label: "År", value: "2025" },
      { label: "Flate", value: "Native app" },
      { label: "Bidrag", value: "Konsept, IA, UI" },
    ],
    sections: [
      {
        heading: "Utfordringen",
        body: [
          "Ansatte i hjemmesykepleien jobber mobilt, ofte med hansker, dårlig dekning og korte pauser mellom besøk. Fagsystemene deres er laget for skrivebord.",
          "Vi måtte velge: hva må være i en MVP, og hva kan vente til neste versjon?",
        ],
      },
      {
        heading: "Prosess",
        body: [
          "Jeg kjørte intervjuer og skyggedager, og kartla en typisk arbeidsdag time for time. Deretter rangerte vi funksjoner etter hvor ofte de brukes og hvor stor konsekvens det har om de mangler.",
          "Prototypene ble testet på telefon i realistiske situasjoner, ikke på skjerm i møterom.",
        ],
      },
      {
        heading: "Løsningen",
        body: [
          "Dagen som utgangspunkt: besøkene i rekkefølge, med oppgaver per pasient og beskjeder samlet på ett sted.",
          "Store trykkflater, tydelig fullført-tilstand og et minimum av navigasjon — man skal komme fra låsskjerm til neste oppgave i to trykk.",
        ],
      },
    ],
  },
  {
    slug: "mine-annonser",
    index: "03",
    title: "Mine annonser",
    discipline: "FINN.NO",
    year: "2020",
    summary:
      "Redesigne mine annonser hos FINN, med fokus på hvilke statuser en annonse kan ha, og å skape en oversikt som fungerte like godt for privatpersoner som profesjonelle",
    image: projectLumen,
    alt: "Bedriftssenter i FINN med oversikt over alle annonser, søkefelt og statusfiltre",
    intro:
      "Redesign av «Mine annonser» hos FINN, med fokus på hvilke statuser en annonse kan ha, og på å lage en oversikt som fungerer like godt for privatpersoner med én annonse som for profesjonelle med flere hundre.",
    meta: [
      { label: "Rolle", value: "Interaksjonsdesigner" },
      { label: "År", value: "2020" },
      { label: "Flate", value: "Web" },
      { label: "Bidrag", value: "Statusmodell, IA, UI" },
    ],
    sections: [
      {
        heading: "Utfordringen",
        body: [
          "Annonser kunne være aktive, inaktive, utløpte, til godkjenning eller solgt — men statusene var uklare og ble kommunisert ulikt på tvers av flatene.",
          "Samtidig hadde privatpersoner og profesjonelle svært forskjellige behov for volum, søk og filtrering.",
        ],
      },
      {
        heading: "Prosess",
        body: [
          "Jeg begynte med å kartlegge alle mulige tilstander en annonse kan ha, og hvilke handlinger som er gyldige i hver av dem.",
          "Deretter testet vi listevisningen med begge brukergruppene, og justerte hvor mye informasjon som skulle ligge i selve raden versus i detaljvisningen.",
        ],
      },
      {
        heading: "Løsningen",
        body: [
          "Én oversikt som skalerer: søk og statusfiltre øverst, kompakte rader med bilde, tittel, pris og status, og handlinger der de er relevante.",
          "Statusspråket ble ryddet opp i og gjenbrukt konsekvent, slik at samme ord betyr samme ting overalt.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
