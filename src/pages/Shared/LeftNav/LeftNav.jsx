import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://the-news-dragon-server-sayed8901.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>all categories</h4>
      <div className="ps-4">
        {catagories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-secondary text-decoration-none">{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
