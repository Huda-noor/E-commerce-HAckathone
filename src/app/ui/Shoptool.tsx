'use client';
import { useState } from "react";

interface FilterOptions {
  category: string;
  search: string;
  sort: string;
  itemsPerPage: number;
}

interface ShopToolbarProps {
  totalResults?: number;
  categories?: string[];
  onFilterChange: (filters: FilterOptions) => void;
}

const ShopToolbar: React.FC<ShopToolbarProps> = ({ totalResults = 32, categories = [], onFilterChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle filter changes
  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      search: searchQuery,
      sort: sortOption,
      itemsPerPage: itemsPerPage,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between border border-gray-300 p-4 bg-gray-100 text-sm gap-4">
      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleFilterChange();
          }}
          className="border border-gray-300 rounded px-3 py-1 text-gray-700 w-64"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <label className="text-gray-700">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
          }}
          className="border border-gray-300 rounded px-2 py-1 text-gray-700"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Show Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-gray-700">Show:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            handleFilterChange();
          }}
          className="border border-gray-300 rounded px-2 py-1 text-gray-700"
        >
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-gray-700">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            handleFilterChange();
          }}
          className="border border-gray-300 rounded px-2 py-1 text-gray-700"
        >
          <option value="default">Default</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default ShopToolbar;
