import { useEffect } from "react";
import Header from "../componant/Header";

interface AboutProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}
export const About = ({ activeMenu, setActiveMenu }: AboutProps) => {
  useEffect(() => {
    setActiveMenu("about");
  }, []);
  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased">
      {/* Page Header */}
      <Header activeMenu={activeMenu} />

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=560&fit=crop"
                className="rounded-3xl w-full object-cover shadow-xl border border-slate-100"
                style={{ aspectRatio: "5/4" }}
                alt="Nilparrotstudio workspace"
              />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                Our story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] mt-1 mb-4 text-slate-900">
                Founded by operators, built for operators
              </h2>
              <p className="text-slate-600 text-base mb-4 leading-relaxed">
                Nilparrotstarted in 2014 when three product leads, frustrated
                with slow agency turnaround, decided to build the studio they
                wished they could hire. Over a decade later, we've shipped
                products for fintech, healthtech and B2B SaaS companies across
                34 countries.
              </p>
              <p className="text-slate-600 text-base mb-8 leading-relaxed">
                Today our team of 42 designers, engineers and strategists works
                in small, senior pods — each dedicated to two or three clients
                at a time so quality never slips.
              </p>

              {/* Feature Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      Since 2014
                    </strong>
                    <small className="text-slate-500 text-xs">
                      12 years operating
                    </small>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      Remote-first
                    </strong>
                    <small className="text-slate-500 text-xs">
                      Across 9 timezones
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
              What drives us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] mt-1 text-slate-900">
              The principles behind every engagement
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">
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
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2 text-slate-900">
                Outcomes over output
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We measure success in business impact, not hours logged or pages
                shipped.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-xl">
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
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2 text-slate-900">
                Radical transparency
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Shared boards, honest timelines, and direct access to the people
                doing the work.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
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
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2 text-slate-900">
                Craft as a default
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every detail — copy, spacing, micro-interaction — is treated as
                part of the product.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2 text-slate-900">
                Built to evolve
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We design systems and codebases that your internal team can
                extend long after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
            {/* Content Column */}
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mb-2">
                Want to work with us?
              </h2>
            </div>

            {/* Action Button Column */}
            <div className="shrink-0">
              <a
                href="contact.html"
                className="text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all shadow-lg shadow-blue-500/20 inline-flex items-center"
              >
                Get in Touch <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
