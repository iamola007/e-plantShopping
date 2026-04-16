import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plants, categories } from "../data/plants";
import { addItem, selectCartItems } from "../features/cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Helper: check if a plant is already in cart (quantity > 0)
  const isAdded = (plantId) => cartItems.some((item) => item.id === plantId);

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        thumbnail: plant.thumbnail,
      }),
    );
  };

  // Group plants by category (each plant may appear in multiple categories)
  const getPlantsByCategory = (category) => {
    return plants.filter((plant) => plant.categories.includes(category));
  };

  // Show only categories that have at least one plant
  const displayedCategories = categories.filter(
    (cat) => getPlantsByCategory(cat).length > 0,
  );

  return (
    <div className="product-list">
      <h2>Our Houseplants</h2>
      {displayedCategories.map((category) => (
        <section key={category} className="category-section">
          <h3>{category}</h3>
          <div className="plants-grid">
            {getPlantsByCategory(category).map((plant) => (
              <div className="plant-card" key={`${plant.id}-${category}`}>
                <img
                  src={plant.thumbnail}
                  alt={plant.name}
                  className="plant-image"
                />
                <h4>{plant.name}</h4>
                <p className="scientific">({plant.scientific})</p>
                <p className="description">{plant.description}</p>
                <p className="price">${plant.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
