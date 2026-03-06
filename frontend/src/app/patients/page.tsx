"use client";

import { Heart, ShieldCheck, Activity, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";

export default function PatientPortal() {
    return (
        <div className="min-h-screen bg-[#0A1128] pt-32 pb-20 relative isolate">
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[150px] rounded-full -z-10" />

            <Container>
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 text-[13px] font-black uppercase tracking-widest rounded-full mb-6 inline-block border border-emerald-500/20">
                        Empowering Participants
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tight leading-[1] mb-8">
                        Your Health. <br /> Your Contribution.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                        Join a community of patients shaping the future of medicine. Our decentralized trials allow you to participate from the comfort of your home, with world-class medical support.
                    </p>
                    <Link
                        href="/studies"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 text-slate-950 font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-emerald-500/20"
                    >
                        Browse Active Studies <Search size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/30 transition-all group">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Heart size={32} className="text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 italic">Remote Participation</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            No more long commutes to research sites. We provide the technology and tools you need to participate from anywhere in the world.
                        </p>
                    </div>
                    <div className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
                        <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <ShieldCheck size={32} className="text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 italic">Safe & Secure</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Your safety is our top priority. Every study is IRB-approved and follows strict HIPAA guidelines to protect your identity and data.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-black text-white italic mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: "01", title: "Find a Study", desc: "Browse our directory for a study that matches your condition." },
                            { step: "02", title: "Quick Screener", desc: "Apply online in minutes to see if you qualify." },
                            { step: "03", title: "Virtual Onboarding", desc: "Meet our medical team via secure video call." },
                            { step: "04", title: "Begin Trial", desc: "Receive your kit and start your journey with our support." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 text-left border-l border-white/5 hover:border-emerald-500/30 transition-colors">
                                <span className="text-emerald-400 font-black text-xs uppercase tracking-tighter mb-2 block">{item.step}</span>
                                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
