import React, { useState } from 'react';

const futureData = [
    {
        id: 1,
        category: 'YAPILACAKLAR',
        bgUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        icon: 'flight_takeoff',
        title: 'Birlikte Seyahat',
        description: 'Dünyanın gizli köşelerini keşfetmek, bir pasaport damgası da aynı anda. Sonraki durağımız: Batum.',
        tags: ['14 Destinasyon', 'Sonraki: Batum']
    },
    {
        id: 2,
        category: 'EVİMİZ',
        bgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        icon: 'home_pin',
        title: 'Gelecekteki Evimiz',
        description: 'Işık, bitkiler ve kahkaha yankılarıyla dolu bir sığınak yaratmak. İskandinav tasarım dokunuşları.',
        tags: ['Vizyon Panosu', 'İstek Listesi']
    },
    {
        id: 3,
        category: 'YAPILACAKLAR',
        bgUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Beautiful celebratory setting/events
        icon: 'event_note',
        title: 'Özel Dönüm Noktaları',
        description: 'Büyük tarihler ve küçük zaferler. Paylaştığımız her an, sonsuzluk zaman çizelgemizin bir parçası olur.',
        tags: ['8 Etkinlik', 'Yol Haritası']
    },
    {
        id: 4,
        category: 'HAYAT HEDEFLERİ',
        bgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        icon: 'trending_up',
        title: 'Kariyer ve Büyüme',
        description: 'Birbirimizin hayallerini desteklemek ve birlikte zirveye ulaşmak.',
        tags: ['Girişimler', 'Eğitim']
    },
    {
        id: 5,
        category: 'AİLE',
        bgUrl: 'https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Very clear, aesthetic young family photo
        icon: 'family_restroom',
        title: 'Genişleyen Ailemiz',
        description: 'Bir gün evimizi minik ayak sesleri ve neşeli çocuk kahkahalarıyla dolduracak olmak.',
        tags: ['Evcil Hayvanlar', 'İsimler']
    }
];

const categories = ['YAPILACAKLAR', 'EVİMİZ', 'HAYAT HEDEFLERİ', 'AİLE']; export default function Future() {
    const [activeCategory, setActiveCategory] = useState('YAPILACAKLAR');

    const filteredFuture = futureData.filter(item => item.category === activeCategory);

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
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-4 text-sm font-bold border-b-[3px] tracking-wide transition-colors ${activeCategory === cat
                                ? 'border-primary text-primary'
                                : 'border-transparent text-slate-600 hover:text-primary/70'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Future Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredFuture.length > 0 ? (
                        filteredFuture.map((item) => (
                            <div key={item.id} className="group glass-card rounded-xl overflow-hidden relative flex flex-col min-h-[400px] md:min-h-[500px]">
                                <div
                                    className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 opacity-70"
                                    title={item.title}
                                    style={{ backgroundImage: `url('${item.bgUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                ></div>
                                <div className="relative z-10 p-8 mt-auto bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent w-full">
                                    <div className="mb-4 inline-flex items-center justify-center size-12 rounded-lg bg-primary/20 text-white border border-primary/30 backdrop-blur-md">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border ${i === 0 ? 'bg-white/10 border-white/20' : 'bg-primary/40 border-primary/30'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center flex flex-col items-center">
                            <span className="material-symbols-outlined text-6xl text-primary/20 mb-4">hourglass_empty</span>
                            <p className="text-slate-500 max-w-sm text-lg italic mt-4">
                                Bu kategori için henüz bir plan eklenmedi, ama hayallerimiz büyümeye devam ediyor...
                            </p>
                        </div>
                    )}
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
