import React, { useState, useRef } from "react";
import { FaImages, FaTrash, FaCloudUploadAlt, FaFilter } from "react-icons/fa";

// 1. TYPE DEFINITION
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

// 2. DUMMY DATA
const initialGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Split AC Installation",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Satellite Dish Setup",
    category: "Satellite",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0eda0e666?q=80&w=400&auto=format&fit=crop",
  },
];

const categories = ["Installation", "Repair", "Maintenance", "Satellite"];

const ManageGallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Upload State
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("Installation");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter Logic
  const filteredImages = selectedCategory === "All"
    ? gallery
    : gallery.filter(img => img.category === selectedCategory);

  // Delete Function
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const updatedGallery = gallery.filter((item) => item.id !== id);
      setGallery(updatedGallery);
    }
  };

  // ==========================================
  // HANDLE LOCAL IMAGE UPLOAD
  // ==========================================
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      if (!uploadTitle) {
        alert("Please enter a title first!");
        // Clear input to allow re-selecting same file if needed
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      // Create a temporary URL for the local file
      const imageUrl = URL.createObjectURL(file);

      const newItem: GalleryItem = {
        id: Date.now(),
        title: uploadTitle,
        category: uploadCategory,
        image: imageUrl,
      };

      setGallery([newItem, ...gallery]);
      
      // Reset Form
      setUploadTitle("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      alert("Image uploaded successfully!");
    }
  };

  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-[#050614] flex items-center gap-2">
            <FaImages className="text-[#E13232]" /> Gallery Manager
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Upload images from your PC and categorize them.
          </p>
        </div>
      </div>

      {/* ======================= */}
      {/* 2. UPLOAD FORM SECTION  */}
      {/* ======================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-[#050614]">Add New Image</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Input: Title */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Image Title</label>
            <input 
              type="text" 
              placeholder="Ex: AC Repair at Doha" 
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232]"
            />
          </div>

          {/* Input: Category */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <select 
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232] bg-white"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          {/* Input: File Upload Area */}
          <div className="space-y-2">
             <label className="text-sm font-bold text-gray-700">Select Image</label>
             
             <div 
               onClick={() => fileInputRef.current?.click()}
               className="border-2 border-dashed border-[#E13232]/50 bg-red-50 hover:bg-red-100 rounded-lg h-[42px] flex items-center justify-center cursor-pointer transition text-[#E13232] font-bold gap-2"
             >
                <FaCloudUploadAlt /> Choose File
             </div>
             
             {/* Hidden File Input */}
             <input 
               type="file" 
               accept="image/*"
               ref={fileInputRef}
               className="hidden"
               onChange={handleFileChange}
             />
          </div>

        </div>
      </div>

      {/* ======================= */}
      {/* 3. GALLERY PREVIEW      */}
      {/* ======================= */}
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            selectedCategory === "All" ? "bg-[#050614] text-white" : "bg-white border hover:border-[#E13232]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat ? "bg-[#E13232] text-white" : "bg-white border hover:border-[#E13232]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.length > 0 ? (
          filteredImages.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* Image */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Delete Button (Hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                        onClick={() => handleDelete(item.id)}
                        className="bg-white p-2 rounded-full text-[#E13232] hover:bg-red-50 transition shadow-lg" 
                        title="Delete"
                    >
                        <FaTrash />
                    </button>
                </div>

                {/* Category Badge */}
                <span className="absolute top-2 left-2 bg-[#E13232] text-white text-[10px] font-bold px-2 py-1 rounded shadow">
                    {item.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-3">
                <h4 className="font-bold text-[#050614] text-sm truncate" title={item.title}>
                    {item.title}
                </h4>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100">
            <FaFilter className="mx-auto mb-2 text-gray-300" size={24} />
            No images found.
          </div>
        )}
      </div>

    </div>
  );
};

export default ManageGallery;