export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  // Get ingredients list (MealDB stores them as strIngredient1...20)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim()} ${ingredient.trim()}`);
    }
  }

  return (
    <div onClick={onClose} style={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>✕</button>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={styles.image} />
        <div style={styles.content}>
          <h2 style={styles.title}>{recipe.strMeal}</h2>
          <div style={styles.tags}>
            <span style={styles.tag}>{recipe.strCategory}</span>
            <span style={styles.tag}>{recipe.strArea}</span>
          </div>

          <h3 style={styles.sectionTitle}>Ingredients</h3>
          <ul style={styles.ingredients}>
            {ingredients.map((item, i) => (
              <li key={i} style={styles.ingredient}>{item}</li>
            ))}
          </ul>

          <h3 style={styles.sectionTitle}>Instructions</h3>
          <p style={styles.instructions}>{recipe.strInstructions}</p>

          {recipe.strYoutube && (
            <a href={recipe.strYoutube} target="_blank" rel="noreferrer" style={styles.youtubeBtn}>
              ▶ Watch on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 100, padding: "20px",
  },
  modal: {
    background: "#fff", borderRadius: "16px",
    maxWidth: "620px", width: "100%",
    maxHeight: "90vh", overflowY: "auto",
    position: "relative",
  },
  closeBtn: {
    position: "absolute", top: "12px", right: "12px",
    background: "#fff", border: "none", fontSize: "18px",
    cursor: "pointer", borderRadius: "50%",
    width: "32px", height: "32px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  image: { width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px 16px 0 0" },
  content: { padding: "24px" },
  title: { fontSize: "22px", fontWeight: "800", margin: "0 0 10px", color: "#1a202c" },
  tags: { display: "flex", gap: "8px", marginBottom: "20px" },
  tag: { background: "#fff3e0", color: "#e85d04", fontSize: "12px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px" },
  sectionTitle: { fontSize: "15px", fontWeight: "700", color: "#2d3748", margin: "20px 0 10px", textTransform: "uppercase", letterSpacing: "0.05em" },
  ingredients: { paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "4px" },
  ingredient: { fontSize: "14px", color: "#4a5568" },
  instructions: { fontSize: "14px", color: "#4a5568", lineHeight: "1.7", whiteSpace: "pre-line" },
  youtubeBtn: { display: "inline-block", marginTop: "20px", background: "#ff0000", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "14px" },
};