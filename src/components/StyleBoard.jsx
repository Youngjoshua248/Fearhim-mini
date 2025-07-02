import { useState } from "react";

const mockTags = ["avant-garde", "goth", "asymmetry", "Rick Owens"];
const mockOutfits = [
  {
    id: 1,
    name: "Luxury Look",
    price: "$$$",
    items: ["Leather coat", "Platform boots"],
  },
  {
    id: 2,
    name: "Mid-Range Fit",
    price: "$$",
    items: ["Layered hoodie", "Combat pants"],
  },
  {
    id: 3,
    name: "Budget Friendly",
    price: "$",
    items: ["Oversized tee", "Chunky sneakers"],
  },
];

export default function StyleBoard() {
  const [image, setImage] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setShowResults(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Upload Your Style Board</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {showResults && (
        <div>
          <h3 className="text-xl font-semibold mt-6">Detected Style Tags:</h3>
          <ul className="list-disc ml-6 text-[#519E8A]">
            {mockTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-6">Outfit Suggestions:</h3>
          <div className="grid gap-4 mt-4">
            {mockOutfits.map((fit) => (
              <div key={fit.id} className="p-4 bg-[#FFF7EC] rounded-2xl shadow">
                <h4 className="font-bold">
                  {fit.name} — {fit.price}
                </h4>
                <ul className="list-disc ml-5">
                  {fit.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
