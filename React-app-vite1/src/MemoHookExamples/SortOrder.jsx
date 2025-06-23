import React, { useState, useMemo } from "react";

export default function SortOrder() {
  const [sortOrderVal, setSortOrder] = useState("asc");
  const items = useMemo(() => {
    [5, 3, 8, 1, 9, 4];
  }, []);

  const sortedItems = useMemo(() => {
    console.log("Sorting...");
    return [...items].sort((a, b) => (sortOrderVal === "asc" ? a - b : b - a));
  }, [sortOrderVal, items]);

  return (
    <div>
      <button
        onClick={() => setSortOrder(sortOrderVal === "asc" ? "desc" : "asc")}
      >
        Toggle Sort
      </button>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
