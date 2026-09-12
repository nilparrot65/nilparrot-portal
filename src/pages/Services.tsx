import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../componant/Header";

import {serviceCardData} from "../data/serviceData"

interface ServicesProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}

export const Services = ({ activeMenu, setActiveMenu }: ServicesProps) => {

const location = useLocation();

  useEffect(() => {    
    setActiveMenu(location.state.activeMenu===undefined?activeMenu:location.state.activeMenu);
  }, []);
  

  return (
    <>
      <div className="min-h-screen text-slate-900 font-sans antialiased">
        <Header activeMenu={activeMenu} />

        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider block mb-2">
                Full-stack capability
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] text-slate-900 mb-4">
                Everything you need under one roof
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Mix and match services to fit your stage — from a single design
                sprint to a fully managed product team.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCardData.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon Box */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center text-2xl font-bold mb-6 transition-transform group-hover:scale-110 duration-300`}
                    >
                      {service.title === "Product Strategy" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                      )}

                      {service.title === "UI/UX Design" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                          />
                        </svg>
                      )}

                      {service.title === "Web Development" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>

                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold font-['Sora'] text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div>
                    <Link
                      to="/service-details"
                      state={{serviceName:service.title}}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group-hover:translate-x-1 duration-200"
                    >
                      Learn more <i className="bi bi-arrow-right ms-1.5"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
