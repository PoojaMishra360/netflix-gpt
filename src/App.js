import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="flex  h-screen bg-slate-500">
  <Provider store={appStore}><Body /></Provider> 
    </div>
  );
}
export default App;
