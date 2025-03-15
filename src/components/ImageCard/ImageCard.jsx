import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  image: {
    alt_description,
    profile_image: { small },
  },
}) {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
}
