import React from "react";
import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person: React.FC<Person> = (props) => {
  const [personBio, SetPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetPersonBio(event.target.value);
  };
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person: {props.isMarried ? "is Married" : "is Sin gle"}</p>
      <p>
        {""}
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
      <input onChange={handleChange} />
    </div>
  );
};
