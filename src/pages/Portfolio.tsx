import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../componant/Header";

interface PortfolioItem {
  title: string;
  category: string;
  categoryType: "design" | "dev" | "brand";
  image: string;
  alt: string;
}
interface PortfolioProps {
  activeMenu:string;
  setActiveMenu: (type: string) => void;
}
export const Portfolio = ({activeMenu, setActiveMenu}:PortfolioProps) => {
useEffect(() => {
      setActiveMenu("portfolio");
    }, []);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Work", value: "all" },
    { label: "Product Design", value: "design" },
    { label: "Development", value: "dev" },
    { label: "Branding", value: "brand" },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: "Payflow Dashboard Redesign",
      category: "FinTech · Product Design",
      categoryType: "design",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop",
      alt: "Payflow dashboard redesign",
    },
    {
      title: "Metricly Analytics Platform",
      category: "SaaS · Web Development",
      categoryType: "dev",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop",
      alt: "Metricly analytics platform",
    },
    {
      title: "Carewise Patient App",
      category: "HealthTech · Branding",
      categoryType: "brand",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop",
      alt: "Carewise patient app branding",
    },
    {
      title: "Orbiq CRM Platform",
      category: "B2B SaaS · Development",
      categoryType: "dev",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=450&fit=crop",
      alt: "Orbiq CRM platform build",
    },
    {
      title: "Verta Mobile Banking App",
      category: "FinTech · UI Design",
      categoryType: "design",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=451&fit=crop",
      alt: "Verta mobile banking UI",
    },
    {
      title: "Cloudra Brand Identity",
      category: "Cloud Infrastructure · Branding",
      categoryType: "brand",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=450&fit=crop",
      alt: "Cloudra brand identity",
    },
    {
      title: "Flowbit Automation Suite",
      category: "Productivity SaaS · Development",
      categoryType: "dev",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop",
      alt: "Flowbit automation tool",
    },
    {
      title: "Northpeak Consulting Site",
      category: "Consulting · Web Design",
      categoryType: "design",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop",
      alt: "Northpeak consulting site design",
    },
    {
      title: "Pivotal Agency Rebrand",
      category: "Marketing Agency · Branding",
      categoryType: "brand",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop",
      alt: "Pivotal agency rebrand",
    },
  ];

  return (
    <>
      <div className="min-h-screen text-slate-900 font-sans antialiased">
        <Header activeMenu={activeMenu} />
        <section className="py-20 pb-0 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
                Case studies
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Sora'] mt-1 mb-3 text-slate-900">
                Work we're proud of
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto">
                A selection of recent engagements across industries and project
                types.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                      isActive
                        ? "text-white bg-blue-600 shadow-lg shadow-blue-500/20"
                        : "text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg border border-slate-100 bg-slate-900"
                >
                  <Link
                    to="/portfolio-single"
                    className="block relative overflow-hidden aspect-[4/3]"
                  >
                    {/* Background Image with Zoom on Hover */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 transition-opacity"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold font-['Sora'] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between">
              {/* Content Column */}
              <div className="mb-6 lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold font-['Sora'] mb-2">
                  Have a project in mind?
                </h2>
                <p className="text-slate-400 text-base lg:text-lg mb-0">
                  Let's discuss how we can bring it to life.
                </p>
              </div>

              {/* Action Button Column */}
              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-6 py-3.5 text-center transition-all shadow-lg shadow-blue-500/20 inline-flex items-center"
                >
                  Start a Project <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
