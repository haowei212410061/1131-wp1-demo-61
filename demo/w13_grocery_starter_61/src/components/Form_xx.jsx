import { useState } from 'react';

const Form_xx = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItemName)
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
