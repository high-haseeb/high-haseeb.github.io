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
      className={` w-full ${args} whitespace-nowrap text-ellipsis	`}
    >
      <div className="dark:border-whiteC border-blackC border-4  p-2">
        <div className="text-4xl tracking-tight  font-bold">
          Nutrition Facts
        </div>
        <div className="mt-[-5px] text-xs border-b-8 dark:border-whiteC border-blackC">
          {" "}
          Serving Size 1 cup, chopped 89g (89g){" "}
        </div>
        {properties.map((item) => {
          return (
            <div className="flex justify-between border-t-2 dark:border-whiteC border-blackC">
              <div className="">{item.property}</div>
              <div className="">{item.value}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FactsTable;
