import React from "react";

function FactsTable({ args }) {
  const properties = [
    { property: "Total Sadness", value: "55" },
    { property: "Saturated Sadness", value: "55" },
    { property: "Confusion", value: "55" },
    { property: "Happiness", value: "55" },
    { property: "", value: "" },
    { property: "Anger", value: "55" },
    { property: "Disappointment", value: "55" },
    { property: "Rage", value: "55" },
  ];
  return (
    <div
      className={` w-full  text-whiteC  ${args} whitespace-nowrap text-ellipsis	`}
    >
      <div className="border-whiteC border-4  p-2">
        <p className="text-4xl tracking-tight  font-bold">Nutrition Facts</p>
        <p className="mt-[-5px] text-xs border-b-8 border-whiteC">
          Serving Size 1 cup, chopped 89g (89g)
        </p>
        {properties.map((item) => {
          return (
            <div className="flex justify-between border-t-2 border-whiteC">
              <p className="">{item.property}</p>
              <p className="">{item.value}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FactsTable;
