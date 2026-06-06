"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import tattoocolours from "@/src/assets/images/tattoocolours.jpeg";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { sanityClient } from "@/lib/sanity";

const ease = [0.22, 1, 0.36, 1] as const;

type QAPair = { q: string; a: string; id: string };

export default function FaqPage() {
  const { t, locale } = useLocale();
  const [cms, setCms] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "faqPage"][0]{ faqs }`).then(setCms);
  }, []);

  const lang = locale === "nl" ? "nl" : "en";

  const toQA = (item: any, idx: number): QAPair => ({
    id: `q${idx + 1}`,
    q: item[`question_${lang}`] || item.question_en,
    a: item[`answer_${lang}`] || item.answer_en,
  });

  const allFaqs: QAPair[] = cms?.faqs
    ? cms.faqs.map(toQA)
    : [
        { id: "q1",  q: t("faq.q1"),  a: t("faq.a1")  },
        { id: "q2",  q: t("faq.q2"),  a: t("faq.a2")  },
        { id: "q3",  q: t("faq.q3"),  a: t("faq.a3")  },
        { id: "q4",  q: t("faq.q4"),  a: t("faq.a4")  },
        { id: "q5",  q: t("faq.q5"),  a: t("faq.a5")  },
        { id: "q6",  q: t("faq.q6"),  a: t("faq.a6")  },
        { id: "q7",  q: t("faq.q7"),  a: t("faq.a7")  },
        { id: "q8",  q: t("faq.q8"),  a: t("faq.a8")  },
        { id: "q9",  q: t("faq.q9"),  a: t("faq.a9")  },
        { id: "q10", q: t("faq.q10"), a: t("faq.a10") },
        { id: "q11", q: t("faq.q11"), a: t("faq.a11") },
        { id: "q12", q: t("faq.q12"), a: t("faq.a12") },
        { id: "q13", q: t("faq.q13"), a: t("faq.a13") },
      ];

  const bookingQA = cms?.faqs
    ? allFaqs.filter((_, i) => cms.faqs[i]?.category === "Booking")
    : allFaqs.slice(0, 6);

  const generalQA = cms?.faqs
    ? allFaqs.filter((_, i) => cms.faqs[i]?.category === "General")
    : allFaqs.slice(6);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[320px] md:h-[400px] overflow-hidden">
        <Image
          src={tattoocolours}
          alt="Tattoo ink colours"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.h1
            className="text-white text-center leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            {t("faq.hero")}
          </motion.h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left sidebar */}
            <aside className="lg:col-span-4">
              <FadeIn delay={0.1}>
                <CategoryNav heading={t("faq.categoryBooking")} items={bookingQA} />
                <CategoryNav heading={t("faq.categoryGeneral")} items={generalQA} className="mt-10" />
              </FadeIn>
            </aside>

            {/* Right Q&A content */}
            <div className="lg:col-span-8 flex flex-col gap-14">
              <FadeIn delay={0.2}>
                <QAGroup heading={t("faq.categoryBooking")} items={bookingQA} />
              </FadeIn>
              <FadeIn delay={0.1}>
                <QAGroup heading={t("faq.categoryGeneral")} items={generalQA} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryNav({
  heading,
  items,
  className = "",
}: {
  heading: string;
  items: QAPair[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2
        className="text-sage-dark mb-4"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 600,
          fontSize: "1.35rem",
          letterSpacing: "0.02em",
        }}
      >
        {heading}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-ink/70 hover:text-sage text-sm leading-snug group"
            >
              <span className="mt-[3px] shrink-0 text-sage/60 group-hover:text-sage transition-colors">
                —
              </span>
              {item.q}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QAGroup({ heading, items }: { heading: string; items: QAPair[] }) {
  return (
    <div>
      <h3
        className="text-sage mb-8 pb-3 border-b border-sage/20"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontWeight: 600,
          fontSize: "1.6rem",
        }}
      >
        {heading}
      </h3>
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <div key={item.id} id={item.id} className="scroll-mt-24">
            <p
              className="text-ink mb-3"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 600,
                fontSize: "1.2rem",
                letterSpacing: "0.01em",
              }}
            >
              {item.q}
            </p>
            <div className="flex flex-col gap-3">
              {item.a.split("\n\n").map((para, i) => (
                <p key={i} className="text-ink/75 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
