import React from 'react';

export default function Memories() {
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
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors">
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
                    <a className="flex items-center justify-center border-b-[3px] border-primary text-primary px-6 pb-3 pt-2 font-bold whitespace-nowrap" href="#">Tüm Anlar</a>
                    <a className="flex items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 px-6 pb-3 pt-2 font-medium hover:text-primary transition-colors whitespace-nowrap" href="#">Seyehat & Geziler</a>
                    <a className="flex items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 px-6 pb-3 pt-2 font-medium hover:text-primary transition-colors whitespace-nowrap" href="#">Yıldönümleri</a>
                    <a className="flex items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 px-6 pb-3 pt-2 font-medium hover:text-primary transition-colors whitespace-nowrap" href="#">Günlük Yaşam</a>
                </div>

                {/* Polaroid Masonry Grid */}
                <div className="masonry-grid">
                    {/* Polaroid Item 1 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-left polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[4/5] bg-center bg-cover rounded-sm mb-4"
                                title="Çiçek tarlasında birlikte gülen çift"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBx-v8p6YKSBI_CY9t9RnvKhJ5qpf6xR9uome7-ulqzpKt5Qi3Qjokoe-BXb--rJl4W5xgCNvrQ63tmiwO28jopgwtbQSpHnYJZIPBHUSG_ACrIBF0K7jEwmXy-QaC9gPeAcLkqwCLo8o7hBL8vxxSzbCzeciUTPis7JyMStpqGyuSUX5z0N7MdeWuNoeZ5say6HiYAjcXkd_mkw-_yZuCshdCgBbNt_LLoe6Tm-GJWX_tNyfjqRBCbdlQXZKRby8XRte4wxalEng")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Tanıştığımız gün...</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">12 Nisan 2021</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 2 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-right polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[1/1] bg-center bg-cover rounded-sm mb-4"
                                title="Sonsuza dek tutunmak"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUjn6cge48ULGnCi2ZV6vJDzCHN1ewLe2dH1yK3A6AOS7cHngWZeI5Q9GY8OtbF3xsW7lTZQx8awsH270lIvIk-5ydR_CwNBcweZtIJIgAGFg22YBemW3g8dTw0N1zzC7seQDHkjvGxCI6h9NwXyrrRbfbdqvLYm7Jto1iweJy8G8aC9FFu3qK8fwega8VoZQQI1kdHNQFUkVNNiT70P0QxxAMXgWbL4QNQPeLeol6wVcIjEBMsBhsxAwezSw5HOhxwZMNK4Nblg")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Sonsuza dek el ele</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Sahil Yürüyüşü '22</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 3 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-slight polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[3/4] bg-center bg-cover rounded-sm mb-4"
                                title="Dünyanın zirvesi"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjodGAr3noooP41u1qK0flZzoqUsRaJ28kiHMGyfZarJQkD94HBhA2PYHRTJYP3j50mxDdiyO6FE7Bk_b1AVm-S5AFsfeabOTGNUHphKa23xEdb57GuQWyaEdJfTqOn-_rMAhp01Dk7uMkTRRjtqrxg_-MAoN-_RvFrpmqCM5qs9wa6z0qbLLsZwg5KAEW1NNJ_D_bjcs_HVNiy86YR2C49OR-4rc1qQIq_vMof5t6-7taNa7u7gkeOqb5WZvl3AMj83Aj6bc_YQ")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Dünyanın zirvesinde</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">İsviçre Alpleri Gezisi</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 4 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-right polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[4/5] bg-center bg-cover rounded-sm mb-4"
                                title="İlk yıldönümümüz"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9idxw5QhBMN0434zW2lLxNl1bD8F1E7N9KHoTeafHGuJTHuOcZ-VNkGAE0tHKjKVSaK1lRzNPfCgwdCHY6AAaIN6m4Ken2C_CaXVLuiDELcKVXcg1FOXqTitTKsArp2s1pfUOKneJaPUyCvjWL20pmzLOMuGnVyry9RoBJ30G0z4-NFKOAI1aLBqIvjvXOZiBRPyRMkfKWm3DzhoWIfdggul85vK1CaVcGEdTIlmEpnhqgD7dyvuUpIqpomwlTfIwr5eTxJpVSQ")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">İlk yıldönümümüz</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">20 Mayıs 2022</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 5 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-left polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[1/1] bg-center bg-cover rounded-sm mb-4"
                                title="Arkadaşlarla yaz günleri"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGJkP4ND4gNA82qwcOyawk_LeNO8dJ4hLGM62jXvyzo2cZi3rUyW0_T-OFWWIkHr-wCruaeZk6CLaGU2fWgIBBJKPEVo73Z8RwRwjDPk3GXZQk2eTcaEAYIotYoIAiLofZmGu4JhNTmi4kA2PenW8MSSqGgJjjUtBv0csBk0JifzKWEl4snopGVYhd5gPuklhpDBd_jjWWDiVzVSr5Xhs7hKmMb1tuSf2CSeQkSl2Bk1aZe5Fla8mM7wzaLhJHs6zjZR14LfVJJg")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Arkadaşlarla yaz günleri</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Piknik Parkı</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 6 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-slight polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[4/3] bg-center bg-cover rounded-sm mb-4"
                                title="Yağmurlu kahve buluşmaları"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlJ9NCLdKe7qOIXedwmPux8Z9Zwvurst9fwa2nPEmxgZ8t4xfYVrHQ_nQDDHUN_ZgE2Xfeh62NaDUu_hUVS091G7efC4Lbmu2b2syl9kov-q52qPSIjT9AxrtohcDtX_DeObTEvaDTM0gj5yXQZaxrxfqWcWPqrsiPTIkzyC6-TTL8vEsLKbAmeKMzp3sy8GavRFHTmyWoNGXrNpI8ZZgQ5RKCegt2O89Jw0uTY1xkwHh8inIJUtgNnKcdxlCxdJnqt8vOim8qcw")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Yağmurlu kahve buluşmaları</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Merkez Kafe</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 7 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-left polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[3/4] bg-center bg-cover rounded-sm mb-4"
                                title="Sadece ikimiz, dans ederken"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiZPx4WZCnFdHuA9XmH1PiYOXAJXLu0lc9_Xv9YEDUN4g8iVoNh7pJNqaDadUn0jDcwEqIyYNtTGPyUFD56NwG_9rMSZW7qUfezKWEg9XpOVEmwGWWEmlxnovIqn387nVXH9HFcMcbZJdQjlbC2iJKEJ_HHcqltpwajQ-Iray7Gb1Y6plGVCimSUfRxacBVxTp4X0_xNuQhNfYAiOyPQfFbXH2pBY9o7l0RxI2f1VcE0PXKpzI8FS0QK0k4OplfolfVre2BGHP4g")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Sadece ikimiz, dans ederken</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Oturma odamız</p>
                            </div>
                        </div>
                    </div>

                    {/* Polaroid Item 8 */}
                    <div className="masonry-item">
                        <div className="bg-white dark:bg-slate-800 p-4 shadow-xl polaroid-rotate-right polaroid-hover transition-all duration-300 rounded-sm">
                            <div
                                className="w-full aspect-[4/5] bg-center bg-cover rounded-sm mb-4"
                                title="Yavaş pazar sabahları"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK-GCSvwHypFAWhuTSKzD9KfBPXd49WW6eB7p_IonYQhWd4ySEiRaUkXhH4gNDnzjtFY_xDI0Mzf94C6i_yAAETBKJOb3lpAaDhh2Ief9AYmkgiocDp1pCPTYNv0xd9ICMjtYYHzdj317aslo7BlNGQzVcZGx3zeR5btj6R1LmD0gRBdqYQxUHOBGV6mMIU5D5pBHSlyjMh93ZmHYfqUjRckAjpxRVJHXpu4kr_bfkpNsS9VBwmW9eCtRhkrE7ne_geND-eYFOQQ")' }}
                            ></div>
                            <div className="px-1">
                                <p className="text-slate-800 dark:text-slate-200 text-lg font-medium italic">Yavaş pazar sabahları</p>
                                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest">Güzel Evimiz</p>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
}
