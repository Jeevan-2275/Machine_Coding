import { useState, useEffect } from 'react';

function ApiFetchDisplay() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);  // Set the fetched users to the state
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set the error message if fetching fails
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiFetchDisplay;
