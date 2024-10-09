import { Tabs } from "antd-mobile";
import useProducts from "./useProducts";

function Home() {
  const productList = useProducts();

  if (!productList) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <Tabs defaultActiveKey={"126"}>
        {productList &&
          productList.map((productItem) => (
            <Tabs.Tab title={productItem.title} key={productItem.id}>
              菠萝
            </Tabs.Tab>
          ))}
      </Tabs>
    </div>
  );
}

export default Home;
