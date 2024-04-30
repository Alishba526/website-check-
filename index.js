document.addEventListener("DOMContentLoaded", function() {
    const cuisineSelector = document.getElementById("cuisine");
    const restaurantList = document.getElementById("restaurant-list");

    cuisineSelector.addEventListener("change", function() {
        const selectedCuisine = cuisineSelector.value;

        if (selectedCuisine === "all") {
            showAllRestaurants();
        } else {
            filterRestaurantsByCuisine(selectedCuisine);
        }
    });

    function showAllRestaurants() {
        const restaurants = document.querySelectorAll(".restaurant");
        restaurants.forEach(restaurant => {
            restaurant.style.display = "block";
        });
    }

    function filterRestaurantsByCuisine(cuisine) {
        const restaurants = document.querySelectorAll(".restaurant");
        restaurants.forEach(restaurant => {
            const restaurantCuisine = restaurant.getAttribute("data-cuisine");
            if (restaurantCuisine === cuisine) {
                restaurant.style.display = "block";
            } else {
                restaurant.style.display = "none";
            }
        });
    }
});