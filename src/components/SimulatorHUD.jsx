import React, { useEffect, useState } from 'react';

const SimulatorHUD = () => {
    const [time, setTime] = useState(new Date());
    const [altitude, setAltitude] = useState(400.00);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setAltitude(prev => prev + (Math.random() - 0.5) * 0.1);
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
            fontFamily: "'Space Grotesk', monospace",
            color: 'rgba(0, 240, 255, 0.8)',
            padding: '20px'
        }}>
            {/* Top Left - Status */}
            <div style={{ position: 'absolute', top: '100px', left: '40px' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>SYSTEM STATUS</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '10px', height: '10px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 10px #00ff00' }}></span>
                    ONLINE
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                    <div>T-LINK: STABLE</div>
                    <div>PWR: 98.4%</div>
                    <div>CPU: 12%</div>
                </div>
            </div>

            {/* Top Right - Telemetry */}
            <div style={{ position: 'absolute', top: '100px', right: '40px', textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>TELEMETRY</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    ALT: {altitude.toFixed(2)} km
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    VEL: 7.66 km/s
                </div>
                <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                    LAT: 28.6139° N
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                    LNG: 77.2090° E
                </div>
            </div>

            {/* Center Reticle */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                border: '1px solid rgba(0, 240, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ width: '10px', height: '1px', background: 'rgba(0, 240, 255, 0.5)' }}></div>
                <div style={{ height: '10px', width: '1px', background: 'rgba(0, 240, 255, 0.5)', position: 'absolute' }}></div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '40px',
                background: 'rgba(0, 10, 20, 0.5)',
                padding: '10px 30px',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(0, 240, 255, 0.1)'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>MODE</div>
                    <div style={{ fontWeight: 'bold' }}>ORBITAL_KEEP</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>TARGET</div>
                    <div style={{ fontWeight: 'bold' }}>EARTH_NADIR</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>TIME</div>
                    <div style={{ fontWeight: 'bold' }}>{time.toLocaleTimeString()}</div>
                </div>
            </div>
        </div>
    );
};

export default SimulatorHUD;
