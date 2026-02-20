import React from 'react';

export default function Timeline() {
    return (
        <div className="bg-romantic-gradient font-display text-slate-900 pt-32 pb-24 overflow-x-hidden w-full relative z-10">
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto text-center px-6 mb-20 relative z-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Yolculuk Başlıyor</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">İlk Bölümümüz</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
                    "Her büyük aşk hikayesi, her şeyi değiştiren tek bir anla başlar. İşte sonsuzluğumuz böyle başladı."
                </p>
            </section>

            {/* Timeline Section */}
            <section className="relative max-w-6xl mx-auto px-6">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 timeline-line-glow hidden md:block"></div>
                <div className="space-y-24 relative">

                    {/* Milestone 1: Left */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <div className="w-full md:w-1/2 md:pr-16 flex justify-end">
                            <div className="bg-white/80 backdrop-blur shadow-xl rounded-xl p-8 max-w-md border border-white card-hover relative transition-all duration-300">
                                <span className="font-serif text-primary text-2xl font-bold italic mb-2 block">12 Eylül 2022</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">İlk Bakış</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Merkez kütüphanesinde yağmurlu bir salı günüydü. Sen nadir bir şiir koleksiyonu arıyordun, ben ise sadece sessiz bir köşe bulmaya çalışıyordum. Gözlerimiz maun rafların arasında buluştu.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    Şehir Halk Kütüphanesi
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full border-2 border-primary flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-primary fill-1 text-xl animate-pulse">favorite</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2"></div>
                    </div>

                    {/* Milestone 2: Right */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <div className="w-full md:w-1/2"></div>
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full border-2 border-primary flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-primary fill-1 text-xl">favorite</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-16">
                            <div className="bg-white/80 backdrop-blur shadow-xl rounded-xl p-8 max-w-md border border-white card-hover transition-all duration-300">
                                <span className="font-serif text-primary text-2xl font-bold italic mb-2 block">4 Ekim 2022</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">İlk Mesaj</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Seni düşündüğüm haftalardan sonra, sonunda o ilk mesajı gönderme cesaretini buldum. Basit bir "Merhaba, istediğin kitabı buldum." Ardından üç saatlik bir sohbet geldi.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm">chat_bubble</span>
                                    Dijital Bağlantı
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestone 3: Left */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <div className="w-full md:w-1/2 md:pr-16 flex justify-end">
                            <div className="bg-white/80 backdrop-blur shadow-xl rounded-xl p-8 max-w-md border border-white card-hover transition-all duration-300">
                                <span className="font-serif text-primary text-2xl font-bold italic mb-2 block">15 Ekim 2022</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">İlk Buluşmamız</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Kahve akşam yemeğine döndü, akşam yemeği de limanda bir gece yarısı yürüyüşüne dönüştü. Çocukluk hayallerimizden en sevdiğimiz caz plaklarına kadar her şeyi konuştuk.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm">restaurant</span>
                                    Blue Note Kafe & Liman
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full border-2 border-primary flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-primary fill-1 text-xl">favorite</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2"></div>
                    </div>

                    {/* Milestone 4: Featured Right */}
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <div className="w-full md:w-1/2"></div>
                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                            <div className="w-12 h-12 bg-primary rounded-full border-4 border-white flex items-center justify-center shadow-xl scale-125 z-10">
                                <span className="material-symbols-outlined text-white fill-1 text-2xl">heart_check</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-16">
                            <div className="bg-primary text-white shadow-2xl shadow-primary/30 rounded-xl p-8 max-w-md card-hover transform scale-105 border border-primary/20 transition-all duration-300">
                                <span className="font-serif text-white/90 text-2xl font-bold italic mb-2 block">20 Kasım 2022</span>
                                <h3 className="text-xl font-bold mb-3">Sonsuzluğa Karar Vermek</h3>
                                <p className="text-white/90 leading-relaxed mb-4">
                                    Sonbahar yapraklarının altında dururken, bunun sadece bir mevsim olmadığını, birlikte hayatımızın başlangıcı olduğunu anladık. Bunu resmileştirdiğimiz ve bir daha asla arkamıza bakmadığımız o gün.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-white/70 font-medium uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm">celebration</span>
                                    Maple Ridge Parkı
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-32 text-center pb-24 relative z-10">
                <div className="max-w-md mx-auto p-12 bg-white/40 rounded-3xl border border-white backdrop-blur">
                    <span className="material-symbols-outlined text-primary text-5xl mb-6">auto_awesome</span>
                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">Devam Edecek...</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed">İlk bölüm, sadece birlikte inşa ettiğimiz güzel hayatın temeliydi.</p>
                    <button className="flex items-center gap-2 mx-auto bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                        Sonraki Bölüm: Maceralarımız
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
