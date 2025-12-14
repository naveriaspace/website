import { motion } from 'framer-motion';
import { Layers, Unlock, Lock, GitBranch, Award } from 'lucide-react';

const Platform = () => {
    const layers = [
        {
            title: "Open Hardware Standard",
            tier: "OPEN",
            icon: <Unlock size={24} />,
            items: [
                "CubeSat form factors (1U, 3U, 6U)",
                "Electrical interface specifications",
                "Reference PCB schematics (CERN OHL)",
                "Standard connector definitions"
            ]
        },
        {
            title: "Open Software Stack",
            tier: "OPEN",
            icon: <GitBranch size={24} />,
            items: [
                "Real-time operating system core",
                "6-DOF attitude control (reference)",
                "Sensor abstraction layer",
                "SITL physics simulator",
                "HITL support (Hardware-In-The-Loop)"
            ]
        },
        {
            title: "Proprietary Software",
            tier: "COMMERCIAL",
            icon: <Lock size={24} />,
            items: [
                "Advanced ADCS algorithms",
                "Constellation manager",
                "Formation flying suite",
                "ML-based optimization"
            ]
        },
        {
            title: "Cloud Platform",
            tier: "SAAS",
            icon: <Layers size={24} />,
            items: [
                "Command Center (mission ops)",
                "Real-time telemetry",
                "Automated anomaly detection",
                "Analytics & trend prediction"
            ]
        }
    ];

    return (
        <section className="section" id="platform" style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(20,15,30,0.3) 100%)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>
                        The Naveria Standard
                    </h2>
                    <p style={{ color: '#a0a0b0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        A complete specification that any manufacturer or institution can build to. Creating an interoperable ecosystem where everyone benefits.
                    </p>
                </motion.div>

                {/* Architecture Layers - 2x2 Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    maxWidth: '1000px',
                    width: '100%',
                    margin: '0 auto 5rem auto'
                }}>
                    {layers.map((layer, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
                            style={{
                                borderTop: '3px solid rgba(255,255,255,0.15)',
                                position: 'relative',
                                padding: '2rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    padding: '0.75rem',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {layer.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        letterSpacing: '1.5px',
                                        color: '#a0a0b0',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {layer.tier}
                                    </div>
                                    <h3 style={{ fontWeight: 600, marginTop: '0' }}>{layer.title}</h3>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', color: '#b0b0c0', paddingLeft: 0 }}>
                                {layer.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <span style={{
                                            color: '#ffffff',
                                            marginTop: '0.25rem',
                                            fontSize: '1.2rem',
                                            lineHeight: '1',
                                            opacity: 0.6
                                        }}>•</span>
                                        <span style={{ lineHeight: '1.5' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platform;
