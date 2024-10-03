import router from "./router";
import { RouterProvider } from "react-router-dom";
import { Button } from "antd-mobile";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Button color="primary">全局定制</Button>
      <div className="green__Theme">
        <Button color="primary">局部定制</Button>
      </div> */}
    </div>
  );
}

export default App;
