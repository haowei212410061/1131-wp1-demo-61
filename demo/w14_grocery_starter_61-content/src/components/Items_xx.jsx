import { useAppContext } from '../pages/context_61';
import SingleItem_61 from './SingleItem_xx';
const Items_xx = () => {
  const { items } = useAppContext()
  return (

    <div className='items'>
      {items.map((item) => {
        return <SingleItem_61 key={item.id} item={item} />
      })}
    </div>
  );
};
export default Items_xx;
