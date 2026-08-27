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
import arbeidsdagBrief from "@/assets/arbeidsdag-brief.png.asset.json";
import arbeidsdagUserGroup from "@/assets/arbeidsdag-user-group.png.asset.json";
import arbeidsdagJ2bd from "@/assets/arbeidsdag-j2bd.png.asset.json";
import arbeidsdagPrinsipper from "@/assets/arbeidsdag-prinsipper.png.asset.json";
import arbeidsdagIcon from "@/assets/arbeidsdag-icon.png.asset.json";
import arbeidsdagBackground from "@/assets/arbeidsdag-background.png.asset.json";
import arbeidsdagPreProject1 from "@/assets/arbeidsdag-pre-project-1.png.asset.json";
import arbeidsdagPreProject from "@/assets/arbeidsdag-pre-project.png.asset.json";
import arbeidsdagNextStep from "@/assets/arbeidsdag-next-step.png.asset.json";

export type ProjectSection = {
  heading: string;
  body: string[];
};

export type ProjectGalleryItem = {
  src?: string;
  alt?: string;
  caption: string;
  wide?: boolean;
  kind?: "image" | "video";
  portrait?: boolean;
  group?: { src: string; alt: string }[];
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
      {
        heading: "Prinsipper og uttrykk",
        body: [
          "Appen er bevisst enklere enn web: færre, men mer presise funksjoner, med flyter som gjenkjennes fra webløsningen og navigasjon som følger native mønstre.",
          "Visuelt ligger den mellom native konvensjoner og Aidns merkevare — nøkternt, åpent og raskt å lese. Språket er varmt og enkelt, men aldri på bekostning av det faglige.",
        ],
      },
      {
        heading: "Veien videre",
        body: [
          "MVP-en ble et startpunkt for pilotering og læring, og et teknisk fundament for react native i Aidn. Innlogging og autentisering ble løst sammen med IAM og HelseID.",
          "Neste steg: tettere samarbeid med andre team, en tydeligere langsiktig plan, bedre produkt- og teknisk dokumentasjon, og en mer avklart visuell retning.",
        ],
      },
    ],
    gallery: [
      {
        src: arbeidsdagBrief.url,
        alt: "Slide: Brief — lag en native app for «Min arbeidsdag» til hjemmetjenesten, tilgjengelig offline",
        caption:
          "Briefen: dekke funksjonaliteten i «Min arbeidsdag» i en native app for hjemmebaserte tjenester — offline, med frist 1. april.",
        wide: true,
      },
      {
        src: arbeidsdagUserGroup.url,
        alt: "Slide: My workday user group med bilder av brukerne, kontoret deres og verktøyene deres",
        caption:
          "Brukergruppen: kontoret er bilen og pasientens hjem, og verktøyene er en delt telefon og et papirark i lomma.",
        wide: true,
      },
      {
        src: arbeidsdagJ2bd.url,
        alt: "Slide: Jobs to be done — funksjonelle, emosjonelle og sosiale behov",
        caption:
          "Jobs to be done: oversikt over dagen og enkel dokumentasjon, trygghet før krevende besøk, og et team det er lett å be om hjelp i.",
        wide: true,
      },
      {
        src: arbeidsdagPrinsipper.url,
        alt: "Slide: prinsipper for funksjon, visuelt uttrykk og innhold",
        caption:
          "Prinsippene vi jobbet etter — færre og mer presise funksjoner, et bevisst enkelt uttrykk, og et varmt men faglig språk.",
        wide: true,
      },
      {
        src: arbeidsdagIcon.url,
        alt: "Appikonet i mørk og lys variant, i firkantet og rund maske",
        caption:
          "Appikonet i prod- og testvariant, testet i både firkantet og rund maske.",
        wide: true,
      },
      {
        src: arbeidsdagBackground.url,
        alt: "To statiske bakgrunnsbilder med myke rosa og oransje gradienter",
        caption:
          "Bakgrunnene: statiske, myke gradienter som gir appen varme uten å stjele oppmerksomhet fra innholdet.",
        wide: true,
      },
      {
        src: arbeidsdagPreProject1.url,
        alt: "Slide: What we have instead, med skjermbilder av dagsoversikt og besøk hos Anna",
        caption:
          "Resultatet ved frist: en fungerende app med dagsoversikt og oppgaver per besøk, innlogging løst med IAM og HelseID.",
        wide: true,
      },
      {
        src: arbeidsdagPreProject.url,
        alt: "Slide: Pre project? med telefon som viser medisinutdeling",
        caption:
          "Forprosjektet vi ba om: bedre langtidsplan, dokumentasjon og en avklart visuell retning.",
        wide: true,
      },
      {
        src: arbeidsdagNextStep.url,
        alt: "Slide: Vision and choices",
        caption: "Neste steg: visjon og de valgene som følger av den.",
        wide: true,
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
          "En annonse kunne i praksis ha 72 forskjellige statuser, satt fra admin, apper, import og Innfinn. Resultatet var mange bugs, forvirrede brukere og mye arbeid for kundeservice.",
          "Vi eksponerte vår egen tekniske kompleksitet for brukerne: det var ikke samsvar mellom hva selgeren forventet og hva som faktisk skjedde «på baksiden».",
        ],
      },
      {
        heading: "Prosess",
        body: [
          "Jeg kartla annonsens livsløp mot brukerreisen — før, under og etter — og plasserte hver status og hver tilgjengelige handling i den fasen den hører til.",
          "Samtidig så vi på fasaden: alle kildene som setter status ble samlet bak én måte å beskrive vare eller tjeneste på, slik at FINN kun forholder seg til et lite, forutsigbart sett tilstander.",
          "Deretter testet vi listevisningen med både privatpersoner og profesjonelle, og justerte hvor mye informasjon som skulle ligge i selve raden versus i detaljvisningen.",
        ],
      },
      {
        heading: "Løsningen",
        body: [
          "Fra 72 til 7 statuser: Påbegynt, Aktiv, Skjult, Utløpt, Avvist, Venter og Ferdig. En annonse kan teknisk ha flere tilstander samtidig, men brukeren ser alltid bare den øverste i prioriteringslisten.",
          "Statusen forteller hvor brukeren er i reisen, ikke hva systemet holder på med — og handlingene som vises, er de som faktisk er gyldige i den tilstanden.",
          "Oversikten skalerer: søk og statusfiltre øverst, kompakte rader med bilde, tittel, pris og status, og samme statusspråk gjenbrukt konsekvent på tvers av flater.",
        ],
      },
    ],
    gallery: [
      {
        src: annonserDemo.url,
        alt: "Skjermopptak av annonseoversikten der status og handlinger endrer seg",
        caption:
          "Prototypen i bruk: statusen og de tilgjengelige handlingene endrer seg sammen med hvor annonsen er i livsløpet.",
        kind: "video",
        portrait: true,
      },
      {
        src: statuser1.url,
        alt: "Slide: Visste du at annonser også har et livsløp?",
        caption:
          "Utgangspunktet for statusprosjektet — behovet for å forenkle, og kostnaden av kompleksiteten vi eksponerte.",
        wide: true,
      },
      {
        src: statuser2.url,
        alt: "Slide: Brukerbehov og teknisk forenkling med tre faser før, under og etter",
        caption:
          "Nesten alle som legger ut en annonse går gjennom de samme tre fasene: før, under og etter.",
        wide: true,
      },
      {
        src: statuser3.url,
        alt: "Slide: Brukerbehov med eksempler på statuser og handlinger",
        caption:
          "Statusene som fantes rundt om i produktet — inkonsekvente navn for det samme, og ulike handlinger per flate.",
        wide: true,
      },
      {
        src: statuser4.url,
        alt: "Slide: Teknisk forenkling — fasaden som samler admin, apper, import og Innfinn",
        caption:
          "Fasaden: alle kildene som setter status samles bak én beskrivelse av vare eller tjeneste.",
        wide: true,
      },
      {
        src: statuser5.url,
        alt: "Slide: Statuser og handlinger plassert i fasene før, under og etter",
        caption:
          "Hele kartet: hver status og handling plassert i brukerreisen, sett fra både selger og kjøper.",
        wide: true,
      },
      {
        src: statuser6.url,
        alt: "Slide: Fra 72 til 7 statuser med forklaring av hver status",
        caption:
          "Resultatet: 7 statuser med tydelig definisjon, prioritert slik at brukeren alltid ser den mest relevante.",
        wide: true,
      },
      {
        src: statuser7.url,
        alt: "Slide: Gjenstående nøtter med gule og grønne lapper",
        caption:
          "Gjenstående nøtter — kjente utfordringer vi bevisst lot ligge til neste runde.",
        wide: true,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
