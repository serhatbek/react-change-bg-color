import { useState } from 'react';
import { send } from '../socketApi';

const Palatte = () => {
  const [color, setColor] = useState('#000000');
  return (
    <div className='palatte'>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Change Background Color</button>
      <hr />
      {color}
    </div>
  );
};

export default Palatte;
