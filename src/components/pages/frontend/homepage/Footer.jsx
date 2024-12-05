import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr]">
          <div className="footer-info flex flex-col min-h-[300px] justify-between">
            <div>
              <h3 className="">FYLLA</h3>
              <ul className="space-y-2">
                <li>Fylla Digital Agency</li>
                <li>Main Street 16</li>
                <li>Lisbon</li>
              </ul>
            </div>

            <ul className="flex gap-5">
              <li className="size-[30px] center-all rounded-full border border-black text-sm hover:bg-black hover:text-white">
                <a href="">TW</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-sm hover:bg-black hover:text-white">
                <a href="">IN</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-sm hover:bg-black hover:text-white">
                <a href="">BE</a>
              </li>
            </ul>
          </div>
          <div className="footer-links grid grid-cols-3 gap-5 pl-5 border-l border-light">
            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">
                Pages
              </h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    contact
                  </Link>
                </li>
              </ul>
              <Link to="/" className="btn-animate" data-text="more templates">
                more templates
              </Link>
            </div>
            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">CMS</h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    work single
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    blog post
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    shop
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    shop single
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">
                UTILITY PAGES
              </h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    404 error page
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    password protected
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    styleguide
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    licensing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <div className="flex justify-between items-center uppercase border-t border-light pt-20 mt-10">
            <p>© Made by Pawel Gola - Powered by Webflow</p>
            <ul className="flex gap-5">
              <li>Privacy</li>
              <li>imprint</li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
