import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import searchImages from "./api";

function App() {
  const [imagesList, setImagesList] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImagesList(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imagesList={imagesList} />
    </div>
  );
}

export default App;
