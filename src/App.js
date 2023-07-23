import { useState } from "react";
import Info from "./Info";

const App = () => {
  return <Info />;
};

// Info 컴포넌트
/* const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}; */

/* const App = () => {
  return <Counter />;
}; */

export default App;
