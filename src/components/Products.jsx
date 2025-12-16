import { motion } from 'framer-motion';
import naveriaOsImg from '../assets/naveriaos.png';
import naveriaSimImg from '../assets/naveriasim.png';
import naveriaStationImg from '../assets/naveriastation.png';
import navlinkSdkImg from '../assets/navlinksdk.png';

const products = [
    {
        id: 'os',
        title: 'Naveria OS',
        category: 'Flight Software',
        image: naveriaOsImg,
        description: 'The industry\'s first truly hardware-agnostic operating system for spacecraft. Designed for portability and modularity, Naveria OS runs seamlessly across different flight computers, freeing you from vendor lock-in while ensuring mission-critical reliability.',
        features: ['Hardware Agnostic', 'Real-time Kernel', 'Modular Architecture', 'Fault Tolerant']
    },
    {
        id: 'sdk',
        title: 'NavLink SDK',
        category: 'Communication',
        image: navlinkSdkImg,
        description: 'The ultimate space-grade communication standard. Supporting SDR, VHF, and UHF, NavLink SDK bridges the gap between your Operating System, Ground Station, and Cloud infrastructure. Reliable data transport for the modern space era.',
        features: ['SDR, VHF, UHF Support', 'End-to-End Encryption', 'Cross-Platform', 'Low Latency']
    },
    {
        id: 'sim',
        title: 'Naveria Sim',
        category: 'Simulation',
        image: naveriaSimImg,
        description: 'Validate your mission before liftoff with our high-fidelity physics engine. Support for Software-In-The-Loop (SITL) and Hardware-In-The-Loop (HITL) ensures your flight software behaves exactly as expected in the harsh environment of space.',
        features: ['Physics-Accurate', 'SITL & HITL Support', 'Environmental Modeling', 'Risk-Free Testing']
    },
    {
        id: 'station',
        title: 'Naveria Station',
        category: 'Mission Control',
        image: naveriaStationImg,
        description: 'A unified ground station interface built entirely on NavLink. Command and control your satellite or entire constellation with precision. Features intuitive telemetry visualization and robust uplink/downlink management.',
        features: ['Built on NavLink', 'Constellation Management', 'Live Telemetry', 'Secure Command Link']
    }
];

const Products = () => {
    return (
        <section className="section" id="products">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 className="text-gradient">Our Products</h2>
                    <p style={{ color: '#a0a0b0', maxWidth: '700px', margin: '1rem auto 0', lineHeight: '1.6' }}>
                        A complete end-to-end ecosystem for the next generation of space missions.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', // Mobile will override this via CSS usually, but here we might need media queries or a simpler flex wrap approach for proper responsiveness.
                                gap: '3rem',
                                padding: '3rem',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(20, 20, 30, 0.4)'
                            }}
                        >
                            {/* Image Side */}
                            <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
                                        zIndex: 1
                                    }}></div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            transform: 'scale(1.01)', // Prevent sub-pixel rendering issues
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div style={{ order: index % 2 === 0 ? 1 : 0, textAlign: 'left' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    background: 'rgba(var(--primary-rgb), 0.1)',
                                    border: '1px solid rgba(var(--primary-rgb), 0.2)',
                                    color: 'var(--primary-color)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    marginBottom: '1.5rem',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase'
                                }}>
                                    {product.category}
                                </div>

                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                    {product.title}
                                </h3>

                                <p style={{ color: '#b0b0c0', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                    {product.description}
                                </p>

                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'min-content 1fr',
                                    gap: '1rem',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {product.features.map((feature, fIndex) => (
                                        <li key={fIndex} style={{ display: 'contents', color: '#e0e0e0' }}>
                                            <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>✓</span>
                                            <span style={{ fontSize: '1rem' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quick check for mobile responsiveness styles */}
            <style>{`
                @media (max-width: 900px) {
                    .glass-panel {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        padding: 2rem !important;
                    }
                    .glass-panel > div {
                        order: unset !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Products;
