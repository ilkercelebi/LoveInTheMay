import React from 'react';

export default function Reasons() {
    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen w-full flex flex-col items-center bg-background-light dark:bg-background-dark bokeh-bg">
            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-400">
                    Hayatımı Güzelleştirmelerin
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-lg">
                    Dünyamı aydınlatan, bana kattığın o güzel anların küçük bir koleksiyonu. Okumak için kalplerin üzerine gel.
                </p>
            </div>

            {/* Floating Hearts Interaction Area */}
            <div className="relative w-full h-[600px] mt-10 max-w-7xl mx-auto">
                {/* Heart 1: Large Center-Left */}
                <div className="absolute top-[10%] left-[10%] md:left-[15%] heart-float">
                    <div className="heart-card w-48 h-48 md:w-64 md:h-64 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex flex-col items-center justify-center p-6 md:p-8 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-4xl initial-icon transition-opacity duration-300">colors_spark</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 md:p-6 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-sm md:text-base">
                            Bana bakınca gözlerinin içinin gülmesi.
                        </p>
                    </div>
                </div>

                {/* Heart 2: Medium Top-Right */}
                <div className="absolute top-[0%] right-[10%] md:right-[20%] heart-float-delayed">
                    <div className="heart-card w-40 h-40 md:w-48 md:h-48 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-4 md:p-6 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-3xl initial-icon transition-opacity duration-300">coffee</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 text-slate-800 dark:text-slate-200 font-medium text-xs md:text-sm">
                            Hayatımı en güzel haline getirmen.
                        </p>
                    </div>
                </div>

                {/* Heart 3: Small Bottom-Left */}
                <div className="absolute bottom-[20%] md:bottom-[15%] left-[2%] md:left-[5%] heart-float-slow">
                    <div className="heart-card w-32 h-32 md:w-40 md:h-40 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-4 md:p-6 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-2xl initial-icon transition-opacity duration-300">auto_awesome</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-3 md:p-4 text-slate-800 dark:text-slate-200 font-medium text-[10px] md:text-[11px]">
                            Göğsüme yattığında kalbinin benim için o hızlı çarpışını hissetmek.
                        </p>
                    </div>
                </div>

                {/* Heart 4: Medium Center-Right */}
                <div className="absolute top-[50%] md:top-[40%] right-[5%] md:right-[10%] heart-float">
                    <div className="heart-card w-44 h-44 md:w-56 md:h-56 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-6 md:p-8 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-4xl initial-icon transition-opacity duration-300">volunteer_activism</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 md:p-6 text-slate-800 dark:text-slate-200 font-medium text-xs md:text-sm">
                            Tüm zorlukların üstesinden birlikte gelebilmemiz.
                        </p>
                    </div>
                </div>

                {/* Heart 5: Large Bottom-Center */}
                <div className="absolute bottom-[0%] md:bottom-[5%] left-[30%] md:left-[45%] heart-float-delayed">
                    <div className="heart-card w-56 h-56 md:w-72 md:h-72 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-8 md:p-10 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-5xl initial-icon transition-opacity duration-300">nightlight</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-6 md:p-8 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-sm md:text-base">
                            Sımsıcak kucaklamalarınla bana her zaman evimde hissettirmen.
                        </p>
                    </div>
                </div>

                {/* Heart 6: Small Top-Center */}
                <div className="absolute top-[35%] md:top-[-5%] left-[45%] md:left-[40%] heart-float-slow">
                    <div className="heart-card w-28 h-28 md:w-36 md:h-36 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-3 md:p-4 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-xl initial-icon transition-opacity duration-300">music_note</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-3 md:p-4 text-slate-800 dark:text-slate-200 font-medium text-[9px] md:text-[10px]">
                            Kalbimi neşeyle dolduran o güzel gülüşün.
                        </p>
                    </div>
                </div>

                {/* Decorative Bokeh Circles (Visual Atmosphere) */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 size-64 bg-pink-400/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

        </div>
    );
}
