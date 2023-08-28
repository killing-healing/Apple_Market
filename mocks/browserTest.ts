export const browserTest = async () => {
  try {
    const res = await fetch("/login", { method: "POST" });
    const data = await res.json();
  } catch (err) {
    console.error("An error occurred:", err);
  }
};
