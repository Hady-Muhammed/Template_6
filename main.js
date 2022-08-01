let tabs = document.querySelectorAll(".menu ul li");
let tabsArray = Array.from(tabs);
let tab1 = document.getElementById('t1');
let tab2 = document.getElementById('t2');
let cont = document.querySelector(".menu .text");
tabsArray.forEach((ele) => {
    ele.addEventListener('click' , () => {
        tabsArray.forEach((e)=> {
            e.classList.remove('active');
        });
        ele.classList.add('active');
    })
});

tab2.onclick = function () {
    cont.innerHTML =
    `
    <h5 class="fs-2 text-dark  p-3">Coffee</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Regular coffee 2.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Chocolato</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Chocolate espresso with milk 4.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Corretto</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Whiskey and coffee 5.00 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Iced tea</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Hot tea, except not hot 3.00 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Soda</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Coke, Sprite, Fanta, etc. 2.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
    `
}
tab1.onclick = function () {
    cont.innerHTML = 
    `
    <h5 class="fs-2 text-dark  p-3">Bread Basket</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Assortment of fresh baked fruit breads and muffins 5.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Honey Almond Granola with Fruits</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Belgian Waffle</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Vanilla flavored batter with malted flour 7.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Scrambled eggs</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
          <h5 class="fs-2 text-dark  p-3">Blueberry Pancakes</h5>
          <p class="mb-5 pb-5 fs-4 text-black-50 p-3">With syrup, butter and lots of berries 8.50 <i class="text-success fa-solid fa-dollar-sign"></i></p>
    `
}