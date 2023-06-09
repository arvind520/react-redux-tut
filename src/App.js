import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import store from "./redux/store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}
