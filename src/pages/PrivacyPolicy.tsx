import { useState, useEffect } from 'react';
import Header from '../componant/Header';
import { privacyNavItems } from '../data/privacyNavData';


interface PrivacyPolicyProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}

export const PrivacyPolicy = ({ activeMenu, setActiveMenu }: PrivacyPolicyProps) => {
   useEffect(() => {
      setActiveMenu(activeMenu);
    }, []);

  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of privacyNavItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans antialiased">
     
      {/* Hero Banner Header */}
     <Header activeMenu={"privacy-policy"}/>
      

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Mobile Navigation Dropdown */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-800 font-medium text-sm"
            type="button"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
              </svg>
              Table of Contents
            </span>
            <svg className={`w-3 h-3 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {isMobileMenuOpen && (
            <div className="mt-2 bg-white border border-slate-200 rounded-xl p-2 shadow-lg space-y-1">
              {privacyNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                Table of Contents
              </h2>
              <nav className="space-y-1">
                {privacyNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <svg className="w-4 h-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Sections */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* Introduction */}
            <section id="introduction" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Nilparrot ("Company", "we", "our", or "us") is committed to maintaining the confidentiality, integrity, and security of personal and financial information belonging to users, merchants, partners, and website visitors.
                </p>
                <p>
                  By accessing or using our platforms, applications, APIs, websites, payment systems, or related services, you acknowledge and agree to the collection and processing of information in accordance with this Privacy Policy.
                </p>
                <div className="p-4 text-sm text-blue-800 rounded-xl bg-blue-50 border border-blue-200/80" role="alert">
                  <span className="font-semibold">Notice:</span> This Privacy Policy forms an integral part of the Company’s Terms & Conditions.
                </div>
              </div>
            </section>

            {/* Information Collection */}
            <section id="collection" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-slate-900 font-semibold">
                    <svg className="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <h3>Personal Information</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>Full Name & Mobile Number</li>
                    <li>Email Address & Date of Birth</li>
                    <li>Residential / Business Address</li>
                    <li>PAN Details & Identity Records</li>
                    <li>KYC Verification Documentation</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-slate-900 font-semibold">
                    <svg className="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.008v.008H6.75V6.75zm0 3h.008v.008H6.75V9.75zm0 3h.008v.008H6.75v-.008zm0 3h.008v.008H6.75v-.008zm3.75-9h.008v.008h-.008V6.75zm0 3h.008v.008h-.008V9.75zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm3.75-9h.008v.008h-.008V6.75zm0 3h.008v.008h-.008V9.75zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    <h3>Business Information</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>Business Registration Certificates</li>
                    <li>GST Information & Trade Licenses</li>
                    <li>Merchant Profile Records</li>
                    <li>Settlement & Billing Details</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-slate-900 font-semibold">
                    <svg className="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25z" />
                    </svg>
                    <h3>Technical Information</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>IP Address & System Logs</li>
                    <li>Browser & Device Particulars</li>
                    <li>Operating System Characteristics</li>
                    <li>Cookies & Session Activity</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-slate-900 font-semibold">
                    <svg className="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5ptm-16.5 3h6m-6 3h6m-6 3h6M3 16.5h18a2.25 2.25 0 002.25-2.25V7.5A2.25 2.25 0 0021 5.25H3A2.25 2.25 0 00.75 7.5v6.75A2.25 2.25 0 003 16.5z" />
                    </svg>
                    <h3>Transaction Information</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>Recharge & BBPS Logs</li>
                    <li>Wallet Activity Records</li>
                    <li>Money Transfer History</li>
                    <li>Refund & Settlement Logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="usage" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">How We Use Information</h2>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 list-disc list-inside leading-relaxed">
                <li>To create and manage user accounts securely</li>
                <li>To process transactions quickly and efficiently</li>
                <li>To comply with regulatory KYC, AML, RBI, and NPCI directives</li>
                <li>To detect and prevent fraud or unauthorized system access</li>
                <li>To enhance customer support workflows and platform performance</li>
                <li>To dispatch transactional updates, alerts, and system notifications</li>
                <li>To maintain statutory business registers and operational analytics</li>
              </ul>
            </section>

            {/* Sharing of Information */}
            <section id="sharing" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Sharing of Information</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                User information may be shared strictly for operational, legal, security, or compliance reasons with:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside mb-6">
                <li>Banking partners & authorized payment processors</li>
                <li>NPCI, BBPS, and financial institutions</li>
                <li>Government authorities and regulatory enforcement bodies</li>
                <li>Technology partners and secure cloud hosting providers</li>
                <li>Auditors, compliance officers, and legal counsel</li>
              </ul>
              <div className="p-4 text-sm text-emerald-800 rounded-xl bg-emerald-50 border border-emerald-200/80" role="alert">
                <span class="font-semibold">Privacy Commitment:</span> We do not sell, trade, or rent personal information to third parties.
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                The Company maintains commercially reasonable technical and organizational safeguards designed to protect user information from unauthorized access, misuse, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-center text-xs sm:text-sm font-medium text-slate-700">
                  Secure Server Encryption
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-center text-xs sm:text-sm font-medium text-slate-700">
                  Strict Access Control
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-center text-xs sm:text-sm font-medium text-slate-700">
                  System Threat Auditing
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-center text-xs sm:text-sm font-medium text-slate-700">
                  Firewall Protections
                </div>
              </div>
              <div className="p-4 text-sm text-amber-800 rounded-xl bg-amber-50 border border-amber-200/80" role="alert">
                <span class="font-semibold">Disclaimer:</span> While we strive to protect all information, no electronic transmission or storage system can guarantee absolute security.
              </div>
            </section>

            {/* Policies Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <section id="cookies" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Cookies Policy</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our platforms use cookies to enhance experience, remember preferences, and analyze usage trends. You can disable cookies in your browser settings, though doing so may disable specific features.
                </p>
              </section>

              <section id="retention" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Data Retention</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Information is retained for as long as necessary under applicable laws, regulatory mandates, dispute resolutions, tax regulations, and legitimate business operations.
                </p>
              </section>

              <section id="rights" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">User Rights</h2>
                <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Request access to personal data</li>
                  <li>Request information updates</li>
                  <li>Request deletion where permitted</li>
                  <li>Opt-out of non-essential messages</li>
                  <li>Lodge regulatory complaints</li>
                </ul>
              </section>

              <section id="compliance" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Legal Compliance</h2>
                <ul className="space-y-1.5 text-sm text-slate-600 list-disc list-inside">
                  <li>Digital Personal Data Protection Act, 2023</li>
                  <li>Information Technology Act, 2000</li>
                  <li>Applicable RBI Mandates</li>
                  <li>NPCI Rules & Standards</li>
                </ul>
              </section>
            </div>

            {/* Acknowledgement */}
            <div className="p-6 bg-emerald-50 border border-emerald-200/80 rounded-2xl">
              <h3 className="text-base font-bold text-emerald-900 mb-2">Acknowledgement & Consent</h3>
              <p className="text-sm text-emerald-800 leading-relaxed">
                By accessing or using the services of Nilparrot, you acknowledge that you have read, understood, and agreed to this Privacy Policy and consent to the collection, processing, and use of information as described herein.
              </p>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;