import { motion } from 'framer-motion';
import { Layers, Unlock, Lock, Users, GitBranch, Award } from 'lucide-react';

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
                "SITL physics simulator"
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
                    <p style={{ fontSize: '1.2rem', color: '#a0a0b0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        A complete specification that any manufacturer or institution can build to. Creating an interoperable ecosystem where everyone benefits.
                    </p>
                </motion.div>

                {/* Architecture Layers - 2x2 Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem',
                    marginBottom: '5rem',
                    maxWidth: '1000px',
                    margin: '0 auto 5rem'
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
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '0' }}>{layer.title}</h3>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.95rem', color: '#b0b0c0', paddingLeft: 0 }}>
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

                {/* Ecosystem Benefits */}
                <motion.div
                    className="glass-panel"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Users size={32} color="#ffffff" />
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Open Ecosystem, Proprietary Value</h3>
                            <p style={{ color: '#a0a0b0', fontSize: '0.95rem' }}>The best of both worlds</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem', fontSize: '1rem' }}>For the Community</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#b0b0c0' }}>
                                <li>✓ Zero cost to build satellites</li>
                                <li>✓ Full interoperability</li>
                                <li>✓ Access to cutting-edge RTOS</li>
                                <li>✓ Educational use without restrictions</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem', fontSize: '1rem' }}>For Commercial Operators</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#b0b0c0' }}>
                                <li>✓ Advanced ADCS algorithms</li>
                                <li>✓ Constellation management</li>
                                <li>✓ Cloud mission operations</li>
                                <li>✓ Professional services & support</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem', fontSize: '1rem' }}>For Manufacturers</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#b0b0c0' }}>
                                <li>✓ Build compatible hardware</li>
                                <li>✓ Certification program</li>
                                <li>✓ Technical support</li>
                                <li>✓ Revenue sharing opportunities</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '3rem',
                    marginTop: '5rem',
                    maxWidth: '800px',
                    margin: '5rem auto 0'
                }}>
                    {[
                        { value: "$22B", label: "Small satellite market by 2035" },
                        { value: "500+", label: "Target institutions globally" },
                        { value: "12.7%", label: "Market CAGR" },
                        { value: "Open", label: "Standard, proprietary value" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                borderRadius: '16px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <div className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '0.75rem', lineHeight: '1' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: '#a0a0b0', fontSize: '0.95rem', lineHeight: '1.4' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Platform;
