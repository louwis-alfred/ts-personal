interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person: React.FC<Person> = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person: {props.isMarried ? "is Married" : "is Single"}</p>
    </div>
  );
};
