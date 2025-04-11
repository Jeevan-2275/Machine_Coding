import { useState } from 'react';

function LiveSearchFilter() {
  // List of names to be filtered
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'];

  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change and update search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the names based on the search query
  const filteredNames = names.filter(name => 
    name.toLowerCase().includes(searchQuery.toLowerCase())  // Case-insensitive search
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search names..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>  // Display each filtered name
        ))}
      </ul>
    </div>
  );
}

export default LiveSearchFilter;
