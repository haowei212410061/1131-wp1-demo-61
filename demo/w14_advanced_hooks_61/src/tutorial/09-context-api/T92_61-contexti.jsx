import React, { createContext, useContext, useState } from "react";
import { data } from '../../data';
import T92_61 from './T92_61-context-api'
const PersonContext = createContext();

export function PersonContextProvider_61({ children }) {
  const [people, setPeople] = useState(data);
  console.log('data', data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }} >
      {children}
    </PersonContext.Provider>
  )
}

export function usePersonContext() {
  return useContext(PersonContext);
}

