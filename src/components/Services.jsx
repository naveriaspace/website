
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Factory, Rocket, Users, Globe } from 'lucide-react';

const segments = [
    {
        icon: <GraduationCap size={32} color="#ffffff" />,
        title: "Educational Institutions",
        description: "Free access to the complete standard. Build satellites with open-source hardware designs and flight software. 500+ universities globally by Year 3.",
        highlight: "Free & Open"
    },
    {
        icon: <Building2 size={32} color="#ffffff" />,
        title: "Commercial Operators",
        description: "Advanced ADCS, constellation management, and cloud mission operations. Professional-grade tools for smallsat startups and enterprise missions.",
        highlight: "$50K-500K/mission"
    },
    {
        icon: <Factory size={32} color="#ffffff" />,
        title: "Hardware Manufacturers",
        description: "Build Naveria-compatible flight computers and components. Join the ecosystem with certification, technical support, and revenue sharing.",
        highlight: "Ecosystem Partners"
    },
    {
        icon: <Rocket size={32} color="#ffffff" />,
        title: "Government & Defense",
        description: "Mission-critical systems with space agency integration, defense-grade reliability, and long-term support. Custom implementations for strategic programs.",
        highlight: "Enterprise SLA"
    },
    {
        icon: <Users size={32} color="#ffffff" />,
        title: "Research Institutions",
        description: "Sponsored research partnerships, co-development of advanced features, and technology transfer. Joint publications and IP opportunities.",
        highlight: "R&D Partnerships"
    },
    {
        icon: <Globe size={32} color="#ffffff" />,
        title: "International Expansion",
        description: "Global partnerships with universities, manufacturers, and space agencies. 30% international revenue by Year 5 across US, Europe, and Asia.",
        highlight: "Global Reach"
    }
];

const Services = () => {
    return (
        <section className="section" id="segments">
            <div className="container">
                <motion.h2
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '1rem' }}
                >
                    Who We Serve
                </motion.h2>
                <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#a0a0b0', fontSize: '1.1rem' }}>
                    From students to space agencies. Building the ecosystem together.
                </p>

                <div className="features-grid">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)' }}
                        >
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                                {segment.highlight}
                            </div>
                            <div style={{ marginBottom: '1rem' }}>{segment.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{segment.title}</h3>
                            <p style={{ fontSize: '0.9rem', flexGrow: 1, lineHeight: '1.6', color: '#b0b0c0' }}>{segment.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

