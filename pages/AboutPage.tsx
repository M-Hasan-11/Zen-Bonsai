import React from 'react';
import { HERO_IMAGE } from '../data';

export const AboutPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="w-full h-[40vh] relative bg-background-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-10 lg:p-20 max-w-[1400px] mx-auto">
             <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Our <span className="font-bold italic">Heritage</span></h1>
        </div>
      </div>
      <section className="px-4 py-16 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-text-muted font-body leading-relaxed text-lg">
            <p>
                Founded in 1984 in the quiet Kyoto District of Portland, Zen Bonsai began as a small family passion project.
                What started with a single Black Pine brought over from Japan has grown into the Pacific Northwest's premier destination for specimen trees.
            </p>
            <p>
                We believe that bonsai is not just gardening—it is a conversation with time itself.
                Our master gardeners spend decades shaping these living sculptures, ensuring that when you take one home, you are becoming the custodian of a legacy.
            </p>
        </div>
      </section>
    </div>
  );
};
