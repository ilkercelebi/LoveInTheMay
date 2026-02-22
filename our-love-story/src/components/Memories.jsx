import React, { useState } from 'react';

const memoriesData = [
    {
        id: 1,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx-v8p6YKSBI_CY9t9RnvKhJ5qpf6xR9uome7-ulqzpKt5Qi3Qjokoe-BXb--rJl4W5xgCNvrQ63tmiwO28jopgwtbQSpHnYJZIPBHUSG_ACrIBF0K7jEwmXy-QaC9gPeAcLkqwCLo8o7hBL8vxxSzbCzeciUTPis7JyMStpqGyuSUX5z0N7MdeWuNoeZ5say6HiYAjcXkd_mkw-_yZuCshdCgBbNt_LLoe6Tm-GJWX_tNyfjqRBCbdlQXZKRby8XRte4wxalEng',
        title: 'Tanıştığımız gün...',
        date: '12 Nisan 2021',
        aspect: 'aspect-[4/5]',
        rotate: 'polaroid-rotate-left',
        category: 'Yıldönümleri'
    },
    {
        id: 2,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjn6cge48ULGnCi2ZV6vJDzCHN1ewLe2dH1yK3A6AOS7cHngWZeI5Q9GY8OtbF3xsW7lTZQx8awsH270lIvIk-5ydR_CwNBcweZtIJIgAGFg22YBemW3g8dTw0N1zzC7seQDHkjvGxCI6h9NwXyrrRbfbdqvLYm7Jto1iweJy8G8aC9FFu3qK8fwega8VoZQQI1kdHNQFUkVNNiT70P0QxxAMXgWbL4QNQPeLeol6wVcIjEBMsBhsxAwezSw5HOhxwZMNK4Nblg',
        title: 'Sonsuza dek el ele',
        date: "Sahil Yürüyüşü '22",
        aspect: 'aspect-[1/1]',
        rotate: 'polaroid-rotate-right',
        category: 'Seyehat & Geziler'
    },
    {
        id: 3,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjodGAr3noooP41u1qK0flZzoqUsRaJ28kiHMGyfZarJQkD94HBhA2PYHRTJYP3j50mxDdiyO6FE7Bk_b1AVm-S5AFsfeabOTGNUHphKa23xEdb57GuQWyaEdJfTqOn-_rMAhp01Dk7uMkTRRjtqrxg_-MAoN-_RvFrpmqCM5qs9wa6z0qbLLsZwg5KAEW1NNJ_D_bjcs_HVNiy86YR2C49OR-4rc1qQIq_vMof5t6-7taNa7u7gkeOqb5WZvl3AMj83Aj6bc_YQ',
        title: 'Dünyanın zirvesinde',
        date: 'İsviçre Alpleri Gezisi',
        aspect: 'aspect-[3/4]',
        rotate: 'polaroid-rotate-slight',
        category: 'Seyehat & Geziler'
    },
    {
        id: 4,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9idxw5QhBMN0434zW2lLxNl1bD8F1E7N9KHoTeafHGuJTHuOcZ-VNkGAE0tHKjKVSaK1lRzNPfCgwdCHY6AAaIN6m4Ken2C_CaXVLuiDELcKVXcg1FOXqTitTKsArp2s1pfUOKneJaPUyCvjWL20pmzLOMuGnVyry9RoBJ30G0z4-NFKOAI1aLBqIvjvXOZiBRPyRMkfKWm3DzhoWIfdggul85vK1CaVcGEdTIlmEpnhqgD7dyvuUpIqpomwlTfIwr5eTxJpVSQ',
        title: 'İlk yıldönümümüz',
        date: '20 Mayıs 2022',
        aspect: 'aspect-[4/5]',
        rotate: 'polaroid-rotate-right',
        category: 'Yıldönümleri'
    },
    {
        id: 5,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGJkP4ND4gNA82qwcOyawk_LeNO8dJ4hLGM62jXvyzo2cZi3rUyW0_T-OFWWIkHr-wCruaeZk6CLaGU2fWgIBBJKPEVo73Z8RwRwjDPk3GXZQk2eTcaEAYIotYoIAiLofZmGu4JhNTmi4kA2PenW8MSSqGgJjjUtBv0csBk0JifzKWEl4snopGVYhd5gPuklhpDBd_jjWWDiVzVSr5Xhs7hKmMb1tuSf2CSeQkSl2Bk1aZe5Fla8mM7wzaLhJHs6zjZR14LfVJJg',
        title: 'Arkadaşlarla yaz günleri',
        date: 'Piknik Parkı',
        aspect: 'aspect-[1/1]',
        rotate: 'polaroid-rotate-left',
        category: 'Günlük Yaşam'
    },
    {
        id: 6,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlJ9NCLdKe7qOIXedwmPux8Z9Zwvurst9fwa2nPEmxgZ8t4xfYVrHQ_nQDDHUN_ZgE2Xfeh62NaDUu_hUVS091G7efC4Lbmu2b2syl9kov-q52qPSIjT9AxrtohcDtX_DeObTEvaDTM0gj5yXQZaxrxfqWcWPqrsiPTIkzyC6-TTL8vEsLKbAmeKMzp3sy8GavRFHTmyWoNGXrNpI8ZZgQ5RKCegt2O89Jw0uTY1xkwHh8inIJUtgNnKcdxlCxdJnqt8vOim8qcw',
        title: 'Yağmurlu kahve buluşmaları',
        date: 'Merkez Kafe',
        aspect: 'aspect-[4/3]',
        rotate: 'polaroid-rotate-slight',
        category: 'Günlük Yaşam'
    },
    {
        id: 7,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiZPx4WZCnFdHuA9XmH1PiYOXAJXLu0lc9_Xv9YEDUN4g8iVoNh7pJNqaDadUn0jDcwEqIyYNtTGPyUFD56NwG_9rMSZW7qUfezKWEg9XpOVEmwGWWEmlxnovIqn387nVXH9HFcMcbZJdQjlbC2iJKEJ_HHcqltpwajQ-Iray7Gb1Y6plGVCimSUfRxacBVxTp4X0_xNuQhNfYAiOyPQfFbXH2pBY9o7l0RxI2f1VcE0PXKpzI8FS0QK0k4OplfolfVre2BGHP4g',
        title: 'Sadece ikimiz, dans ederken',
        date: 'Oturma odamız',
        aspect: 'aspect-[3/4]',
        rotate: 'polaroid-rotate-left',
        category: 'Günlük Yaşam'
    },
    {
        id: 8,
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK-GCSvwHypFAWhuTSKzD9KfBPXd49WW6eB7p_IonYQhWd4ySEiRaUkXhH4gNDnzjtFY_xDI0Mzf94C6i_yAAETBKJOb3lpAaDhh2Ief9AYmkgiocDp1pCPTYNv0xd9ICMjtYYHzdj317aslo7BlNGQzVcZGx3zeR5btj6R1LmD0gRBdqYQxUHOBGV6mMIU5D5pBHSlyjMh93ZmHYfqUjRckAjpxRVJHXpu4kr_bfkpNsS9VBwmW9eCtRhkrE7ne_geND-eYFOQQ',
        title: 'Yavaş pazar sabahları',
        date: 'Güzel Evimiz',
        aspect: 'aspect-[4/5]',
        rotate: 'polaroid-rotate-right',
        category: 'Günlük Yaşam'
    }
];

const categories = ['Tüm Anlar', 'Seyehat & Geziler', 'Yıldönümleri', 'Günlük Yaşam'];

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
            }, 3000); // 3 saniyede bir otomatik geçiş
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
