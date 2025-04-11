import { useState } from 'react';

function CharacterCount() {
  // State to track the value of the textarea and the character count
  const [text, setText] = useState('');

  // Handle the change in textarea input
  const handleChange = (e) => {
    setText(e.target.value);  // Update the state with the new text
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={handleChange} 
        rows="5" 
        cols="30"
        placeholder="Type something..."
      />
      <p>Character Count: {text.length}</p> {/* Display the character count */}
    </div>
  );
}

export default CharacterCount;
