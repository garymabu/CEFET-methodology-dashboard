import React, { JSX } from "react";
import GenerateLine from "../../common/Chart/Line";
import { BarChart } from "../../common/Chart/BarChart";
import { BarCustomLayerProps, ComputedBarDatum } from "@nivo/bar";
import { LineProps } from "../../common/Chart/Line/interface";

export interface BurndownUnit {
  date: string;
  remaining: number;
  ideal: number;
}

export function BurnDownGraph({ sprint }: { sprint: BurndownUnit[] }) {
  // const myData = generateBurndownData(sprint);

  // Create the line for the ideal
  const IdealLine = GenerateLine({
    data: sprint.map((d) => d.ideal),
    color: "#8884d8",
    key: "idealLine",
  }) as ({
    bars,
    yScale,
  }: Omit<LineProps, "bars"> & {
    bars: readonly ComputedBarDatum<Record<string, unknown>>[];
  }) => JSX.Element;

  const Line = (props: BarCustomLayerProps<Record<string, unknown>>) => {
    return (
      <>
        <IdealLine key={"line"} {...props} />
      </>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#5e5587",
        color: "white",
        borderRadius: "15px",
      }}
    >
      <BarChart
        data={sprint}
        keys={["remaining"]}
        indexBy="date"
        margin={{ top: 50, right: 50, bottom: 80, left: 60 }}
        padding={0.3}
        layout="vertical" // or "horizontal"
        groupMode="grouped" // or "stacked", if you had multiple bars
        enableLabel={false} // hide bar labels if desired
        colors={["#82ca9d"]}
        axisBottom={{
          // see Nivo docs to customize
          // tickRotation: -45,
          legend: "Burndown separado por dia",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        animate
        tooltip={({ data }) => {
          const { date, ideal, remaining } = data as BurndownUnit;
          return (
            <div
              style={{
                background: "#5e5587",
                padding: "5px",
                border: "1px solid #ccc",
              }}
            >
              <strong>{date}</strong>
              <br />
              Ideal: {ideal}
              <br />
              Restante: {remaining}
            </div>
          );
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "white",
              },
            },
            legend: {
              text: {
                fill: "white",
              },
            },
          },
        }}
        layers={["grid", "axes", "bars", "markers", "legends", Line]}
      />
    </div>
  );
}
