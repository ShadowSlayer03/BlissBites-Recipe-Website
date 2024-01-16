let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let removeIngredientsBtn = document.getElementById('removeIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelector('.ingredientDiv');

addIngredientsBtn.addEventListener('click', () => {
    let newIngredientDiv = ingredientDiv.cloneNode(true);
    newIngredientDiv.querySelector('input').value = '';
    ingredientList.appendChild(newIngredientDiv);
});

removeIngredientsBtn.addEventListener('click',()=>{
    let lastIngredientDiv = ingredientList.lastElementChild;
    ingredientList.removeChild(lastIngredientDiv);
});
