import css from "./LoadMoreBtn.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadMoreBtn({ setPage, page }) {
  return (
    <>
      <button className={css.buttonLoadMore} onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </>
  );
}
