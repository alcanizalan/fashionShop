import { createClient } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      <h1>Usuario</h1>

      {user ? (
        <div>
          <p>Sesión iniciada</p>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No hay sesión</p>
      )}
    </main>
  );
}