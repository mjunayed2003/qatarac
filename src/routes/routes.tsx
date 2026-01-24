import { createBrowserRouter } from "react-router-dom";

// Layouts
import UserLayout from "../component/layoput/UserLayout";
import AdminLayout from "../component/layoput/AdminLayout";

// User Pages
import Home from "../component/Home";
import ServicesPage from "../component/Service";
import GalleryPage from "../component/Gallery";
import About from "../component/About";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import AdminDashboard from "../component/admin/AdminDashboard";
import ManageServices from "../component/admin/ManageServices";
import ManageGallery from "../component/admin/ManageGallery";
import ManageBlog from "../component/admin/ManageBlog";
import ManageMessages from "../component/admin/ManageMessages";
import ManageUsers from "../component/admin/ManageUsers";
import AdminSettings from "../component/admin/AdminSettings";


export const router = createBrowserRouter([
    // ==========================
    // 1. USER ROUTES
    // ==========================
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error Page
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "service",
                element: <ServicesPage />,
            },
            {
                path: "gallery",
                element: <GalleryPage />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },

    // ==========================
    // 2. ADMIN ROUTES
    // ==========================
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "services",
                element: <ManageServices />,
            },
            {
                path: "gallery",
                element: <ManageGallery />,
            },
            {
                path: "blog",
                element: <ManageBlog />,
            },
            {
                path: "messages",
                element: <ManageMessages />,
            },
            {
                path: "users",
                element: <ManageUsers />,
            },
            {
                path: "settings",
                element: <AdminSettings />,
            },
        ],
    },
]);