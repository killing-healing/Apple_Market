export const browserTest = async () => {
  try {
    const res = await fetch("/login", { method: "POST" });
    console.log(1111, res);
    const data = await res.json();
    console.log("login", data);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};
