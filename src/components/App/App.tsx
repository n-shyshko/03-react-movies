import SearchForm from "../SearchBar/SearchBar";

const App = () => {
  const handleSubmit = (searchValue: string) => {
    // console.log("🔎 Search query:", searchValue);
  };

  return <SearchForm onSearch={handleSubmit} />;
};

export default App;
