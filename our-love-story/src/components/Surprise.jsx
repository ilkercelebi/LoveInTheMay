import React from 'react';

export default function Surprise() {
    return (
        <div className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-background-dark py-20 mt-10">

            {/* Dynamic Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Central Spotlight */}
                <div className="absolute inset-0 spotlight-gradient"></div>
                {/* Floating Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 w-full">
                <div className="mb-4">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Özel Bir Sürpriz</span>
                </div>

                <h1 className="text-slate-100 tracking-tight text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Ve Son Bir Şey Daha...
                </h1>

                <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed mb-16 max-w-lg mx-auto">
                    Sadece senin için bekleyen bir sır var. Yaşadığımız her saniye bizi buraya getirdi. Bir sonraki bölümü keşfetmek için aşağıya tıkla.
                </p>

                {/* Interactive Envelope Component */}
                <div className="group relative cursor-pointer mb-12 transform transition-transform duration-500 hover:scale-105">
                    {/* Shadow/Glow Base */}
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-xl scale-90 group-hover:scale-110 transition-transform duration-700"></div>

                    {/* The Envelope Visual */}
                    <div className="relative w-72 h-48 md:w-80 md:h-56 bg-[#fcf8f9] rounded-lg shadow-2xl flex flex-col items-center justify-center border border-slate-200 envelope-glow overflow-hidden">
                        {/* Flap Pattern */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100"></div>

                        {/* Wax Seal */}
                        <div className="z-20 flex items-center justify-center size-14 md:size-16 bg-primary rounded-full shadow-lg border-4 border-white/20 transform group-hover:rotate-12 transition-transform duration-500">
                            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">lock</span>
                        </div>

                        {/* Texture/Details */}
                        <div className="absolute bottom-4 right-4 text-slate-300">
                            <span className="material-symbols-outlined text-3xl md:text-4xl opacity-20">mail</span>
                        </div>
                        <div className="absolute top-4 left-4 text-slate-300">
                            <span className="material-symbols-outlined text-sm opacity-20">history_edu</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button className="group flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-bold shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1 active:scale-95">
                    <span className="material-symbols-outlined group-hover:animate-pulse">lock_open</span>
                    <span>Açmak İçin Tıkla</span>
                </button>

                <p className="mt-8 text-slate-500 text-sm font-medium italic">
                    Sadece senin gözlerin için...
                </p>
            </div>

            {/* Decorative Overlays */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                {/* Could be a subtle texture image later, keeping it empty for pure CSS approach if no image is available */}
            </div>

            {/* Corner Accents */}
            <div className="absolute bottom-10 left-6 md:left-10 flex gap-4 text-slate-500 hidden md:flex">
                <span className="material-symbols-outlined text-2xl opacity-30">star</span>
                <span className="material-symbols-outlined text-xl opacity-20">auto_awesome</span>
            </div>

            <div className="absolute top-1/2 right-4 md:right-10 flex-col gap-6 text-slate-600/30 hidden md:flex -translate-y-1/2">
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-600 to-transparent mx-auto"></div>
                <span className="rotate-90 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap -ml-16">Cilt 07 / Bölüm 08</span>
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-600 to-transparent mx-auto"></div>
            </div>
        </div>
    );
}
