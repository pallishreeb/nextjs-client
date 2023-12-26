"use client"
// components/FilterComponent.tsx
import React, { useState } from "react";

interface FilterComponentProps {
  // Add any additional props if needed
}

const FilterComponent: React.FC<FilterComponentProps> = () => {
  // Sample data for categories and subcategories
  const categories: string[] = ["Category 1", "Category 2", "Category 3"];
  const subcategories: Record<string, string[]> = {
    "Category 1": ["Subcategory 1A", "Subcategory 1B", "Subcategory 1C"],
    "Category 2": ["Subcategory 2A", "Subcategory 2B", "Subcategory 2C"],
    "Category 3": ["Subcategory 3A", "Subcategory 3B", "Subcategory 3C"],
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div className="p-4 border rounded-md  mx-auto md:w-full md:mx-0">
      <h2 className="text-lg font-bold mb-4">Filter</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-md mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h3 className="text-md font-semibold mb-2">Categories</h3>
        <ul>
          {categories
            .map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 border rounded-md ${
                  selectedCategory === category ? "bg-blue-100" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
                {selectedCategory === category && (
                  <ul className="ml-4 mt-2">
                    {subcategories[category].map((subCategory) => (
                      <li
                        key={subCategory}
                        className="cursor-pointer p-2 border rounded-md"
                      >
                        {subCategory}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
