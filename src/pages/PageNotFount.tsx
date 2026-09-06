import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound: React.FC = () => {
  return (
    <section className="bg-white min-h-[85vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-screen-sm mx-auto text-center">
        {/* Large 404 Heading */}
        <h1 className="mb-4 text-7xl lg:text-9xl tracking-tight font-extrabold font-['Sora'] text-blue-600">
          404
        </h1>

        {/* Subheading */}
        <p className="mb-4 text-3xl tracking-tight font-bold font-['Sora'] text-slate-900 md:text-4xl">
          Something's missing.
        </p>

        {/* Description */}
        <p className="mb-8 text-base lg:text-lg font-light text-slate-500">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-sm px-6 py-3 text-center transition-all shadow-lg shadow-blue-500/20"
        >
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
