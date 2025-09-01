import React from 'react';

function Menu() {
  const menu = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Grilled bread topped with diced tomatoes, garlic, and basil.' },
        { name: 'Stuffed Grape Leaves', description: 'Vine leaves filled with rice, herbs, and lemon.' },
        { name: 'Hummus & Pita', description: 'Creamy chickpea dip served with warm pita bread.' }
      ]
    },
    {
      category: 'Main Dishes',
      items: [
        { name: 'Grilled Lemon Chicken', description: 'Marinated chicken breast grilled to perfection.' },
        { name: 'Greek Salad', description: 'Lettuce, tomatoes, olives, feta cheese, and vinaigrette.' },
        { name: 'Lemon Pasta', description: 'Spaghetti in creamy lemon-garlic sauce with parmesan.' },
        { name: 'Lamb Skewers', description: 'Grilled lamb served with tzatziki sauce and rice.' },
        { name: 'Falafel Plate', description: 'Crispy falafel with hummus, tabbouleh, and pita.' }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Baklava', description: 'Sweet pastry layers with honey and chopped nuts.' },
        { name: 'Lemon Sorbet', description: 'Light and refreshing lemon sorbet.' },
        { name: 'Greek Yogurt Parfait', description: 'Yogurt layered with honey, granola, and berries.' }
      ]
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Fresh Lemonade', description: 'Made with fresh lemons and mint.' },
        { name: 'Iced Hibiscus Tea', description: 'Floral and tangy herbal tea served cold.' },
        { name: 'Greek Coffee', description: 'Traditional strong coffee served in a small cup.' },
        { name: 'Red Wine', description: 'House red wine, rich and dry.' },
        { name: 'Sparkling Water', description: 'Chilled mineral sparkling water.' }
      ]
    }
  ];

  return (
    <main className="menu-page">
      <h2>Our Full Menu</h2>
      {menu.map((section, index) => (
        <div key={index} className="menu-section">
          <h3>{section.category}</h3>
          <div className="menu-list">
            {section.items.map((item, idx) => (
              <div className="menu-item" key={idx}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

export default Menu;
