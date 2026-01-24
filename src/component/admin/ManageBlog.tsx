import React, { useState, useRef } from "react";
import { FaBlog, FaPlus, FaTrash, FaCloudUploadAlt, FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";

// 1. TYPE DEFINITION
interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
}

// 2. DUMMY DATA
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Signs Your AC Needs Immediate Repair",
    category: "Repair",
    author: "Admin",
    date: "Oct 12, 2023",
    excerpt: "Ignoring strange noises or weak airflow can lead to costly damages...",
    image: "https://images.unsplash.com/photo-1581094794329-cd8119604f89?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How to Reduce Electricity Bill",
    category: "Tips",
    author: "Technician",
    date: "Sep 28, 2023",
    excerpt: "Simple tips and tricks to keep your home cool without breaking the bank...",
    image: "https://images.unsplash.com/photo-1517429117621-e0c6553258c4?q=80&w=400&auto=format&fit=crop",
  },
];

const categories = ["Repair", "Maintenance", "Tips", "News", "Installation"];

const ManageBlog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");

  // Form States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Tips");
  const [author, setAuthor] = useState("Admin");
  const [excerpt, setExcerpt] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ==========================
  // HANDLE IMAGE UPLOAD
  // ==========================
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // ==========================
  // ADD NEW POST
  // ==========================
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !excerpt || !selectedImage) {
      alert("Please fill all fields and select an image!");
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      title,
      category,
      author,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      excerpt,
      image: selectedImage,
    };

    setPosts([newPost, ...posts]);
    
    // Reset Form
    setTitle("");
    setExcerpt("");
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    alert("Blog post published successfully!");
  };

  // DELETE POST
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  // FILTER LOGIC
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-[#050614] flex items-center gap-2">
          <FaBlog className="text-[#E13232]" /> Manage Blog Posts
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Write new articles and manage existing news.
        </p>
      </div>

      {/* ======================= */}
      {/* 1. CREATE POST FORM     */}
      {/* ======================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-6 text-[#050614] border-b pb-2">Create New Post</h3>
        
        <form onSubmit={handleAddPost} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Post Title</label>
              <input 
                type="text" 
                placeholder="Enter blog title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232]"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232] bg-white"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Author */}
             <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Author Name</label>
              <input 
                type="text" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232]"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
               <label className="text-sm font-bold text-gray-700">Cover Image</label>
               <div className="flex gap-4 items-center">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 border-2 border-dashed border-[#E13232]/50 bg-red-50 hover:bg-red-100 rounded-lg h-[42px] flex items-center justify-center cursor-pointer transition text-[#E13232] font-bold gap-2"
                  >
                      <FaCloudUploadAlt /> {selectedImage ? "Change Image" : "Upload Image"}
                  </div>
                  {selectedImage && (
                    <img src={selectedImage} alt="Preview" className="h-10 w-10 rounded object-cover border" />
                  )}
               </div>
               <input 
                 type="file" 
                 accept="image/*"
                 ref={fileInputRef}
                 className="hidden"
                 onChange={handleFileChange}
               />
            </div>
          </div>

          {/* Excerpt / Content */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Short Description / Content</label>
            <textarea 
              rows={4}
              placeholder="Write a short summary of the blog post..." 
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button type="submit" className="bg-[#E13232] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-lg">
               <FaPlus className="inline mr-2" /> Publish Post
            </button>
          </div>

        </form>
      </div>

      {/* ======================= */}
      {/* 2. POST LIST SECTION    */}
      {/* ======================= */}
      <div className="space-y-4">
        
        {/* Search Bar */}
        <div className="relative max-w-md">
           <input 
             type="text" 
             placeholder="Search posts..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E13232]"
           />
           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col">
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-[#E13232] text-white text-xs font-bold px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                   <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
                   <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                </div>
                
                <h3 className="font-bold text-[#050614] text-lg mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => handleDelete(post.id)}
                  className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-500 py-2 rounded-lg hover:bg-red-50 transition font-bold text-sm"
                >
                  <FaTrash /> Delete Post
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-10 text-gray-500 bg-white rounded-xl border border-gray-100">
             No posts found matching your search.
          </div>
        )}

      </div>

    </div>
  );
};

export default ManageBlog;