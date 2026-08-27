/** Browser helper. Point listPath at the same path used in CONFIG. */

export async function loadUpdates() {
  const res = await fetch("/api/updates", { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error("updates api failed");
  const data = await res.json();
  return Array.isArray(data.updates) ? data.updates : [];
}

export async function loadUpdate(id) {
  const res = await fetch(`/api/updates?id=${encodeURIComponent(id)}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.update ?? null;
}
