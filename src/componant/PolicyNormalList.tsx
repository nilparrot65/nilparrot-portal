import React from "react";
import type { PolicySubList } from "../model/Policy";

interface PolicyNormalListProps {
  mainHeader: string;
  list: PolicySubList[] | undefined;
}

function PolicyNormalList({ mainHeader, list }: PolicyNormalListProps) {
  const headers: string[] = ["Non-Refundable Transactions","Failed & Pending Transactions","Cancellation Policy","Legal & Regulatory Compliance"];
  return (
    <>
      {headers?.includes(mainHeader) && (
        <>
          <div className="space-y-5">
            {list?.map((obj) => (
              <>
                <p>{obj.header}</p>
                <ul className="list-disc space-y-3 pl-6">
                  {obj.list.map((subObj) => (
                    <li>{subObj}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default PolicyNormalList;
