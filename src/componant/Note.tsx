import React from "react";

interface NoteProps {
  policyHeader: string;
  note: string | undefined;
}

function Note({ policyHeader, note }: NoteProps) {
  return (
    <>
      {policyHeader === "Overview" && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <p className="font-medium text-blue-700">{note}</p>
        </div>
      )}{" "}
      {policyHeader === "Non-Refundable Transactions" && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-medium text-amber-700">{note}</p>
        </div>
      )}
    </>
  );
}

export default Note;
