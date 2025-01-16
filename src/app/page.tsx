"use client";
import { useState } from "react";
import Select from "./components/common/Select";
import Agile from "./components/agile";
import Waterfall from "./components/waterfall";

enum Methodology {
  AGILE = "Ágil",
  WATERFALL = "Waterfall",
}

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Ágil");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-3xl">Monitor de entregáveis do projeto ProCause</p>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Select
            options={[
              { value: Methodology.AGILE },
              { value: Methodology.WATERFALL },
            ]}
            value={selectedOption}
            onChange={(ev) => setSelectedOption(ev.target.value)}
          />
        </div>
        {selectedOption == Methodology.AGILE && <Agile />}
        {selectedOption == Methodology.WATERFALL && <Waterfall />}
      </main>
    </div>
  );
}
