import React from 'react';
import { WORKSHOPS } from '../data';

export const WorkshopsPage = () => {
    return (
       <div className="flex flex-col w-full">
           <section className="relative w-full min-h-[75vh] grid grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-1 flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-32 bg-background-dark border-b lg:border-b-0 lg:border-r border-[#2f3231]">
                   <div className="max-w-xl">
                       <h2 className="text-4xl md:text-5xl xl:text-6xl font-light text-white leading-[1.1] mb-6">
                           The Soul of <br/> <span className="font-bold italic">Yamadori.</span>
                       </h2>
                       <p className="text-text-muted text-lg leading-relaxed mb-8 font-body font-light max-w-md">
                           Join Master Kenjiro for an exclusive, full-day experience collecting and styling wild specimen trees.
                       </p>
                   </div>
               </div>
               <div className="order-1 lg:order-2 relative h-[40vh] lg:h-auto w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHGxpJGGs00-XcWwzv2I2zK06xK4VWi_1URSRGioDB5D6rlX_cnN3ZyngyeeHmue4TdTvO5izr0gDPLQ_IMJKOnMwlz_GpzdlxvJHcOSL7S31t3GgMgsHNU7bcpPt2iuCS0_O2sgKrcrT4LQw3srL5GkXhFa22NrSFIOpuYrNQnsbBIRfrJ699CZ5Skxks9vC9Ic5n1tUyPuQK0hIMd_tqH5LnIKV5CwtoITV9g_o5sZ-dN_qGFrf_xZALkNc3CBRda_iHgLBRibbK")'}}></div>
               </div>
           </section>
           <section className="px-4 py-20 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
               <h3 className="text-3xl font-bold text-white mb-6">Available Workshops</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {WORKSHOPS.map(workshop => (
                        <article key={workshop.id} className="flex flex-col bg-surface-dark rounded-xl overflow-hidden group border border-[#2f3231]">
                           <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${workshop.image}")`}}></div>
                           </div>
                           <div className="p-6 md:p-8 flex flex-col flex-1">
                               <span className="text-primary font-bold text-sm mb-1">{workshop.date} • {workshop.time}</span>
                               <h4 className="text-xl font-bold text-white mb-2">{workshop.title}</h4>
                                <div className="flex items-center justify-between pt-6 border-t border-[#2f3231] mt-auto">
                                   <span className="text-white font-bold text-lg">${workshop.price.toFixed(2)}</span>
                                   <button className="text-primary hover:text-white font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Book Now</button>
                               </div>
                           </div>
                        </article>
                    ))}
               </div>
           </section>
       </div>
    );
};
