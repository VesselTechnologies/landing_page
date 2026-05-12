const CONTACT_EMAIL = "marksoulier@vessel-technologies.com";

const capabilities = [
  {
    title: "Secure Digital Asset Exchange",
    description:
      "Curated library of standardized environments, robots, and policies stored in secure cloud infrastructure with role-based access control, managed onboarding, and large-file transfer support.",
    icon: "🔒",
  },
  {
    title: "Standardization & Reproducibility",
    description:
      "Unified asset representations using USD for environments and robots, with versioned model artifacts. Standardized APIs abstract implementation details across sensors, dynamics, kinematics, and I/O.",
    icon: "⚙️",
  },
  {
    title: "Containerized Evaluation",
    description:
      "Standardized evaluation pipelines execute via NVIDIA Omniverse (Isaac Sim, Isaac Lab). Containerized execution ensures consistency across performers with automated provisioning and teardown.",
    icon: "🧪",
  },
  {
    title: "Governance & Collaboration",
    description:
      "Performer-based organizational structure with delegated administrators, enforced role assignment and access control, storage quotas, and integration with DARPA and DoD research programs.",
    icon: "🏛️",
  },
];

const problems = [
  {
    title: "Fragmented Asset Exchange",
    description:
      "No centralized or secure marketplace for non-open-source assets. Transfers rely on manual processes, time-bound links, and informal coordination with insufficient access controls.",
  },
  {
    title: "Lack of Standardization",
    description:
      "Incompatible file formats, simulator versions, and configurations force each performer to independently convert assets. No standardized APIs for sensors, dynamics, kinematics, or I/O.",
  },
  {
    title: "No Authoritative Evaluation Framework",
    description:
      "Versioning of environments, robots, simulators, and scoring functions is not systematically enforced. Cross-performer benchmarking is slow, manual, or infeasible.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    period: "FY26",
    title: "Core Infrastructure",
    deliverable:
      "Secure multi-performer asset repository, access controls, and version-locked environment and robot asset exchange.",
    milestone: "Minimum 4 TIAMAT performer groups actively exchanging shared assets.",
  },
  {
    phase: "Phase 2",
    period: "FY27",
    title: "Standardization & Validation",
    deliverable:
      "Automated ingestion pipelines, standardized environment and robot validation, and policy compatibility checks.",
    milestone: "Four or more performers executing identical environments with reproducible results.",
  },
  {
    phase: "Phase 3",
    period: "FY28",
    title: "Authoritative Evaluation",
    deliverable:
      "Containerized evaluation, scoring, and audit-ready reporting across programs.",
    milestone: "Contingent on successful multi-performer reproducibility in Phase 2.",
  },
];

const partners = [
  "DARPA", "Stanford University", "Oregon State University",
  "University of Pennsylvania", "UC Berkeley", "University of Central Florida",
  "Florida International University", "University at Buffalo",
  "University of Maryland", "Johns Hopkins University", "GE Research",
  "University of Michigan", "SRI International", "UT Austin", "Duke University",
  "Army Research Laboratory (ARL)", "Naval Research Laboratory (NRL)",
  "NIST", "AFRL", "TRMC",
];

const naicsCodes = [
  { code: "541715", label: "R&D in Physical, Engineering & Life Sciences" },
  { code: "518210", label: "Computing Infrastructure & Web Hosting" },
  { code: "541512", label: "Computer Systems Design Services" },
];

const pscCodes = [
  { code: "R425", label: "Engineering/Technical Support" },
  { code: "7H20", label: "IT & Telecom: Platform" },
  { code: "7A20", label: "IT & Telecom: Application Development" },
  { code: "7J20", label: "IT & Telecom: Security & Compliance" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-cyan-400 rounded-full" />
            <span className="font-semibold tracking-wide text-slate-100">
              Vessel Technologies
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 border border-slate-700 rounded px-2 py-0.5">
              LLC
            </span>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-full px-5 py-2 hover:bg-cyan-400/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,200,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,200,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-44">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Physical Intelligence Asset Reuse Taskforce
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
                <span className="text-slate-100">Vessel</span>
                <br />
                <span className="text-slate-100">Technologies</span>
              </h1>

              <p className="text-xl sm:text-2xl text-cyan-400 font-light tracking-wide mb-8">
                Secure Infrastructure for Digital Model Exchange
              </p>

              <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-12">
                PI-ART provides the missing national backbone that allows
                physical-AI progress to compound instead of resetting each
                program cycle — enabling repeatable, secure, and
                program-office-controlled evaluation of autonomy systems across
                performers and programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition-colors"
                >
                  Request Information
                  <span>→</span>
                </a>
                <a
                  href="#pi-art"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-8 py-3.5 text-sm font-medium text-slate-300 hover:border-slate-500 hover:text-slate-100 transition-colors"
                >
                  Learn About PI-ART
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Bar */}
        <section className="border-b border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-500">
              <span>
                <span className="text-slate-400 font-medium">UEI:</span>{" "}
                Q59ZG6AJ8UK9
              </span>
              <span>
                <span className="text-slate-400 font-medium">CAGE:</span>{" "}
                18F96
              </span>
              <span>
                <span className="text-slate-400 font-medium">Location:</span>{" "}
                Pleasant View, Utah 84414
              </span>
              <span>
                <span className="text-slate-400 font-medium">Phone:</span>{" "}
                970-988-0453
              </span>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="border-b border-slate-800 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              The Problem
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-slate-100">
              Physical-AI Progress Resets Every Program Cycle
            </h2>
            <p className="mb-16 max-w-3xl text-slate-400 text-lg leading-relaxed">
              DARPA and DoD programs spend tens of millions generating
              environments, USD models, and simulation infrastructure — then
              trained models are not preserved in an executable, reusable form.
              Subsequent programs are forced to start from zero.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-7 hover:border-slate-700 transition-colors"
                >
                  <div className="mb-3 h-0.5 w-10 bg-red-500/60 rounded" />
                  <h3 className="mb-3 font-semibold text-slate-100 text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PI-ART Explainer */}
        <section id="pi-art" className="border-b border-slate-800 py-24 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              The Solution
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-slate-100">
              PI-ART in Plain Language
            </h2>
            <p className="mb-16 max-w-3xl text-slate-400 text-lg leading-relaxed">
              PI-ART answers one critical question:{" "}
              <em className="text-slate-200 not-italic font-medium">
                &ldquo;Can this robot perform this task in this environment?&rdquo;
              </em>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Asset Types */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
                  Three Core Asset Types
                </h3>
                {[
                  {
                    label: "Environments",
                    desc: "Digital representations of the physical world — terrain, buildings, obstacles, weather",
                    color: "bg-violet-400",
                  },
                  {
                    label: "Robots",
                    desc: "Models of robotic platforms including sensors, actuators, and physical constraints",
                    color: "bg-cyan-400",
                  },
                  {
                    label: "Tasks",
                    desc: "Definitions of what the robot must do — navigate, manipulate, complete mission objectives",
                    color: "bg-emerald-400",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5"
                  >
                    <div className={`mt-1 h-3 w-3 rounded-full shrink-0 ${item.color}`} />
                    <div>
                      <div className="font-semibold text-slate-200 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How it works */}
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-950/20 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-8">
                  Evaluation Pipeline
                </h3>
                <ol className="space-y-6">
                  {[
                    "Select one environment, one robot, and one task from the secure library to define a test scenario",
                    "A performer submits an autonomy solution (foundational or learned policy) claiming to solve that scenario",
                    "PI-ART executes a standardized pipeline — containerized simulation via NVIDIA Omniverse, measuring performance with consistent metrics",
                    "Results, logs, and artifacts are stored with version-locked assets ensuring evaluations are comparable, repeatable, and trustworthy across performers",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 text-xs font-bold text-cyan-400">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-300 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-b border-slate-800 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Platform Capabilities
            </div>
            <h2 className="mb-16 text-3xl sm:text-4xl font-bold text-slate-100">
              What Vessel Technologies Delivers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-xl border border-slate-800 bg-slate-900/60 p-8 hover:border-cyan-400/30 hover:bg-slate-900/80 transition-all"
                >
                  <div className="mb-4 text-2xl">{cap.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="border-b border-slate-800 py-24 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Technical Architecture
            </div>
            <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-slate-100">
              Built on AWS, NVIDIA, and DoD Standards
            </h2>
            <p className="mb-12 max-w-3xl text-slate-400 text-lg leading-relaxed">
              Deployed on AWS Cloud with secure authentication, authorization,
              asset upload, versioning, and controlled download. Evaluation
              workflows execute within Docker containers running NVIDIA Omniverse
              tools — producing traceable logs, metrics, and artifacts aligned
              with DoD T&E expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { metric: "Transition Readiness", desc: "% of trained policies remaining executable after program closeout" },
                { metric: "Time to Reuse", desc: "Reduction in time for new performers to run existing models on validated environments" },
                { metric: "Evaluation Disputes", desc: "Eliminated through version-locked assets and standardized pipelines" },
                { metric: "Asset Persistence", desc: "% of program-funded environments, robots, and models retained for transition" },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div className="mb-3 h-0.5 w-8 bg-cyan-400/50 rounded" />
                  <div className="font-semibold text-slate-200 mb-2 text-sm">
                    {item.metric}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="border-b border-slate-800 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Proposed Execution
            </div>
            <h2 className="mb-16 text-3xl sm:text-4xl font-bold text-slate-100">
              Three-Phase Roadmap
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {phases.map((p, i) => (
                <div
                  key={p.phase}
                  className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-8"
                >
                  <div className="absolute top-6 right-6 text-xs font-mono text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {p.phase} · {p.period}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-100">
                    {p.title}
                  </h3>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Deliverable
                  </div>
                  <p className="mb-5 text-sm text-slate-400 leading-relaxed">
                    {p.deliverable}
                  </p>
                  <div className="rounded-lg bg-slate-800/60 p-4 text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-300">Success Milestone: </span>
                    {p.milestone}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Partners */}
        <section className="border-b border-slate-800 py-24 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Collaboration & Integration
            </div>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-slate-100">
              Government & Academic Partners
            </h2>
            <p className="mb-12 max-w-2xl text-slate-400 text-lg leading-relaxed">
              Designed for integration with DARPA TIAMAT and adjacent programs
              across DoD, national labs, and leading research universities.
            </p>

            <div className="flex flex-wrap gap-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 hover:border-slate-600 hover:text-slate-100 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* NAICS / PSC */}
        <section className="border-b border-slate-800 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  NAICS Codes
                </div>
                <ul className="space-y-3">
                  {naicsCodes.map((n) => (
                    <li key={n.code} className="flex items-start gap-4 text-sm">
                      <span className="font-mono text-cyan-400 shrink-0">{n.code}</span>
                      <span className="text-slate-400">{n.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  PSC Codes
                </div>
                <ul className="space-y-3">
                  {pscCodes.map((p) => (
                    <li key={p.code} className="flex items-start gap-4 text-sm">
                      <span className="font-mono text-cyan-400 shrink-0">{p.code}</span>
                      <span className="text-slate-400">{p.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Get In Touch
            </div>
            <h2 className="mb-6 text-4xl sm:text-5xl font-bold text-slate-100">
              Ready to Learn More?
            </h2>
            <p className="mb-12 mx-auto max-w-xl text-lg text-slate-400 leading-relaxed">
              Whether you are a government program office, DoD research laboratory,
              or industry partner — reach out directly to discuss how PI-ART
              can support your program.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-10 py-4 text-base font-semibold text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              {CONTACT_EMAIL}
              <span className="text-lg">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
            <div>
              <div className="font-semibold text-slate-400 mb-1">
                Vessel Technologies, LLC
              </div>
              <div>4165 North 300 West, Pleasant View, Utah 84414</div>
              <div>970-988-0453</div>
            </div>
            <div className="text-right">
              <div>UEI: Q59ZG6AJ8UK9</div>
              <div>CAGE: 18F96</div>
              <div className="mt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-600">
            © {new Date().getFullYear()} Vessel Technologies, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
