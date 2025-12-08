import SpaceBackground from './components/SpaceBackground';
import Hero from './components/Hero';
import Services from './components/Services';
import ProblemSolution from './components/ProblemSolution';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProblemSolution />

        <section className="section" id="contact" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div className="container">
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
              <h2 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Launch?</h2>
              <p style={{ fontSize: '1.2rem', color: '#a0a0b0', marginBottom: '3rem' }}>
                Join the next generation of space companies building on <span style={{ fontFamily: 'Radnika Next, sans-serif', fontWeight: 700 }}>naveria space</span>.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://cal.com/naveria.space" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-primary">Schedule Demo</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 10 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
            <div style={{ fontWeight: 600, fontFamily: 'Radnika Next, sans-serif' }}>naveria.space</div>
            <div>© 2025 <span style={{ fontFamily: 'Radnika Next, sans-serif', fontWeight: 700 }}>naveria space</span>. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
