"use client"
import { useState } from "react";
import Select from "./components/common/Select";
import Agile from "./components/agile";
import Waterfall from "./components/waterfall";

enum Methodology {
  AGILE = 'Ágil',
  WATERFALL = 'Waterfall',
}

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('Ágil');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {selectedOption == Methodology.AGILE && <Agile/>}
        {selectedOption == Methodology.WATERFALL && <Waterfall/>}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Select options={[
          { value: Methodology.AGILE},
          { value: Methodology.WATERFALL},
        ]} value={selectedOption} onChange={(ev)=>setSelectedOption(ev.target.value)} />
      </footer>
    </div>
  );
}
