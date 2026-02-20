import React from 'react';

export default function Finale() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative h-[100vh] min-h-[600px] w-full flex flex-col overflow-hidden bg-background-dark">
            {/* Romantic Hero Background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
                title="Romantik çift altın rengi gün batımına doğru yürüyor"
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsu93r2_WZyC59NeMnEqHFgGNM7mGNhOUVjncn6yyPBlRbw9ygzE9LJDx32eiORGJjlirbo7edrNabkMJtzX2Wzm9RdXVOiTZ3HN6VStsElgvE4Yvz67pAIKX0NNfdKsSlaCgKGJrG-RHxwoCjP02SSBuzj4c3NRYtn2UU8OZEauKUBeqcdgrXkIopGgGeKObmiD5et0xIsMCXbO0OH5peybhkjRzwF-s0kX7F_-EqkkSVnj5zJMGeLoXSKo3OH-9N5opi7fpPAA')" }}
            >
            </div>

            {/* Floating Hearts Layer */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="material-symbols-outlined heart-particle heart-1 text-xl opacity-30 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-2 text-2xl opacity-20 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-3 text-lg opacity-40 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-4 text-3xl opacity-25 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-5 text-xl opacity-35 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-6 text-2xl opacity-20 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-7 text-lg opacity-30 text-primary">favorite</span>
                <span className="material-symbols-outlined heart-particle heart-8 text-xl opacity-40 text-primary">favorite</span>
            </div>

            {/* Central Emotional Content */}
            <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight drop-shadow-2xl">
                            Ve Bu Sadece <br />
                            <span className="text-primary italic">Bir Başlangıç</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                            Aşk hikayemiz her geçen gün devam ediyor. Bu güzel yolculuğun bir parçası olduğun için teşekkür ederim.
                        </p>
                    </div>

                    <div className="pt-6 flex flex-col items-center gap-6">
                        <button
                            onClick={scrollToTop}
                            className="group flex min-w-[200px] items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
                        >
                            <span className="material-symbols-outlined group-hover:-rotate-180 transition-transform duration-500">sync</span>
                            <span className="truncate">Hikayemizi Başa Sar</span>
                        </button>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <span className="material-symbols-outlined text-primary text-sm">favorite</span>
                                <p className="text-white text-xs font-bold tracking-wider uppercase">Sonsuz Sevgi</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                                <p className="text-white text-xs font-bold tracking-wider uppercase">Sınırsız Hayal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Final Footer */}
            <footer className="relative z-20 w-full px-6 py-10 flex flex-col items-center justify-center gap-6">
                <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center">
                    Sonsuza Dek Birlikte • Sevgiyle Hazırlandı
                </p>
            </footer>
        </div>
    );
}
