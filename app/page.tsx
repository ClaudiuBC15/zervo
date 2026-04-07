import { cookies } from "next/headers";

import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from("todos").select();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-2xl font-semibold">Supabase Todos</h1>
      <ul className="mt-6 space-y-3">
        {todos?.map((todo) => (
          <li key={todo.id} className="rounded-xl border border-black/10 px-4 py-3">
            {todo.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
