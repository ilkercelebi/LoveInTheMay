import React from 'react';
import heroImage from '../assets/memories/kapadokya.jpeg';

export default function Hero() {
    return (
        <div className="relative flex flex-col min-h-screen w-full">
            {/* Background Decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none hero-gradient -z-10">
                <span className="material-symbols-outlined floating-heart text-4xl top-[10%] left-[5%]">favorite</span>
                <span className="material-symbols-outlined floating-heart text-2xl top-[25%] left-[15%]">favorite</span>
                <span className="material-symbols-outlined floating-heart text-5xl top-[60%] left-[8%]">favorite</span>
                <span className="material-symbols-outlined floating-heart text-3xl top-[15%] right-[10%]">favorite</span>
                <span className="material-symbols-outlined floating-heart text-6xl top-[45%] right-[5%]">favorite</span>
                <span className="material-symbols-outlined floating-heart text-2xl bottom-[15%] right-[15%]">favorite</span>
            </div>

            {/* Main Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-5xl w-full flex flex-col items-center gap-12 text-center">

                    {/* Central Portrait Frame */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold via-primary/50 to-accent-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative overflow-hidden rounded-xl gold-glow border-4 border-white dark:border-slate-800 w-64 h-80 md:w-80 md:h-[420px] shadow-2xl">
                            <img
                                alt="Romantik çift"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                src={heroImage}
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-full shadow-lg border border-primary/10 animate-bounce">
                            <span className="material-symbols-outlined text-primary text-3xl fill-1">favorite</span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <h1 className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white leading-tight">
                            Her Şey <span className="text-primary">Seninle Başladı</span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed px-4">
                            Kahkaha, büyüme ve her geçen gün daha da güçlenen bir aşk yolculuğu. Dünyamıza hoş geldin.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4 flex flex-col items-center gap-16">
                        <a href="#gallery" className="pulse-btn flex items-center justify-center px-10 h-14 bg-primary text-white rounded-full text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
                            <span>Hikayemizi Keşfet</span>
                            <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </a>

                        {/* Scroll Indicator */}
                        <div className="flex flex-col items-center gap-2 opacity-60">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Aşağı Kaydır</span>
                            <div className="text-primary animate-bounce">
                                <span className="material-symbols-outlined text-3xl">favorite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Side Utilities (Music / Settings) */}
            <div className="fixed bottom-10 left-10 z-40 hidden xl:flex flex-col gap-4">
                <div className="group flex items-center gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-full border border-primary/10 shadow-lg cursor-pointer">
                    <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">graphic_eq</span>
                    </div>
                    <div className="pr-4 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Arka Plan Müziği Çalıyor</p>
                        <p className="text-[10px] text-slate-500">"Başlangıç" - Sinematik Akustik</p>
                    </div>
                </div>
            </div>

            {/* Right Side Notification/Tag */}
            <div className="fixed bottom-10 right-10 z-40 hidden xl:block">
                <div className="flex flex-col items-end gap-2 text-right">
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold border border-primary/20 backdrop-blur-md">
                        MAYIS 2021'DEN BERİ
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Bölüm 01: Başlangıç</p>
                </div>
            </div>

            {/* Background Decoration Detail */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none z-0"></div>
        </div>
    );
}
