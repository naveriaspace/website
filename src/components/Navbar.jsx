import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'linear-gradient(180deg, rgba(60, 60, 60, 0.85) 0%, rgba(20, 20, 20, 0.95) 100%)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                    onClick={scrollToTop}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}
                >
                    <div style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'Radnika Next, sans-serif' }}>
                        <span style={{ color: 'white' }}>NAVERIA</span> <span style={{ color: '#ff751f' }}>SPACE</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="navbar-links">
                    {['Features', 'Simulation', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                opacity: 0.7,
                                transition: 'all 0.2s'
                            }}
                            onMouseOver={(e) => { e.target.style.opacity = 1; e.target.style.color = 'var(--primary-color)'; }}
                            onMouseOut={(e) => { e.target.style.opacity = 0.7; e.target.style.color = 'inherit'; }}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="https://cal.com/naveria.space" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                            Request Demo
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
