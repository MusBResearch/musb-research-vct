"use client";

import { Shield, Zap, Globe, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";

export default function BusinessSolutions() {
    return (
        <div className="min-h-screen bg-[#0A1128] pt-32 pb-20 overflow-hidden relative isolate">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />

            <Container>
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 text-[13px] font-black uppercase tracking-widest rounded-full mb-6 inline-block border border-cyan-500/20">
                        For Sponsors & CROs
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tight leading-[1] mb-8">
                        Accelerate Your <br /> Path to Approval.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                        Traditional trials are slow and rigid. MUSB Research provides the digital infrastructure to run decentralized, patient-centric trials that deliver quality data faster.
                    </p>
                    <Link
                        href="/sponsor/login"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-cyan-500/20"
                    >
                        Sponsor Portal Access <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: Zap,
                            title: "Faster Recruitment",
                            desc: "Our virtual-first approach removes geographic barriers, letting you recruit up to 3x faster than traditional sites."
                        },
                        {
                            icon: Shield,
                            title: "Reliable Quality",
                            desc: "Automated data capture and real-time monitoring ensure the highest standards of data integrity and 21 CFR Part 11 compliance."
                        },
                        {
                            icon: Globe,
                            title: "Global Compliance",
                            desc: "Built-in support for GDPR, HIPAA, and local regulatory requirements across multiple continents."
                        }
                    ].map((item, i) => (
                        <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <item.icon size={32} className="text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 italic">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black text-white italic mb-6">Ready to Transform Your Research?</h2>
                        <p className="text-slate-400 font-medium mb-10">
                            Join the leaders in decentralized clinical trials. Let's build a protocol that works for patients and delivers for science.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all">
                                Request a Demo
                            </Link>
                            <Link href="/sponsor/login" className="px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest rounded-full border border-white/10 hover:border-white/30 transition-all">
                                Sponsor Login
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
