"use client";
import { Button } from "@aniside/ui";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>hello aniside</h1>
      <Button type="secondary" onClick={() => alert("hello")}>
        hello
      </Button>
      {/* <button onClick={() => alert("hello")}>hello</button> */}
    </main>
  );
}
