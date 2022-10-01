import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

let uniqueCategories = new Set();
for (const iterator of items) {
  uniqueCategories.add(iterator.category);
}

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(['all',...uniqueCategories]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    }
    else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
