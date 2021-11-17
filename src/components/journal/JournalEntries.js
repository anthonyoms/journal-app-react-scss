import React from "react";
import { JournalEntry } from "./JournalEntry ";

const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const JournalEntries = () => {
  return (
    <div className="jounal__entries">
      {entries.map((value) => (
        <JournalEntry key={value} />
      ))}
    </div>
  );
};
