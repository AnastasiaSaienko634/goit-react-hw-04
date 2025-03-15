import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  console.log(images);
  return (
    <>
      <ul>
        {images.map((image, index) => (
          <li key={image.id || index}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}
