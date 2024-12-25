import { useContext } from 'react';
import { useState } from 'react';
import { useAppContext } from '../pages/context_61';

const Form_xx = () => {
  const [newItemName, setNewItemName] = useState('')
  const { AddItem } = useAppContext()
  function handleSubmit(e) {
    e.preventDefault();
    AddItem(newItemName)
    setNewItemName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery --- 212410061</h4>
      <div className='form-control'>
        <input type='text ' className='form-input' value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form_xx;
