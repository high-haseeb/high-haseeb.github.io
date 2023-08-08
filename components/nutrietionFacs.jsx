import React from "react";

function FactsTable({ args }) {
  const titles = [
    { label: "Total Sadness", value: "55" },
    { label: "Saturated Sadness", value: "55" },
    { label: "Confusion", value: "55" },
    { label: "Happiness", value: "55" },
    { label: "", value: "" },
    { label: "Anger", value: "55" },
    { label: "Disappointment", value: "55" },
    { label: "Rage", value: "55" },
  ];

  return (
    <div className={`m-4 w-full p-2 border-4 text-whiteC border-whiteC ${args} whitespace-nowrap truncate`}>
      <p className="text-4xl tracking-tight  font-bold">Nutrition Facts</p>
      <p className="mt-[-5px] text-base border-b-8 border-whiteC">Serving Size 1 cup, chopped 89g (89g)</p>
      {titles.map((item) => {
        return (
          <div className="flex justify-between border-t-2 border-whiteC">
            <p className="">{item.label}</p>
            <p className="">{item.value}%</p>
          </div>
        );
      })}
    </div>
  );
}
export default FactsTable;
