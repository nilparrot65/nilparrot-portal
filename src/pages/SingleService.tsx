import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../componant/Header";

interface SingleServiceProps {
  activeMenu: string;
}
interface LocationState {
  serviceName: string;
}
export const SingleService = ({ activeMenu }: SingleServiceProps) => {
  const services: string[] = [
    "Product Strategy",
    "UI/UX Design",
    "Web Development",
  ];
  // Accordion state management
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationState | null;
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (!state) {
      navigate("/services", { replace: true });
    }
  }, [state]);

  return (
    <>
      <div className="min-h-screen text-slate-900 font-sans antialiased">
        <Header activeMenu={activeMenu} />

        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* MAIN CONTENT */}
              <div className="lg:col-span-8">
                {/* Service Hero Image */}
                <div className="mb-8 overflow-hidden rounded-3xl shadow-xl border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=500&fit=crop"
                    className="w-full object-cover"
                    style={{ aspectRatio: "16/9" }}
                    alt="UI design wireframes on screen"
                  />
                </div>

                {/* Service Overview */}
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                  Service overview
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mt-1 mb-4 text-slate-900">
                  Interfaces that look great and convert better
                </h2>
                <p className="text-slate-600 text-base mb-4 leading-relaxed">
                  Good design isn't decoration — it's the difference between a
                  user completing a checkout flow or abandoning it. Our UI/UX
                  design service covers everything from early research to a
                  fully documented design system, handed off in developer-ready
                  Figma files.
                </p>
                <p className="text-slate-600 text-base mb-10 leading-relaxed">
                  We start with stakeholder interviews and usability audits of
                  your current product, then move into low-fidelity wireframes,
                  validating flows with real users before investing in
                  high-fidelity visuals. Every project ends with a component
                  library that keeps your product consistent as it grows.
                </p>

                {/* What's Included */}
                <h3 className="text-xl font-bold font-['Sora'] mb-6 text-slate-900">
                  What's included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                      <i className="bi bi-search"></i>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1 font-['Sora']">
                        User Research
                      </strong>
                      <span className="text-slate-500 text-sm">
                        Interviews, surveys and usability testing.
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                      <i className="bi bi-diagram-3"></i>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1 font-['Sora']">
                        Information Architecture
                      </strong>
                      <span className="text-slate-500 text-sm">
                        Sitemaps and user-flow diagrams.
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                      <i className="bi bi-pencil-square"></i>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1 font-['Sora']">
                        Wireframing
                      </strong>
                      <span className="text-slate-500 text-sm">
                        Low-fidelity flows for rapid validation.
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold">
                      <i className="bi bi-layers"></i>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1 font-['Sora']">
                        Design Systems
                      </strong>
                      <span className="text-slate-500 text-sm">
                        Reusable components, tokens and docs.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <h3 className="text-xl font-bold font-['Sora'] mb-6 text-slate-900">
                  Our process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden">
                    <span className="text-5xl font-black text-slate-200/80 absolute top-4 right-4 font-['Sora']">
                      01
                    </span>
                    <h4 className="text-lg font-bold font-['Sora'] text-slate-900 mb-2 relative z-10">
                      Research &amp; Audit
                    </h4>
                    <p className="text-slate-600 text-sm mb-0 relative z-10">
                      We review analytics, run usability tests and interview
                      your users to find friction points.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden">
                    <span className="text-5xl font-black text-slate-200/80 absolute top-4 right-4 font-['Sora']">
                      02
                    </span>
                    <h4 className="text-lg font-bold font-['Sora'] text-slate-900 mb-2 relative z-10">
                      Wireframes
                    </h4>
                    <p className="text-slate-600 text-sm mb-0 relative z-10">
                      Structured low-fidelity flows reviewed with stakeholders
                      before visual design starts.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden">
                    <span className="text-5xl font-black text-slate-200/80 absolute top-4 right-4 font-['Sora']">
                      03
                    </span>
                    <h4 className="text-lg font-bold font-['Sora'] text-slate-900 mb-2 relative z-10">
                      Visual Design
                    </h4>
                    <p className="text-slate-600 text-sm mb-0 relative z-10">
                      High-fidelity screens built on a documented design system
                      and component library.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden">
                    <span className="text-5xl font-black text-slate-200/80 absolute top-4 right-4 font-['Sora']">
                      04
                    </span>
                    <h4 className="text-lg font-bold font-['Sora'] text-slate-900 mb-2 relative z-10">
                      Handoff &amp; Support
                    </h4>
                    <p className="text-slate-600 text-sm mb-0 relative z-10">
                      Developer-ready files, specs, and 30 days of post-handoff
                      design support.
                    </p>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <h3 className="text-xl font-bold font-['Sora'] mb-6 text-slate-900">
                  Common questions
                </h3>
                <div className="space-y-4">
                  {/* Accordion Item 1 */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(0)}
                      className="w-full p-5 text-left font-bold font-['Sora'] text-slate-900 bg-slate-50 hover:bg-slate-100/80 flex justify-between items-center transition-colors"
                    >
                      <span>How long does a typical design project take?</span>
                      <i
                        className={`bi bi-chevron-down transition-transform duration-300 ${openFaq === 0 ? "rotate-180" : ""}`}
                      ></i>
                    </button>
                    {openFaq === 0 && (
                      <div className="p-5 bg-white text-slate-600 text-sm border-t border-slate-200">
                        A full redesign typically runs 6–10 weeks depending on
                        scope, with weekly review checkpoints.
                      </div>
                    )}
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(1)}
                      className="w-full p-5 text-left font-bold font-['Sora'] text-slate-900 bg-slate-50 hover:bg-slate-100/80 flex justify-between items-center transition-colors"
                    >
                      <span>Do you provide developer handoff files?</span>
                      <i
                        className={`bi bi-chevron-down transition-transform duration-300 ${openFaq === 1 ? "rotate-180" : ""}`}
                      ></i>
                    </button>
                    {openFaq === 1 && (
                      <div className="p-5 bg-white text-slate-600 text-sm border-t border-slate-200">
                        Yes — every project includes a structured Figma file
                        with components, tokens and annotations ready for
                        engineering.
                      </div>
                    )}
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(2)}
                      className="w-full p-5 text-left font-bold font-['Sora'] text-slate-900 bg-slate-50 hover:bg-slate-100/80 flex justify-between items-center transition-colors"
                    >
                      <span>
                        Can you work with our existing brand guidelines?
                      </span>
                      <i
                        className={`bi bi-chevron-down transition-transform duration-300 ${openFaq === 2 ? "rotate-180" : ""}`}
                      ></i>
                    </button>
                    {openFaq === 2 && (
                      <div className="p-5 bg-white text-slate-600 text-sm border-t border-slate-200">
                        Absolutely. We'll extend your existing brand into a
                        cohesive digital design system rather than starting from
                        scratch.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <div className="lg:col-span-4 space-y-6">
                {/* All Services Widget */}
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl">
                  <h5 className="text-lg font-bold font-['Sora'] text-slate-900 mb-4">
                    All Services
                  </h5>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    {services.map((service) =>
                      service === state?.serviceName ? (
                        <li>
                          <span className="text-blue-600">{service}</span>
                        </li>
                      ) : (
                        <li>
                          <span className="text-slate-700">{service}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Support / Scoping CTA Widget */}
                <div className="p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-xl">
                  <div className="w-12 h-12 mb-4 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-headphones"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold font-['Sora'] text-white mb-2">
                    Need help scoping this?
                  </h5>
                  <p className="text-slate-400 text-sm mb-6">
                    Talk to a strategist — free, no obligation 30-minute call.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-sm px-5 py-3 text-center block transition-all shadow-lg shadow-blue-500/20"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleService;
