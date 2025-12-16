import { motion } from 'framer-motion';

const Team = () => {
    const founders = [
        {
            name: "Aman Kumar",
            role: "CEO & Founder",
            education: "Aerospace Engineering, IIT Kharagpur",
            photo: "/aman.avif",
            bio: "Expert in autonomous systems and applied mathematics. Led high-impact projects in aerial robotics and swarms. Secured IndiaAI and CHANAKYA fellowships. Former Head of Aerial Robotics Kharagpur (ARK)."
        },
        {
            name: "Ved Takte",
            role: "CTO & Founder",
            education: "Aerospace Engineering, IIT Kharagpur",
            photo: "/ved.avif",
            bio: "12+ years of experience in advanced UAV systems. Asia & India Book of Records holder. Certified DGCA drone pilot. Winner of multiple international robotics competitions including Boeing and WRC."
        }
    ];

    return (
        <section className="section" id="team" style={{ background: 'linear-gradient(180deg, rgba(20,15,30,0.3) 0%, rgba(10,10,15,0) 100%)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>
                        The Team
                    </h2>
                    <p style={{ color: '#a0a0b0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Built by aerospace engineers from IIT Kharagpur with deep expertise in autonomous systems and satellite technology.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                padding: '2.5rem',
                                borderTop: '3px solid rgba(255,255,255,0.15)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            {/* Profile Photo */}
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                border: '3px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)';
                                }}
                            >
                                <img
                                    src={founder.photo}
                                    alt={founder.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)',
                                        transition: 'filter 0.3s ease'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                                    {founder.name}
                                </h3>
                                <div style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '1px',
                                    color: '#a0a0b0',
                                    marginBottom: '0.75rem'
                                }}>
                                    {founder.role}
                                </div>
                                <div style={{
                                    fontSize: '0.95rem',
                                    color: '#909090',
                                    fontStyle: 'italic',
                                    paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {founder.education}
                                </div>
                            </div>

                            <p style={{
                                color: '#b0b0c0',
                                lineHeight: '1.7',
                                textAlign: 'left',
                                flexGrow: 1
                            }}>
                                {founder.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
