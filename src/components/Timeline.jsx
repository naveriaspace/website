import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Code, Radio, Globe, ShieldCheck, Cpu } from 'lucide-react';

const milestones = [
    {
        date: "Q1 2026",
        title: "Inception",
        description: "Naveria Space is founded. Core team assembled from top aerospace institutes. Architecture design for the hardware-agnostic OS begins.",
        status: "current",
        icon: <Rocket size={20} />
    },
    {
        date: "Q2 2026",
        title: "Core Development",
        description: "Development of the real-time microkernel and HAL. Initial prototyping of NavLink protocols on standard embedded hardware.",
        status: "upcoming",
        icon: <Cpu size={20} />
    },
    {
        date: "Q3 2026",
        title: "Alpha Release",
        description: "Internal release of Naveria OS v0.1 and NavLink SDK. Opening early access to select university research partners.",
        status: "upcoming",
        icon: <Code size={20} />
    },
    {
        date: "Q4 2026",
        title: "Simulation Suite",
        description: "Launch of Naveria Sim with SITL support, enabling developers to test flight software without flight hardware.",
        status: "upcoming",
        icon: <Globe size={20} />
    },
    {
        date: "Q1 2027",
        title: "Hardware Integration",
        description: "Full HITL support and certification of reference hardware designs. Integration with major COTS flight computer vendors.",
        status: "upcoming",
        icon: <Radio size={20} />
    },
    {
        date: "Q3 2027",
        title: "Orbit Verification",
        description: "First tech demonstration mission carrying Naveria OS. Validation of the full ecosystem in Low Earth Orbit.",
        status: "upcoming",
        icon: <ShieldCheck size={20} />
    }
];

const Timeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="section" id="roadmap">
            <div className="container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 className="text-gradient">Roadmap to Orbit</h2>
                    <p style={{ color: '#a0a0b0', maxWidth: '600px', margin: '1rem auto 0', lineHeight: '1.6' }}>
                        We are just getting started. Follow our journey as we build the operating system for the next space age.
                    </p>
                </motion.div>

                <div className="timeline-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Central Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(255,255,255,0.1)',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <motion.div style={{
                            width: '100%',
                            background: 'var(--primary-color)',
                            transformOrigin: 'top',
                            scaleY: scaleY,
                            height: '100%',
                            boxShadow: '0 0 10px var(--primary-color)'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {milestones.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .timeline-content {
                    width: 45%;
                }
                
                @media (max-width: 768px) {
                    .timeline-container > div:first-child {
                        left: 20px !important;
                        transform: none !important;
                    }
                    
                    .timeline-item {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        padding-left: 50px !important;
                    }
                    
                    .timeline-content {
                        width: 100% !important;
                        text-align: left !important;
                    }
                    
                    .timeline-dot {
                        left: 20px !important;
                        top: 0 !important;
                        transform: translateX(-50%) !important;
                    }
                    
                    .timeline-date {
                        order: -1;
                        margin-bottom: 0.5rem;
                        text-align: left !important;
                    }
                    
                    .timeline-spacer {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                width: '100%'
            }}
        >
            {/* Left Side (Text for Even, Date for Odd) */}
            <div className={`timeline-content ${!isEven ? 'timeline-spacer' : ''}`} style={{ textAlign: isEven ? 'right' : 'left' }}>
                {isEven ? (
                    <ContentCard item={item} />
                ) : (
                    <DateLabel date={item.date} />
                )}
            </div>

            {/* Central Dot */}
            <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: item.status === 'completed' || item.status === 'current' ? 'var(--primary-color)' : '#1a1a2e',
                border: `3px solid ${item.status === 'completed' || item.status === 'current' ? 'var(--primary-color)' : 'rgba(255,255,255,0.3)'}`,
                transform: 'translateX(-50%)',
                zIndex: 2,
                boxShadow: item.status === 'current' ? '0 0 15px var(--primary-color)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black'
            }}>
                {item.status === 'current' && (
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'var(--primary-color)',
                            zIndex: -1
                        }}
                    />
                )}
            </div>

            {/* Right Side (Date for Even, Text for Odd) */}
            <div className={`timeline-content ${isEven ? 'timeline-spacer' : ''}`} style={{ textAlign: !isEven ? 'left' : 'right' }}>
                {!isEven ? (
                    <ContentCard item={item} />
                ) : (
                    <DateLabel date={item.date} />
                )}
            </div>
        </motion.div>
    );
};

const ContentCard = ({ item }) => (
    <div className="glass-panel" style={{ padding: '1.5rem', position: 'relative' }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '0.75rem',
            justifyContent: 'inherit',
            flexDirection: 'row' // Always row
        }}>
            <span style={{ color: 'var(--primary-color)' }}>{item.icon}</span>
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{item.title}</h3>
        </div>
        <p style={{ margin: 0, fontSize: '0.95rem', color: '#b0b0c0', lineHeight: 1.6 }}>
            {item.description}
        </p>
    </div>
);

const DateLabel = ({ date }) => (
    <div className="timeline-date" style={{
        fontSize: '2rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.9)',
        textShadow: '0 0 10px rgba(0,0,0,0.5)',
        fontFamily: 'Space Grotesk'
    }}>
        {date}
    </div>
);

export default Timeline;
