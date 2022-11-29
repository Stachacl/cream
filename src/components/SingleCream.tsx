import { ICream } from "../models";

interface SingleCreamProps {
  cream: ICream;
}

export function SingleCream( { cream }: SingleCreamProps) {

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={cream.image} className="w-1/3" alt={cream.title}/>
      <p> {cream.title }</p>
      <button className="py-2 px-4 border bg-slate-300"> Show describtion </button>
      <span className="font-bold"> ${cream.price} </span>

    </div>
  );
}
