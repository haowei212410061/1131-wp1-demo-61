import { useAppContext } from "../pages/context_61";

const SingleItem_61 = ({ item }) => {
  const { removeItem, editItem } = useAppContext();
  return (
    <div className='single-item'>
      <input type="checkbox" defaultChecked={item.completed} onChange={() => editItem(item.id)} />
      <p style={{ textTransform: 'capitalize', textDecoration: item.completed && 'line-through' }}>{item.name}</p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem_61;
