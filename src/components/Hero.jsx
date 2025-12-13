import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Globe, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={{ justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left', minHeight: '100vh', paddingTop: '0' }}>
            <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ maxWidth: '700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <h1 className="text-gradient" style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
                            Standardizing <br />
                            Satellite Ecosystem
                        </h1>

                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#b0b0c0', marginBottom: '3rem', lineHeight: '1.7', maxWidth: '600px' }}>
                            An open satellite flight system standard that enables interoperability across hardware, software, and mission operations.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="https://cal.com/naveria.space" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                                    Schedule Demo
                                </button>
                            </a>
                            <a href="#platform" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-secondary" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', fontSize: '1rem' }}>
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
