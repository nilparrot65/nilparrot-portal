import React from "react";
import type { PolicySubList } from "../model/Policy";

interface PolicyTableListProps {
  mainHeader: string;
  list: PolicySubList[] | undefined;
}

function PolicyTableList({ mainHeader, list }: PolicyTableListProps) {
  return (
    <>
      {mainHeader === "Refund Processing Timeline" && (
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            UPI & Wallet Reversals
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            Banking Settlement Timelines
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            Gateway Processing Cycles
          </div>
        </div>
      )}
      {mainHeader === "Refund Eligibility" && (
        <div className="grid gap-6 md:grid-cols-2">
          {list?.map((obj) => (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                {obj.header}
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {obj.list.map((subObj) => (
                  <li>{subObj}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PolicyTableList;
