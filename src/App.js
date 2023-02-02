import "./App.css";
import TopButtons from "./components/top-buttons";
import Content from "./components/content";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responseJson = await response.json();
      const finalResponse = JSON.stringify(responseJson);
      console.log(responseJson);
      console.log(finalResponse);
      setData(finalResponse);
    };
    fetchPost();
  }, []);

  return (
    <div className="App">
      <TopButtons />
      <Content data={data} />
    </div>
  );
}

export default App;
