import React from "react";
import { BarChart } from "../../common/Chart/BarChart";
/**
 * 1) Define a Burnup data interface:
 *    - 'date' = day of the sprint
 *    - 'completed' = total completed points so far
 *    - 'scope' = total scope/points in the sprint (or at this day)
 */
export interface BurnupUnit {
  date: string;
  completed: number;
  scope: number;
}

function getStackedBurnupData(sprint: BurnupUnit[]) {
  return sprint.map((day) => ({
    date: day.date,
    completed: day.completed,
    remaining: day.scope - day.completed,
    scope: day.scope,
  }));
}

/**
 * 2) Render a Burnup Chart:
 *    - Bars represent 'completed' points
 *    - A line (via GenerateLine) represents the 'scope'
 */
export function BurnUpGraph({ sprint }: { sprint: BurnupUnit[] }) {
  const stackedData = getStackedBurnupData(sprint);

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
        data={stackedData}
        // 2) We have two bar segments: 'completed' + 'remaining'
        keys={["completed", "remaining"]}
        // X-axis uses 'date' field
        indexBy="date"
        margin={{ top: 50, right: 50, bottom: 80, left: 60 }}
        padding={0.3}
        // 3) Stacked bars
        groupMode="stacked"
        layout="vertical" // or "horizontal" if you prefer
        colors={["#82ca9d", "#fa8072"]} // bottom = completed, top = remaining
        enableLabel={false}
        animate
        axisBottom={{
          legend: "Burnup por dia",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        theme={{
          axis: {
            ticks: {
              text: { fill: "white" },
            },
            legend: {
              text: { fill: "white" },
            },
          },
        }}
        tooltip={({ data }) => {
          // 'data' includes completed, remaining, scope, date...
          // e.g. { date: "2024-12-01", completed: 8, remaining: 2, scope: 10 }
          const { date, completed, remaining, scope } = data;

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
              Completado: {completed}
              <br />
              Restante: {remaining}
              <br />
              Escopo total: {scope}
            </div>
          );
        }}
        // 4) No custom line layer => keep the default layers
        layers={["grid", "axes", "bars", "markers", "legends"]}
      />
    </div>
  );
}
