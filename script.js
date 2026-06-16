console.log("Recipe App Loaded");

const searchBox = document.querySelector(".SearchBox");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetails = document.querySelector(".recipe-details");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const form = document.querySelector("#searchForm");

/* OPEN POPUP */

const openRecipePopup = (meal) => {

    let ingredients = "";

    for(let i = 1; i <= 20; i++){

        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if(ingredient && ingredient.trim()){

            ingredients += `
            <li>
                ${measure} ${ingredient}
            </li>
            `;
        }
    }

    recipeDetailsContent.innerHTML = `

        <button class="recipe-close-btn">
            &times;
        </button>

        <h2 class="recipeName">
            ${meal.strMeal}
        </h2>

        <img
        src="${meal.strMealThumb}"
        alt="${meal.strMeal}"
        class="popup-img">

        <h3>🍽 ${meal.strArea} Cuisine</h3>

        <p>
            <strong>Category:</strong>
            ${meal.strCategory}
        </p>

        <h3>Ingredients</h3>

        <ul class="ingredient-list">
            ${ingredients}
        </ul>

        <div class="recipeInstructions">

            <h3>Instructions</h3>

            <p>
                ${meal.strInstructions}
            </p>

        </div>

        <div class="popup-links">

            ${
                meal.strSource
                ?
                `<a href="${meal.strSource}" target="_blank" class="recipe-link">
                    Original Recipe
                </a>`
                :
                ""
            }

            ${
                meal.strYoutube
                ?
                `<a href="${meal.strYoutube}" target="_blank" class="youtube-link">
                    Watch Video
                </a>`
                :
                ""
            }

        </div>
    `;

    recipeDetails.classList.add("show");

    document
    .querySelector(".recipe-close-btn")
    .addEventListener("click", () => {
        recipeDetails.classList.remove("show");
    });
};

/* LOADING */

const showLoading = () => {

    recipeContainer.innerHTML = `
        <h2>🔍 Searching Recipes...</h2>
    `;
};

/* FETCH */

const fetchRecipes = async(query) => {

    try{

        showLoading();

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        const data = await response.json();

        recipeContainer.innerHTML = "";

        if(!data.meals){

            recipeContainer.innerHTML =
            `<h2>No Recipes Found 😔</h2>`;

            return;
        }

        data.meals.forEach((meal) => {

            const recipeDiv =
            document.createElement("div");

            recipeDiv.classList.add("recipe");

            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">

                <h2>${meal.strMeal}</h2>

                <h3>
                    🍽 ${meal.strArea}
                </h3>
                

                <p>
                    ${meal.strInstructions.slice(0,120)}...
                </p>

                <button class="recipe-btn">
                    View Recipe
                </button>
            `;

            recipeDiv
            .querySelector(".recipe-btn")
            .addEventListener("click", () => {
                openRecipePopup(meal);
            });

            recipeContainer.appendChild(recipeDiv);
        });

    }

    catch(error){

        console.error(error);

        recipeContainer.innerHTML =
        `<h2>⚠ Error Fetching Recipes</h2>`;
    }
};

/* SEARCH */

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const query =
    searchBox.value.trim();

    if(!query){

        recipeContainer.innerHTML =
        `<h2>Enter Recipe Name 🍔</h2>`;

        return;
    }

    fetchRecipes(query);
});

/* OUTSIDE CLICK CLOSE */

recipeDetails.addEventListener("click",(e)=>{

    if(e.target === recipeDetails){

        recipeDetails.classList.remove("show");
    }
});