import React, { useEffect, useState } from 'react';
import './App.css';

// Updated Poetic and Sweet Messages
const messages = [
  "Good night, Nasnosty. Let the stars cradle your dreams and the moonlight guard your peace. 🌙✨",
  "Sweet dreams, Nasnosty. As you close your eyes, may the gentle whispers of the night carry you to a world of wonder. 🌠💫",
  "Good night, Nasnosty. Rest your weary soul, for tomorrow brings new light and endless possibilities. 🌙💖",
  "Sweet dreams, Nasnosty. In the silence of the night, may your heart be filled with love and your dreams with magic. 🌟💤",
  "Good night, Nasnosty. May the stars be your lullaby and the moon be your guide through the dreamlands. 🌙🌌",
  "As the night embraces you, Nasnosty, may your dreams be painted in hues of joy and love. Good night. 🎨💫",
  "Good night, Nasnosty. May you wander in dreamscapes of peace, where the stars dance just for you. ✨💖",
  "Close your eyes, Nasnosty. The night sky sings a lullaby, and the moon shines just for you. Sweet dreams. 🌙🌹",
  "Good night, Nasnosty. Sleep softly, and may your dreams be wrapped in the warmth of the universe. 🌠💖",
  "As you drift to sleep, Nasnosty, may the night fill your heart with serenity and your dreams with endless beauty. 🌙🌸",
  "Good night, Nasnosty. May the soft winds carry your dreams to the stars, and may you wake with the warmth of the morning sun. 🌙☀️",
  "Sweet dreams, Nasnosty. Let your thoughts be gentle waves, carrying you to the shores of peace. 🌊💫",
  "Good night, Nasnosty. Close your eyes, and let the night embrace you in calmness and serenity. 🌙🕊️",
  "Sweet dreams, Nasnosty. May the soft glow of the moonlight fill your heart with peace and hope for tomorrow. 🌙💖",
  "Good night, Nasnosty. As the stars twinkle above, know that you are cherished and loved. 🌟💫",
  "Close your eyes, Nasnosty, and let the beauty of your dreams carry you into a peaceful night. 🌙✨",
  "Good night, Nasnosty. Rest easy, for tomorrow will bring new dreams, and the stars will always shine for you. 🌠💖"
];

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
