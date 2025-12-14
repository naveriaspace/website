import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Cpu, Activity } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="section" id="simulation">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>

                    {/* SITL Section */}
                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>
                            <Activity size={24} />
                            <span style={{ fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem' }}>SITL ENVIRONMENT • SHIPPED</span>
                            <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.2)' }}></div>
                            </div>
                        </div>
                        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>
                            Validate Before Launch
                        </h2>
                        <p style={{ color: '#a0a0b0', marginBottom: '2rem', lineHeight: '1.6', flexGrow: 1 }}>
                            Our Software-In-The-Loop simulation is production-ready and shipped. Test your exact flight code in a physics-accurate virtual environment. Inject failures, simulate sensor noise, and validate GNC algorithms, all before touching hardware.
                        </p>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            {[
                                "Physics-accurate orbital mechanics",
                                "Sensor noise models & failure injection",
                                "Faster-than-realtime simulation",
                                "Integration with analysis tools"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={16} color="#ffffff" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', textDecoration: 'none', fontWeight: 600, marginTop: 'auto' }}>
                            Explore Simulation <ArrowRight size={18} />
                        </a>
                    </motion.div>

                    {/* HITL Section */}
                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>
                            <Cpu size={24} />
                            <span style={{ fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem' }}>HITL SUPPORT • READY</span>
                        </div>
                        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>
                            Hardware-In-The-Loop
                        </h2>
                        <p style={{ color: '#a0a0b0', marginBottom: '2rem', lineHeight: '1.6', flexGrow: 1 }}>
                            Full Hardware-In-The-Loop support is built-in. Bridge simulation and reality by connecting your flight computer directly to our physics engine. Validate timing constraints, I/O behavior, and processor loads before flight.
                        </p>

                        {/* Placeholder for HITL specific features or just spacing to match */}
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3, minHeight: '150px' }}>
                            <Cpu size={64} color="#ffffff" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
