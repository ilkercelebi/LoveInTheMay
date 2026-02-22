import React, { useState } from 'react';
import memory1 from '../assets/memories/kapadokya.jpeg';
import memory2 from '../assets/memories/kar_tatili.jpeg';
import memory3 from '../assets/memories/ayna_selfie.jpeg';
import memory4 from '../assets/memories/el_ele.jpeg';
import memory5 from '../assets/memories/at_turu.jpeg';

const memoriesData = [
    {
        id: 1,
        url: memory1,
        title: 'Kapadokya Maceramız',
        date: 'Güzel Günler',
        aspect: 'aspect-[3/4]',
        rotate: 'polaroid-rotate-left',
        category: 'Seyehat & Geziler'
    },
    {
        id: 2,
        url: memory2,
        title: 'Ayvalık Tatilimiz',
        date: 'Yaz Tatili',
        aspect: 'aspect-[4/5]',
        rotate: 'polaroid-rotate-right',
        category: 'Seyehat & Geziler'
    },
    {
        id: 3,
        url: memory3,
        title: 'Akşam Yemeği Öncesi',
        date: 'Ayna Selfie\'miz',
        aspect: 'aspect-[4/5]',
        rotate: 'polaroid-rotate-slight',
        category: 'Günlük Yaşam'
    },
    {
        id: 4,
        url: memory4,
        title: 'Kalp Kalbe',
        date: 'Birlikte',
        aspect: 'aspect-[3/4]',
        rotate: 'polaroid-rotate-left',
        category: 'Tatlı Anlar'
    },
    {
        id: 5,
        url: memory5,
        title: 'Doğa İle İç İçe',
        date: 'At Binme',
        aspect: 'aspect-[3/4]',
        rotate: 'polaroid-rotate-right',
        category: 'Seyehat & Geziler'
    }
];

const categories = ['Tüm Anlar', 'Seyehat & Geziler', 'Tatlı Anlar', 'Günlük Yaşam'];

export default function Memories() {
    const [slideshowOpen, setSlideshowOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('Tüm Anlar');

    const filteredMemories = activeFilter === 'Tüm Anlar'
        ? memoriesData
        : memoriesData.filter(mem => mem.category === activeFilter);

    // Otomatik Slayt Geçişi
    React.useEffect(() => {
        let interval;
        if (slideshowOpen) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % filteredMemories.length);
            }, 2000); // 2 saniyede bir otomatik geçiş
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [slideshowOpen, filteredMemories.length]);

    const openSlideshow = (index = 0) => {
        setCurrentIndex(index);
        setSlideshowOpen(true);
    };

    const closeSlideshow = () => setSlideshowOpen(false);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % filteredMemories.length);
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + filteredMemories.length) % filteredMemories.length);
    };

    return (
        <div className="relative flex h-auto w-full flex-col bg-gradient-to-b from-sky-50 to-white dark:from-background-dark dark:to-background-dark py-10">
            <main className="px-6 lg:px-20 max-w-[1280px] mx-auto w-full">
                {/* Page Title Section */}
                <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-[-0.033em]">Anılarımız</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
                            Bizi anlatan bir yolculuk – küçük kahve buluşmalarından büyük maceralara, zamanda yakalanan her bir an.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => openSlideshow(0)}
                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">play_circle</span>
                            Slayt Gösterisi
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-bold hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-lg">filter_list</span>
                            Filtrele
                        </button>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex border-b border-slate-200 dark:border-slate-800 mb-10 overflow-x-auto no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveFilter(cat);
                                setCurrentIndex(0);
                            }}
                            className={`flex items-center justify-center border-b-[3px] px-6 pb-3 pt-2 font-medium transition-colors whitespace-nowrap ${activeFilter === cat
                                ? 'border-primary text-primary font-bold'
                                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Polaroid Masonry Grid */}
                <div className="masonry-grid">
                    {filteredMemories.map((mem, index) => (
                        <div className="masonry-item" key={mem.id}>
                            <div
                                onClick={() => openSlideshow(index)}
                                className={`bg-white dark:bg-slate-800 p-4 shadow-xl ${mem.rotate} polaroid-hover transition-all duration-300 rounded-sm cursor-pointer`}
                            >
                                <div
                                    className={`w-full ${mem.aspect} bg-center bg-cover rounded-sm mb-4`}
                                    title={mem.title}
                                    style={{ backgroundImage: `url("${mem.url}")` }}
                                ></div>
                                <div className="px-1">
                                    <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">{mem.title}</p>
                                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">{mem.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Load More */}
                <div className="flex flex-col items-center justify-center py-16 gap-6">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="h-px w-20 bg-primary/20"></span>
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="h-px w-20 bg-primary/20"></span>
                        <span className="material-symbols-outlined">favorite</span>
                    </div>
                    <button className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-800 border-2 border-primary/20 rounded-full text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5">
                        Daha Fazla Anı Keşfet
                        <span className="material-symbols-outlined">arrow_downward</span>
                    </button>
                    <p className="text-slate-400 text-sm">Hikayemiz hala yazılıyor...</p>
                </div>

            </main>

            {/* Slideshow Modal */}
            {slideshowOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={closeSlideshow}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-10"
                        onClick={closeSlideshow}
                    >
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>

                    {/* Prev Button */}
                    <button
                        className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hidden md:flex z-10"
                        onClick={prevSlide}
                    >
                        <span className="material-symbols-outlined text-3xl">chevron_left</span>
                    </button>

                    {/* Container */}
                    <div className="relative max-w-5xl max-h-[90vh] w-full px-6 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>

                        <div className="relative flex justify-center w-full">
                            {filteredMemories.length > 0 && (
                                <img
                                    src={filteredMemories[currentIndex]?.url}
                                    alt={filteredMemories[currentIndex]?.title}
                                    className="max-h-[70vh] object-contain rounded-lg shadow-2xl"
                                />
                            )}
                        </div>

                        {filteredMemories.length > 0 && (
                            <div className="text-center mt-6">
                                <h3 className="text-white text-2xl md:text-3xl font-serif italic mb-2">{filteredMemories[currentIndex]?.title}</h3>
                                <p className="text-white/60 tracking-widest uppercase text-sm font-medium">{filteredMemories[currentIndex]?.date}</p>
                            </div>
                        )}

                        {/* Indicators & Mobile controls */}
                        <div className="flex flex-col items-center gap-6 mt-8">

                            <div className="flex md:hidden gap-6 w-full justify-center">
                                <button className="text-white bg-white/10 p-2 rounded-full" onClick={prevSlide}>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="text-white bg-white/10 p-2 rounded-full" onClick={nextSlide}>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>

                            <div className="flex gap-3">
                                {filteredMemories.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentIndex(idx);
                                        }}
                                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hidden md:flex z-10"
                        onClick={nextSlide}
                    >
                        <span className="material-symbols-outlined text-3xl">chevron_right</span>
                    </button>
                </div>
            )}
        </div>
    );
}
