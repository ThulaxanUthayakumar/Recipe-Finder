import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes, loading, error, onCardClick }) {
  if (loading) {
    return <p style={styles.message}>Loading recipes...</p>;
  }

  if (error) {
    return <p style={{ ...styles.message, color: "#e53e3e" }}>{error}</p>;
  }

  return (
    <div style={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "32px",
  },
  message: {
    textAlign: "center",
    marginTop: "60px",
    fontSize: "16px",
    color: "#718096",
  },
};