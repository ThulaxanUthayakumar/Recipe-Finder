const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchRecipes(query) {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
}

export async function getRecipeById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
}

export async function getRandomRecipes() {
  // MealDB has no "random many" endpoint, so we fetch 8 random ones
  const promises = Array.from({ length: 8 }, () =>
    fetch(`${BASE_URL}/random.php`).then((r) => r.json())
  );
  const results = await Promise.all(promises);
  return results.map((r) => r.meals[0]);
}