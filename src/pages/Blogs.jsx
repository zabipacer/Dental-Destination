import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // replace non-alphanumeric with hyphens
    .replace(/(^-|-$)/g, '');     // trim leading/trailing hyphens
}

export const blogs = [
  { 
    id: 1, 
    title: "Best Dentist Near Satiana Road Faisalabad – What to Expect",
    image: "/assets/images/urooj.webp"
  },
  { 
    id: 2, 
    title: "Braces Price in Faisalabad – Updated 2025 Guide",
    image: "/assets/images/braces.webp"
  },
  { 
    id: 3, 
    title: "Top 5 Dental Clinics in Faisalabad (And Why We Stand Out)",
    image: "/assets/images/emergency.webp"
  },
  { 
    id: 4, 
    title: "Teeth Whitening in Faisalabad – Which Option Is Right for You?",
    image: "/polish.webp"
  },
   { id: 5, title: "Female Dentist Near Satiana Road Faisalabad – Comfort & Care" ,
      image: "/assets/images/urooj.webp"
  
   },
 
  // Add images for remaining blogs...
];

function Card({ children }) {
  return (
    <div className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group overflow-hidden">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return (
    <div className="p-6 flex justify-between items-center bg-gradient-to-b from-white via-white to-gray-50">
      {children}
    </div>
  );
}

export default function BlogsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Latest Dental Insights
        </h1>
        <p className="text-gray-600 text-lg">
          Expert advice and updates from Doctor Teeth Clinic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
              delay: index * 0.05,
              hover: { type: "spring", stiffness: 300 }
            }}
            className="h-full"
          >
            <Link to={`/blogs/${blog.id}/${slugify(blog.title)}`} className="h-full block">
              <Card>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardContent>
                  <span className="text-xl font-semibold text-gray-900 pr-4">
                    {blog.title}
                  </span>
                  <ArrowRight className="text-primary-500 flex-shrink-0 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}