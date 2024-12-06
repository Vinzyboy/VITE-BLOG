import React from "react";
import { Link } from "react-router-dom";

const News = ({title}) => {
  return (
    <section className="py-16 border-b border-light">
      <div className="container">
        <div className="flex justify-between items-center pb-10 mb-10 border-y border-light">
          <h2 className="uppercase text-center py-10 text-7xl font-normal font-[syne] ">
            {title}
          </h2>
          <Link to="/" className="btn-animate" data-text="see all">
            see all
          </Link>
        </div>
        <div className="grid grid-cols-3 divide-x divide-black ">
          <div className="card-news pr-5">
            <img
              src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f155fb2692636d3656aa_blog-01-preview-p-800.webp"
              alt=""
              className="w-full rounded-lg h-[250px] object-cover"
            />

            <small className="uppercase text-lg font-['syne'] block my-3">
              branding
            </small>
            <Link to="/" className="text-2xl">
              Things to Look for When Comparing Branding Alternatives
            </Link>
          </div>
          <div className="card-news px-5">
            <img
              src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f133abcbabd997eaf454_blog-02-preview-p-800.webp"
              alt=""
              className="w-full rounded-lg h-[250px] object-cover"
            />

            <small className="uppercase text-lg font-['syne'] block my-3">
              branding
            </small>
            <Link to="/" className="text-2xl">
              Things to Look for When Comparing Branding Alternatives
            </Link>
          </div>
          <div className="card-news pl-6">
            <img
              src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f124dae2e954a48e3eef_blog-03-preview-p-800.webp"
              alt=""
              className="w-full rounded-lg h-[250px] object-cover"
            />

            <small className="uppercase text-lg font-['syne'] block my-3">
              branding
            </small>
            <Link to="/" className="text-2xl">
              Things to Look for When Comparing Branding Alternatives
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
