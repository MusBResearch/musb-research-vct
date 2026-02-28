"use client";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999]">
            <div className="w-10 h-10 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
        </div>
    );
}
