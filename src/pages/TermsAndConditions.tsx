import { useEffect } from "react";
import Header from "../componant/Header";

interface TermsAndConditionsProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}

export const TermsAndConditions  = ({activeMenu,setActiveMenu}: TermsAndConditionsProps) => {

   useEffect(() => {
      setActiveMenu(activeMenu);
    }, []);


  return (
     <div className="min-h-screen text-slate-900 font-sans antialiased">
        {/* Header Section */}
        <Header activeMenu={activeMenu} />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction</h2>
            </div>
            <div className="space-y-5">
              <p>
                By accessing, registering, or using any website, application,
                merchant panel, API service, payment solution, or fintech platform
                operated by Codetrex Infotech Private Limited ("Company", "we",
                "our", or "us"), you agree to comply with and be legally bound by these
                Terms and Conditions.
              </p>

              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-900/20">
                <p className="font-medium text-red-700 dark:text-red-400">
                  If you do not agree with these Terms, you must immediately
                  discontinue use of the services.
                </p>
              </div>
            </div>
          </section>

          {/* Definitions */}
          <section id="definitions" className="scroll-mt-20  mb-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Definitions</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700/50">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Services
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                  <li>BBPS Services</li>
                  <li>AEPS Services</li>
                  <li>UPI Services</li>
                  <li>Money Transfer Services</li>
                  <li>Recharge &amp; Bill Payments</li>
                  <li>Merchant Payment Solutions</li>
                  <li>Digital Wallet Services</li>
                  <li>API &amp; Fintech Infrastructure</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700/50">
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Users
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Any individual, retailer, merchant, distributor, business entity,
                  customer, or organization accessing or using the Company’s services.
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Eligibility</h2>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              <li>Users must be at least 18 years of age.</li>
              <li>
                Users must provide accurate and complete information during registration
                and KYC verification.
              </li>
              <li>
                The Company reserves the right to approve, reject, suspend, or terminate
                any registration at its sole discretion.
              </li>
            </ul>
          </section>

          {/* KYC */}
          <section id="kyc" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                KYC &amp; Regulatory Compliance
              </h2>
            </div>
            <div className="space-y-5">
              <p>
                Users may be required to complete Know Your Customer (KYC) verification
                in accordance with RBI, NPCI, banking partner, and applicable
                governmental regulations.
              </p>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-900/20">
                <h3 className="mb-3 font-semibold text-amber-900 dark:text-amber-300">
                  The Company reserves the right to:
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-amber-800 dark:text-amber-400">
                  <li>Verify submitted documents and information</li>
                  <li>Request additional verification documents</li>
                  <li>Suspend accounts with incomplete or suspicious KYC</li>
                  <li>Report suspicious activities to regulatory authorities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use of Services */}
          <section id="services" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Use of Services</h2>
            </div>
            <div className="space-y-5">
              <p>Users agree to use the services only for lawful and authorized purposes.</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Users shall not engage in fraud, money laundering, or illegal transactions.</li>
                <li>Users shall not misuse APIs, payment systems, or merchant platforms.</li>
                <li>
                  Users shall not interfere with platform security, infrastructure, or
                  operational integrity.
                </li>
                <li>Unauthorized access attempts or suspicious activities are strictly prohibited.</li>
              </ul>

              <div className="rounded-2xl border border-gray-200 bg-gray-100 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Any violation may result in immediate suspension, legal action, or
                  permanent termination of services.
                </p>
              </div>
            </div>
          </section>

          {/* Transactions & Settlements */}
          <section id="transactions" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Transactions &amp; Settlements
              </h2>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                Transactions once processed may not be reversed unless permitted under
                applicable banking or regulatory policies.
              </li>
              <li>Users are responsible for verifying all transaction details before confirmation.</li>
              <li>
                The Company shall not be responsible for incorrect transfers caused by
                inaccurate information provided by users.
              </li>
              <li>
                Settlement timelines may vary depending on banking partners, payment gateways,
                and regulatory systems.
              </li>
            </ul>
          </section>

          {/* Fees */}
          <section id="fees" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fees &amp; Charges</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                <ul className="space-y-2">
                  <li>• Service Charges</li>
                  <li>• Processing Fees</li>
                  <li>• API Usage Fees</li>
                  <li>• Wallet Maintenance Fees</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-700/50">
                <ul className="space-y-2">
                  <li>• Settlement Charges</li>
                  <li>• Platform Fees</li>
                  <li>• Convenience Fees</li>
                  <li>• Applicable Taxes</li>
                </ul>
              </div>
            </div>
            <p className="mt-5">
              Applicable fees and charges may be revised by the Company from time to time
              without prior notice.
            </p>
          </section>

          {/* Refunds */}
          <section id="refunds" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Refund &amp; Reversal Policy
              </h2>
            </div>
            <p>Refunds, reversals, and dispute resolutions shall be governed by:</p>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>Banking partner policies</li>
              <li>NPCI and BBPS operational guidelines</li>
              <li>Applicable RBI regulations</li>
              <li>Internal operational policies of the Company</li>
            </ul>
          </section>

          {/* Privacy */}
          <section id="privacy" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Privacy &amp; Data Security
              </h2>
            </div>
            <div className="space-y-5">
              <p>
                User information shall be processed in accordance with the Company’s Privacy Policy
                and applicable data protection laws.
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Data may be collected for operational, security, compliance, and legal purposes.</li>
                <li>The Company implements commercially reasonable safeguards to protect user information.</li>
                <li>No system can guarantee complete security against cyber threats or unauthorized access.</li>
              </ul>
            </div>
          </section>

          {/* Liability */}
          <section id="liability" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Limitation of Liability
              </h2>
            </div>
            <div className="space-y-5">
              <ul className="list-disc space-y-3 pl-6">
                <li>Indirect or consequential damages</li>
                <li>Banking or telecom interruptions</li>
                <li>Third-party service failures</li>
                <li>Unauthorized access resulting from user negligence</li>
                <li>Technical issues beyond reasonable control</li>
              </ul>

              <div className="rounded-2xl bg-gray-900 p-6 dark:bg-gray-950">
                <p className="leading-8 text-gray-200">
                  In no event shall the Company’s aggregate liability exceed the amount
                  involved in the disputed transaction giving rise to the claim.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section id="termination" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Suspension &amp; Termination
              </h2>
            </div>
            <p>
              The Company reserves the right to suspend, restrict, investigate, or
              terminate accounts and services without prior notice in cases involving:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>Fraudulent activities</li>
              <li>Violation of these Terms</li>
              <li>Suspicious transactions</li>
              <li>Regulatory non-compliance</li>
              <li>Operational or security risks</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section id="law" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Governing Law &amp; Jurisdiction
              </h2>
            </div>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws
              of India. Any disputes arising out of or related to these Terms shall be
              subject to the exclusive jurisdiction of courts located in New Delhi, India.
            </p>
          </section>

        </div>
      </div>
  );
};

export default TermsAndConditions;