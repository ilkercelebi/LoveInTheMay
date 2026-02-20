import React from 'react';

export default function Reasons() {
    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen w-full flex flex-col items-center bg-background-light dark:bg-background-dark bokeh-bg">
            {/* Section Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-400">
                    Seni Sevme Nedenlerim
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-lg">
                    Dünyamı aydınlatan küçük şeylerin bir koleksiyonu. Gizli bir nedeni ortaya çıkarmak için kalplerin üzerine gel.
                </p>
            </div>

            {/* Floating Hearts Interaction Area */}
            <div className="relative w-full h-[600px] mt-10 max-w-7xl mx-auto">
                {/* Heart 1: Large Center-Left */}
                <div className="absolute top-[10%] left-[10%] md:left-[15%] heart-float">
                    <div className="heart-card w-48 h-48 md:w-64 md:h-64 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex flex-col items-center justify-center p-6 md:p-8 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-4xl initial-icon transition-opacity duration-300">colors_spark</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 md:p-6 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-sm md:text-base">
                            Parkta bir golden retriever gördüğünde gözlerinin parıldama şekli.
                        </p>
                    </div>
                </div>

                {/* Heart 2: Medium Top-Right */}
                <div className="absolute top-[0%] right-[10%] md:right-[20%] heart-float-delayed">
                    <div className="heart-card w-40 h-40 md:w-48 md:h-48 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-4 md:p-6 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-3xl initial-icon transition-opacity duration-300">coffee</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 text-slate-800 dark:text-slate-200 font-medium text-xs md:text-sm">
                            Kahvemi her zaman hiç sormadan tam istediğim gibi yapman.
                        </p>
                    </div>
                </div>

                {/* Heart 3: Small Bottom-Left */}
                <div className="absolute bottom-[20%] md:bottom-[15%] left-[2%] md:left-[5%] heart-float-slow">
                    <div className="heart-card w-32 h-32 md:w-40 md:h-40 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-4 md:p-6 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-2xl initial-icon transition-opacity duration-300">auto_awesome</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-3 md:p-4 text-slate-800 dark:text-slate-200 font-medium text-[10px] md:text-xs">
                            Tüm odayı dolduran o bulaşıcı kahkahan.
                        </p>
                    </div>
                </div>

                {/* Heart 4: Medium Center-Right */}
                <div className="absolute top-[50%] md:top-[40%] right-[5%] md:right-[10%] heart-float">
                    <div className="heart-card w-44 h-44 md:w-56 md:h-56 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-6 md:p-8 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-4xl initial-icon transition-opacity duration-300">volunteer_activism</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-4 md:p-6 text-slate-800 dark:text-slate-200 font-medium text-xs md:text-base">
                            Dışarısı soğukken elimi kendi cebinde tutman.
                        </p>
                    </div>
                </div>

                {/* Heart 5: Large Bottom-Center */}
                <div className="absolute bottom-[0%] md:bottom-[5%] left-[30%] md:left-[45%] heart-float-delayed">
                    <div className="heart-card w-56 h-56 md:w-72 md:h-72 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-8 md:p-10 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-5xl initial-icon transition-opacity duration-300">nightlight</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-6 md:p-8 text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-sm md:text-base">
                            Gelecek için en çılgın hayallerimizi konuştuğumuz o gece yarısı sohbetleri.
                        </p>
                    </div>
                </div>

                {/* Heart 6: Small Top-Center */}
                <div className="absolute top-[35%] md:top-[-5%] left-[45%] md:left-[40%] heart-float-slow">
                    <div className="heart-card w-28 h-28 md:w-36 md:h-36 bg-white/40 dark:bg-primary/5 border-2 border-primary/30 rounded-full flex items-center justify-center p-3 md:p-4 text-center backdrop-blur-sm relative">
                        <span className="material-symbols-outlined text-primary text-xl initial-icon transition-opacity duration-300">music_note</span>
                        <p className="reveal-text absolute inset-0 flex items-center justify-center p-3 md:p-4 text-slate-800 dark:text-slate-200 font-medium text-[9px] md:text-[10px]">
                            Sabahları hazırlanırken mırıldanman.
                        </p>
                    </div>
                </div>

                {/* Decorative Bokeh Circles (Visual Atmosphere) */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 size-64 bg-pink-400/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>

            {/* Call to action */}
            <div className="mt-24 md:mt-20 text-center relative z-10 flex flex-col items-center w-full">
                <div className="flex items-center gap-2 text-primary mb-6">
                    <span className="material-symbols-outlined fill-1">favorite</span>
                    <span className="material-symbols-outlined fill-1">favorite</span>
                    <span className="material-symbols-outlined fill-1">favorite</span>
                </div>
                <p className="text-slate-400 dark:text-slate-500 font-medium mb-8">Aklından geçenleri paylaşmak ister misin?</p>

                {/* Quick Input */}
                <div className="w-full max-w-xl bg-white dark:bg-background-dark/50 p-2 rounded-2xl border border-primary/10 flex items-center gap-3 shadow-xl">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary ml-1 shrink-0">
                        <span className="material-symbols-outlined">edit</span>
                    </div>
                    <input
                        className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 min-w-0"
                        placeholder="Şu huyunu çok seviyorum..."
                        type="text"
                    />
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-md shrink-0">
                        Gönder
                    </button>
                </div>
            </div>
        </div>
    );
}
