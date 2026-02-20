import React from 'react';

export default function Future() {
    return (
        <div className="relative w-full overflow-x-hidden min-h-screen">
            {/* Background Layer */}
            <div className="absolute inset-0 sunset-bg opacity-40 z-[-1]"></div>

            <main className="flex-1 px-6 py-12 lg:px-20 max-w-[1400px] mx-auto w-full relative z-10">
                {/* Hero Title */}
                <div className="mb-16 text-center lg:text-left space-y-4 pt-12">
                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">
                        Geleceğimiz
                    </h1>
                    <p className="max-w-2xl text-lg lg:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed font-semibold">
                        Kuracağımız yuvalardan dolaşacağımız diyarlara, paylaştığımız hedeflere doğru özenle tasarlanmış bir yolculuk...
                    </p>
                </div>

                {/* Vision Board Navigation Tabs */}
                <div className="mb-12 flex items-center justify-center lg:justify-start border-b border-primary/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <button className="px-8 py-4 text-sm font-bold border-b-[3px] border-primary text-primary tracking-wide">YAPILACAKLAR</button>
                    <button className="px-8 py-4 text-sm font-bold border-b-[3px] border-transparent text-slate-600 hover:text-primary/70 transition-colors tracking-wide">EVİMİZ</button>
                    <button className="px-8 py-4 text-sm font-bold border-b-[3px] border-transparent text-slate-600 hover:text-primary/70 transition-colors tracking-wide">HAYAT HEDEFLERİ</button>
                    <button className="px-8 py-4 text-sm font-bold border-b-[3px] border-transparent text-slate-600 hover:text-primary/70 transition-colors tracking-wide">AİLE</button>
                </div>

                {/* Future Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Travel Together */}
                    <div className="group glass-card rounded-xl overflow-hidden relative flex flex-col min-h-[400px] md:min-h-[500px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 opacity-70"
                            title="Beyaz kum ve palmiyelerle güzel turkuaz plaj"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0TMhGM0OKdaZ993z8TKf1S-aOulaEFFRIXqS64y39phoTvFibOzkn6dvyAn4wdoU5lIN0E5xVnWm3g02scjFJ3GppKhMTc6J3Ytj1m-o-tycsxAXzJHRF9E9wFvKA-EUvQ1YNxdYW8du7S2vkyx00LbJvin-0QZHbXVsaOmHBeBND51kmrKpFrbX18o-s7imiH3QOqI8Uy24xpjNsTxgsIbbUXtl9c_txsu7y1E9uath4w-lTPBjbdjYrfrg5nrZvV6uPDlrRTQ')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>
                        <div className="relative z-10 p-8 mt-auto bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent w-full">
                            <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-primary/20 text-white border border-primary/30 backdrop-blur-md">
                                <span className="material-symbols-outlined">flight_takeoff</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Birlikte Seyahat</h3>
                            <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Dünyanın gizli köşelerini keşfetmek, bir pasaport damgası da aynı anda. Sonraki durağımız: Amalfi Kıyıları.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">14 Destinasyon</span>
                                <span className="px-3 py-1 bg-primary/40 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-primary/30">Sonraki: İtalya</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Our Future Home */}
                    <div className="group glass-card rounded-xl overflow-hidden relative flex flex-col min-h-[400px] md:min-h-[500px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 opacity-70"
                            title="Büyük pencereli modern minimalist oturma odası"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-9JcV5aJEsV6uJsxDOmuxbcjoRz8B8NUItT9zY9rFLdFyRaJe_BJq_dIcicwOOe2MYDprw4ZrdG29jlVBEYPYlO29TvaYiIOTLvXUSlyul7AQSO8deNT-ah2l9mxXAeKcNF43-CvM85O_eZpCfK84xrl5QghBv3Mi1QE9M-bVSSttSte3AEnvVzYy4EQhqDoqnQmngXp_6Q2VnHsFHUoXVoZZyb91Nz3K_syHfnU-SnwWnqhL-j-ilCByV_YXyT5bS3WzDjxavA')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>
                        <div className="relative z-10 p-8 mt-auto bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent w-full">
                            <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-primary/20 text-white border border-primary/30 backdrop-blur-md">
                                <span className="material-symbols-outlined">home_pin</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Gelecekteki Evimiz</h3>
                            <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Işık, bitkiler ve kahkaha yankılarıyla dolu bir sığınak yaratmak. İskandinav tasarım dokunuşları.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">Vizyon Panosu</span>
                                <span className="px-3 py-1 bg-primary/40 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-primary/30">İstek Listesi</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Special Milestones */}
                    <div className="group glass-card rounded-xl overflow-hidden relative flex flex-col min-h-[400px] md:min-h-[500px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 opacity-70"
                            title="Zarif bir akşam açık hava bahçe partisinde parıldayan ışıklar"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABNsVovW5AJMg5w_KplWuC5oHNDWYONk4erNUDqU2eahS_cpjFX0dqTcw10oBYYnRB5cOT8oALWqmlnW2yR_1CaQwoQUrufsNFm9MvThdhGn_ybN4eoqgaxcvSkZcxw92jcq7GFA7jy0g6wPrWKCec0Y7NYIgS57_6fkyTOFjfh7LfBDpMYmoRAzQnLW0J1Zlg4nP11MIlnjS8DqRImIjII6iCA3SwDlT1EAhjFhAk1dp6a8vnrm81y7MOBHF5U9EPrJz80685Tg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>
                        <div className="relative z-10 p-8 mt-auto bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent w-full">
                            <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-primary/20 text-white border border-primary/30 backdrop-blur-md">
                                <span className="material-symbols-outlined">event_note</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Özel Dönüm Noktaları</h3>
                            <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Büyük tarihler ve küçük zaferler. Paylaştığımız her an, sonsuzluk zaman çizelgemizin bir parçası olur.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">8 Etkinlik</span>
                                <span className="px-3 py-1 bg-primary/40 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-primary/30">Yol Haritası</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Inspiration Quote Section */}
                <div className="mt-24 mb-12 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="size-px w-24 bg-primary/30"></div>
                    <blockquote className="text-2xl lg:text-3xl font-light italic text-slate-700 dark:text-slate-300 max-w-3xl">
                        "En iyisi henüz gelmedi, ve ona seninle birlikte yürüdüğüm için çok mutluyum."
                    </blockquote>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">EST. 2021 — ∞</p>

                    <div className="flex gap-4">
                        <a className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/20 hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-300">share</span>
                        </a>
                        <a className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/20 hover:bg-primary/20 transition-colors" href="#">
                            <span className="material-symbols-outlined text-xl text-slate-600 dark:text-slate-300">settings</span>
                        </a>
                    </div>
                </div>

            </main>
        </div>
    );
}
