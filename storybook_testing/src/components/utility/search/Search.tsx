import "../../../app/globals.css";
import "./Search.module.css";

import { useState } from "react";

export interface ISearch {}

export default function Search({}: ISearch) {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Action requested. Search for term: ${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="h-12 w-5/6 rounded-full border-2 px-3 sm:w-96"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
