import { useState } from 'react';
import useToggle from './useToggle_61';
const T81_61 = () => {
  //const [show, setShow] = useState(false);
  const { show, toggle } = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default T81_61;
