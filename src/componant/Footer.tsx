import React from "react";

import { menuItemsData } from "../data/menu";
import { Link } from "react-router-dom";
import type { Menu } from "../model/Menu";
import {serviceCardData} from "../data/serviceData"

function Footer() {

  const menuItems: Menu[] = menuItemsData.slice(1, -1);

  return (
    <>
      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <a
                href="index.html"
                className="text-2xl font-extrabold font-['Sora'] tracking-tight text-white mb-4 inline-block"
              >
                nilparrot<span className="text-blue-500">.</span>
              </a>
              <p className="text-slate-400 text-sm mb-6 max-w-xs">
                We help ambitious SaaS and tech companies design, build and
                scale digital products that customers love.
              </p>
              <p className="text-slate-400 text-sm mb-6 max-w-xs hover:text-white">info@nilparrot.com</p>
              <ul>
                <li className="text-slate-400 text-sm max-w-xs">
                  Company Reg No: UDYAM-MH-26-1221044
                </li>
                <li className="text-slate-400 text-sm max-w-xs">
                  GST No: 1221044
                </li>
              </ul>
              <div className="flex space-x-3 mt-6">
                <Link
                  to="#"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h6 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
                Company
              </h6>
              <ul className="space-y-2 text-sm text-slate-400">
                {menuItems.map(menu=>(
                <li>
                  <Link
                    to={menu.href}
                    className="hover:text-white transition-colors"
                  >
                    {menu.label}
                  </Link>
                </li>  
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h6 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
                Services
              </h6>
              <ul className="space-y-2 text-sm text-slate-400">
                {serviceCardData.map(service=>(<li>
                  <Link
                    to="/service-details" state={{serviceName:service.title}}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h6 className="font-bold text-white uppercase text-xs tracking-wider mb-4">
                Stay updated with digital insights
              </h6>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border border-white/10 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl text-sm px-5 py-3 transition-all shrink-0"
                >
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
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
            <p className="mb-0 flex flex-wrap items-center">
              &copy; 2026 nilparrot. All rights reserved
            </p>
            <div className="flex space-x-6">
              <Link to="privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="terms-and-conditions" className="hover:text-white transition-colors">
                Terms And Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
