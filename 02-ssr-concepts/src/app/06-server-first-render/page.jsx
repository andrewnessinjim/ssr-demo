"use client";

import React from "react";

export default function ServerFirstRender() {
  const [counter, setCounter] = React.useState(() => {
    // const savedValue = window.localStorage.getItem("saved-count");

    // return savedValue ? Number(savedValue) : 0;
  });

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <button
        className="rounded-xl bg-blue-600 px-12 py-8 text-4xl font-bold text-white shadow-lg hover:bg-blue-500"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>
    </main>
  );
}
