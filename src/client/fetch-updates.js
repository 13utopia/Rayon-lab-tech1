/** Browser helper. Point listPath at the same path used in CONFIG. */

export async function loadUpdates() {
  try {
    const res = await fetch("/api/updates", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("updates api failed");
    const data = await res.json();
    return Array.isArray(data.updates) ? data.updates : [];
  } catch (e) {
    console.warn("Could not load updates from /api/updates:", e);
    return [];
  }
}

export async function loadUpdate(id) {
  try {
    const res = await fetch(`/api/updates?id=${encodeURIComponent(id)}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.update ?? null;
  } catch (e) {
    console.warn(`Could not load update ${id} from /api/updates:`, e);
    return null;
  }
}
