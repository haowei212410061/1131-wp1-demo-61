import { usePersonContext, PersonContextProvider_61 } from "./T92_61-contexti";


function T92_61() {
  return (
    <PersonContextProvider_61 >
      <h3>Context Api -- 212410061</h3>
      <List />
    </PersonContextProvider_61>

  )

}
const List = () => {
  const { people } = usePersonContext();
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePersonContext();
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};


export default T92_61;

