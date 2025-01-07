import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person: React.FC<Person> = (props) => {
  const [personBio, SetPersionBio] = useState<string | null>(null)
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person: {props.isMarried ? "is Married" : "is Single"}</p>
      <p>
        {""}
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
    </div>
  );
};
