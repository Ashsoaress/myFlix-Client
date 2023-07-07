import { createRoot } from 'react-dom/client';
import { MainView } from "./components/main-view/main-view";
import { MovieCard } from "../movie-card/movie-card";


// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

const App = () => {
  return <MainView />;
 };
 
 const container = document.querySelector("#root");
 const root = createRoot(container);
 root.render(<App />);