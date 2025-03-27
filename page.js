
'use client';
import { useState } from "react";
import QRCode from "qrcode.react";
import "./globals.css";

export default function Home() {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState("");

  const generateCode = () => {
    const newCode = "SR-" + Math.random().toString(36).substring(2, 7).toUpperCase();
    setCode(newCode);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Silent Return</h1>
      <p className="mb-6 text-center max-w-xl">
        An anonymous Lost & Found return system for international boarding schools. Return items without guilt or questions.
      </p>

      {!submitted ? (
        <div className="w-full max-w-md bg-gray-50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Return an Item Anonymously</h2>
          <input
            type="text"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-3 p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Category (e.g., Electronics)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mb-3 p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Found location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full mb-4 p-2 rounded border"
          />
          <button
            onClick={generateCode}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Generate QR Code
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Your QR Code</h2>
          <p className="mb-4">Attach this QR code to the item and drop it in the Lost & Found box.</p>
          <QRCode
            value={`Item: ${description}, Category: ${category}, Location: ${location}, Code: ${code}`}
            size={200}
          />
          <p className="mt-4 font-mono text-lg">Return Code: {code}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-blue-600 underline"
          >
            Return another item
          </button>
        </div>
      )}
    </div>
  );
}
