import { GoDotFill } from "react-icons/go";
import {
  ERList,
  SCIntlList,
  ConferenceSessionsList,
  ConvenerList,
  Coconvenerlist,
  GuestList,
  ImportantDateList,
  InternationalAdvisoryList,
  ProgramCommitteeList,
  publicationsList,
  PatronList,
  ChiefPatronList,
} from "./CECI/CECI";
import {
  LuCalendar,
  LuMail,
  LuMapPin,
  LuPhoneCall,
  LuTimer,
  LuUserRound,
  LuBuilding2,
  LuGlobe,
  LuBookOpen,
  LuCreditCard,
} from "react-icons/lu";
import { Carousel } from "antd";
import Link from "next/link";
import { BsBank } from "react-icons/bs";

/* =========================================================
   CONFIGURATION
   ========================================================= */

// Keep the Co-Convener code available for future use.
// Change to true whenever the section should be displayed.
const SHOW_CO_CONVENER = false;

/* =========================================================
   SHARED UI COMPONENTS
   ========================================================= */

const pageCard =
  "w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden";

const sectionPadding = "p-5 sm:p-6 lg:p-8";

function SectionHeading({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#d61c25] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
      )}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}

function PartnerLogos() {
  const primaryLogos = [
    ["/assets/images/CECI/VNU.jpg", "VNU University of Economics and Business, Vietnam"],
    ["/assets/images/CECI/PU.jpg", "Presidency University, Indonesia"],
    ["/assets/images/CECI/TUA.jpg", "The University of Adelaide, Australia"],
    ["/assets/images/CECI/Confab.jpg", "Confab 360 Degree, New Delhi"],
  ];

  const secondaryLogos = [
    ["/assets/images/CECI/SU.jpg", "Sofia University St. Kliment Ohridski"],
    ["/assets/images/CECI/E.jpg", "Rangsit University"],
    ["/assets/images/CECI/FTU.jpg", "Foreign Trade University"],
    ["/assets/images/CECI/DAV.jpg", "Diplomatic Academy of Vietnam"],
    ["/assets/images/CECI/UEL.jpg", "University of Economics and Law - VNU HCMC"],
    ["/assets/images/CECI/CONR.jpg", "University of National and World Economy"],
    ["/assets/images/CECI/SIS.jpg", "School of Interdisciplinary Sciences and Arts"],
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 items-stretch">
        {primaryLogos.map(([src, alt]) => (
          <div
            key={src}
            className="min-h-[130px] sm:min-h-[160px] rounded-2xl border border-gray-200 bg-white p-4 flex items-center justify-center hover:shadow-md transition-shadow"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-full max-h-[145px] object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-5 items-center">
        {secondaryLogos.map(([src, alt]) => (
          <div
            key={src}
            className="h-[90px] sm:h-[105px] rounded-xl border border-gray-100 bg-gray-50/70 p-3 flex items-center justify-center"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonCard({
  item,
  label,
  accent = "red",
}: {
  item: any;
  label: string;
  accent?: "red" | "blue";
}) {
  const accentClass = accent === "blue" ? "from-blue-500 to-indigo-500" : "from-[#d61c25] to-[#a9141b]";
  const badgeClass = accent === "blue" ? "bg-blue-50 text-blue-700" : "bg-red-50 text-[#d61c25]";

  return (
    <article className="w-full h-full rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`h-1.5 bg-gradient-to-r ${accentClass}`} />
      <div className="p-5 sm:p-6">
        {item.image && (
          <div className="flex justify-center mb-5">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100">
              <img
                src={item.image}
                alt={item.name || label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <div className="text-center sm:text-left">
          <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${badgeClass}`}>
            {label}
          </span>
          <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug">
            {item.name}
          </h3>
          {item.detail && (
            <p className="mt-2 text-sm leading-6 text-gray-600">{item.detail}</p>
          )}
        </div>
      </div>
    </article>
  );
}

function CommitteeList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className={pageCard}>
      <div className={sectionPadding}>
        <SectionHeading title={title} icon={<LuGlobe size={19} />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-4"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-[#d61c25]">
                {i + 1}
              </span>
              <p className="text-sm sm:text-base leading-6 text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TAB ITEMS
   ========================================================= */

export const tabItems = [
  /* =======================================================
     1. TITLE
     ======================================================= */
  {
    key: "1",
    label: "Title",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <PartnerLogos />

          <div className="mt-8 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#d61c25] text-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-widest uppercase">
                  CIECI & ICFBE 2026
                </span>
                <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                  The 2026 Joint International Conference on Economic Integration and Enterprise Resilience
                </h1>
                <p className="mt-5 text-base sm:text-lg leading-7 text-white/85">
                  Reshaping Integration and Enterprise Resilience: Artificial Intelligence, Supply Chains, Trade and Family Business Governance
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur-sm">
                  <img
                    src="/assets/images/CECI/BCK.jpg"
                    alt="CIECI & ICFBE 2026 conference"
                    loading="lazy"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* =======================================================
     3. ORGANIZING COMMITTEE
     ======================================================= */
  {
    key: "3",
    label: "Organizing Committee",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <div className="mb-8">
            <SectionHeading title="Organizing Institutions" icon={<LuBuilding2 size={19} />} />
            <PartnerLogos />
          </div>

          <div className="border-t border-gray-200 my-8" />

          <section>
            <SectionHeading title="Conference Chair (s)" icon={<span className="text-lg">★</span>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {PatronList.map((item, i) => (
                <PersonCard key={i} item={item} label="" />
              ))}
            </div>
          </section>

          <section className="mt-10">
            {/* <SectionHeading title="Conference Chair" icon={<span className="text-lg">★</span>} /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {ChiefPatronList.map((item, i) => (
                <PersonCard key={i} item={item} label="" />
              ))}
            </div>
          </section>

          {/* Kept for future use. */}
          {SHOW_CO_CONVENER && (
            <section className="mt-10">
              <SectionHeading title="Co-Convener" icon={<span className="text-lg">✓</span>} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Coconvenerlist.map((item, i) => (
                  <PersonCard key={i} item={item} label="CO-CONVENER" accent="blue" />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    ),
  },

  /* =======================================================
     4. CONFERENCE DESCRIPTION AND SCOPE
     ======================================================= */
  {
  key: "4",
  label: "Conference Description and Scope",

  children: (
    <div className={pageCard}>

      <div className={sectionPadding}>

        {/* =====================================================
            ORGANIZING / PARTNER INSTITUTION LOGOS
        ===================================================== */}

        <div className="mb-8">

          <PartnerLogos />

        </div>


        {/* =====================================================
            CONFERENCE THEME
        ===================================================== */}

        <div
          className="
            rounded-2xl
            bg-gradient-to-r
            from-red-50
            via-white
            to-gray-50
            border
            border-red-100
            p-5
            sm:p-7
          "
        >

          <span
            className="
              text-xs
              font-bold
              tracking-widest
              uppercase
              text-[#d61c25]
            "
          >
            Conference Theme
          </span>


          <h1
            className="
              mt-3
              text-2xl
              sm:text-3xl
              font-extrabold
              leading-tight
              text-gray-900
            "
          >
            Reshaping Integration and Enterprise Resilience
          </h1>


          <p
            className="
              mt-3
              text-base
              sm:text-lg
              text-gray-600
              leading-7
            "
          >
            Artificial Intelligence, Supply Chains, Trade and Family Business
            Governance
          </p>

        </div>


        {/* =====================================================
            ABOUT THE CONFERENCE
        ===================================================== */}

        <section className="mt-10">

          <SectionHeading
            title="About The Conference"
            icon={<LuBookOpen size={19} />}
          />


          <div
            className="
              space-y-5
              text-sm
              sm:text-base
              leading-8
              text-gray-700
              text-justify
            "
          >

            <p>
              The University of Economics and Business, Vietnam National
              University - Hanoi (VNU-UEB), in a strategic partnership with
              President University (Indonesia), announces the JOINT
              INTERNATIONAL CONFERENCE ON ECONOMIC INTEGRATION AND ENTERPRISE
              RESILIENCE (CIECI & ICFBE 2026): Reshaping Integration and
              Enterprise Resilience: Artificial Intelligence, Supply Chains,
              Trade and Family Business Governance. This joint event brings
              together the 14th annual International Conference on
              International Economic Cooperation and Integration (CIECI 2026)
              and the 9th International Conference on Family Business and
              Entrepreneurship (ICFBE 2026).
            </p>


            <p>
              This year's joint conference aims to explore how artificial
              intelligence, the restructuring of global supply chains, the
              establishment of new trade governance frameworks, and the
              dynamics of family enterprises can help economies respond to and
              build resilience amidst geopolitical fragmentation.
            </p>


            <p>
              The conference is organized in collaboration with the University
              of Adelaide (Australia), Confab 360 Degree (India), Sofia
              University St. Kliment Ohridski (Bulgaria), Rangsit University
              (Thailand), Foreign Trade University, Diplomatic Academy of
              Vietnam, University of Economics and Law - VNU HCMC, University
              of National and World Economy (Bulgaria), and School of
              Interdisciplinary Sciences and Arts, Vietnam National University -
              Hanoi (VNU-SIS).
            </p>


            <p>
              This 1.5-day hybrid conference, to be held on 22-23 October 2026
              in Hanoi, will provide a dynamic platform for scholars,
              researchers, policymakers, and business leaders to exchange ideas,
              foster meaningful dialogue, share best practices, and develop
              actionable solutions to lead the way toward a more resilient and
              sustainable future amid digital transformation and global
              economic shifts.
            </p>

          </div>

        </section>


        {/* =====================================================
            RATIONALE
        ===================================================== */}

        <section className="mt-10">

          <SectionHeading
            title="Rationale"
            icon={<span className="font-bold">02</span>}
          />


          <div className="space-y-4">

            <div
              className="
                rounded-xl
                border
                border-gray-200
                p-5
                sm:p-6
                bg-gray-50/60
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                The global economy stands at a critical crossroads,
                characterised by a profound paradox: while technological
                advancements are driving unprecedented levels of digital
                interconnectedness, geopolitical fractures are simultaneously
                causing severe physical and institutional fragmentation.
              </p>

            </div>


            <div
              className="
                rounded-xl
                border
                border-blue-100
                bg-blue-50/40
                p-5
                sm:p-6
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                At the forefront of this digital acceleration is the explosive
                growth of Artificial Intelligence (AI). Generative AI and
                advanced digital technologies are no longer mere operational
                tools; they are fundamentally altering global comparative
                advantages, disrupting traditional labour markets, and
                accelerating cross-border digital trade. This rapid evolution
                necessitates an urgent academic and policy discourse on data
                sovereignty, digital equity, and the establishment of robust
                frameworks for AI governance in international trade.
              </p>

            </div>


            <div
              className="
                rounded-xl
                border
                border-emerald-100
                bg-emerald-50/40
                p-5
                sm:p-6
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                Conversely, the physical realm of global trade faces mounting
                headwinds. Escalating geopolitical tensions, ranging from major
                power competition to volatile regional conflicts, have exposed
                the severe fragility of global supply chains. The overarching
                paradigm has abruptly shifted from “just-in-time” efficiency to
                “just-in-case” resilience. Consequently, concepts like
                “Friend-shoring”, “Near-shoring” and “De-risking” are rapidly
                rewiring global value chains. These shifts pose complex
                challenges for multinational corporations while simultaneously
                creating strategic windows of opportunity for emerging
                economies to upgrade their positions within the new global
                architecture.
              </p>

            </div>


            <div
              className="
                rounded-xl
                border
                border-amber-100
                bg-amber-50/50
                p-5
                sm:p-6
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                In this deeply fragmented landscape, traditional trade
                institutions are under immense strain. There is a pressing
                demand for “New Trade Governance”, innovative and adaptive
                regulatory frameworks capable of managing the complex nexus of
                national economic security, digital trade, and sustainable
                development. As nations navigate non-traditional protectionist
                barriers and strive to maximise the benefits of new-generation
                Free Trade Agreements (FTAs) like the CPTPP, EVFTA, and RCEP,
                formulating resilient institutional responses is critical to
                preventing a backslide into economic isolationism.
              </p>

            </div>


            <div
              className="
                rounded-xl
                border
                border-purple-100
                bg-purple-50/40
                p-5
                sm:p-6
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                Amidst these macroeconomic and geopolitical shifts, the
                micro-foundations of enterprise development – particularly
                family-owned firms and SMEs in emerging economies – play an
                indispensable role. As global markets face fragmentation and
                technological disruption, these enterprises remain central
                actors in driving innovation, employment creation, and
                long-term value generation. Therefore, understanding how family
                enterprises and entrepreneurial ventures balance continuity with
                structural transformation, through strategic governance and
                succession planning, is vital for holistic regional growth.
              </p>

            </div>


            <div
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-5
                sm:p-6
              "
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-8
                  text-gray-700
                  text-justify
                "
              >
                The joint international conference CIECI & ICFBE 2026 is
                convened to untangle this complex interdependence between
                macroeconomic integration and micro-level enterprise
                adaptability. By bringing together scholars, researchers,
                policymakers, and business leaders from around the globe, the
                conference aims to identify actionable strategies to reshape
                international economic integration, strengthen corporate
                resilience and forge pathways toward a more resilient,
                adaptive, and secure global economy in an era of profound
                transformation.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  ),
},

  /* =======================================================
     5. THEMES AND SUB-THEMES
     ======================================================= */
  {
    key: "5",
    label: "Conference Themes and Sub-themes",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <SectionHeading title="Conference Themes and Sub-themes" icon={<LuBookOpen size={19} />} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {ConferenceSessionsList.map((item, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <div className="px-5 py-4 bg-gradient-to-r from-red-50 to-white border-b border-red-100">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#d61c25] text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-gray-900 leading-6">{item.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-5">
                  {item.subtitles?.map((subtitle, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-semibold text-gray-900">{subtitle.title}</h4>
                      <div className="mt-2 space-y-2">
                        {subtitle.sessionsList?.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="flex items-start gap-2 text-sm leading-6 text-gray-600">
                            <GoDotFill className="flex-shrink-0 text-[9px] mt-2 text-[#d61c25]" />
                            <span>{session}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  /* =======================================================
     6. LOCATION
     ======================================================= */
  {
  key: "6",
  label: "Location",

  children: (
    <div className={pageCard}>

      <div className={sectionPadding}>

        <SectionHeading
          title="Location"
          icon={<LuMapPin size={19} />}
        />


        {/* =================================================
            LOCATION DETAILS
        ================================================= */}

        <div
          className="
            rounded-2xl
            overflow-hidden
            bg-gradient-to-br
            from-gray-950
            to-gray-800
            text-white
          "
        >

          {/* LOCATION INFORMATION */}

          <div className="p-6 sm:p-8">

            <div className="flex items-start gap-4">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <LuMapPin size={23} />
              </div>


              <div>

                <p
                  className="
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    leading-tight
                  "
                >
                  Hanoi, Vietnam
                </p>


                <p
                  className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-white/75
                    leading-7
                  "
                >
                  22nd October (Thursday) – 23rd October (Friday), 2026
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              LOCATION IMAGE
          ================================================= */}

          <div className="bg-white p-2 sm:p-3">

            <img
              src="/assets/images/CECI/location.JPG"
              alt="Conference Location - Hanoi, Vietnam"
              loading="lazy"
              className="
                w-full
                h-auto
                max-h-[500px]
                object-cover
                rounded-xl
              "
            />

          </div>

        </div>

      </div>

    </div>
  ),
},

  /* =======================================================
     7. IMPORTANT DATES
     ======================================================= */
  {
  key: "7",
  label: "Important Dates",

  children: (
    <div className={pageCard}>

      <div className={sectionPadding}>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-8">

          <SectionHeading
            title="Important Dates"
            icon={<LuCalendar size={19} />}
          />

        </div>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical timeline line */}

          <div
            className="
              absolute
              left-[23px]
              sm:left-[27px]
              top-5
              bottom-5
              w-px
              bg-gray-200
            "
          />


          <div className="space-y-5">

            {ImportantDateList.map((item, index) => (

              <div
                key={index}
                className="
                  relative
                  flex
                  items-start
                  gap-4
                  sm:gap-5
                "
              >

                {/* =================================================
                    TIMELINE DOT
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    flex-shrink-0
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-full
                    bg-white
                    border-4
                    border-[#d61c25]
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  "
                >

                  <LuCalendar
                    size={19}
                    className="text-[#d61c25] sm:hidden"
                  />

                  <LuCalendar
                    size={22}
                    className="text-[#d61c25] hidden sm:block"
                  />

                </div>


                {/* =================================================
                    DATE CARD
                ================================================= */}

                <div
                  className="
                    flex-1
                    min-w-0
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-4
                    sm:p-5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-md
                    hover:border-[#d61c25]/30
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-3
                    "
                  >

                    {/* EVENT TITLE */}

                    <div className="min-w-0">

                      <h3
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                          text-gray-900
                          leading-snug
                        "
                      >
                        {item.title}
                      </h3>

                    </div>


                    {/* STATUS */}

                    {item.status && (

                      <span
                        className="
                          self-start
                          sm:self-auto
                          inline-flex
                          items-center
                          rounded-full
                          bg-green-50
                          border
                          border-green-100
                          px-3
                          py-1
                          text-xs
                          font-semibold
                          text-green-700
                          whitespace-nowrap
                        "
                      >
                        {item.status}
                      </span>

                    )}

                  </div>


                  {/* =================================================
                      DATE
                  ================================================= */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-100
                      px-3
                      py-2.5
                      w-fit
                      max-w-full
                    "
                  >

                    <LuCalendar
                      size={16}
                      className="
                        flex-shrink-0
                        text-[#d61c25]
                      "
                    />


                    <span
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-gray-800
                        leading-snug
                      "
                    >
                      {item.date}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            SUBMISSION INFORMATION
        ================================================= */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-red-100
            bg-gradient-to-br
            from-red-50
            via-white
            to-gray-50
            p-5
            sm:p-6
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-5
            "
          >

            {/* LEFT */}

            <div className="flex items-start gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#d61c25]
                  text-white
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >

                <LuMail size={20} />

              </div>


              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-gray-500
                  "
                >
                  Submission Email
                </p>


                <p
                  className="
                    mt-1
                    text-sm
                    sm:text-base
                    font-bold
                    text-gray-900
                    break-all
                  "
                >
                  confab360degree@gmail.com
                </p>

              </div>

            </div>


            {/* SUBMISSION BUTTON */}

            <a
              href="https://www.conftool.net/cieci2026"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-[#d61c25]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#b91820]
                hover:shadow-md
                whitespace-nowrap
              "
            >
              Submit Your Paper
            </a>

          </div>

        </div>

      </div>

    </div>
  ),
},

  /* =======================================================
     8. SCIENTIFIC COMMITTEE INTERNATIONAL
     ======================================================= */
  {
    key: "8",
    label: "Scientific Committee (International)",
    children: <CommitteeList title="Scientific Committee (International)" items={SCIntlList} />,
  },

  /* =======================================================
     9. SCIENTIFIC COMMITTEE INDIA
     ======================================================= */
  {
    key: "9",
    label: "Scientific Committee (India)",
    children: <CommitteeList title="Scientific Committee (India)" items={InternationalAdvisoryList} />,
  },

  /* =======================================================
     15. EDITORIAL BOARD
     ======================================================= */
  {
    key: "15",
    label: "Editorial Board",
    children: <CommitteeList title="Editorial Board" items={ERList} />,
  },

  /* =======================================================
     11. PUBLICATION OUTLETS
     ======================================================= */
  {
    key: "11",
    label: "Publication Outlets",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <SectionHeading title="Publication Opportunities" icon={<LuBookOpen size={19} />} />

          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-3 sm:p-5">
            <Carousel
              autoplay
              autoplaySpeed={4000}
              dots
              arrows
              draggable
              slidesToScroll={1}
              slidesToShow={3}
              responsive={[
                { breakpoint: 1280, settings: { slidesToShow: 3 } },
                { breakpoint: 900, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ]}
            >
              {publicationsList.map((item, i) => (
                <div key={i} className="px-2 sm:px-3 py-3">
                  <div className="h-[300px] sm:h-[320px] rounded-2xl border border-gray-200 bg-white p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full h-[150px] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="max-w-[210px] max-h-[145px] w-auto h-auto object-contain"
                      />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-gray-900 leading-6">{item.title}</h3>
                    {item.para && <p className="mt-2 text-sm text-gray-600">{item.para}</p>}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-5 text-center">
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-bold text-[#d61c25]">Lecture Notes in Networks and Systems</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },

  /* =======================================================
     12. REGISTRATION FEES
     ======================================================= */
  {
  key: "12",
  label: "Registration Fees",

  children: (
    <div className={pageCard}>

      <div className={sectionPadding}>

        {/* =====================================================
            REGISTRATION FEES
        ===================================================== */}

        <section>

          <SectionHeading
            title="Registration Fees"
            icon={<LuTimer size={19} />}
          />


          {/* =================================================
              FEE CARD
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              via-white
              to-white
              shadow-sm
            "
          >

            {/* TOP ACCENT */}

            <div
              className="
                h-1.5
                w-full
                bg-gradient-to-r
                from-blue-600
                to-[#d61c25]
              "
            />


            <div className="p-5 sm:p-7">

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                "
              >

                {/* PARTICIPANT TYPE */}

                <div>

                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-blue-700
                    "
                  >
                    Registration Category
                  </span>


                  <h3
                    className="
                      mt-3
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-gray-900
                    "
                  >
                    Any Participant
                  </h3>

                </div>


                {/* FEE */}

                <div
                  className="
                    rounded-2xl
                    bg-white
                    border
                    border-blue-100
                    px-6
                    py-4
                    shadow-sm
                    md:min-w-[190px]
                    md:text-center
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Registration Fee
                  </p>


                  <p
                    className="
                      mt-1
                      text-2xl
                      sm:text-3xl
                      font-extrabold
                      text-[#d61c25]
                    "
                  >
                    USD 500/-
                  </p>

                </div>

              </div>


              {/* MODE */}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  border-t
                  border-blue-100
                  pt-5
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-600
                  "
                >

                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-green-500
                    "
                  />

                  Mode of Attendance

                </div>


                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    border
                    border-gray-200
                    px-4
                    py-1.5
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Offline
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            REGISTRATION FEE INCLUDES
        ===================================================== */}

        <section className="mt-10">

          <SectionHeading
            title="Registration Fee Includes"
            icon={<LuUserRound size={19} />}
          />


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
            "
          >

            {[
              "Two days of conference attendance",
              "Two-night stay",
              "Certificate of presentation",
              "Food at the conference venue",
              "Access to all the sessions",
              "Big networking with officials and academicians from more than ten universities across the world",
              "Publication in Springer Proceedings",
              "Photography and reports",
              "Social media coverage",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50/60
                  p-4
                  transition-all
                  duration-200
                  hover:bg-white
                  hover:border-gray-300
                  hover:shadow-sm
                "
              >

                <div
                  className="
                    mt-0.5
                    w-6
                    h-6
                    rounded-full
                    bg-green-100
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >

                  <span
                    className="
                      text-green-700
                      text-xs
                      font-bold
                    "
                  >
                    ✓
                  </span>

                </div>


                <p
                  className="
                    text-sm
                    md:text-base
                    leading-6
                    text-gray-700
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            PUBLICATION CHARGES NOTE
        ===================================================== */}

        <div
          className="
            mt-6
            rounded-xl
            border
            border-orange-200
            bg-orange-50
            p-4
            sm:p-5
          "
        >

          <div className="flex items-start gap-3">

            <div
              className="
                w-8
                h-8
                rounded-lg
                bg-orange-100
                flex
                items-center
                justify-center
                flex-shrink-0
                text-orange-700
                font-bold
              "
            >
              !
            </div>


            <p
              className="
                text-sm
                md:text-base
                leading-6
                text-orange-700
              "
            >

              <span className="font-bold">
                Note:
              </span>{" "}

              The publication charges for journal outlets are not included
              in registration fees.

            </p>

          </div>

        </div>


        {/* =====================================================
            BANK ACCOUNT DETAILS + PAYMENT
        ===================================================== */}

        <section className="mt-10">

          <SectionHeading
            title="Bank Account Details"
            icon={<BsBank size={19} />}
          />


          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.5fr_0.8fr]
              gap-5
            "
          >

            {/* =================================================
                BANK DETAILS
            ================================================= */}

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                overflow-hidden
                shadow-sm
              "
            >

              {/* CARD HEADER */}

              <div
                className="
                  bg-gradient-to-r
                  from-gray-50
                  to-white
                  border-b
                  border-gray-200
                  px-5
                  py-4
                "
              >

                <h3
                  className="
                    text-lg
                    font-bold
                    text-gray-900
                  "
                >
                  Bank Transfer Details
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-500
                  "
                >
                  Use the following details for bank transfer.
                </p>

              </div>


              {/* DETAILS */}

              <div className="p-5 sm:p-6 space-y-1">

                {/* BENEFICIARY */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Beneficiary Name
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      text-gray-900
                    "
                  >
                    CONFAB 360 DEGREE
                  </span>

                </div>


                {/* BANK NAME */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Bank Name
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base
                      text-gray-800
                    "
                  >
                    ICICI BANK, Mayapuri, Delhi, India
                  </span>

                </div>


                {/* ACCOUNT NUMBER */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Account Number
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      text-gray-900
                      break-all
                    "
                  >
                    925010035781364
                  </span>

                </div>


                {/* ACCOUNT TYPE */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Account Type
                  </span>

                  <span className="text-sm sm:text-base text-gray-800">
                    Current Account
                  </span>

                </div>


                {/* BRANCH */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    Branch
                  </span>

                  <span className="text-sm sm:text-base text-gray-800">
                    Mayapuri, Delhi, India
                  </span>

                </div>


                {/* IFSC */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                    border-b
                    border-gray-100
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    IFSC Code
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      text-gray-900
                    "
                  >
                    ICIC0001818
                  </span>

                </div>


                {/* SWIFT */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-start
                    gap-1
                    sm:gap-5
                    py-3
                  "
                >

                  <span
                    className="
                      sm:w-44
                      flex-shrink-0
                      text-sm
                      font-semibold
                      text-gray-500
                    "
                  >
                    SWIFT Code
                    <span className="block text-xs font-normal text-gray-400">
                      For International Payments
                    </span>
                  </span>

                  <span
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      text-gray-900
                    "
                  >
                    ICICINBBCTS
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                QR / UPI PAYMENT
            ================================================= */}

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gradient-to-br
                from-gray-50
                to-white
                p-5
                sm:p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-sm
              "
            >

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-red-50
                  flex
                  items-center
                  justify-center
                  mb-3
                "
              >

                
              </div>


              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                "
              >
                Scan or Click to Pay
              </h3>


              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                "
              >
                Secure online payment
              </p>


              {/* QR CODE */}

              <a
                href="https://razorpay.me/@confab360degree1628"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  block
                  group
                "
              >

                <div
                  className="
                    w-48
                    h-48
                    sm:w-52
                    sm:h-52
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:shadow-lg
                    group-hover:-translate-y-1
                  "
                >

                  <img
                    src="/assets/images/payment/payment.svg"
                    alt="Payment QR Code"
                    className="
                      w-full
                      h-full
                      object-contain
                      p-2
                    "
                  />

                </div>

              </a>


              <p
                className="
                  mt-4
                  text-xs
                  text-gray-500
                  max-w-xs
                  leading-5
                "
              >
                Click the QR code to open the payment page
                or scan using any UPI-enabled app.
              </p>

            </div>

          </div>

        </section>

      </div>

    </div>
  ),
},

  /* =======================================================
     13. CONTACT
     ======================================================= */
  {
    key: "13",
    label: "Contact Detail",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <SectionHeading title="Contact Detail" icon={<LuPhoneCall size={19} />} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 flex items-center justify-center">
              <img
                src="/assets/images/company/logo.webp"
                alt="Confab 360 Degree"
                className="w-full max-w-[300px] object-contain"
              />
            </div>
            <div className="space-y-4">
              {[
                [LuPhoneCall, "+91-9717688509"],
                [LuMail, "confab360degree@gmail.com"],
                [LuMapPin, "Delhi, Mumbai, India"],
              ].map(([Icon, text], i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#d61c25] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800 break-all">{text as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* =======================================================
     14. SUBMISSION GUIDELINES
     ======================================================= */
  {
    key: "14",
    label: "Submission Guidelines",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <SectionHeading title="Author Ethical Guidelines" icon={<LuBookOpen size={19} />} />

          <div className="space-y-4">
            {[
              ["General Formatting", "Use A4 paper size (210 mm x 297 mm). Margins: 1 inch (2.54 cm) on all sides. Font: Use a clear, readable font (e.g., Times New Roman or Arial) in 12-point size. Line Spacing: 1.5 or double-spaced throughout the text. Paragraphs: Indent the first line of each paragraph by 0.5 inches (1.27 cm)."],
              ["Abstract", "Provide a concise abstract (150-250 words) summarizing the main points of your paper. Keywords: List 3-5 relevant keywords after the abstract. The word limit should be between 3000-8000 words including referencing and abstract, tables, figures etc."],
              ["Figures and Tables", "Number figures and tables consecutively (e.g., Table 1, Figure 1). Include captions below figures and above tables. Ensure all figures and tables are referenced in the text."],
              ["Research Ethics Compliance", "Title of the paper: Centered, bold, and in title case. Author(s): Full names, affiliations, and email addresses. Acknowledgments: Include any funding sources or acknowledgments."],
              ["Main Body", "Use headings and subheadings to organize your content. Use numbered sections if required by the journal. Maintain clarity and coherence throughout the text."],
              ["References", "Use Harvard style for all citations and references."],
            ].map(([title, text], i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-gray-50/70 p-5">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#d61c25] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-base leading-7 text-gray-700">
                    <span className="font-bold text-gray-900">{title}: </span>{text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  /* =======================================================
     16. REVIEW PROCESS AND ETHICS
     ======================================================= */
  {
    key: "16",
    label: "Review process and ethic statements",
    children: (
      <div className={pageCard}>
        <div className={sectionPadding}>
          <SectionHeading title="Review Process and Ethics Statements" icon={<LuBookOpen size={19} />} />

          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Peer Review Process</h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-7 text-gray-700">
                <p>Each manuscript presented in the conference will undergo a <b>double-blind review</b> process.</p>
                <p>Initially, all manuscripts will be screened using <b>Turnitin</b> software. <span className="text-red-600 font-semibold">Plagiarism must be strictly less than 10%.</span></p>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-amber-800">First Round of Review</h3>
              <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700">Reviewers will evaluate the manuscript based on the following criteria:</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Literature review and theoretical framework",
                  "Contribution to the field",
                  "Research methodology (quantitative/qualitative)",
                  "Results and discussion",
                  "Alignment between objectives and conclusions",
                  "Formatting and overall structure",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                    <GoDotFill className="flex-shrink-0 text-[9px] mt-2 text-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm sm:text-base leading-7 text-gray-700">Reviewers will recommend one of the following outcomes: <b>Accept, Minor Revision, Major Revision,</b> or <b>Reject</b>.</p>
              <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700">Authors must revise the manuscript according to the reviewers’ comments before proceeding to the next stage.</p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50/60 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-green-800">Second Round of Review</h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-7 text-gray-700">
                <p>Editors and reviewers will verify whether all feedback from the first round has been adequately addressed. Based on this, the manuscript may be accepted or returned for further revision.</p>
                <p>The final version of the manuscript will again undergo plagiarism screening via Turnitin to confirm <span className="text-red-600 font-semibold">less than 10% similarity</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
