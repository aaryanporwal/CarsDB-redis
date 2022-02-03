import { useState } from "react";

export default function CarForm() {
  const [hits, setHits] = useState([]);

  const search = async (e) => {
    const q = e.target.value;

    if (q.length > 2) {
      // TODO: implement a debounce
      const params = new URLSearchParams({ q });
      console.log("params: ", params);

      const res = await fetch(`/api/search?${params}`);

      const result = await res.json();
      console.log("result: ", result);

      setHits(result["cars"]);
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      {/* Implement debouncing */}
      <div className="bg-fuchsia-500 py-8 px-6 shadow rounded-lg sm:px-10">
        <input
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          onChange={search}
          type="text"
        />
        <ul>
          {hits.map((hit) => (
            <li key={hit.entityId}>
              {hit.make} {hit.model} {hit.image}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
