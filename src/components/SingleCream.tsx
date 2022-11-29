import { ICream } from "../models";

interface SingleCreamProps {
  cream: ICream;
}

export function SingleCream(props: SingleCreamProps) {

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {props.cream.title }
      <img src={props.cream.image}/>
    </div>
  );
}
