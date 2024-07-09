export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    const respons = await fetch("http://localhost:8080/products");
    const data = await respons.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log(queryString);
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
