import React from 'react';

export default function Letter() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col relative z-10 w-full min-h-screen">

            <main className="flex-grow flex flex-col items-center px-4 py-16 md:py-24 max-w-6xl mx-auto w-full relative z-10">

                {/* Breadcrumbs & Status - optional, fitting the aesthetics */}
                <div className="w-full flex justify-center items-center mb-16 opacity-70">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">favorite</span>
                    </div>
                </div>

                {/* Interactive Letter Container */}
                <div className="relative w-full max-w-3xl py-12 px-4 md:px-0">
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-8 text-primary/20 floating" style={{ animationDelay: '0s' }}>
                        <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                    </div>
                    <div className="absolute top-1/4 -right-10 text-primary/10 floating" style={{ animationDelay: '1.5s' }}>
                        <span className="material-symbols-outlined text-6xl">favorite</span>
                    </div>
                    <div className="absolute -bottom-6 left-1/4 text-primary/15 floating" style={{ animationDelay: '0.7s' }}>
                        <span className="material-symbols-outlined text-3xl">colors_spark</span>
                    </div>

                    {/* The Letter Card */}
                    <div className="paper-texture w-full min-h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-8 md:p-16 flex flex-col items-center relative overflow-hidden ring-1 ring-black/5">
                        {/* Letterhead Decoration */}
                        <div className="w-24 h-px bg-primary/20 mb-8"></div>

                        <h1 className="font-handwritten text-4xl md:text-5xl text-slate-800 mb-12 text-center decoration-primary/10 underline underline-offset-8">
                            Sana Bir Mektup
                        </h1>

                        <div className="w-full space-y-6 text-slate-700 font-typewriter leading-relaxed text-lg">
                            <p>En Sevdiğim,</p>

                            <p className="indent-8">
                                Tanıştığımız o ilk andan beri aramızda çok özel bir şey olduğunu biliyordum. O günden bu yana geçen her gün, hikayemizin paha biçilmez ve muhteşem bir bölümü oldu. Paylaştığımız kahkahalara ve bizi birbirimize bağlayan o sessiz anlara değer veriyorum.
                            </p>

                            <p className="indent-8">
                                Sen benim kalbim, ruhum ve sonsuzluğumsun. İster gün batımının peşinden koşalım, ister sessizce oturalım; seninle geçirdiğim her saniye, bana verilmiş ve hiçbir zaman hak ettiğimi bilmediğim bir hediye gibi hissettiriyor. Benim değişmezim, maceram ve yuvam olduğun için teşekkür ederim.
                            </p>

                            <div className="pt-12 flex flex-col items-end w-full">
                                <p className="font-handwritten text-2xl text-slate-800">Sonsuza dek senin,</p>
                                <div className="mt-2 flex flex-col items-center pr-4">
                                    {/* Buraya sonrasında ismini/isminizi yazabilirsin */}
                                    <span className="font-handwritten text-3xl text-primary font-bold">Aşkın</span>
                                    <div className="mt-1 text-primary">
                                        <span className="material-symbols-outlined fill-1">favorite</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Tape Decoration */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
