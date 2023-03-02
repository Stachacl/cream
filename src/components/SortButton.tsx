import { useState } from "react";
import { creams } from "../data/creams";
import { SingleCream } from "./SingleCream";

const sortOptions = [
  { label: 'Sort by price', value: 'Price Min to Max' },
  { label: 'Sort by name', value: 'Name A-Z' },
];

function SortButton() {
  const [selectedOption, setSelectedOption] = useState('');
  const [sortedItems, setSortedItems] = useState(creams);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    if (event.target.value === 'Price Min to Max') {
        setSortedItems(creams.sort((a, b) => a.price - b.price));
        } else if (event.target.value === 'Name A-Z') {
            setSortedItems(creams.sort((a, b) => a.title.localeCompare(b.title)));
        }
        else {
            setSortedItems(creams);
        }   
  };

  return (
    <div className="container mx-auto my-10">
      <h3 className="text-xl font-bold mb-5">Sort by:</h3>
      <select
        className="bg-gray-200 py-2 px-4 rounded-md"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Default</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-5">
        Items sorted by: <strong>{selectedOption}</strong>
      </p>

      {creams.map(cream => < SingleCream cream={cream} key={cream.id}/>)}

    </div>
  );
}

export default SortButton;



// // creating a state variable for sortOrder
// const [sortOrder, setSortOrder] = useState <"asc" | "desc">("asc");

// //function that handle sort order change, wen user select an option from drop down

// const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {    
//     setSortOrder(e.target.value as "asc" | "desc");
// };

// // dropdown element with two options for sorting

// <div>
//     <label htmlFor="sortOrder">Sort by Price </label>
//     <select name="sortOrder" id="sortOrder" onChange={handleSortOrderChange}> 
//         <option value="asc">Ascending</option>
//         <option value="desc">Descending</option>
//     </select>
// </div>


// //functon to sort items

// const sortedItems = items.sort((a, b) => {

//     if (sortOrder === "asc") {
//         return a.price - b.price;
//     } else {
//         return b.price - a.price;
//     }
// });

// //returning sorted items using map

// <ul>    
//     {sortedItems.map((item) => (
//         <li key={item.id}>
//             {item.name} - ${item.price.toFixed(2)}
//         </li>
//     ))}
// </ul>




// const SortButton = () => (
//   <div className="">
//     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//       <svg
//         className="fill-current h-3 w-3"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Sort</title>
//         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//       </svg>
//     </button>
//   </div>
// );
// export default SortButton;

// {/* <div> */}
//   {/* <button onClick={toggleSortOrder}>
//     Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
//   </button>
//   <ul>
//     {sortedItems.map((item) => (
//       <li key={item.id}>
//         {item.name} - ${item.price.toFixed(2)}
//       </li>
//     ))}
//   </ul>
// </div> */}

