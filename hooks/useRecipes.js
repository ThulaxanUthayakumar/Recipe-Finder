import { useState, useEffect } from "react";
import { searchRecipes, getRandomRecipes } from "@/lib/api";

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  // Load random recipes on first visit
  useEffect(() => {
    loadRandom();
  }, []);

  async function loadRandom() {
    setLoading(true);
    setError(null);
    try {
      const data = await getRandomRecipes();
      setRecipes(data);
    } catch (err) {
      setError("Failed to load recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(searchQuery) {
    if (!searchQuery.trim()) {
      loadRandom();
      return;
    }
    setLoading(true);
    setError(null);
    setQuery(searchQuery);
    try {
      const data = await searchRecipes(searchQuery);
      if (data.length === 0) {
        setError(`No recipes found for "${searchQuery}"`);
        setRecipes([]);
      } else {
        setRecipes(data);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return { recipes, loading, error, query, handleSearch };
}