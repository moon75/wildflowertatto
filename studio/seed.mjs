import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = resolve(__dirname, "../src/assets/images");

const client = createClient({
  projectId: "wkwwiwo5",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function uploadImage(filename, label) {
  console.log(`  Uploading ${label}...`);
  const stream = createReadStream(resolve(IMAGES_DIR, filename));
  const ext = filename.split(".").pop().toLowerCase();
  const mimeType = ext === "png" ? "image/png" : ext === "jpeg" || ext === "jpg" ? "image/jpeg" : "image/jpeg";
  const asset = await client.assets.upload("image", stream, {
    filename,
    contentType: mimeType,
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function deleteExisting(type) {
  const docs = await client.fetch(`*[_type == "${type}"]._id`);
  for (const id of docs) {
    await client.delete(id);
  }
}

async function run() {
  console.log("\n🌸 Wildflower Tattoo — Sanity Seed Script\n");

  // ── Site Settings ──────────────────────────────────────────────
  console.log("📋 Creating Site Settings...");
  await deleteExisting("siteSettings");
  await client.create({
    _type: "siteSettings",
    tagline_en: "Bespoke colour realism tattoos · Bookings open",
    tagline_nl: "Op maat gemaakte kleur realisme tattoos · Boekingen open",
    email: "info@wildflowertattoo.nl",
    phone: "+31636306144",
    whatsappUrl: "https://wa.me/31636306144",
    instagram: "https://instagram.com/wildflowertattoo.nl",
    tiktok: "https://tiktok.com/@wildflowertattoo",
    studio: "Sapphire Ink Delft",
    addressLine1: "Molslaan 2",
    addressLine2: "Delft",
    addressLine3: "2611BM",
  });
  console.log("  ✓ Site Settings");

  // ── About Section ──────────────────────────────────────────────
  console.log("\n📋 Creating About Page...");
  await deleteExisting("aboutSection");
  await client.create({
    _type: "aboutSection",
    heading_en: "About",
    heading_nl: "Over",
    p1_en: "My name is Lydia Szubert, a tattoo artist based in Delft, the Netherlands and resident artist at Sapphire Ink Delft. I specialise in colour realism, micro realism and custom tattoo work, with a focus on colour theory, composition and fine detail.",
    p1_nl: "Mijn naam is Lydia Szubert, een tattoo-artiest gevestigd in Delft, Nederland, en vaste artiest bij Sapphire Ink Delft. Ik ben gespecialiseerd in kleurrealisme, microrealisme en custom tattoo werk, met focus op kleurentheorie, compositie en fijne details.",
    p2_en: "Before tattooing professionally, I spent over 16 years developing my skills as a painter and visual artist. I hold both a degree in Classical Painting and a BA in Graphic Design, and previously worked as a classical art teacher and painting demonstrator for Royal Talens.",
    p2_nl: "Voordat ik professioneel tatoeëerde, heb ik meer dan 16 jaar besteed aan het ontwikkelen van mijn vaardigheden als schilder en beeldend kunstenaar. Ik heb zowel een diploma in Klassieke Schilderkunst als een BA in Grafisch Ontwerp, en werkte eerder als klassiek kunstdocent en schilderdemonstrator voor Royal Talens.",
    p3_en: "I have now been tattooing professionally for over 6 years. My background in traditional painting strongly influences my approach to tattooing, particularly in colour realism, lighting, anatomy and composition.",
    p3_nl: "Ik tatoeëer nu al meer dan 6 jaar professioneel. Mijn achtergrond in traditionele schilderkunst beïnvloedt mijn benadering van tatoeëren sterk, met name in kleurrealisme, belichting, anatomie en compositie.",
  });
  console.log("  ✓ About Page");

  // ── Aftercare Page ─────────────────────────────────────────────
  console.log("\n📋 Creating Aftercare Page...");
  await deleteExisting("aftercarePage");
  await client.create({
    _type: "aftercarePage",
    prepareSteps: [
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
    ],
    aftercareSteps: [
      "2 hours after the appointment take off the dressing. If you have second skin on, please take it off after 1–2 days.",
      "Wash your hands with antibacterial soap and then wash your tattoo with the same soap. I suggest Uni Cura.",
      "With a clean towel, dab dry the tattoo and dab on a thin layer of Bepanthen cream.",
      "Repeat the same process 2–3 times a day for the first two weeks.",
    ],
    avoidItems: [
      "Swimming",
      "Baths",
      "Direct sun",
      "Saunas",
      "Sunbeds",
      "Don't pick or touch the tattoo",
      "Avoid exercise (2 days minimum)",
      "Avoid abrasive clothing",
      "Avoid dirty clothing",
    ],
    importantInfo: [
      "Tattooing is a procedure involving puncturing the skin and may involve risks, complications, or healing reactions despite appropriate hygiene, technique, and aftercare.",
      "Healing results vary between individuals and may be affected by skin type, age, medications, body placement, lifestyle, sun exposure, immune response, scar tissue, aftercare, and overall skin condition.",
      "Dry, mature, thin, scarred, dehydrated, sun-damaged, or otherwise compromised skin may affect pigment retention, colour saturation, detail retention, healing consistency, and may increase the risk of pigment migration or blowouts.",
      "Certain body areas, including hands, fingers, feet, joints, ribs, and other high-movement areas, may be more prone to fading, distortion, blowouts, migration, or uneven healing.",
      "Once tattooing has commenced, additions, redesigns, or compositional changes may fall outside the scope of the originally approved tattoo project and may be treated as additional tattoo work.",
    ],
    clientDeclaration: [
      "I have carefully considered and voluntarily chosen to receive this tattoo.",
      "I have been informed in writing about the possible risks of infection, healing complications, allergic reactions, and other risks associated with tattooing (see information below).",
      "I have received written aftercare instructions for my tattoo.",
      "I am not currently under the influence of alcohol, drugs, medication, or other substances that may impair my judgement or ability to provide informed consent.",
      "I understand that having one or more of the following conditions may increase the risks associated with tattooing, including bleeding, infection, allergic reactions, delayed healing, scarring, or unsatisfactory healed results, and may require additional caution, postponement of the procedure, or medical advice prior to tattooing: Haemophilia or other blood clotting disorders, Chronic skin conditions, Contact allergies or allergic reactions, Diabetes, Immune disorders or autoimmune conditions, Heart or cardiovascular conditions.",
      "I understand that tattooing while using the following medication may increase the risk of complications, poor healing, or infection and may require postponement of the procedure: Antibiotics, Blood thinning medication, Immunosuppressant medication, Accutane / isotretinoin, Chemotherapy or cancer treatment, Other medication affecting healing or immune response. I understand that tattooing during pregnancy is not permitted due to potential health and infection-related risks.",
      "I understand that touch-ups are generally included as part of the tattoo service unless otherwise stated. Due to natural healing variations, a touch-up may sometimes be necessary to achieve the intended healed result.",
      "I understand that I am responsible for carefully reviewing and approving the spelling, design, placement, sizing, and intended meaning of the tattoo before tattooing.",
    ],
  });
  console.log("  ✓ Aftercare Page");

  // ── FAQ Page ───────────────────────────────────────────────────
  console.log("\n📋 Creating FAQ Page...");
  await deleteExisting("faqPage");
  await client.create({
    _type: "faqPage",
    faqs: [
      { _key: "q1", question_en: "What Does a Full Day Session Look Like?", question_nl: "Hoe Ziet een Volledige Dagsessie Eruit?", category: "Booking", answer_en: "A full day session usually runs from around 11:00am until approximately 17:00, depending on the project. At the start of the appointment we will go through the tattoo design together, discuss the size and placement, and make any final adjustments if needed before applying the stencil.\n\nDuring longer sessions we will take short breaks throughout the day, so please make sure to bring water, snacks and lunch with you. Once the tattoo is finished, I will clean and wrap the tattoo, explain the aftercare process and answer any questions you may have before you head home.", answer_nl: "Een volledige dagsessie duurt meestal van ongeveer 11:00 tot circa 17:00, afhankelijk van het project. Aan het begin van de afspraak gaan we samen door het tattoo-ontwerp, bespreken we de grootte en plaatsing, en maken we indien nodig laatste aanpassingen voordat we de stencil aanbrengen.\n\nTijdens langere sessies nemen we korte pauzes, dus zorg dat je water, snacks en lunch meeneemt. Zodra de tattoo klaar is, maak ik de tattoo schoon en wikkel ik hem in, leg ik het verzorgingsproces uit en beantwoord ik eventuele vragen voordat je naar huis gaat." },
      { _key: "q2", question_en: "How Do I Get There?", question_nl: "Hoe Kom Ik Er?", category: "Booking", answer_en: "Sapphire Ink Delft is located in the centre of Delft, only around a 5 minute walk from Delft Central Station, directly across the HEMA in the city centre.\n\nI highly recommend travelling by public transport where possible, as parking in Delft can be expensive and street parking fines are heavily enforced.\n\nIf you are coming by car, I recommend parking at Marktgarage Delft, Willem Naghelstraat 1, 2612 XD Delft. The full day parking rate is approximately €18.", answer_nl: "Sapphire Ink Delft is gelegen in het centrum van Delft, op slechts circa 5 minuten lopen van Delft Centraal Station, direct tegenover de HEMA in het stadscentrum." },
      { _key: "q3", question_en: "How Much Will My Tattoo Cost?", question_nl: "Wat Kost Mijn Tattoo?", category: "Booking", answer_en: "Tattoo pricing depends on several factors including size, placement, detail, style and the amount of time required. As of 2026, the full day session rate is €700.", answer_nl: "De prijs van een tattoo hangt af van meerdere factoren. Vanaf 2026 is het tarief voor een volledige dagsessie €700." },
      { _key: "q4", question_en: "Why Are Tattoos So Expensive?", question_nl: "Waarom Zijn Tattoos Zo Duur?", category: "Booking", answer_en: "Professional tattooing involves much more than just the hours spent tattooing. I currently tattoo around three days a week but spend at least two additional unpaid days on business tasks, design preparation, social media, and client consultations.", answer_nl: "Professioneel tatoeëren omvat veel meer dan alleen de uren tijdens de afspraak." },
      { _key: "q5", question_en: "How Much Does a Sleeve Cost?", question_nl: "Wat Kost een Sleeve?", category: "Booking", answer_en: "It is usually not possible to give an exact price for a sleeve project upfront. Sleeve projects are approached one full day session at a time.", answer_nl: "Het is meestal niet mogelijk vooraf een exacte prijs te geven voor een sleeve-project." },
      { _key: "q6", question_en: "Why Are Smaller Tattoos Relatively More Expensive?", question_nl: "Waarom Zijn Kleinere Tattoos Relatief Duurder?", category: "Booking", answer_en: "Whether a tattoo is small or large, the appointment still involves consultation time, custom design preparation, studio setup, hygiene preparation and full cleaning procedures. Material costs are also similar regardless of tattoo size.", answer_nl: "Of een tattoo groot of klein is, de afspraak omvat altijd consultatietijd, ontwerp, studiovoorbereiding en hygiëneprocedures." },
      { _key: "q7", question_en: "Do Micro Realism Tattoos Turn Into a Blur?", question_nl: "Vervaagt Micro Realism Na Verloop van Tijd?", category: "General", answer_en: "Micro realism tattoos can age very well when designed appropriately for the skin and placement. I carefully design micro realism tattoos with enough negative space and contrast to remain readable in the future.", answer_nl: "Micro realism tattoos kunnen goed oud worden wanneer ze op de juiste manier zijn ontworpen voor de huid en plaatsing." },
      { _key: "q8", question_en: "Can Old Tattoos Be Reworked?", question_nl: "Kunnen Oude Tattoos Opnieuw Worden Bewerkt?", category: "General", answer_en: "Yes. Depending on the existing tattoo, it is often possible to rework, refresh or cover older tattoos. Coverups and reworks are discussed on a case-by-case basis.", answer_nl: "Ja. Afhankelijk van de bestaande tattoo is het vaak mogelijk oudere tattoos te herwerken of te bedekken." },
      { _key: "q9", question_en: "Why Are You Keen on Laser First?", question_nl: "Waarom Adviseer Je Eerst Laser?", category: "General", answer_en: "Each laser session lightens the existing tattoo, which creates far more design possibilities for the final coverup. Starting with laser removal can make a huge difference to the final result.", answer_nl: "Elke lasersessie verlicht de bestaande tattoo, wat veel meer ontwerpmogelijkheden creëert." },
      { _key: "q10", question_en: "Can't You Just Cover a Tattoo With White Ink?", question_nl: "Kun Je een Tattoo Niet Gewoon Bedekken Met Witte Inkt?", category: "General", answer_en: "Not reliably. While white ink can temporarily soften an old tattoo, the original darker pigment underneath will usually become visible again over time.", answer_nl: "Niet betrouwbaar. Hoewel witte inkt tijdelijk kan helpen, wordt het donkerdere pigment eronder meestal weer zichtbaar." },
      { _key: "q11", question_en: "Do Colour Tattoos Fade?", question_nl: "Vervaagt een Kleurtattoo?", category: "General", answer_en: "All tattoos naturally soften over time. Colour tattoos do not automatically age worse than black and grey. When applied correctly and cared for properly, colour tattoos can remain vibrant for many years.", answer_nl: "Alle tattoos worden van nature iets zachter na verloop van tijd. Kleurtattoos verouderen niet automatisch slechter dan zwart-wit tattoos." },
      { _key: "q12", question_en: "Can I Get Colour Tattoos With a More Melanated Skin Tone?", question_nl: "Kan Ik een Kleurtattoo Krijgen Met een Donkerdere Huidskleur?", category: "General", answer_en: "Yes, absolutely. Colour tattoos can work beautifully on melanated skin tones when designed with the skin tone in mind.", answer_nl: "Ja, absoluut. Kleurtattoos kunnen prachtig werken op melaninrijke huidtinten." },
      { _key: "q13", question_en: "How Small Can I Make My Tattoo?", question_nl: "Hoe Klein Kan Ik Mijn Tattoo Maken?", category: "General", answer_en: "There are limits to how small a tattoo can realistically be while still aging well. As tattoos age, the ink naturally spreads slightly within the skin, so very small or very detailed tattoos can lose clarity over time.", answer_nl: "Er zijn limieten aan hoe klein een tattoo realistisch kan zijn en tegelijk goed oud worden." },
    ],
  });
  console.log("  ✓ FAQ Page");

  // ── Terms Page ─────────────────────────────────────────────────
  console.log("\n📋 Creating Terms & Conditions...");
  await deleteExisting("termsPage");
  await client.create({
    _type: "termsPage",
    intro_en: "Please read through the following terms and conditions carefully before booking an appointment. These policies are in place to ensure clarity, fairness and enough time to properly prepare each custom tattoo project.",
    intro_nl: "Lees de volgende algemene voorwaarden zorgvuldig door voordat je een afspraak maakt.",
    policies: [
      { _key: "p1", heading_en: "Deposits & Booking", heading_nl: "Aanbetaling & Boeking", text_en: "Appointments are only reserved once a deposit has been paid. Tattoo designs are also only started once the deposit has been received.", text_nl: "Afspraken worden alleen gereserveerd zodra een aanbetaling is betaald." },
      { _key: "p2", heading_en: "Cancellation & Rescheduling Policy", heading_nl: "Annulerings- & Verzettingsbeleid", text_en: "Deposits are forfeited if an appointment is cancelled or moved within 8 days of the appointment date. You are welcome to reschedule or cancel before this timeframe.", text_nl: "Aanbetalingen worden ingehouden als een afspraak wordt geannuleerd of verzet binnen 8 dagen voor de afspraakdatum." },
      { _key: "p3", heading_en: "Custom Tattoo Design Revisions", heading_nl: "Revisies van het Aangepaste Ontwerp", text_en: "Custom tattoo designs include up to 3 design revisions. Additional revisions beyond this may involve extra costs.", text_nl: "Aangepaste tattoo-ontwerpen bevatten tot 3 ontwerprevisies." },
      { _key: "p4", heading_en: "Client Responsibility", heading_nl: "Verantwoordelijkheid van de Klant", text_en: "It is the client's responsibility to carefully check the design before the tattoo appointment begins. This includes spelling, placement, sizing, references and symbolic meaning.", text_nl: "Het is de verantwoordelijkheid van de klant om het ontwerp zorgvuldig te controleren voordat de afspraak begint." },
      { _key: "p5", heading_en: "Pricing", heading_nl: "Prijzen", text_en: "Tattoo projects are priced individually. A price estimate will be discussed before the appointment, usually within a minimum and maximum range.", text_nl: "Tattoo-projecten worden individueel geprijsd." },
      { _key: "p6", heading_en: "Touch Ups", heading_nl: "Touch Ups", text_en: "A free touch up is included if needed, unless otherwise specified. Touch ups must be completed between 6 weeks and 3 months after the tattoo appointment.", text_nl: "Een gratis touch up is inbegrepen indien nodig. Touch ups moeten worden voltooid tussen 6 weken en 3 maanden na de afspraak." },
      { _key: "p7", heading_en: "Deposit Refunds", heading_nl: "Terugbetaling van de Aanbetaling", text_en: "Once the tattoo design process has begun, deposits are non-refundable. Design work is often started two weeks before the appointment date.", text_nl: "Zodra het tattoo-ontwerpproces is begonnen, zijn aanbetalingen niet restitueerbaar." },
    ],
    depositRules: [
      { _key: "d1", rule_en: "All appointments require a €50 deposit. A day session booking requires a €100 deposit. This deposit is deducted from the final tattoo price.", rule_nl: "Alle afspraken vereisen een aanbetaling van €50. Een volledige dagsessie vereist €100." },
      { _key: "d2", rule_en: "If you arrive more than 30 minutes late without contacting me, the appointment may be cancelled and the deposit forfeited.", rule_nl: "Als je meer dan 30 minuten te laat aankomt zonder contact, kan de afspraak worden geannuleerd." },
      { _key: "d3", rule_en: "Once the tattoo design process has started, the deposit becomes non-refundable. Designs are usually prepared around 2 weeks before the appointment.", rule_nl: "Zodra het ontwerpproces is gestart, wordt de aanbetaling niet-restitueerbaar." },
      { _key: "d4", rule_en: "If you would like to cancel and receive a deposit refund, this must be done before the design process has begun.", rule_nl: "Als je wilt annuleren en terugbetaling wilt, moet dit voor het ontwerpproces zijn gedaan." },
      { _key: "d5", rule_en: "Appointment dates can be moved or rescheduled up to 8 days before the booked date. Rescheduling within 8 days will forfeit the original deposit.", rule_nl: "Afspraken kunnen worden verzet tot 8 dagen voor de datum. Verzetten binnen 8 dagen betekent verlies van de aanbetaling." },
    ],
  });
  console.log("  ✓ Terms & Conditions");

  // ── Book Page ──────────────────────────────────────────────────
  console.log("\n📋 Creating How to Book Page...");
  await deleteExisting("bookPage");
  await client.create({
    _type: "bookPage",
    steps: [
      { _key: "s1", heading_en: "1. Send a Message on WhatsApp", heading_nl: "1. Stuur een Bericht via WhatsApp", text_en: "To book an appointment, please send me a message through WhatsApp. Please include: the tattoo idea or subject, placement on the body, approximate size, reference images, and your budget if you have one.", text_nl: "Om een afspraak te maken, stuur je me een bericht via WhatsApp. Vermeld: het tattoo-idee, plaatsing, geschatte grootte, referentieafbeeldingen en je budget." },
      { _key: "s2", heading_en: "2. Be As Specific As Possible", heading_nl: "2. Wees Zo Specifiek Mogelijk", text_en: "The clearer your references and explanation are, the easier it is for me to understand the style, mood and direction you are looking for. You can also show me examples of what you do not want.", text_nl: "Hoe duidelijker je referenties en uitleg zijn, hoe gemakkelijker het voor me is om de stijl en richting te begrijpen." },
      { _key: "s3", heading_en: "3. Send Clear Placement Photos", heading_nl: "3. Stuur Duidelijke Plaatsingsfoto's", text_en: "It is very helpful if you send a clear photo of the body area where you would like the tattoo placed. Please take straight, parallel photos with good lighting.", text_nl: "Het is erg nuttig als je een duidelijke foto stuurt van het lichaamsgebied waar je de tattoo wilt." },
      { _key: "s4", heading_en: "4. Deposit & Booking Confirmation", heading_nl: "4. Aanbetaling & Boekingsbevestiging", text_en: "Once we have discussed the project and agreed on the appointment, a €50 deposit is required to reserve the booking (or €100 for a full day session). The deposit is deducted from the final tattoo price.", text_nl: "Zodra we het project hebben besproken, is een aanbetaling van €50 vereist (of €100 voor een volledige dagsessie)." },
      { _key: "s5", heading_en: "5. Design Process", heading_nl: "5. Ontwerpproces", text_en: "Around one week before the appointment, I will begin preparing your tattoo design. The design will usually be sent through WhatsApp before the appointment so we have time to discuss feedback.", text_nl: "Ongeveer één week voor de afspraak begin ik met het voorbereiden van je tattoo-ontwerp." },
    ],
  });
  console.log("  ✓ How to Book Page");

  // ── Portfolio Images ───────────────────────────────────────────
  console.log("\n🖼  Uploading Portfolio Images...");
  await deleteExisting("portfolioImage");

  const portfolioItems = [
    { file: "colourrealismbirdtattoo.JPG",              alt: "Colour realism magpie bird tattoo",       categories: ["animalPet"],                    order: 1  },
    { file: "colourrealismbotanicalpoppytattoo.JPG",    alt: "Colour botanical poppy tattoo",           categories: ["botanical", "healed"],          order: 2  },
    { file: "microcolourrealismtattoodogs.JPG",         alt: "Micro realism three dogs portrait tattoo",categories: ["microRealism", "animalPet"],     order: 3  },
    { file: "colourfulfemininebotanicaltattoo.jpeg",    alt: "Colourful feminine botanical tattoo",     categories: ["botanical", "healed"],          order: 4  },
    { file: "blackandgreyealismtattoo-tiger.JPG",       alt: "Black and grey realism tiger tattoo",     categories: ["blackGrey", "animalPet"],       order: 5  },
    { file: "realismcolourlimebotanicaltatoo.JPG",      alt: "Colour realism lime botanical tattoo",    categories: ["botanical", "healed"],          order: 6  },
    { file: "blackandgreyrealismportraittattoo.JPG",    alt: "Black and grey realism portrait tattoo",  categories: ["portrait", "blackGrey"],        order: 7  },
    { file: "colourcherrytattoorealism.jpeg",           alt: "Colour cherry realism tattoo",            categories: ["botanical", "healed"],          order: 8  },
    { file: "healedmicrocolourrealismtattoo.JPG",       alt: "Healed micro colour realism tattoo",      categories: ["microRealism", "healed"],       order: 9  },
    { file: "botanicaldandilionflowertattoo.jpeg",      alt: "Botanical dandelion flower tattoo",       categories: ["botanical", "healed"],          order: 10 },
    { file: "daffodilcolourealismtattoo.jpeg",          alt: "Colour daffodil realism tattoo",          categories: ["botanical", "healed"],          order: 11 },
    { file: "coveruptattoo.jpeg",                       alt: "Cover-up tattoo rework",                  categories: ["coverup", "blackGrey"],         order: 12 },
  ];

  for (const item of portfolioItems) {
    const imageRef = await uploadImage(item.file, item.alt);
    await client.create({
      _type: "portfolioImage",
      image: imageRef,
      alt: item.alt,
      categories: item.categories,
      featured: item.order <= 6,
      order: item.order,
    });
    console.log(`  ✓ ${item.alt}`);
  }

  console.log("\n✅ All done! Open wildflower-tattoo.sanity.studio to see your content.\n");
}

run().catch((err) => {
  console.error("\n❌ Error:", err.message);
  process.exit(1);
});
