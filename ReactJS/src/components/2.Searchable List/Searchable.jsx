import { useState } from "react";

const users = [
    "jeevan",
    "sai",
    "kumar",
    "Nagesh",
    "Ravi",
    "Prathmesh",
    "Sandeep"
]

function SearchList() {
    const [query, setQuery] = useState("");
    

    const filtered = users.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
);


return(
    <div>
        <h2>Searchable List</h2>
        <input type= "text" value = {query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>

        {filtered.length === 0 ? (
            <p>No results found.</p>
        ) :(
            <ul>
                {filtered.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        
        )}
    </div>

)
};

export default SearchList;