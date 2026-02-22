import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white/50 border-t border-primary/10 py-12 text-center relative z-20">
            <p className="text-slate-500 text-sm font-medium">Sevgiyle yapıldı 2021-sonsuz</p>
            <div className="flex justify-center gap-4 mt-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">share</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">download</span>
                </div>
            </div>
        </footer>
    );
}
