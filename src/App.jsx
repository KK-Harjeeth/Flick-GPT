import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App; 