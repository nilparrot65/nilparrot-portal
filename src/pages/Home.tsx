import { useEffect } from "react";
import Header from "../componant/Header";
import { Link, useLocation } from "react-router-dom";

interface CapabilityCard {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface HomeProps{
  activeMenu:string;
  setActiveMenu: (type:string)=>void;
}
function Home({activeMenu, setActiveMenu}:HomeProps) {

  const location = useLocation();
  useEffect(() => {
    if (location.state?.activeMenu) {
      console.log("home active menu="+location.state?.activeMenu);
      setActiveMenu(location.state.activeMenu);
    }
  }, [location.state]);

  const capabilities: CapabilityCard[] = [
    {
      title: "Product Strategy",
      description:
        "Research-driven roadmaps that align stakeholders and de-risk what you build next.",
      icon: "bi-bar-chart-line",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "UI/UX Design",
      description:
        "Interfaces that convert — wireframes, design systems and prototypes ready for dev.",
      icon: "bi-palette",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Web Development",
      description:
        "Performant, scalable web apps built on modern frameworks with clean architecture.",
      icon: "bi-code-slash",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    }
  ];

  const stats: StatItem[] = [
    { number: "480+", label: "Projects delivered" },
    { number: "12 yrs", label: "Industry experience" },
    { number: "96%", label: "Client retention" },
  ];

  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      description:
        "We audit your product, market and users to identify the highest-leverage opportunities.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Wireframes evolve into polished, tested interfaces backed by a reusable design system.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Engineers ship in two-week sprints with continuous integration and staging previews.",
    },
    {
      number: "04",
      title: "Scale",
      description:
        "Post-launch, we monitor performance and iterate based on real usage data.",
    },
  ];

  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased">
      <Header activeMenu={activeMenu}/>

      <section className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-blue-600 font-semibold text-base uppercase tracking-wider block mb-2">
                What we do
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] text-slate-900 mb-4">
                Capabilities built for modern product teams
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                From early-stage validation to scaling infrastructure, our
                specialists plug directly into your roadmap.
              </p>
            </div>
            <div className="lg:col-span-5 text-lg-end mt-4 lg:mt-0 text-left lg:text-right">
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base transition-colors group"
              >
                View all services{" "}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center text-2xl font-bold mb-6 transition-transform group-hover:scale-110 duration-300`}
                  >
                    {item.title === "Product Strategy" && (
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

                      {item.title === "UI/UX Design" && (
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

                      {item.title === "Web Development" && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>

                      )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-['Sora'] text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action Link */}
                <div>
                  <Link
                    to="/service-details"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-base transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Learn more <i className="bi bi-arrow-right ms-1.5"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-y border-slate-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-base font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-indigo-50">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-base uppercase tracking-wider inline-block mb-2 px-3 py-1 bg-blue-100 rounded-2xl">
              How we work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] text-slate-900 mb-4">
              A proven four-step delivery process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every engagement follows the same disciplined process — refined
              across hundreds of launches.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-indigo-100 border border-blue-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Process Number Badge */}
                  <div className="inline-block text-blue-600 font-['Sora'] font-extrabold text-4xl mb-6 px-3 py-1 rounded-xl">
                    {step.number}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold font-['Sora'] text-gray-500 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* CTA Card Container */}
          <div className="p-8 lg:p-12 bg-slate-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-8">
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] text-white mb-2">
                  Ready to build something great?
                </h2>
                <p className="text-slate-300 text-base lg:text-lg mb-0">
                  Book a free 30-minute strategy call — no pressure, no sales
                  script.
                </p>
              </div>

              {/* Right Action Button */}
              <div className="lg:col-span-4 text-left lg:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center text-slate-900 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-xl text-base px-6 py-3.5 transition-all shadow-lg"
                >
                  Book a Call <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
