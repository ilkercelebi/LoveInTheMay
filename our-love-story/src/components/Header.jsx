import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Otomatik oynatmayı denemek için sayfa yüklendiğinde çalışır
        if (audioRef.current) {
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Tarayıcı izin verirse otomatik oynatmaya başlar
                    setIsPlaying(true);
                }).catch(error => {
                    // Tarayıcı otomatik sesi engelleyebilir (kullanıcı etkileşimi gerekebilir)
                    console.log("Otomatik oynatma engellendi, kullanıcının tıklaması gerekiyor.");
                    setIsPlaying(false);
                });
            }
        }
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
                    <a className="text-sm font-semibold hover:text-primary transition-colors text-slate-700 dark:text-slate-200" href="#timeline">
                        Zaman Çizelgesi
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
                    <button className="md:hidden flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
