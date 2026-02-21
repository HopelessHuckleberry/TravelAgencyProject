const destinations = [
  { name: "Italy", price: 1200 },
  { name: "Thailand", price: 1350 },
  { name: "Nepal", price: 1500 },
];

const destinationHTML = destinations.map(
  (dest) => `
  <div class="package">
    <h3>${dest.name}</h3>
    <p>Price: $${dest.price}</p>
  </div>
`,
);

document.querySelector("#dynamic-destinations").innerHTML =
  destinationHTML.join("");

const packages = document.querySelectorAll(".package");

packages.forEach((pkg) => {
  pkg.addEventListener("click", () => {
    pkg.classList.toggle("highlight");
  });
});
