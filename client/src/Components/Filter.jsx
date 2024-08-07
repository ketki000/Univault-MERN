import React, { useState } from 'react';

const Filter = ({ data }) => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (category) => {
    if (filters.includes(category)) {
      // Remove filter if already applied
      setFilters(filters.filter(filter => filter !== category));
    } else {
      // Add filter if not applied
      setFilters([...filters, category]);
    }
  };

  const filteredData = data.filter(entry => {
    // Check if entry matches all selected filters
    return filters.every(filter => entry.categories.includes(filter));
  });

  return (
    <div>
      <h1>Hi</h1>
      <div className="filter-dropdown">
        <button className="filter-button">Filters</button>
        <div className="dropdown-content">
          <button onClick={() => handleFilterChange('Category1')}>
            Category1
          </button>
          <button onClick={() => handleFilterChange('Category2')}>
            Category2
          </button>
          {/* Add more buttons for additional categories */}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.column1}</td>
              <td>{entry.column2}</td>
              {/* Add more table cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
