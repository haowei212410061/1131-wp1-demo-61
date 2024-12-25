import SingleItem_61 from './SingleItem_xx';
const Items_xx = ({ removeItem, items, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_61 removeItem={removeItem} key={item.id} item={item} editItem={editItem} />
      })}
    </div>
  );
};
export default Items_xx;
