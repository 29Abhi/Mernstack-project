export function fetchCount(amount = 1) {
  return new Promise(async (resolve, reject) => {
    const respons = await fetch("http://localhost:8080");
    const data = await respons.json();
    resolve({ data });
  });
}
