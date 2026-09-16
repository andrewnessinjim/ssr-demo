"use client";

import React from "react";

export default function ServerFirstRenderFixed() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const savedValue = window.localStorage.getItem("saved-count");
    React.startTransition(() => {
      setCount(savedValue ? Number(savedValue) : 0);
    });
  }, [])

  React.useEffect(() => {
    if(typeof count === "number") {
      window.localStorage.setItem('saved-count', count)
    }
  }, [count])

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <button
        className="rounded-xl bg-blue-600 px-12 py-8 text-4xl font-bold text-white shadow-lg hover:bg-blue-500"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </main>
  );
}
