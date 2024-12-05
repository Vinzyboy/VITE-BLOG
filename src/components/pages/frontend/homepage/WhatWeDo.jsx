import { Circle, Sparkle, Target, TriangleRight } from "lucide-react";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-16 border-b border-light">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] gap-10">
          <h5 className="uppercase font-light">What We Do</h5>
          <div className="border-l border-light pl-16">
            <div className="cards-top grid grid-cols-2 divide-x-2 divide-light">
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
                <Circle size={70} strokeWidth={0.5} />
                <div className="max-w-[350px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal">
                    branding
                  </h4>
                  <p classname="w-[90%]">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start pl-10">
                <TriangleRight size={70} strokeWidth={0.5} />
                <div className="max-w-[350px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal">
                    Design
                  </h4>
                  <p classname="w-[90%]">
                    Innovative and aesthetic designs that bring your ideas to
                    life.
                  </p>
                </div>
              </div>
            </div>
            <div className=" cards-bottom grid grid-cols-2 mt-16 pt-16 border-t border-light divide-x-2 divide-light">
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start">
                <Target size={70} strokeWidth={0.5} />
                <div className="max-w-[350px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal">
                    Video
                  </h4>
                  <p classname="w-[90%]">
                    Captivating visual storytelling that engages and resonates
                    with your audience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[70px_1fr] gap-6 items-start pl-10">
                <Sparkle size={70} strokeWidth={0.5} />
                <div className="max-w-[350px]">
                  <h4 className="font-[syne] uppercase text-4xl font-normal">
                    Content
                  </h4>
                  <p classname="w-[90%]">
                    Engaging and persuasive content that captures attention and
                    sparks meaningful connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
