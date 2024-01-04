import React, { useState } from 'react';

const SelectExample = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (event) => {
    const selectedValue = event.target.value;
    
    // Check if the selectedOptions array is not empty before appending the selected value
    if (selectedOptions.length === 0 || !selectedOptions.includes(selectedValue)) {
      setSelectedOptions([...selectedOptions, selectedValue]);
    }
    console.log(selectedOptions);
  };
return (
    <div>
      <select multiple>
        <option value="option1" onClick={handleOptionClick}>Option 1</option>
        <option value="option2" onClick={handleOptionClick}>Option 2</option>
        <option value="option3" onClick={handleOptionClick}>Option 3</option>
      </select>
      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
};

export default SelectExample;