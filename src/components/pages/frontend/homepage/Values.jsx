import React from "react";

const Values = () => {
  return (
    <section className="values py-16 border-b border-light">
      <h2 className="uppercase text-center py-10 border-b border-light text-7xl font-normal font-[syne] ">
        our values
      </h2>
      <div className="container">
        <div className="grid grid-cols-2 pt-10">
          <div className="value-img pr-5">
            <img
              src="https://assets-global.website-files.com/63661389dd2417f19a0d89d3/63695645ae15af53f7884f58_home-values-p-1080.webp"
              alt=""
              className="rounded-xl  h-full object-cover"
            />
          </div>
          <div className="value-content pl-14 border-l border-light ">
            <div className="space-y-10">
              <div className="grid grid-cols-[40px_1fr] items-start gap-7 py-5 border-b border-light">
                <span className="size-[40px] block center-all rounded-full border border-light text-lg">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] uppercase font-normal text-3xl">
                    vision
                  </h4>
                  <p className="text-lg leading-relaxed">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] items-start gap-7 py-5 border-b border-light">
                <span className="size-[40px] block center-all rounded-full border border-light text-lg">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] uppercase font-normal text-3xl">
                    vision
                  </h4>
                  <p className="text-lg leading-relaxed">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] items-start gap-7 py-5">
                <span className="size-[40px] block center-all rounded-full border border-light text-lg">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] uppercase font-normal text-3xl">
                    vision
                  </h4>
                  <p className="text-lg leading-relaxed">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
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

export default Values;
