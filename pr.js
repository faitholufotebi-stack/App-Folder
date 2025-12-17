const cakes = [
  {
    id: 1,
    title: "Red Velvet Cake",
    description:
      "A rich, velvety masterpiece with a hint of cocoa and a stunning red hue. Soft, moist layers are paired with creamy cream cheese frosting, creating a perfect balance of flavors that delight the senses.",
    image: "red velvet cake.jpg",
    price: 25.0,
  },

  {
    id: 2,
    title: "Vanilla Cream Cake",
    description:
      "A timeless favorite made with soft, fluffy vanilla sponge layers filled and frosted with smooth, creamy vanilla buttercream.Light, elegant, and perfectly sweet — it’s the ideal cake for any celebration or simple indulgence.",
    image: "vanilla cream cake.jpg",
    price: 20.0,
  },

  {
    id: 3,
    title: "Butter Cake",
    description:
      "A golden, tender classic made with rich, creamy butter for that melt-in-your-mouth texture. Light, moist, and beautifully simple perfect for tea time, birthdays, or any moment that calls for a little sweetness.",
    image: "butter cake.jpg",
    price: 30.0,
  },

  {
    id: 4,
    title: "Muffins",
    description:
      "Soft, fluffy, and freshly baked — our muffins come bursting withflavor in every bite. Perfectly moist and golden, they’re ideal for breakfast, a quick snack, or a sweet treat any time of day.",
    image: "muffins.jpg",
    price: 15.0,
  },

  {
    id: 5,
    title: "Meatpie",
    description:
      " A savory delight with a buttery, flaky crust filled with seasoned minced meat, potatoes, and vegetables. Baked to perfection for that warm, comforting taste everyone  loves.",
    image: "meatpie.jpg",
    price: 18.0,
  },

  {
    id: 6,
    title: "Doughnut",
    description:
      "Golden, soft, and perfectly glazed — our doughnuts are sweet,fluffy rings of happiness. Each bite melts in your mouth, making them a timeless favorite for all ages.",
    image: "doughnut.jpg",
    price: 10.0,
  },
];

let cakecontainer = document.getElementById("cake-container");

let cakecard = "";

for (let cake of cakes) {
  cakecard += `
    <div class="col">
      <div class="card h-100">
        <img src="${cake.image}" class="card-img-top" alt="${cake.title}" />
        <div class="card-body">
          <h5 class="card-title ">${cake.title}</h5>
          <p class="card-text">
            ${cake.description}
          </p>
          <p class="card-text fw-bold">$${cake.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
    `;
}
