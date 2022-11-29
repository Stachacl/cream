import { useState } from "react";
import { ICream } from "../models";

interface SingleCreamProps {
  cream: ICream;
}

export function SingleCream({ cream }: SingleCreamProps) {
  const [ descriptionDisplay, setDescriptionDisplay ] = useState(false)

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={cream.image} className="w-1/3" alt={cream.title} />
      <p> {cream.title}</p>
      <span className="font-bold"> ${cream.price} </span>

      <button 
        className="py-2 px-4 border bg-slate-300"
        onClick={() => setDescriptionDisplay(prev => !prev)}
        >
        { descriptionDisplay? "Hide Description" : 'Show Description' }
      </button>

      {/* //Only showing if descriptionDisplay is true:  */}
       { descriptionDisplay && <div className="border bg-slate-100 py-3 my-3">
        <p>{cream.description}</p>
       </div>}
    </div>
  );
}
