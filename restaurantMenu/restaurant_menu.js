const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];


const breakfastMenuItemsHTML = breakfastMenu.map((item, index)=> `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item,index)=>{
    mainCourseItem+=`<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = '';
for(let i = 0;  i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;

const breakfastMenuPrices = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const breakfastMenuPricesHTML = breakfastMenuPrices.map((item, index) =>`<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuPricesHTML;

let mainCourseItemPriceHTML = "";
const mainCourseItemPrices = ['Steak -$24', 'Pasta -$15', 'Oatmeal -$8', 'Frittata -$17'];
mainCourseItemPrices.forEach(function(item, index){
    mainCourseItemPriceHTML+=`<p>Item ${index+1}: ${item}`; 
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItemPriceHTML;

let dessertItemPricesHTML = "";
const dessertMenuItemPrices = ["Cake -$10", "Ice Cream -$5", "Pudding -$3", "Fruit Salad -$69.69"];
for(let i = 0; i < dessertMenuItemPrices.length; i++){
    dessertItemPricesHTML+=`<p>Item ${i+1}: ${dessertMenuItemPrices[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItemPricesHTML;