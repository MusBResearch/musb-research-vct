"use client";

import { Zap, Activity, Globe, Layout, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";

export default function Innovation() {
    return (
        <div className="min-h-screen bg-[#0A1128] pt-32 pb-20 relative isolate overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[180px] rounded-full -z-10" />

            <Container>
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="px-4 py-2 bg-purple-500/10 text-purple-400 text-[13px] font-black uppercase tracking-widest rounded-full mb-6 inline-block border border-purple-500/20">
                        Future of Science
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tight leading-[1] mb-8">
                        The Digital <br /> Research Frontier.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                        We don't just run trials; we build the tools that make them better. From AI-driven recruitment to real-time bio-monitoring, MUSB Research is at the intersection of medicine and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="flex gap-6 mb-4">
                                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic">Virtual Site Engine</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Our proprietary platform acts as a high-fidelity virtual site, handling everything from electronic consent (eConsent) to patient-reported outcomes (ePRO) with zero friction.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="flex gap-6 mb-4">
                                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                    <Activity size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic">Real-Time Bio-Analytics</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Integrated wearable and IoT support allows for continuous monitoring of patient health, providing deeper insights than once-a-month clinical visits ever could.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-square glass rounded-[4rem] border border-white/5 flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 animate-pulse" />
                        <div className="relative z-10 p-12 text-center text-white/20 font-black text-4xl uppercase tracking-[0.2em] italic">
                            Innovation <br /> Lab
                        </div>
                    </div>
                </div>

                <div className="glass p-12 md:p-20 rounded-[4rem] text-center bg-slate-900/30">
                    <h2 className="text-4xl font-black text-white italic mb-6">Build the Future with Us</h2>
                    <p className="text-slate-400 font-medium mb-12 max-w-xl mx-auto">
                        Are you a technology partner or a researcher looking to leverage our platform? Join our ecosystem today.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all font-bold">
                        Partner with Us <ArrowRight size={20} />
                    </Link>
                </div>
            </Container>
        </div>
    );
}
