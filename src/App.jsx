import { Linkedin } from 'lucide-react';
import iitLogo from './assets/iit-kharagpur-seeklogo.png';
import emeLogo from './assets/Indian_EME_Insignia_transparent_trimmed.png';

const founders = [
  {
    name: 'Aman Kumar Singh',
    role: 'CEO & Founder',
    details: 'Aerospace Engineering, IIT Kharagpur • Batch of 2025',
    expertise: 'Autonomous Systems',
    email: 'aman@naveria.space',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-singh-01b489205/',
    photo: '/aman.avif',
  },
  {
    name: 'Ved Takte',
    role: 'CTO & Founder',
    details: 'Aerospace Engineering, IIT Kharagpur • Batch of 2028',
    expertise: 'Advanced UAV Systems',
    email: 'ved@naveria.space',
    linkedin: 'https://www.linkedin.com/in/ved-takte',
    photo: '/ved.avif',
  },
];

function App() {
  return (
    <main className="viewport">
      <div className="bg-grid" />
      <div className="bg-orbit" />
      <section className="window">
        <header className="topbar">
          <div className="brand">
            <span className="brand-text">
              <span>NAVERIA</span> <span className="brand-space">SPACE</span>
            </span>
          </div>
          <div className="top-right">
            <a className="btn btn-solid" href="https://cal.com/naveria.space" target="_blank" rel="noopener noreferrer">
              Schedule Call
            </a>
          </div>
        </header>

        <div className="window-content">
          <div className="left">
            <h1>
              <span className="hero-line">Building</span>
              <span className="hero-line">the Next Infrastructure</span>
              <span className="hero-line">for Aerospace</span>
            </h1>
            <p className="copy">
              Building interoperable infrastructure for reliable, autonomous aerospace missions.
            </p>
            <div className="actions">
              <a className="btn btn-solid" href="https://cal.com/naveria.space" target="_blank" rel="noopener noreferrer">
                Request Intro
              </a>
              <span className="quiet">Selective conversations only</span>
            </div>
          </div>

          <aside className="right">
            <div className="panel-head">
              <p className="panel-title">BACKED BY</p>
            </div>
            <div className="backing-card" aria-label="backed by EME Corps of Indian Army">
              <span className="cred-logo-shell eme-shell">
                <img src={emeLogo} alt="EME Corps of Indian Army" className="cred-logo eme-logo" />
              </span>
              <div className="backing-copy">
                <p>
                  <strong>EME CORPS OF</strong>
                  <strong>INDIAN ARMY</strong>
                </p>
              </div>
            </div>
          </aside>
        </div>
        <section className="founders-bottom" aria-label="Founders">
          <div className="panel-head founders-head">
            <div className="iit-footer">
              <span className="cred-logo-shell iit-shell">
                <img src={iitLogo} alt="IIT Kharagpur" className="cred-logo iit-logo" />
              </span>
              <span>Built by Minds from IIT Kharagpur</span>
            </div>
          </div>
          <div className="founders founders-bottom-grid">
            {founders.map((founder) => (
              <article className="founder-card" key={founder.name}>
                <img src={founder.photo} alt={founder.name} loading="lazy" />
                <div className="founder-meta">
                  <h2>{founder.name}</h2>
                  <p className="founder-role">{founder.role}</p>
                  <p className="founder-details">{founder.details}</p>
                  <div className="founder-badges">
                    <span className="founder-expertise">{founder.expertise}</span>
                  </div>
                  <div className="founder-socials">
                    <a className="founder-mail" href={`mailto:${founder.email}`}>
                      {founder.email}
                    </a>
                    <a className="founder-link" href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={14} strokeWidth={2.2} aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <footer className="site-footer">© 2026 Naveria Space Technologies Pvt Ltd</footer>
      </section>
    </main>
  );
}

export default App;
