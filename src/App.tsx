import { SingleCream } from "./components/SingleCream";
import { creams } from "./data/creams";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import All from './components/All'; 
import Blacklist from './components/Blacklist';
import { ALL } from "dns";
import SortButton from "./components/SortButton";
// import Whitelist from './components/Whitelist';
// import MyAllergens from './components/MyAllergens';

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
          <Router>
            <Navbar />
              {/* <Route path="/all">
                <All />
              </Route>
              <Route path="/blacklist">
                <Blacklist />
              </Route>
              <Route path="/whitelist">
                <Whitelist />
              </Route>
              <Route path="/my-allergens">
                <MyAllergens />
              </Route> */}
          </Router>
          <SortButton />
          {/* //below is the code that i moved to the SortButton.tsx file, to show creams */}
          {/* {creams.map(cream => < SingleCream cream={cream} key={cream.id}/>)}
  */}
    </div>
  );
}

export default App;
