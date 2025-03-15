import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    onSearch(query);
    console.log(query);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
