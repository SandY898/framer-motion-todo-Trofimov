import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Framermotion  = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue) {
      setList([...list, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (item) => {
    setList(list.filter((i) => i !== item));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        <AnimatePresence>
          {list.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              {item}
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Framermotion;
