import React from 'react';
import { ARTICLES } from '../data';

export const CarePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-12">
        <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-3 block">Knowledge Base</span>
                <h1 className="text-4xl font-bold text-white mb-4">Care Guides</h1>
                <p className="text-text-muted font-body">Everything you need to know to keep your bonsai thriving.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ARTICLES.map((article) => (
                    <div key={article.id} className="flex flex-col md:flex-row gap-6 bg-surface-dark border border-[#2f3231] rounded-xl p-4 group hover:border-primary/50 transition-colors cursor-pointer">
                        <div className="w-full md:w-1/3 aspect-square md:aspect-auto rounded-lg overflow-hidden relative">
                             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${article.image}")` }}></div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-primary text-xs font-bold uppercase mb-2">{article.category}</span>
                            <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                            <p className="text-text-muted text-sm font-body mb-4">{article.description}</p>
                            <span className="text-white text-xs font-bold underline decoration-primary">Read Guide</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
