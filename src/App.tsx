import React from "react";
import styles from "./app.scss";
import TestBBC from "./components/test";
import styles2 from "./styles.scss";

const App = () => {
  return (
    <div>
      <div className={styles.content}>
        <b className={styles2.body}>Getting Started</b>
        <TestBBC />
      </div>
    </div>
  );
};

export default App;
