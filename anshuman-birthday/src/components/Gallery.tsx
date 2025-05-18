


// import React from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.jpg";
import i13 from "../assets/i13.jpg";
import i14 from "../assets/i14.jpg";
import i15 from "../assets/i15.jpg";
import i16 from "../assets/i16.jpg";
import i17 from "../assets/i17.jpg";
import i18 from "../assets/i18.jpg";
import i19 from "../assets/i19.jpg";
import i20 from "../assets/i20.jpg";
import i21 from "../assets/i21.jpg";
import i22 from "../assets/i22.jpg";
import i23 from "../assets/i23.jpg";


// const set1 = [i1, i2, i3, i4, i5];
// const set2 = [i6, i7, i8, i9, i10];
// const set3 = [i11, i12, i13, i14, i15];
// const set4 = [i16, i17, i18, i19, i20];
// const set5 = [i21, i22, i23];

import React from "react";
import "../App.css";


const sets = [
  { title: "💕 Childhood Vibes", images: [i1, i2, i3, i4, i5], layout: "columns" },
  { title: "🎊 Friends & Fun", images: [i6, i7, i8, i9, i10], layout: "grid" },
  { title: "🌈 Family Time", images: [i11, i12, i13, i14, i15], layout: "carousel" },
  { title: "📸 Candid Clicks", images: [i16, i17, i18, i19, i20], layout: "masonry" },
  { title: "🎁 Special Moments", images: [i21, i22, i23], layout: "gallery" },
];

const BirthdayGallery: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-pink-50 py-10 px-4">
      {sets.map((set, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">{set.title}</h2>

          {set.layout === "columns" && (
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {set.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Memory ${i}`}
                  className="w-full rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 border-2 border-white"
                />
              ))}
            </div>
          )}

          {set.layout === "curtain" && (
  <div className="relative flex flex-wrap justify-center items-start gap-6 overflow-hidden">
    {set.images.map((img, i) => (
      <div
        key={i}
        className={`flex flex-col items-center animate-float${
          i % 2 === 0 ? "Left" : "Right"
        }`}
      >
        {/* The "string" */}
        <div className="w-1 h-8 bg-gray-400" />
        {/* The image "hanging" */}
        <img
          src={img}
          alt={`Hanging ${i}`}
          className="rounded-lg shadow-xl border-2 border-pink-200 transition-all duration-300 hover:scale-105"
          style={{ maxHeight: "280px", objectFit: "contain" }}
        />
      </div>
    ))}
  </div>
)}


          {set.layout === "carousel" && (
            <div className="relative flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
              {set.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Family ${i}`}
                  className="h-60 rounded-xl shadow-lg min-w-[250px] transition-all duration-300 hover:scale-105"
                />
              ))}
            </div>
          )}

          {set.layout === "masonry" && (
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {set.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Candid ${i}`}
                  className="rounded-xl shadow-md transition-transform hover:scale-105 duration-300"
                />
              ))}
            </div>
          )}

          {set.layout === "gallery" && (
            <div className="flex justify-center gap-6 flex-wrap">
              {set.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Special ${i}`}
                  className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-pink-200 hover:rotate-3 hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BirthdayGallery;
