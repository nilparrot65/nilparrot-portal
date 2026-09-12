import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  activeMenu: string;
}

export const Header = ({ activeMenu }: HeaderProps) => {
  const map = new Map<string, string>();
  map.set("about", "About Nilparrot");
  map.set("services", "Services");
  map.set("portfolio", "Portfolio");
  map.set("contact", "Get In Touch");
  map.set("service-details", "Service Details");
  map.set("portfolio-single", "Single Portfolio");
  map.set("privacy-policy", "Privacy Policy");
  map.set("refund-policy", "Refund Policy");
  map.set("terms-and-conditions", "Terms & Conditions");

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", { state: { activeMenu: "home" } });
  };

  const navigateToService = () => {
    navigate("/services", { state: { activeMenu: "services" } });
  };

  const navigateToPortfolio = () => {
    navigate("/portfolio", { state: { activeMenu: "portfolio" } });
  };

  return (
    <>
      {activeMenu === "home" ? (
        <div>
          {/* Page Header */}
          <header className="pt-14 pb-16 bg-gradient-to-b from-indigo-100 to-white text-white text-center">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* HERO CONTENT */}
                <div className="lg:col-span-6 text-center lg:text-left">
                  <span className="inline-block text-blue-600 font-semibold text-xs uppercase tracking-wider mb-4 px-3 py-1 bg-blue-50 rounded-full">
                    Trusted by 480+ growing companies
                  </span>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Sora'] text-slate-900 tracking-tight mb-6 leading-tight">
                    Build, launch and scale your{" "}
                    <span className="text-blue-600">digital product</span>{" "}
                    faster.
                  </h1>

                  <p className="text-lg text-slate-600 mb-8 max-w-[540px] mx-auto lg:mx-0 leading-relaxed">
                    Nilparrot is your end-to-end product partner — strategy, design
                    and engineering teams that ship measurable results for SaaS
                    and tech-driven businesses.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3.5 transition-all shadow-lg shadow-blue-500/20"
                    >
                      Start a Project{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                    <Link
                      to="/services"
                      state={{activeMenu:"services"}}
                      className="inline-flex items-center justify-center text-slate-700 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-200 font-semibold rounded-xl text-base px-6 py-3.5 transition-all"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>

                {/* HERO VISUAL MOCKUP & BADGES */}
                <div className="lg:col-span-6 relative">
                  <div className="relative mx-auto max-w-[480px]">
                    {/* Main Mock Card */}
                    <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl shadow-2xl relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F56] block"></span>
                          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] block"></span>
                          <span className="w-3 h-3 rounded-full bg-[#27C93F] block"></span>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full border border-emerald-200/60">
                          Live
                        </span>
                      </div>

                      <div className="h-3 bg-slate-200 rounded-full w-[90%] mb-3"></div>
                      <div className="h-3 bg-slate-200 rounded-full w-[65%] mb-6"></div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                          <i className="bi bi-graph-up-arrow text-blue-600 text-xl"></i>
                          <div className="font-bold text-slate-900 text-lg mt-2 font-['Sora']">
                            +148%
                          </div>
                          <small className="text-slate-500 text-xs">
                            Conversions
                          </small>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#F4F0FF] border border-purple-100 shadow-sm">
                          <i className="bi bi-people text-purple-600 text-xl"></i>
                          <div className="font-bold text-slate-900 text-lg mt-2 font-['Sora']">
                            12.4k
                          </div>
                          <small className="text-slate-500 text-xs">
                            Active Users
                          </small>
                        </div>
                      </div>

                      <div className="h-[70px] rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 w-full border border-slate-100"></div>
                    </div>

                    {/* Floating Badge 1 (Delivered) */}
                    <div className="hidden sm:flex items-center gap-3 absolute -top-6 -left-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        Project Delivered
                        <br />
                        <span className="text-slate-500 font-normal text-xs">
                          On time, every time
                        </span>
                      </div>
                    </div>

                    {/* Floating Badge 2 (ROI) */}
                    <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        Avg. 3.2x ROI
                        <br />
                        <span className="text-slate-500 font-normal text-xs">
                          within 6 months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      ) : (
        <div>
          {/* <h1 className="mx-40">{activeMenu}</h1> */}
          <header className="pt-32 pb-16 bg-gradient-to-b from-green-200 to-indigo-800 text-white text-center">
            <div className="max-w-screen-xl mx-auto px-4">
              <h1 className="text-4xl font-extrabold tracking-tight font-['Sora'] mb-3">
                {map.get(activeMenu)}
              </h1>
              <nav className="flex justify-center text-sm text-slate-900 space-x-2">
                {!["service-details", "portfolio-single"].includes(
                  activeMenu,
                ) && (
                  <span
                    className="cursor-pointer hover:text-white"
                    onClick={navigateToHome}
                  >
                    home
                  </span>
                )}
                {["service-details"].includes(activeMenu) && (
                  <>
                    <span
                      className="cursor-pointer hover:text-white"
                      onClick={navigateToHome}
                    >
                      home
                    </span>
                    <span className="mr1">/</span>
                    <span
                      className="cursor-pointer hover:text-white"
                      onClick={navigateToService}
                    >
                      services
                    </span>
                  </>
                )}
                {["portfolio-single"].includes(activeMenu) && (
                  <>
                    <span
                      className="cursor-pointer hover:text-white"
                      onClick={navigateToHome}
                    >
                      home
                    </span>
                    <span className="mr1">/</span>
                    <span
                      className="cursor-pointer hover:text-white"
                      onClick={navigateToPortfolio}
                    >
                      portfolio
                    </span>
                  </>
                )}
                <span>/</span>
                <span className="text-green-400 font-medium">{activeMenu}</span>
              </nav>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Header;
