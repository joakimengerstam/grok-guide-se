import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Clock,
  KeyRound,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Grok Bot: kom igång-guide på svenska | grokbot.se";
const DESCRIPTION =
  "Oberoende svensk guide till Grok Bot – installera, koppla in och använd boten steg för steg, med vanliga frågor och praktiska tips.";

const faq = [
  {
    q: "Vad är Grok Bot?",
    a: "Grok Bot är samlingsnamnet för chattbotar som drivs av Grok-modellerna och som kopplas in i verktyg du redan använder, till exempel en webbchatt, Slack eller ett kundtjänstsystem. Boten tar emot en fråga, hämtar rätt underlag och svarar på naturligt språk.",
  },
  {
    q: "Behöver jag kunna programmera?",
    a: "Nej. För en enkel uppsättning räcker det att skapa ett konto, hämta en API-nyckel och klistra in den i det verktyg du vill koppla boten till. Vill du bygga egna flöden, koppla ihop affärssystem eller hantera känsliga data är det däremot klokt att ta in utvecklingshjälp.",
  },
  {
    q: "Vad kostar det?",
    a: "Priset beror på vilken modell och vilken leverantör du använder, och debiteras oftast per använd mängd text. Kontrollera alltid aktuell prislista hos leverantören innan du sätter boten i skarp drift, och sätt en utgiftsgräns direkt.",
  },
  {
    q: "Hur hanterar jag känsliga uppgifter och GDPR?",
    a: "Skicka aldrig personuppgifter eller affärshemligheter till en tjänst du inte har avtal med. Gå igenom leverantörens villkor för databehandling, bestäm vad som får lämna din organisation och maskera det som inte ska delas. Dokumentera besluten – det underlättar vid en granskning.",
  },
  {
    q: "Varför svarar boten fel ibland?",
    a: "Språkmodeller gissar när underlaget saknas. Ge boten tydliga instruktioner, begränsa den till ett avgränsat område och koppla in dina egna dokument som källa. Låt en människa granska svar som rör pengar, avtal eller hälsa.",
  },
  {
    q: "Är den här sidan kopplad till xAI?",
    a: "Nej. grokbot.se är en fristående guide. Vi är inte anslutna till, sponsrade av eller godkända av xAI. Namn och varumärken tillhör respektive ägare.",
  },
];

const steps = [
  {
    icon: KeyRound,
    title: "1. Skapa konto och hämta API-nyckel",
    body: "Registrera dig hos leverantören, aktivera fakturering och skapa en API-nyckel. Spara nyckeln i en lösenordshanterare – aldrig i ett dokument eller i koden.",
  },
  {
    icon: Workflow,
    title: "2. Välj var boten ska bo",
    body: "Bestäm en enda kanal att börja i: chatten på webbplatsen, Slack, Teams eller ett supportverktyg. En kanal i taget gör det enkelt att mäta om boten faktiskt hjälper.",
  },
  {
    icon: MessagesSquare,
    title: "3. Skriv botens instruktion",
    body: "Beskriv roll, tonläge, språk och vad boten inte får svara på. Var konkret: ”Svara alltid på svenska, max fem meningar, hänvisa till en människa vid prisfrågor.”",
  },
  {
    icon: Bot,
    title: "4. Mata den med ditt eget material",
    body: "Ladda upp produktblad, prislistor och vanliga frågor så att svaren bygger på din verklighet i stället för allmän kunskap. Håll materialet uppdaterat.",
  },
  {
    icon: ShieldCheck,
    title: "5. Testa, sätt gränser och mät",
    body: "Kör igenom 20–30 skarpa frågor innan lansering. Sätt utgiftstak, logga samtalen och följ upp hur ofta boten löser ärendet utan mänsklig hjälp.",
  },
  {
    icon: Rocket,
    title: "6. Lansera i liten skala och förbättra",
    body: "Släpp på boten för en del av trafiken, läs igenom samtalen varje vecka och justera instruktionen. Först när träffsäkerheten sitter breddar du.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Svar dygnet runt",
    body: "Vanliga frågor besvaras direkt, även kvällar och helger, så att ditt team slipper repetitiva ärenden.",
  },
  {
    icon: Sparkles,
    title: "Jämn kvalitet",
    body: "Samma tonläge och samma fakta varje gång – boten följer den instruktion ni har kommit överens om.",
  },
  {
    icon: Workflow,
    title: "Kopplad till era system",
    body: "Med rätt integration kan boten slå upp order, boka tider eller skapa ärenden i stället för att bara prata.",
  },
  {
    icon: BadgeCheck,
    title: "Mätbar nytta",
    body: "Antal lösta ärenden, svarstid och kundnöjdhet går att följa från dag ett och visa för ledningen.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Så kommer du igång med Grok Bot",
          step: steps.map((s) => ({
            "@type": "HowToStep",
            name: s.title,
            text: s.body,
          })),
        }),
      },
    ],
  }),
});

const ROORE = "https://roore.se";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Bot className="size-4" aria-hidden="true" />
            </span>
            grokbot<span className="-ml-1.5 text-primary">.se</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#guide" className="transition-colors hover:text-foreground">
              Guide
            </a>
            <a href="#fordelar" className="transition-colors hover:text-foreground">
              Fördelar
            </a>
            <a href="#fragor" className="transition-colors hover:text-foreground">
              Vanliga frågor
            </a>
          </nav>
          <Button asChild size="sm">
            <a href={ROORE} target="_blank" rel="noopener">
              Få hjälp igång
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              Oberoende guide på svenska
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold md:text-6xl">
              Kom igång med <span className="text-primary">Grok Bot</span> – utan
              gissningar
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              En rak steg-för-steg-guide för dig som vill sätta upp en AI-bot som faktiskt
              svarar rätt: från API-nyckel och instruktion till test, gränser och
              lansering.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#guide">
                  Läs guiden
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={ROORE} target="_blank" rel="noopener">
                  Låt Roore sätta upp den åt dig
                </a>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["6 steg", "från konto till lansering"],
                ["1 kanal", "börja litet, bredda sen"],
                ["0 kod", "krävs för en enkel uppsättning"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-border/70 bg-card/60 p-4 backdrop-blur"
                >
                  <dt className="font-display text-xl font-semibold text-primary">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Guide */}
        <section id="guide" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Så sätter du upp Grok Bot</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Följ stegen i ordning. Räkna med ett par timmar för en enkel bot och några
            veckors uppföljning innan den sitter riktigt bra.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 md:flex md:items-center md:justify-between md:gap-6">
            <p className="text-sm md:text-base">
              Fastnar du på integrationen eller vill ha någon som tar hela uppsättningen?
            </p>
            <Button asChild className="mt-4 md:mt-0">
              <a href={ROORE} target="_blank" rel="noopener">
                Prata med Roore
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        {/* Fördelar */}
        <section
          id="fordelar"
          className="scroll-mt-20 border-y border-border/60 bg-card/40 py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Vad du får ut av en välbyggd bot
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Nyttan kommer inte av tekniken i sig, utan av att boten är avgränsad,
              uppkopplad mot rätt underlag och uppföljd.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border/70 bg-card p-6">
                  <b.icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="fragor" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-20 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">Vanliga frågor</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-card/40 py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Vill du ha boten på plats redan i år?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Roore hjälper svenska organisationer att bygga, koppla in och förvalta
              AI-botar – med ordning på säkerhet, kostnader och uppföljning.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={ROORE} target="_blank" rel="noopener">
                Besök roore.se
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto max-w-6xl space-y-4 px-5 text-xs leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Friskrivning:</strong> grokbot.se är en
            oberoende guide och är inte ansluten till, sponsrad av eller godkänd av xAI.
            ”Grok” och andra varumärken tillhör respektive ägare. Innehållet är allmän
            information, inte juridisk eller teknisk rådgivning – kontrollera alltid
            aktuella villkor och priser hos leverantören.
          </p>
          <p>
            © {new Date().getFullYear()} grokbot.se · Rekommenderad partner:{" "}
            <a
              href={ROORE}
              target="_blank"
              rel="noopener"
              className="text-primary underline-offset-4 hover:underline"
            >
              roore.se
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
