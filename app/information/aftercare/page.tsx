"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { contact } from "@/lib/contact";

import heroImg     from "@/src/assets/images/wildflowertattoolydiaszubert.JPG";
import waterImg    from "@/src/assets/images/Water.png";
import unicuraImg  from "@/src/assets/images/Aftercare-unicura.png";
import aftercareImg from "@/src/assets/images/tattooaftercare.JPG";

const ease = [0.22, 1, 0.36, 1] as const;

const prepareSteps = [
  "Eat a good breakfast and bring lunch, snacks and sugary drinks which you can leave in the break during your appointment. Please however don't drink or eat in the tattoo area.",
  "Buy Bepanthen Beschermende 24h or Bepanthen Baby cream (from Etos or Albert Heijn). You will need to begin using it that evening after the appointment.",
  "Have a good night's rest and don't drink the night before.",
  "Please wear clothes that you don't mind getting ink on, and don't wear tight clothes over the tattoo.",
  "Bring something to distract yourself with — Netflix and headphones are good.",
  "In the winter it can get a bit cold. Please bring your own light blanket to keep you warm, and gloves for your hands if we are tattooing your arm.",
  "Numbing cream can help. I recommend TK15 numbing cream. It needs to be applied an hour before the appointment begins. Let me know if you plan to use it.",
  "Hydrated skin is easier to tattoo, so please keep your fluids up the week before the appointment.",
  "Moisturise 1–2 times a day for the whole week before the appointment date.",
  "Bring snacks and drinks to keep up your sugar levels on the appointment day.",
];

const aftercareSteps = [
  "2 hours after the appointment take off the dressing. If you have second skin on, please take it off after 1–2 days.",
  "Wash your hands with antibacterial soap and then wash your tattoo with the same soap. I suggest Uni Cura.",
  "With a clean towel, dab dry the tattoo and dab on a thin layer of Bepanthen cream.",
  "Repeat the same process 2–3 times a day for the first two weeks.",
];

const avoidLeft = ["Swimming", "Baths", "Direct sun", "Saunas", "Sunbeds"];
const avoidRight = ["Don't pick or touch the tattoo", "Avoid exercise (2 days minimum)", "Avoid abrasive clothing", "Avoid dirty clothing"];

const schedule = [
  { time: "10:00",        note: "Appointment begins" },
  { time: "10:00–11:00", note: "Discuss tattoo stencilization — stencil is made and placed" },
  { time: "11:00",        note: "Start tattooing" },
  { time: "12:30",        note: "Lunch break. This is flexible — we still take short breaks every hour." },
  { time: "16:00",        note: "Finish tattooing for the day" },
  { time: "16:00–16:30", note: "A photo of the tattoo is made and the tattoo is wrapped up" },
];

export default function AftercarePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src={heroImg}
          alt="Lydia Szubert tattooing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full items-end pb-10 md:pb-14 px-6 max-w-6xl mx-auto">
          <motion.h1
            className="text-white leading-[1] tracking-wide"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              textShadow: "0 2px 28px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            Aftercare
          </motion.h1>
        </div>
      </section>

      {/* ── How to Prepare ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <FadeIn className="mb-12">
            <h2
              className="text-sage leading-[1.05]"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              How to Prepare
            </h2>
            <div className="mt-3 h-px w-20 bg-sage/30" />
            <p className="mt-4 text-ink/55 text-[13px] italic">Last updated 2025</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

            {/* Steps */}
            <FadeInStagger className="flex flex-col gap-6" stagger={0.07}>
              {prepareSteps.map((step, i) => (
                <FadeInItem key={i}>
                  <div className="flex gap-5 items-start">
                    <span
                      className="shrink-0 text-sage/50 leading-none mt-0.5"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1.5rem", minWidth: "2rem" }}
                    >
                      {i + 1}.
                    </span>
                    <p className="text-ink/75 leading-relaxed text-[15px]">{step}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>

            {/* Image */}
            <FadeIn delay={0.2} className="hidden lg:block sticky top-28">
              <div className="overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={waterImg}
                  alt="Keeping hydrated before your tattoo appointment"
                  className="w-full h-auto object-cover"
                  sizes="320px"
                />
              </div>
              <p className="mt-4 text-ink/45 text-[12px] italic text-center leading-snug">
                Stay hydrated and moisturise daily in the week before your appointment.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── After Care ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <FadeIn className="text-center mb-12">
            <h2
              className="text-sage leading-none"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              After Care
            </h2>
            <div className="mt-4 mx-auto h-px w-20 bg-sage/30" />
            <p className="mt-5 text-ink/65 text-[15px] max-w-xl mx-auto leading-relaxed">
              A tattoo is a wound and can get infected. It takes on average 6 weeks for a tattoo to heal. The following steps will ensure your tattoo heals well.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

            <FadeInStagger className="flex flex-col gap-7" stagger={0.1}>
              {aftercareSteps.map((step, i) => (
                <FadeInItem key={i}>
                  <div className="flex gap-5 items-start">
                    <span
                      className="shrink-0 text-sage leading-none mt-0.5"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1.6rem", minWidth: "2rem" }}
                    >
                      {i + 1}.
                    </span>
                    <p className="text-ink/75 leading-relaxed text-[15px]">{step}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.2} className="hidden lg:block sticky top-28">
              <div className="overflow-hidden rounded-xl shadow-soft bg-bone p-6 flex items-center justify-center">
                <Image
                  src={unicuraImg}
                  alt="Uni Cura antibacterial soap — recommended for tattoo aftercare"
                  className="w-full h-auto object-contain max-h-56"
                  sizes="280px"
                />
              </div>
              <p className="mt-3 text-ink/45 text-[12px] italic text-center">
                Recommended: Uni Cura antibacterial soap
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Important Information ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">

            {/* Left: heading + photo */}
            <FadeIn>
              <h2
                className="text-sage leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Important Information
              </h2>
              <div className="overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={aftercareImg}
                  alt="Tattoo aftercare"
                  className="w-full h-auto object-cover"
                  sizes="300px"
                />
              </div>
            </FadeIn>

            {/* Right: important information paragraphs */}
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-4">
                  {[
                    "Tattooing is a procedure involving puncturing the skin and may involve risks, complications, or healing reactions despite appropriate hygiene, technique, and aftercare.",
                    "Healing results vary between individuals and may be affected by skin type, age, medications, body placement, lifestyle, sun exposure, immune response, scar tissue, aftercare, and overall skin condition.",
                    "Dry, mature, thin, scarred, dehydrated, sun-damaged, or otherwise compromised skin may affect pigment retention, colour saturation, detail retention, healing consistency, and may increase the risk of pigment migration or blowouts.",
                    "Certain body areas, including hands, fingers, feet, joints, ribs, and other high-movement areas, may be more prone to fading, distortion, blowouts, migration, or uneven healing.",
                    "Once tattooing has commenced, additions, redesigns, or compositional changes may fall outside the scope of the originally approved tattoo project and may be treated as additional tattoo work.",
                  ].map((text, i) => (
                    <p key={i} className="flex items-start gap-3 text-ink/70 text-[15px] leading-relaxed">
                      <span className="text-sage/60 shrink-0 mt-[3px]">—</span>
                      {text}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3
                  className="text-sage mb-5"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "0.01em" }}
                >
                  Avoid the following for the first 6 weeks
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {[...avoidLeft, ...avoidRight].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-ink/70 text-[14px]">
                      <span className="text-sage/50 shrink-0 mt-1">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Declaration ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-10">
            <h2
              className="text-sage leading-[1.05]"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Client Declaration
            </h2>
            <div className="mt-3 h-px w-20 bg-sage/30" />
          </FadeIn>

          <FadeInStagger className="flex flex-col gap-4" stagger={0.07}>
            {[
              "I have carefully considered and voluntarily chosen to receive this tattoo.",
              "I have been informed in writing about the possible risks of infection, healing complications, allergic reactions, and other risks associated with tattooing (see information below).",
              "I have received written aftercare instructions for my tattoo.",
              "I am not currently under the influence of alcohol, drugs, medication, or other substances that may impair my judgement or ability to provide informed consent.",
              "I understand that having one or more of the following conditions may increase the risks associated with tattooing, including bleeding, infection, allergic reactions, delayed healing, scarring, or unsatisfactory healed results, and may require additional caution, postponement of the procedure, or medical advice prior to tattooing: Haemophilia or other blood clotting disorders, Chronic skin conditions, Contact allergies or allergic reactions, Diabetes, Immune disorders or autoimmune conditions, Heart or cardiovascular conditions.",
              "I understand that tattooing while using the following medication may increase the risk of complications, poor healing, or infection and may require postponement of the procedure: Antibiotics, Blood thinning medication, Immunosuppressant medication, Accutane / isotretinoin, Chemotherapy or cancer treatment, Other medication affecting healing or immune response. I understand that tattooing during pregnancy is not permitted due to potential health and infection-related risks.",
              "I understand that touch-ups are generally included as part of the tattoo service unless otherwise stated. Due to natural healing variations, a touch-up may sometimes be necessary to achieve the intended healed result.",
              "I understand that I am responsible for carefully reviewing and approving the spelling, design, placement, sizing, and intended meaning of the tattoo before tattooing.",
            ].map((text, i) => (
              <FadeInItem key={i}>
                <div className="flex items-start gap-4 py-4 border-b border-sage/10 last:border-0">
                  <span className="w-2 h-2 rounded-full bg-sage/50 shrink-0 mt-[6px]" />
                  <p className="text-ink/70 text-[15px] leading-relaxed">{text}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Day Session Schedule ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2
              className="text-sage leading-none"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Day Session Schedule
            </h2>
            <div className="mt-4 mx-auto h-px w-20 bg-sage/30" />
            <p className="mt-4 text-ink/55 text-[14px]">Full day sessions typically run from 10:00 to 16:30.</p>
          </FadeIn>

          <FadeInStagger className="flex flex-col" stagger={0.08}>
            {schedule.map((item, i) => (
              <FadeInItem key={i}>
                <div className={`flex gap-6 items-start py-5 ${i < schedule.length - 1 ? "border-b border-sage/10" : ""}`}>
                  <span
                    className="shrink-0 text-sage w-28 text-right leading-tight"
                    style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1rem" }}
                  >
                    {item.time}
                  </span>
                  <div className="flex items-start gap-3 pt-0.5">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sage/40 mt-[6px]" />
                    <p className="text-ink/75 text-[15px] leading-relaxed">{item.note}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── How to Get There ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-10">
            <h2
              className="text-sage leading-none"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              How to Get There
            </h2>
            <div className="mt-3 h-px w-20 bg-sage/30" />
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <FadeIn>
              <h3
                className="text-sage mb-3"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: "1.35rem" }}
              >
                {contact.studio}
              </h3>
              <address className="not-italic text-ink/75 text-[15px] leading-relaxed mb-5">
                {contact.addressLine1}<br />
                {contact.addressLine2}, {contact.addressLine3}<br />
                Netherlands
              </address>
              <p className="text-ink/70 text-[15px] leading-relaxed mb-4">
                Sapphire Ink is just a 5 minute walk from Delft Central Station — right in front of the HEMA in the city centre. I strongly recommend coming by public transport as parking in Delft is expensive and fines are strictly enforced.
              </p>
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.22em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
              >
                Open in Google Maps →
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-sage/8 border border-sage/15 rounded-xl p-6 md:p-8">
                <p className="text-ink/50 text-[11px] tracking-[0.22em] uppercase mb-3">Coming by car</p>
                <p className="text-ink/75 text-[15px] leading-relaxed mb-5">
                  The nearest parking is <strong className="text-ink/90 font-normal">Marktgarage Delft</strong> — full day rate approximately <strong className="text-ink/90 font-normal">€18</strong>. You can also park for free near IKEA Delft and walk into the city centre.
                </p>
                <address className="not-italic text-ink/60 text-[14px] leading-relaxed">
                  ParkerenDelft BV<br />
                  Markt, Willem Naghelstraat 1<br />
                  2612 XD Delft
                </address>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="bg-bone py-12 md:py-16 border-t border-sage/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-ink/55 text-[15px] leading-relaxed">
              Any questions about preparation or aftercare?{" "}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage underline underline-offset-2 hover:text-sage-dark transition-colors"
              >
                Message me on WhatsApp
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
