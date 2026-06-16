# 🍳 Recipe App

A simple and interactive web application to search for recipes from around the world. Built with vanilla JavaScript and the TheMealDB API.

## 🌟 Features

- **Search Recipes**: Search for recipes by meal name
- **Recipe Details**: View detailed information about each recipe including:
  - Meal name and image
  - Cuisine type and category
  - Complete ingredient list with measurements
  - Step-by-step cooking instructions
- **External Links**: Access original recipe sources and YouTube cooking videos
- **Responsive Design**: Works seamlessly on different screen sizes
- **Loading State**: Visual feedback while searching for recipes
- **Error Handling**: User-friendly messages for no results or errors

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch recipes from the API)

### Installation

1. Clone the repository or download the files:
```bash
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app

open index.html
# or double-click the index.html file


recipe-app/
├── index.html          # Main HTML file
├── style.css           # Styling (create if not exists)
├── script.js           # JavaScript functionality
└── README.md           # This file

🎯 How to Use
Search: Enter a recipe name in the search box (e.g., "Pasta", "Pizza", "Biryani")
View Results: Browse through the search results displaying recipe cards
View Details: Click "View Recipe" on any recipe card to see:
Full ingredient list
Detailed cooking instructions
Links to original recipe and video tutorial
Close Details: Click the close button (×) or click outside the popup to close it
🔗 API Used
This app uses the TheMealDB API - a free API for meal and recipe data.

API Endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s={query}
Documentation: TheMealDB API Docs
📝 JavaScript Functions
fetchRecipes(query)
Fetches recipes from the TheMealDB API based on the search query.

openRecipePopup(meal)
Opens a detailed popup showing full recipe information including ingredients, instructions, and external links.

showLoading()
Displays a loading message while fetching recipes.

🎨 HTML Elements Required
Ensure your HTML includes these elements:


<input class="SearchBox" type="text">
<form id="searchForm"><!-- search form --></form>
<div class="recipe-container"></div>
<div class="recipe-details">
  <div class="recipe-details-content"></div>
</div>
<button class="recipe-close-btn">&times;</button>

🎨 CSS Classes to Style
.recipe-container - Main container for recipe cards
.recipe - Individual recipe card
.recipe-details - Popup modal container
.recipe-details-content - Popup content area
.recipe-close-btn - Close button
.ingredient-list - Ingredients list
.recipe-btn - View recipe button
✨ Features Highlight
✅ Real-time search functionality
✅ Clean and intuitive UI
✅ Popup modal for detailed recipe view
✅ External links to recipes and YouTube videos
✅ Error handling and loading states
✅ Click outside to close modal
✅ Responsive and user-friendly
🐛 Error Handling
No Results: Shows "No Recipes Found 😔" message
API Error: Displays "⚠ Error Fetching Recipes" message
Empty Search: Prompts user to "Enter Recipe Name 🍔"
🚧 Future Enhancements
 Add favorites/bookmarking feature
 Save search history
 Filter by cuisine type and category
 Dark mode toggle
 Print recipe functionality
 Share recipe on social media
📄 License
This project is open source and available under the MIT License.

🤝 Contributing
Contributions are welcome! Feel free to:

Report bugs
Suggest new features
Submit pull requests
📧 Contact
For questions or feedback, feel free to reach out!

Enjoy exploring delicious recipes! 🍜🍕🍜
