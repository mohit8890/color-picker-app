import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor }}
      >
        Pick a color
      </button>
      {showColorList && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <div>
          Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
