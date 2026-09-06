import { Link } from "react-router-dom";
import Header from "../componant/Header";

interface SinglePortfolioProps{
  activeMenu:string;
}

export const SinglePortfolio = ({activeMenu}:SinglePortfolioProps) => {
  return (
    <>
      <div className="min-h-screen text-slate-900 font-sans antialiased">
        {/* Page Header */}
        <Header activeMenu={activeMenu}/>

        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* PROJECT META */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-slate-50 border border-slate-100 rounded-3xl">
              <div>
                <span className="block text-slate-400 font-semibold uppercase tracking-widest text-xs mb-1">
                  Client
                </span>
                <p className="font-bold text-slate-900 mb-0">Payflow Inc.</p>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase tracking-widest text-xs mb-1">
                  Industry
                </span>
                <p className="font-bold text-slate-900 mb-0">FinTech</p>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase tracking-widest text-xs mb-1">
                  Services
                </span>
                <p className="font-bold text-slate-900 mb-0">
                  UI/UX, Development
                </p>
              </div>
              <div>
                <span className="block text-slate-400 font-semibold uppercase tracking-widest text-xs mb-1">
                  Timeline
                </span>
                <p className="font-bold text-slate-900 mb-0">10 weeks</p>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="mb-16 overflow-hidden rounded-3xl shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                className="w-full object-cover"
                style={{ aspectRatio: "2/1" }}
                alt="Payflow dashboard hero screenshot"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* MAIN CONTENT */}
              <div className="lg:col-span-8">
                {/* The Challenge */}
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                  The challenge
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mt-1 mb-4 text-slate-900">
                  A dashboard users were avoiding
                </h2>
                <p className="text-slate-600 text-base mb-8 leading-relaxed">
                  Payflow's payment analytics dashboard had grown organically
                  over five years, accumulating dense tables, inconsistent
                  navigation and confusing terminology. Internal data showed
                  only 22% of users opened the dashboard more than once a month
                  — most relied on exported spreadsheets instead.
                </p>

                {/* Our Approach */}
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                  Our approach
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mt-1 mb-4 text-slate-900">
                  Research-led redesign, shipped in phases
                </h2>
                <p className="text-slate-600 text-base mb-4 leading-relaxed">
                  We began with 14 user interviews and a full audit of support
                  tickets to identify the top friction points. From there, we
                  restructured the information architecture around three core
                  workflows: monitoring, reconciliation and reporting.
                </p>
                <p className="text-slate-600 text-base mb-8 leading-relaxed">
                  Rather than a full rebuild, we shipped the new dashboard in
                  three phases — each validated with a beta group of 40 users
                  before wider rollout, minimizing disruption to daily
                  operations.
                </p>

                {/* In-content Image */}
                <div className="mb-8 overflow-hidden rounded-2xl shadow-md border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop"
                    className="w-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                    alt="Redesigned analytics interface"
                  />
                </div>

                {/* The Result */}
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                  The result
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mt-1 mb-4 text-slate-900">
                  A dashboard people actually use
                </h2>
                <p className="text-slate-600 text-base mb-8 leading-relaxed">
                  Within three months of full rollout, weekly active usage of
                  the dashboard rose sharply and support tickets related to
                  reporting confusion dropped significantly. The new design
                  system also became the foundation for Payflow's mobile app
                  redesign, completed by their internal team six months later.
                </p>

                {/* Blockquote */}
                <blockquote className="border-s-4 border-blue-600 ps-6 py-4 my-8 bg-slate-50 rounded-e-2xl">
                  <p className="text-lg italic font-medium text-slate-900 mb-2">
                    "Nexora didn't just make it prettier — they fundamentally
                    rethought how our users work with data. The phased rollout
                    meant zero disruption to our team."
                  </p>
                  <footer className="text-slate-500 text-sm">
                    — Head of Product, Payflow Inc.
                  </footer>
                </blockquote>
              </div>

              {/* SIDEBAR */}
              <div className="lg:col-span-4 space-y-6">
                {/* Results at a Glance Widget */}
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl">
                  <h5 className="text-lg font-bold font-['Sora'] text-slate-900 mb-4">
                    Results at a glance
                  </h5>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                      Weekly active usage{" "}
                      <span className="text-emerald-600 font-bold">+64%</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                      Support tickets{" "}
                      <span className="text-emerald-600 font-bold">−38%</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                      Avg. session time{" "}
                      <span className="text-emerald-600 font-bold">+2.1x</span>
                    </li>
                    <li className="flex justify-between items-center">
                      Time to first insight{" "}
                      <span className="text-emerald-600 font-bold">−51%</span>
                    </li>
                  </ul>
                </div>

                {/* Tech & Tools Widget */}
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl">
                  <h5 className="text-lg font-bold font-['Sora'] text-slate-900 mb-4">
                    Tech &amp; Tools
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "React", "D3.js", "Node.js", "PostgreSQL"].map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-xl shadow-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-xl">
                  <div className="w-12 h-12 mb-4 bg-white/10 text-white rounded-2xl flex items-center justify-center text-xl">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                  <h5 className="text-xl font-bold font-['Sora'] text-white mb-2">
                    Like what you see?
                  </h5>
                  <p className="text-slate-400 text-sm mb-6">
                    Let's talk about your product's next chapter.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-sm px-5 py-3 text-center block transition-all shadow-lg shadow-blue-500/20"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>

            {/* PROJECT NAVIGATION */}
            <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 gap-4">
              <div>
                <Link
                  to="/portfolio-single"
                  className="group block text-decoration-none"
                >
                  <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1 group-hover:text-blue-600 transition-colors">
                    <i className="bi bi-arrow-left me-1"></i> Previous
                  </span>
                  <span className="font-bold text-slate-900 text-base md:text-lg block group-hover:text-blue-600 transition-colors">
                    Cloudra Brand Identity
                  </span>
                </Link>
              </div>
              <div className="text-end">
                <Link
                  to="/portfolio-single"
                  className="group block text-decoration-none"
                >
                  <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1 group-hover:text-blue-600 transition-colors">
                    Next <i className="bi bi-arrow-right ms-1"></i>
                  </span>
                  <span className="font-bold text-slate-900 text-base md:text-lg block group-hover:text-blue-600 transition-colors">
                    Metricly Analytics Platform
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePortfolio;
