import { useState } from "react";
import axios from "axios";
import css from "./App.module.css";
import fetchGalleryApi from "../../apiGallery";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const onSearch = async (query) => {
    try {
      setError(false);
      setImages([]);
      setLoader(true);
      const date = await fetchGalleryApi(query);
      setImages((prevImages) => {
        return [...prevImages, date];
      });
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ImageGallery images={images} />
    </>
  );
}
