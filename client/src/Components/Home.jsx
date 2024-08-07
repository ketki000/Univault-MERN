import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");
  console.log(search);

  const sortByColumn = (colname) => {
    console.log(colname);
    if (order == "ASC") {
      console.log("ascending");
      const sorted = [...users].sort((a, b) => {
        return a[colname].toLowerCase() > b[colname].toLowerCase() ? 1 : -1;
      });
      setOrder("DESC");
      setUsers(sorted);
      console.log("users-----", sorted);
    } else if (order == "DESC") {
      console.log("descending");
      const sorted = [...users].sort((a, b) => {
        return a[colname].toLowerCase() < b[colname].toLowerCase() ? 1 : -1;
      });
      setOrder("ASC");
      setUsers(sorted);
      console.log("users-----", sorted);
    }
  };
const handleFilter = (city)=>{
  
}
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-4/5 md:w-1/2 lg:w-4/5 h-5/6">
          <h2 className="text-center text-2xl">Home</h2>
          <div className="overflow-y-auto max-h-full">
            <div className="flex justify-end">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Dropdown
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <ul className="py-1">
            <li
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedItem === 'Indore' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleFilter('Indore')}
            >
              Indore
            </li>
            <li
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedItem === 'Bhopal' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleFilter('Bhopal')}
            >
              Bhopal
            </li>
            <li
              className={`cursor-pointer px-4 py-2 text-sm ${
                selectedItem === 'Delhi' ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleFilter('Delhi')}
            >
              Delhi
            </li>
          </ul>
                  </div>
                )}
              </div>
              <div className=" bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-3xl cursor-pointer mr-10">
                <Link to="/create">Add +</Link>
              </div>
            </div>
            <div className="max-w-sm mx-auto">
              <input
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search Users..."
              />
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button type="button" onClick={() => sortByColumn("name")}>
                      Name
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button type="button" onClick={() => sortByColumn("email")}>
                      Email
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs">
                {users
                  .filter((user) => {
                    return search.toLowerCase() === ""
                      ? user
                      : user.name.toLowerCase().includes(search);
                  })
                  .map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100">
                      {console.log("inside tr")}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                          Read
                        </button>

                        <button
                          type="button"
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mx-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;