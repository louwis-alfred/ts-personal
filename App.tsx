import { Person } from "./Person";
function App() {
  const fetchUser = () => ({ name: "Louwis", age: 23, isMarried: false });
  const userFetch = fetchUser();
  return (
    <>
      <Person
        name={userFetch.name}
        age={userFetch.age}
        isMarried={userFetch.isMarried}
      />
      ;
    </>
  );
}

export default App;
