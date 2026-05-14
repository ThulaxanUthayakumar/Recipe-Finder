"use client";

import { useState } from "react";
import { useRecipes } from "@/hooks/useRecipes";
import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import RecipeModal from "@/components/RecipeModal";

export default function Home() {
  const { recipes, loading, error, handleSearch } = useRecipes();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🍳 Recipe Finder</h1>
        <p style={styles.subtitle}>Search thousands of recipes from around the world</p>
        <SearchBar onSearch={handleSearch} />
      </header>

      <RecipeGrid
        recipes={recipes}
        loading={loading}
        error={error}
        onCardClick={setSelectedRecipe}
      />

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  );
}

const styles = {
  main: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "8px",
  },
  logo: {
    fontSize: "36px",
    fontWeight: "800",
    margin: "0 0 8px",
    color: "#1a202c",
  },
  subtitle: {
    color: "#718096",
    marginBottom: "24px",
    fontSize: "16px",
  },
};