import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Globe, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={{ justifyContent: 'center', alignItems: 'flex-start', textAlign: 'left', minHeight: '100vh', paddingTop: '0' }}>
            <div className="container" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ maxWidth: '600px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <h1 className="text-gradient" style={{ marginBottom: '1.5rem' }}>
                            The Operating System <br />
                            for Space
                        </h1>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#e0e0e0', marginBottom: '2.5rem', fontFamily: 'Inter, sans-serif', lineHeight: '1.4' }}>
                            Enterprise flight control with shipped SITL simulation and full HITL support
                        </h2>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <button className="btn btn-primary">
                                Request Demo
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
