import { SingleCream } from "./components/SingleCream";
import { creams } from "./data/creams";

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold "> Cream App </h1>

      {creams.map(cream => < SingleCream cream={cream}/>)}
      
      {/* same code before optimisation below: */}

      {/* <SingleCream cream={creams[0]} />
      <SingleCream cream={creams[1]} /> */}
    </div>
  );
}

export default App;
