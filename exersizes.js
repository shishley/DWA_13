// 1. Use forEach to console log each name to the console. You are allowed to call console.log seven times.
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

provinces.forEach((province) => {
  console.log(province);
});

names.forEach((name) => {
  console.log(name);
});

// 2. Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
const provinceNames = provinces.map((province) => [
  province,
  names.filter((name) => name.includes(province)),
]);

provinceNames.forEach((provinceName) => {
  console.log(`${provinceName[0]}: ${provinceName[1].join(", ")}`);
});

// 3. Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());

console.log(uppercaseProvinces);

// 4. Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
const nameLengths = names.map((name) => name.length);

console.log(nameLengths);

// 5. Using toSorted to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();

console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
const provincesWithoutCape = provinces.filter(
  (province) => !province.includes("Cape")
);

console.log(provincesWithoutCape.length);

// 7. Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, false, true, false]
const namesWithS = names.map((name) => name.includes("S"));

console.log(namesWithS);

// 8. Using only reduce, turn the above into an object that indicates the province of an individual. In other words:
// {
//   Ashwin: 'Western Cape',
//   Sibongile: 'Gauteng',
//   'Jan-Hendrik': 'Northern Cape',
//   Sifso: 'Eastern Cape',
//   Shailen: 'KwaZulu-Natal',
//   Frikkie: 'Free State',
// }

const provinceNamesToNames = provinces.reduce((acc, province) => {
  acc[province] = names.filter((name) => name.includes(province));
  return acc;
}, {});

console.log(provinceNamesToNames);

// Additional exercises

// 1. Use forEach to console log each product name to the console.
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

products.forEach((product) => {
  console.log(product.product);
});

// 2. Use filter to filter out products that have a name longer than 5 characters
const shortNames = products.filter((product) => product.product.length <= 5);

console.log(shortNames);

//  3. Use filter and map to convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.

const filteredProducts = products
  .filter((product) => product.price !== "")
  .map((product) => {
    product.price = Number(product.price);
    return product;
  });

const combinedPrice = filteredProducts.reduce(
  (acc, product) => acc + product.price,
  0
);

console.log(combinedPrice);

// 4. Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
const concatenatedNames = products.reduce(
  (acc, product) => acc + product.product + ", ",
  ""
);

console.log(concatenatedNames);

// 5. Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: Highest: coffee. Lowest: banana.
const highestPrice = products.reduce(
  (acc, product) => (acc > product.price ? acc : product.price),
  -Infinity
);
const lowestPrice = products.reduce(
  (acc, product) => (acc < product.price ? acc : product.price),
  Infinity
);

const highestLowestNames = `Highest: ${
  products.find((product) => product.price === highestPrice).product
}. Lowest: ${
  products.find((product) => product.price === lowestPrice).product
}`;

console.log(highestLowestNames);

// 6. Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array:
// product should be changed to name
// price should be changed to cost
const newProducts = Object.entries(products).reduce((acc, [product, price]) => {
  acc[product] = price;
  return acc;
}, {});

console.log(newProducts);
