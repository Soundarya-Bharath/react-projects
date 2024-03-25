import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ imagesList }) {
  console.log(imagesList);
  const renderedImages = imagesList.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
