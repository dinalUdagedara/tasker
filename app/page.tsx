"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="flex justify-center h-full min-h-screen gap-10 mt-20 ">
      go to route : /mobile-app
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
}
