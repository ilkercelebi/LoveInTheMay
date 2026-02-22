import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const tryPlayAudio = () => {
            if (audioRef.current && audioRef.current.paused) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        setIsPlaying(true);
                        document.removeEventListener('click', tryPlayAudio);
                        document.removeEventListener('touchstart', tryPlayAudio);
                        document.removeEventListener('scroll', tryPlayAudio);
                    }).catch(error => {
                        console.log("Otomatik oynatma engellendi, kullanıcının tıklaması gerekiyor.");
                        setIsPlaying(false);
                    });
                }
            }
        };

        // Sayfa ilk yüklendiğinde otomatik oynatmayı dene
        tryPlayAudio();

        // Eğer ilk deneme başarısız olursa (tarayıcı engellerse), kullanıcının herhangi bir etkileşiminde oynatmayı dene
        document.addEventListener('click', tryPlayAudio);
        document.addEventListener('touchstart', tryPlayAudio);
        document.addEventListener('scroll', tryPlayAudio, { once: true });

        return () => {
            document.removeEventListener('click', tryPlayAudio);
            document.removeEventListener('touchstart', tryPlayAudio);
            document.removeEventListener('scroll', tryPlayAudio);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-20">
            <nav className="flex items-center justify-between glass-nav px-8 py-3 rounded-full border border-primary/10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        <span className="material-symbols-outlined text-3xl">favorite</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">
                        Aşk Hikayemiz
                    </h2>
                </div>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#story">
                        Başlangıç
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#gallery">
                        Anılar
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#reasons">
                        Nedenlerim
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#letters">
                        Mektup
                    </a>
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#future">
                        Gelecek
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    {/* Audio Element - Kullanıcı buraya kendi MP3 dosyasının linkini veya public klasöründeki adını yazmalı */}
                    <audio ref={audioRef} loop autoPlay>
                        <source src="/LoveInTheMay/song.mp3" type="audio/mpeg" />
                    </audio>
                    <button onClick={togglePlay} className={`flex items-center justify-center size-10 rounded-full transition-all border ${isPlaying ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 pulse-btn' : 'bg-primary/10 text-primary hover:bg-primary/20 border-primary/20'}`}>
                        <span className="material-symbols-outlined">{isPlaying ? 'pause' : 'music_note'}</span>
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800"
                    >
                        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[100%] left-0 w-full px-6 mt-2">
                    <div className="flex flex-col gap-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border border-primary/10 shadow-lg relative z-50">
                        <a onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#story">
                            Başlangıç
                        </a>
                        <a onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#gallery">
                            Anılar
                        </a>
                        <a onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#reasons">
                            Nedenlerim
                        </a>
                        <a onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#letters">
                            Mektup
                        </a>
                        <a onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#future">
                            Gelecek
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
