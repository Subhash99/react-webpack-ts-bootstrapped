import { createRoot } from "react-dom/client";
import App from "./App";
import styles from "./styles.scss";

const element = document.getElementById("root");

if (element) {
  const root = createRoot(element);
  root.render(<App />);
}
