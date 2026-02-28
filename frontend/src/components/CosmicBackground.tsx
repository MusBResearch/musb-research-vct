"use client";

import { useEffect, useState } from "react";

export default function CosmicBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none -z-[100] overflow-hidden bg-[#0A1128]">
            {/* Background haze matching the image feel */}
            <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-cyan-600/5 rounded-full blur-[100px] animate-pulse mix-blend-screen" />
            <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s', animationDuration: '4s' }} />
            <div className="absolute top-[40%] right-[30%] w-[20vw] h-[20vw] min-w-[200px] min-h-[200px] bg-cyan-500/5 rounded-full blur-[80px] animate-pulse mix-blend-screen" style={{ animationDelay: '1s', animationDuration: '5s' }} />

            {/* The distinct visible bubbles from the image */}
            <div className="absolute top-[15%] left-[45%] w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_25px_8px_rgba(34,211,238,0.5)] blur-[0.5px] animate-float" />
            <div className="absolute bottom-[25%] left-[20%] w-3.5 h-3.5 bg-violet-400 rounded-full shadow-[0_0_35px_12px_rgba(167,139,250,0.6)] blur-[0.5px] animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_30px_10px_rgba(103,232,249,0.5)] blur-[0.5px] animate-float" style={{ animationDelay: '2s' }} />
        </div>
    );
}
