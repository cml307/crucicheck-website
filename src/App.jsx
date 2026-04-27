import React, { useState } from "react";
import "./styles.css";

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
    <main>
      <header className="header">
        <nav className="nav">
          <button onClick={() => setPage("home")} className="brand">
            <div className="brandIcon">✓</div>
            <div>
              <h1>CruciCheck</h1>
              <p>Precision Testing, Right on the Sideline</p>
            </div>
          </button>

          <div className="navLinks">
            {nav.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={page === key ? "navButton active" : "navButton"}
              >
                {label}
              </button>
            ))}
          </div>

          <button onClick={() => setPage("schedule")} className="primarySmall">
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
    <section className="hero">
      <div className="heroGrid">
        <div>
          <p className="pill">Protecting Those Who Strive for Greatness.</p>
          <h2>Have you ever had a <span>knee injury?</span></h2>
          <p className="subhead">You can still walk on it. But is it really healthy?</p>
          <p className="bodyText">
            Torn ACLs and microtears can go unnoticed until the damage gets worse. CruciCheck gives athletes a quick, objective, sideline-ready knee health screen.
          </p>
          <div className="buttonRow">
            <button onClick={() => setPage("schedule")} className="primaryButton">Get Tested Today →</button>
            <button onClick={() => setPage("works")} className="secondaryButton">See How It Works</button>
          </div>
        </div>

        <div className="devicePanel">
          <div className="deviceCard">
            <div className="circleOne" />
            <div className="circleTwo" />
            <div className="deviceContent">
              <div className="deviceLabel">Sideline ACL Screening</div>
              <div className="kneeIcon">🦵</div>
              <div>
                <p className="deviceTitle">Know before it gets worse.</p>
                <p className="deviceText">Designed for athletes, trainers, and fast decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="statGrid three">
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
      <div className="twoGrid">
        <InfoCard title="The problem with ACL injuries">
          ACL tears are common in athletes and can happen during pivoting, cutting, landing, or sudden direction changes. A major concern is that an athlete may still be able to walk after an ACL tear, which can make the injury seem less serious than it is.
        </InfoCard>
        <InfoCard title="Why quick testing matters">
          Delayed evaluation can increase the chance of returning to play too early or worsening the injury. CruciCheck is designed to help provide objective information quickly, right where the injury happens.
        </InfoCard>
      </div>

      <div className="statGrid four">
        <Stat value="400,000+" label="total ACL injuries in the U.S." />
        <Stat value="200,000+" label="ACL injuries affecting athletes" />
        <Stat value="$2B+" label="yearly costs associated with ACL tears" />
        <Stat value="$6B–$8B" label="global diagnostic market opportunity" />
      </div>

      <div className="highlightBox">
        <h3>CruciCheck validation highlights</h3>
        <div className="miniGrid">
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
      <div className="stepGrid">
        <Step number="1" title="Collect Info" text="The tester records the subject’s name, injury history, and BMI." />
        <Step number="2" title="Position Knee" text="The knee is placed at approximately 30° of flexion to replicate Lachman positioning." />
        <Step number="3" title="Apply Force" text="A controlled mechanical input is applied using the device system." />
        <Step number="4" title="Measure Response" text="A load cell measures resisting force at about 3 Hz to support objective comparison." />
      </div>

      <div className="twoGrid extraTop">
        <InfoCard title="External device features">
          <FeatureList items={["Knee strap for stabilization", "LCD screen for user feedback", "Tactile buttons for simple operation", "Foam padding for comfort", "Support structure for consistent positioning"]} />
        </InfoCard>
        <InfoCard title="Internal system components">
          <FeatureList items={["Linear actuator", "Power supply", "Load cell amplifier", "Motor driver", "Microcontroller"]} />
        </InfoCard>
      </div>

      <div className="darkCallout">
        <h3>What makes CruciCheck different?</h3>
        <p>
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
      <div className="teamGrid">
        {founders.map(([name, concentration, role, initials]) => (
          <div key={name} className="teamCard">
            <div className="avatar">{initials}</div>
            <h3>{name}</h3>
            <p>{concentration}</p>
            <span>{role}</span>
          </div>
        ))}
      </div>

      <div className="advisorSection">
        <h3>Our Advisors</h3>
        <div className="advisorGrid">
          {advisors.map(([name, title]) => (
            <div key={name} className="advisorCard">
              <h4>{name}</h4>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="roadBox">
        <h3>Road to Market</h3>
        <div className="roadGrid">
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
      <div className="scheduleGrid">
        <div className="scheduleInfo">
          <h3>Take control of your knee health.</h3>
          <p>
            Choose a testing date and share what happened to your knee. This helps the team understand your injury history before your CruciCheck screening.
          </p>
          <div className="checkList">
            <p>✓ Quick and non-invasive</p>
            <p>✓ Athlete-focused screening</p>
            <p>✓ Designed for objective force measurement</p>
          </div>
        </div>

        <form className="formCard">
          <div className="formGrid">
            <Field label="First Name" type="text" placeholder="Enter first name" />
            <Field label="Last Name" type="text" placeholder="Enter last name" />
            <Field label="Email" type="email" placeholder="name@email.com" />
            <Field label="Sport / Activity" type="text" placeholder="Soccer, football, running..." />
            <Field label="Preferred Date" type="date" />
            <Field label="Preferred Time" type="time" />
          </div>

          <label className="field full">
            <span>Tell us about your knee injury</span>
            <textarea placeholder="When did it happen? Which knee? Did you hear a pop? Can you walk? Any swelling or pain?" />
          </label>

          <label className="field full">
            <span>Current symptoms</span>
            <select>
              <option>Select one</option>
              <option>Pain only</option>
              <option>Swelling</option>
              <option>Instability / giving out</option>
              <option>Heard or felt a pop</option>
              <option>Unsure</option>
            </select>
          </label>

          <button type="button" className="requestButton">Request Appointment</button>
          <p className="formNote">This form is a website mockup and can later be connected to email, Google Calendar, or a database.</p>
        </form>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <section className="pageShell">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="pageContent">{children}</div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="statCard">
      <p>{value}</p>
      <span>{label}</span>
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="miniStat">
      <p>{value}</p>
      <span>{label}</span>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function FeatureList({ items }) {
  return (
    <ul className="featureList">
      {items.map((item) => (
        <li key={item}>✓ {item}</li>
      ))}
    </ul>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="stepCard">
      <div>{number}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Road({ title, text }) {
  return (
    <div className="roadCard">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

function Field({ label, type, placeholder = "" }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} />
    </label>
  );
}
