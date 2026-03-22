async function test() {
  const res = await fetch("http://localhost:5000/api/ai/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: "HTML", score: 6, total: 10 })
  });
  const data = await res.json();
  require("fs").writeFileSync("res2.txt", data.analysis, "utf8");
}
test();
