import React from 'react';

export const ContactPage = () => {
    return (
       <div className="flex flex-col w-full flex-grow">
            <header className="pt-24 pb-12 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full text-center">
               <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Our Sanctuary</span>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Contact &amp; <span className="font-bold italic">Visit Us</span></h1>
           </header>
           <section className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full pb-24">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                       <div className="bg-surface-dark rounded-xl p-6 border border-[#2f3231]">
                           <h3 className="text-white font-bold text-lg mb-4">Store Hours</h3>
                           <ul className="flex flex-col gap-3 font-body text-sm text-text-muted">
                               <li className="flex justify-between items-center border-b border-[#2f3231] pb-2">
                                   <span>Mon - Fri</span>
                                   <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                               </li>
                           </ul>
                       </div>
                    </div>
                    <div className="lg:col-span-7 bg-surface-dark rounded-2xl p-6 md:p-10 border border-[#2f3231] order-1 lg:order-2 h-full">
                       <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Send us a Message</h2>
                       <form className="flex flex-col gap-6" onSubmit={(e)=>e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="flex flex-col gap-2">
                                   <label className="text-sm font-medium text-text-muted">Email Address</label>
                                   <input className="bg-background-dark border border-[#3f4241] rounded-lg h-12 px-4 text-white outline-none" placeholder="john@example.com" type="email"/>
                               </div>
                            </div>
                             <div className="flex flex-col gap-2">
                               <label className="text-sm font-medium text-text-muted">Message</label>
                               <textarea className="bg-background-dark border border-[#3f4241] rounded-lg p-4 text-white outline-none resize-none" rows={6}></textarea>
                           </div>
                           <button className="mt-2 h-14 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2" type="submit">Send Message</button>
                       </form>
                    </div>
               </div>
           </section>
       </div>
    );
};
