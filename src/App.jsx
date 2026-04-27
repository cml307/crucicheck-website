import React, { useState } from "react";

export default function CruciCheckWebsite() {
  const [page, setPage] = useState("home");

  const nav = [
    ["home", "Home"],
    ["acl", "ACL History + Stats"],
    ["works", "How It Works"],
    ["team", "Team"],
    ["schedule", "Get Tested"],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-2xl font-black text-white shadow">✓</div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-blue-800">CruciCheck</h1>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Precision Testing, Right on the Sideline</p>
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {nav.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${page === key ? "bg-blue-700 text-white" : "text-slate-600 hover:bg-blue-50 hover:text-blue-800"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <button onClick={() => setPage("schedule")} className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow hover:bg-blue-800">
            Test Today
          </button>
        </nav>
      </header>

      {page === "home" && <Home setPage={setPage} />}
      {page === "acl" && <ACLStats />}
      {page === "works" && <HowItWorks />}
      {page === "team" && <Team />}
      {page === "schedule" && <Schedule />}
    </main>
  );
}

function Home({ setPage }) {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold italic text-white shadow-md">
            Protecting Those Who Strive for Greatness.
          </p>
          <h2 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Have you ever had a <span className="text-blue-700">knee injury?</span>
          </h2>
          <p className="mt-6 max-w-xl text-xl font-semibold text-slate-700">
            You can still walk on it. But is it really healthy?
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Torn ACLs and microtears can go unnoticed until the damage gets worse. CruciCheck gives athletes a quick, objective, sideline-ready knee health screen.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={() => setPage("schedule")} className="rounded-full bg-blue-700 px-8 py-4 font-bold text-white shadow-lg hover:bg-blue-800">
              Get Tested Today →
            </button>
            <button onClick={() => setPage("works")} className="rounded-full border-2 border-blue-700 px-8 py-4 font-bold text-blue-800 hover:bg-blue-50">
              See How It Works
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-blue-900 p-8 shadow-2xl">
          <div className="relative mx-auto aspect-[4/5] max-w-md rounded-[2rem] bg-slate-900 p-8 text-white shadow-inner">
            <div className="absolute inset-8 rounded-full border border-blue-400/30" />
            <div className="absolute inset-16 rounded-full border border-blue-400/20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="text-right text-sm font-bold uppercase tracking-widest text-blue-200">Sideline ACL Screening</div>
              <div className="mx-auto flex h-44 w-28 items-center justify-center rounded-full bg-gradient-to-b from-blue-500/30 to-orange-400/40 text-7xl shadow-[0_0_70px_rgba(37,99,235,0.6)]">🦵</div>
              <div>
                <p className="text-3xl font-black">Know before it gets worse.</p>
                <p className="mt-3 text-blue-100">Designed for athletes, trainers, and fast decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 px-6 pb-16 md:grid-cols-3">
        <Stat value="400,000+" label="ACL injuries annually in the U.S." />
        <Stat value="200,000+" label="ACL injuries affecting athletes in the U.S." />
        <Stat value="$6B–$8B" label="global diagnostic market opportunity" />
      </div>
    </section>
  );
}

function ACLStats() {
  return (
    <PageShell eyebrow="ACL History + Stats" title="Why ACL evaluation matters.">
      <div className="grid gap-8 lg:grid-cols-2">
        <InfoCard title="The problem with ACL injuries">
          ACL tears are common in athletes and can happen during pivoting, cutting, landing, or sudden direction changes. A major concern is that an athlete may still be able to walk after an ACL tear, which can make the injury seem less serious than it is.
        </InfoCard>
        <InfoCard title="Why quick testing matters">
          Delayed evaluation can increase the chance of returning to play too early or worsening the injury. CruciCheck is designed to help provide objective information quickly, right where the injury happens.
        </InfoCard>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-4">
        <Stat value="400,000+" label="total ACL injuries in the U.S." />
        <Stat value="200,000+" label="ACL injuries affecting athletes" />
        <Stat value="$2B+" label="yearly costs associated with ACL tears" />
        <Stat value="$6B–$8B" label="global diagnostic market opportunity" />
      </div>

      <div className="mt-10 rounded-[2rem] bg-blue-50 p-8">
        <h3 className="text-3xl font-black">CruciCheck validation highlights</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MiniStat value="23" label="healthy volunteers tested" />
          <MiniStat value="7.62 kg" label="healthy knee baseline" />
          <MiniStat value="5.76%" label="device repeatability" />
          <MiniStat value="0.999" label="load cell calibration R²" />
          <MiniStat value="p = 0.007" label="BMI-force correlation" />
          <MiniStat value="99%" label="reported no pain" />
        </div>
      </div>
    </PageShell>
  );
}

function HowItWorks() {
  return (
    <PageShell eyebrow="How It Works" title="Objective ACL screening in a simple testing flow.">
      <div className="grid gap-6 md:grid-cols-4">
        <Step number="1" title="Collect Info" text="The tester records the subject’s name, injury history, and BMI." />
        <Step number="2" title="Position Knee" text="The knee is placed at approximately 30° of flexion to replicate Lachman positioning." />
        <Step number="3" title="Apply Force" text="A controlled mechanical input is applied using the device system." />
        <Step number="4" title="Measure Response" text="A load cell measures resisting force at about 3 Hz to support objective comparison." />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <InfoCard title="External device features">
          <FeatureList items={["Knee strap for stabilization", "LCD screen for user feedback", "Tactile buttons for simple operation", "Foam padding for comfort", "Support structure for consistent positioning"]} />
        </InfoCard>
        <InfoCard title="Internal system components">
          <FeatureList items={["Linear actuator", "Power supply", "Load cell amplifier", "Motor driver", "Microcontroller"]} />
        </InfoCard>
      </div>

      <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl">
        <h3 className="text-3xl font-black">What makes CruciCheck different?</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
          The Lachman test is the current gold-standard physical exam for ACL evaluation, but it can be subjective and examiner-dependent. CruciCheck uses controlled mechanical input and quantitative force data to make sideline screening more repeatable and objective.
        </p>
      </div>
    </PageShell>
  );
}

function Team() {
  const founders = [
    ["Christine Lara", "Biomedical Engineering, Tissue Concentration", "Co-Founder", "CL"],
    ["Nicholas Lamadriz", "Biomedical Engineering, Mechanical Concentration", "Co-Founder", "NL"],
    ["Camila Arias", "Biomedical Engineering, Mechanical Concentration", "Co-Founder", "CA"],
  ];

  const advisors = [
    ["Dr. Suhrud Rajguru", "Professor, Biomedical Engineering and Otolaryngology"],
    ["Dr. Elizabeth Gallardo-Hevia", "Adjunct Professor, University of Miami"],
    ["Dr. Jorge Bohorquez", "Professor, Biomedical Engineering"],
  ];

  return (
    <PageShell eyebrow="Our Team" title="Created by University of Miami biomedical engineers.">
      <div className="grid gap-6 md:grid-cols-3">
        {founders.map(([name, concentration, role, initials]) => (
          <div key={name} className="rounded-[2rem] bg-white p-6 text-center shadow-lg ring-1 ring-blue-100">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-slate-950 text-4xl font-black text-white shadow-lg">{initials}</div>
            <h3 className="mt-5 text-2xl font-black">{name}</h3>
            <p className="mt-2 text-slate-600">{concentration}</p>
            <p className="mt-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-800">{role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] bg-slate-50 p-8">
        <h3 className="text-3xl font-black">Our Advisors</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {advisors.map(([name, title]) => (
            <div key={name} className="rounded-3xl bg-white p-6 shadow-md">
              <h4 className="text-xl font-black text-blue-800">{name}</h4>
              <p className="mt-2 leading-7 text-slate-600">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[2rem] bg-blue-800 p-8 text-white">
        <h3 className="text-3xl font-black">Road to Market</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Road title="Optimize Device Design" text="Improve device design and user interface for easier testing." />
          <Road title="Preclinical Testing" text="Continue testing to build stronger validation data." />
          <Road title="FDA Preparation" text="Begin preparation for the regulatory pathway." />
        </div>
      </div>
    </PageShell>
  );
}

function Schedule() {
  return (
    <PageShell eyebrow="Get Tested Today" title="Schedule a CruciCheck appointment.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl">
          <h3 className="text-3xl font-black">Take control of your knee health.</h3>
          <p className="mt-4 leading-8 text-blue-100">
            Choose a testing date and share what happened to your knee. This helps the team understand your injury history before your CruciCheck screening.
          </p>
          <div className="mt-8 space-y-4 text-blue-50">
            <p>✓ Quick and non-invasive</p>
            <p>✓ Athlete-focused screening</p>
            <p>✓ Designed for objective force measurement</p>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-blue-100">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="First Name" type="text" placeholder="Enter first name" />
            <Field label="Last Name" type="text" placeholder="Enter last name" />
            <Field label="Email" type="email" placeholder="name@email.com" />
            <Field label="Sport / Activity" type="text" placeholder="Soccer, football, running..." />
            <Field label="Preferred Date" type="date" />
            <Field label="Preferred Time" type="time" />
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block font-bold text-slate-700">Tell us about your knee injury</span>
            <textarea className="min-h-36 w-full rounded-2xl border border-slate-200 p-4 outline-none ring-blue-200 focus:ring-4" placeholder="When did it happen? Which knee? Did you hear a pop? Can you walk? Any swelling or pain?" />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block font-bold text-slate-700">Current symptoms</span>
            <select className="w-full rounded-2xl border border-slate-200 p-4 outline-none ring-blue-200 focus:ring-4">
              <option>Select one</option>
              <option>Pain only</option>
              <option>Swelling</option>
              <option>Instability / giving out</option>
              <option>Heard or felt a pop</option>
              <option>Unsure</option>
            </select>
          </label>

          <button type="button" className="mt-8 w-full rounded-full bg-blue-700 px-8 py-4 text-lg font-black text-white shadow-lg hover:bg-blue-800">
            Request Appointment
          </button>
          <p className="mt-4 text-center text-sm text-slate-500">This form is a website mockup and can later be connected to email, Google Calendar, or a database.</p>
        </form>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="font-black uppercase tracking-widest text-blue-700">{eyebrow}</p>
      <h2 className="mt-3 max-w-4xl text-5xl font-black tracking-tight text-slate-950">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-lg ring-1 ring-blue-100">
      <p className="text-4xl font-black text-blue-700">{value}</p>
      <p className="mt-2 font-semibold text-slate-600">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <p className="text-2xl font-black text-blue-700">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-blue-100">
      <h3 className="text-2xl font-black text-slate-950">{title}</h3>
      <div className="mt-4 text-lg leading-8 text-slate-600">{children}</div>
    </div>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="mt-5 space-y-3 text-left text-slate-700">
      {items.map((item) => (
        <li key={item} className="font-semibold">✓ {item}</li>
      ))}
    </ul>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">{number}</div>
      <h4 className="text-xl font-black">{title}</h4>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Road({ title, text }) {
  return (
    <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
      <h4 className="text-xl font-black">{title}</h4>
      <p className="mt-2 leading-7 text-blue-100">{text}</p>
    </div>
  );
}

function Field({ label, type, placeholder = "" }) {
  return (
    <label className="block">
      <span className="mb-2 block font-bold text-slate-700">{label}</span>
      <input type={type} placeholder={placeholder} className="w-full rounded-2xl border border-slate-200 p-4 outline-none ring-blue-200 focus:ring-4" />
    </label>
  );
}
