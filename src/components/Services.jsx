import { motion } from 'framer-motion';
import { Box, Shield, Globe, Zap, Cpu, Brain } from 'lucide-react';

const features = [
    {
        icon: <Box size={32} color="#ffffff" />,
        title: "Modular Architecture",
        description: "Swap payloads, sensors, and mission logic without rewriting core flight code. True modularity at every layer."
    },
    {
        icon: <Shield size={32} color="#ffffff" />,
        title: "Safety Critical",
        description: "Built on RTOS principles with formal verification support. Certified for mission-critical operations."
    },
    {
        icon: <Globe size={32} color="#ffffff" />,
        title: "Open Standards",
        description: "Compatible with major ground control stations and communication protocols. No vendor lock-in."
    },
    {
        icon: <Zap size={32} color="#ffffff" />,
        title: "Real-Time Performance",
        description: "Sub-millisecond loop times with deterministic execution. Hardware-accelerated computation paths."
    },
    {
        icon: <Cpu size={32} color="#ffffff" />,
        title: "Hardware Agnostic",
        description: "Run on x86, ARM, or custom silicon. From development boards to flight-proven processors."
    },
    {
        icon: <Brain size={32} color="#ffffff" />,
        title: "AI-Ready",
        description: "Integrated ML inference engine for autonomous decision-making and adaptive control."
    }
];

const Services = () => {
    return (
        <section className="section" id="features">
            <div className="container">
                <motion.h2
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '1rem' }}
                >
                    Built for Mission-Critical Operations
                </motion.h2>
                <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#ccc' }}>
                    A unified flight stack engineered for reliability, performance, and flexibility.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)' }}
                        >
                            <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{feature.title}</h3>
                            <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
