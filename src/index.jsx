import { createRoot } from "react-dom/client";
import { MainView } from "./components/mainview/mainview";

import "./index.scss";

const App = () => {
 return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
