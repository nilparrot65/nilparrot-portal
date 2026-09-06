import { useEffect } from "react";
import Header from "../componant/Header";
import { policyData } from "../data/policyData";
import Note from "../componant/Note";
import PolicyNormalList from "../componant/PolicyNormalList";
import PolicyTableList from "../componant/PolicyTableList";

interface RefundPolicyProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}

export const RefundPolicy = ({
  activeMenu,
  setActiveMenu,
}: RefundPolicyProps) => {
  useEffect(() => {
    setActiveMenu(activeMenu);
  }, []);


  return (
    <div className="min-h-screen text-slate-900 font-sans antialiased">
      <Header activeMenu={"refund-policy"} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {policyData.map((policy) => (
          <section id="overview" className="scroll-mt-20 mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-2 rounded-full bg-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">
                {policy.header}
              </h2>
            </div>

            <div className="space-y-5">
              <p>{policy.subHeader}</p>
              <p>{policy.para}</p>

              <PolicyNormalList
                mainHeader={policy.header}
                list={policy.subList}
              />
              <PolicyTableList
                mainHeader={policy.header}
                list={policy.subList}
              />
              <Note policyHeader={policy.header} note={policy.note} />
            </div>
          </section>
        ))}

        {/* Acknowledgement */}
        <div className="p-6 bg-emerald-50 border border-emerald-200/80 rounded-2xl">
          <h3 className="text-base font-bold text-emerald-900 mb-2">
            Acknowledgement & Consent
          </h3>
          <p className="text-sm text-emerald-800 leading-relaxed">
            By accessing or using the services of Nilparrot, you acknowledge
            that you have read, understood, and agreed to this Privacy Policy
            and consent to the collection, processing, and use of information as
            described herein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
