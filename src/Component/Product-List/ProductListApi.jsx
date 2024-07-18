export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    const respons = await fetch("http://localhost:8080/products");
    const data = await respons.json();
    resolve({ data });
    console.log("alldata", data);
  });
}

export function fetchProductsByFilters(filter, sort) {
  console.log("filter", filter[key]);
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
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
