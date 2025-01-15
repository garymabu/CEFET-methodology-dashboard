import { useMemo, useState } from "react";
import Select from "../common/Select";

import barChartData from "./data/agileSprintData.json";
import { BurndownUnit } from "./interface";
import { BurnDownGraph } from "./components/burnDownGraph";
import { BurnUpGraph, BurnupUnit } from "./components/burnUpGraph";
import Table from "../common/Table/V1";

enum Sprint {
  One = "Sprint 1",
  Two = "Sprint 2",
}

const sprintIntervalDict = {
  [Sprint.One]: ["2024-12-01", "2024-12-15"],
  [Sprint.Two]: ["2024-12-16", "2024-12-31"],
};

const adjustToLocalTimezone = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000; // offset in milliseconds
  return new Date(date.getTime() - offset);
};

function getDatesBetween(start: Date, end: Date): Date[] {
  const arr = [];
  const dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

export default function Agile() {
  const [sprint, setSprint] = useState(Sprint.One);

  const [start, end] = useMemo(() => sprintIntervalDict[sprint], [sprint]);
  const currentSprintData = barChartData.filter((item) => {
    const date = new Date(item.delivery_date);
    return date >= new Date(start) && date <= new Date(end);
  });

  const burnDownSprintData: BurndownUnit[] = useMemo(() => {
    const filteredData = currentSprintData;

    const dates = getDatesBetween(new Date(start), new Date(end));
    const totalPointsInSprint = filteredData.reduce(
      (acc, item) => acc + item.Pontuacao,
      0
    );

    const burndownData: BurndownUnit[] = dates.map((date, index) => {
      const sumOfPoints = filteredData.reduce((acc, item) => {
        const deliveryDate = new Date(item.actual_delivery_date);
        return deliveryDate <= date ? acc + item.Pontuacao : acc;
      }, 0);

      const ideal = Math.ceil(
        totalPointsInSprint - (totalPointsInSprint / dates.length) * (index + 1)
      );

      return {
        date: date.getUTCDate().toString(),
        ideal,
        remaining: totalPointsInSprint - sumOfPoints,
      };
    });

    return burndownData;
  }, [currentSprintData, start, end]);

  const burnUpSprintData: BurnupUnit[] = useMemo(() => {
    const filteredData = currentSprintData;

    const dates = getDatesBetween(new Date(start), new Date(end));
    const totalPointsInSprint = filteredData.reduce(
      (acc, item) => acc + item.Pontuacao,
      0
    );

    const burndownData: BurnupUnit[] = dates.map((date) => {
      const sumOfPoints = filteredData.reduce((acc, item) => {
        const deliveryDate = new Date(item.actual_delivery_date);
        return deliveryDate <= date ? acc + item.Pontuacao : acc;
      }, 0);

      return {
        completed: sumOfPoints,
        date: date.getUTCDate().toString(),
        scope: totalPointsInSprint,
      };
    });

    return burndownData;
  }, [currentSprintData, start, end]);

  const tableData = currentSprintData.map((item) => ({
    "Nome da tarefa": item.Resumo,
    "Data de início": adjustToLocalTimezone(new Date(item.initialize_date))
      .toISOString()
      .slice(5, 16)
      .replace("T", " "),
    "Data esperada de entrega": adjustToLocalTimezone(
      new Date(item.delivery_date)
    )
      .toISOString()
      .slice(5, 16)
      .replace("T", " "),
    "Data de entrega real": adjustToLocalTimezone(
      new Date(item.actual_delivery_date)
    )
      .toISOString()
      .slice(5, 16)
      .replace("T", " "),
    Pontuação: item.Pontuacao,
    Sprint: sprint,
  }));

  return (
    <section className="flex flex-col min-w-[1000px] w-full gap-4">
      <div className="flex justify-end">
        <Select
          options={[{ value: Sprint.One }, { value: Sprint.Two }]}
          value={sprint}
          onChange={(ev) => setSprint(ev.target.value as Sprint)}
        />
      </div>
      <div className="h-1/2 flex justify-between">
        <div className="w-6/12 h-[500px]">
          <BurnDownGraph sprint={burnDownSprintData} />
        </div>
        <div className="w-[45%] h-[500px]">
          <BurnUpGraph sprint={burnUpSprintData} />
        </div>
      </div>
      <div
        className="h-1/2 w-full p-2"
        style={{ borderRadius: "15px", backgroundColor: "#5e5587" }}
      >
        <Table
          headers={[
            {
              name: "Nome da tarefa",
              key: "Nome da tarefa",
              size: 3,
            },
            {
              name: "Data de início",
              key: "Data de início",
              size: 2,
            },
            {
              name: "Data esperada de entrega",
              key: "Data esperada de entrega",
              size: 2,
            },
            {
              name: "Data de entrega real",
              key: "Data de entrega real",
              size: 2,
            },
            {
              name: "Pontuação",
              key: "Pontuação",
            },
            {
              name: "Sprint",
              key: "Sprint",
            },
          ]}
          data={tableData}
        />
      </div>
    </section>
  );
}
