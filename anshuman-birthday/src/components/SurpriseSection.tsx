

// src/components/SurpriseSection.tsx
import React, { useState } from 'react';
import "../App.css";


const SurpriseSection: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center mt-6">
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded"
        onClick={() => setShow(true)}
      >
        🎁 Click for a Surprise!
      </button>
      {show && (
        <div className="mt-4 bg-yellow-100 p-4 rounded">
          <p>Here’s a secret message just for you, Anshuman 💌</p>
          <p>“You're not just a year older, you're a year better!”</p>
        </div>
      )}
    </div>
  );
};

export default SurpriseSection;