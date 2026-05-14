export default function RecipeCard({ recipe, onClick }) {
  return (
    <div onClick={() => onClick(recipe)} style={styles.card}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={styles.image}
      />
      <div style={styles.info}>
        <h3 style={styles.title}>{recipe.strMeal}</h3>
        <div style={styles.tags}>
          <span style={styles.tag}>{recipe.strCategory}</span>
          <span style={styles.tag}>{recipe.strArea}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "14px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "14px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    color: "#1a202c",
  },
  tags: {
    display: "flex",
    gap: "6px",
  },
  tag: {
    background: "#fff3e0",
    color: "#e85d04",
    fontSize: "11px",
    fontWeight: "600",
    padding: "3px 9px",
    borderRadius: "20px",
  },
};