import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";
export default function Home() {
  return (
    <>
      <h1 className="mt-5 text-3xl text-center">Search for a Car</h1>
      <SearchForm />
      <h1 className="mt-5 text-3xl text-center">Create a Car</h1>
      <CarForm />
    </>
  );
}
