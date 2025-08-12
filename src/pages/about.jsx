import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Header from "../components/ui/Header";
import Footer from "../pages/homepage/components/Footer";

const About = () => {
  // Animated counter component
  const Counter = ({ value, suffix = "+" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // Animation duration in ms
      const start = 0;
      const end = value;
      const incrementTime = Math.floor(duration / end);

      let current = start;
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}{suffix}
      </motion.span>
    );
  };

  // Section component with alternating layout
  const Section = ({ title, content, media, index, isLast }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-12 items-center`}
      >
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">{title}</h3>
          <p className="text-gray-700 text-lg">{content}</p>
        </div>
        <div className="md:w-1/2">
          {media.type === 'image' ? (
            <img 
              src={media.src} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-md object-cover"
              loading="lazy"
            />
          ) : (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-80 rounded-lg shadow-md"
                src={media.src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          ridaantradingco Undercarriage Parts <span className="text-blue-600">Excellent Supplier</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Evergrowing is committed to providing high-quality crane undercarriage parts worldwide
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { value: 5000, label: "Crane undercarriage parts" },
          { value: 20, label: "Technical team experience (years)" },
          { value: 30, label: "Countries served" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl font-bold text-blue-700 mb-2">
              <Counter value={stat.value} />
            </div>
            <p className="text-gray-600 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content Sections with Alternating Media */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Advantages</h2>
        
        {[
          {
            title: "1. Applicable to many types of cranes",
            content: "Our ridaantradingco undercarriage parts have a wide range of applications and can be matched with cranes of different tonnages. No matter what tonnage of undercarriage parts you need, we can provide them.",
            media: {
              type: "image",
              src: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          },
          {
            title: "2. Extensive parts variety",
            content: "Our ridaantradingco undercarriage parts have 600+ models and 5000+ parts, which are suitable for 25+ brand ridaantradingcos to meet the needs of different customers.",
            media: {
              type: "video",
              src: ""
            }
          },
          {
            title: "3. Global reach",
            content: "With more than 10 years of sales experience has enabled our crane undercarriage parts to be sold to 35+ countries and regions, which are deeply loved by customers.",
            media: {
              type: "image",
              src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          },
          {
            title: "4. Professional team",
            content: "Our company's technical staff and sales staff have many years of experience in ridaantradingco undercarriage parts. They have a clear division of labor, and professional operators are responsible for booking space.",
            media: {
              type: "video",
              src: "" // Replace with your video
            }
          }
        ].map((section, index) => (
          <Section 
            key={index}
            title={section.title}
            content={section.content}
            media={section.media}
            index={index}
          />
        ))}
      </div>

      {/* Brands Section */}
      <div className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-8">Supported Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {["Hitachi", "Sumitomo", "Kobelco", "IHI", "Liebherr", "Terex", "Sany", "XCMG", "Zoomlion", "Manitowoc", "Demag", "Fuwa"].map((brand, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
              <span className="font-medium text-gray-800">{brand}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default About;