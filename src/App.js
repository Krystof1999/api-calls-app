import "./App.css";
import TopButtons from "./components/top-buttons";
import Content from "./components/content";
import { useEffect, useState } from "react";
import Table from "./components/table";

function App() {
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [btnIndex, setbtnIndex] = useState(1);

  const apiCall = async (url = "") => {
    try {
      const response = await fetch(url);

      if (!response.ok)
        throw Error("Response is not ok => Check your URL adress!");
      const responseJson = await response.json();
      setData(responseJson);
    } catch (err) {
      setApiError(err.message);
    }
  };

  useEffect(() => {
    apiCall("https://jsonplaceholder.typicode.com/users");
  }, []);

  const handleClick = (url, index) => {
    apiCall(url);
    setbtnIndex(index);
  };

  return (
    <div className="App">
      <TopButtons handleClick={handleClick} btnIndex={btnIndex} />
      {apiError && <p>{apiError}</p>}
      {/* {!apiError && <Content data={data} />} */}
      <Table data={data} />
    </div>
  );
}

export default App;
