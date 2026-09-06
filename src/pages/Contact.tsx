import { useEffect } from "react";
import Header from "../componant/Header";
import { Link } from "react-router-dom";

interface ContactProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}
export const Contact = ({ activeMenu, setActiveMenu }: ContactProps) => {
  useEffect(() => {
    setActiveMenu("contact");
  }, []);
  
  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased">
      
      {/* Page Header */}
      <Header activeMenu={activeMenu} />

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2">Visit Us</h3>
              <p className="text-slate-600 text-sm">
                A-404 Sanskruti Homes
                <br />
                Lohagaon Pune 411014
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm mb-1">General inquiries:</p>
              <a
                href="mailto:hello@nilparrot.com"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                hello@nilparrot.com
              </a>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-100 text-center hover:-translate-y-1 transition-all">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-['Sora'] mb-2">Call Us</h3>
              <p className="text-slate-600 text-sm mb-1">
                Mon – Fri, 9am – 6pm PST
              </p>
              <a
                href="tel:+14155550182"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                +91 8446550810
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100">
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                Send a message
              </span>
              <h2 className="text-3xl font-bold font-['Sora'] mb-6 mt-1">
                Tell us about your project
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-slate-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="workEmail"
                      className="block mb-2 text-sm font-medium text-slate-900"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-medium text-slate-900"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block mb-2 text-sm font-medium text-slate-900"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      defaultValue=""
                      className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                      required
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>Under ₹5,000</option>
                      <option>₹5,000 – ₹15,000</option>
                      <option>₹15,000 – ₹50,000</option>
                      <option>₹50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-slate-900"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    defaultValue=""
                    className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Software Application</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-slate-900"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    placeholder="Tell us a bit about your goals, timeline, and anything else we should know."
                    required
                  ></textarea>
                </div>

                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    htmlFor="agreeTerms"
                    className="ms-2 text-sm font-medium text-slate-600"
                  >
                    I agree to the{" "}
                    <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to being contacted about my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-6 py-3.5 text-center transition-all shadow-lg shadow-blue-500/20 inline-flex items-center"
                >
                  Send Message <i className="bi bi-send ms-2"></i>
                </button>
              </form>
            </div>

            {/* Map & Office Hours Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="w-full h-72 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.422681806416!2d73.9207759!3d18.600048800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c74322cc5019%3A0x1fa38ead36af50f3!2sSanskruti%20Homes!5e0!3m2!1sen!2sin!4v1788280813949!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl">
                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center text-xl mb-4">
                  <i className="bi bi-clock"></i>
                </div>
                <h5 className="text-xl font-bold font-['Sora'] mb-4">
                  Office Hours
                </h5>
                <ul className="space-y-3 text-sm border-t border-white/10 pt-4">
                  <li className="flex justify-between pb-2 border-b border-white/5">
                    <span>Monday – Friday</span>
                    <span className="text-slate-400">9:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-white/5">
                    <span>Saturday</span>
                    <span className="text-slate-400">10:00 AM – 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-400">Closed</span>
                  </li>
                </ul>
                <p className="text-slate-400 text-xs mt-4">
                  All times Pacific Standard Time (PST).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
              Before you reach out
            </span>
            <h2 className="text-3xl font-bold font-['Sora'] mt-1">
              Quick answers
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div id="contactFaq" className="space-y-4">
              {/* Accordion Item 1 */}
              <details
                className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg transition-all"
                open
              >
                <summary className="flex justify-between items-center font-semibold text-slate-900 cursor-pointer list-none">
                  <span>How soon will I hear back?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-slate-100">
                  We respond to all inquiries within one business day, usually
                  much sooner.
                </p>
              </details>

              {/* Accordion Item 2 */}
              <details className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg transition-all">
                <summary className="flex justify-between items-center font-semibold text-slate-900 cursor-pointer list-none">
                  <span>Do I need a fully scoped brief?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-slate-100">
                  Not at all — a rough idea is enough to start. We'll help you
                  scope the rest during a free discovery call.
                </p>
              </details>

              {/* Accordion Item 3 */}
              <details className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 open:bg-white open:shadow-lg transition-all">
                <summary className="flex justify-between items-center font-semibold text-slate-900 cursor-pointer list-none">
                  <span>Can we sign an NDA before discussing details?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-slate-100">
                  Yes, we're happy to sign your NDA — just mention it in your
                  message and we'll send it over before our first call.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
