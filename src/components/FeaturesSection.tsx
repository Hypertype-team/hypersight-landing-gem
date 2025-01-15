import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FeatureCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const [frontImage, setFrontImage] = useState<'reports' | 'dashboard'>('reports');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontImage(prev => prev === 'reports' ? 'dashboard' : 'reports');
    }, 8000); // Longer interval for better user experience
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "Data-Driven Insights",
      description:
        "Transform your support tickets into actionable insights with our advanced analytics engine.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Smart Categorization",
      description:
        "Automatically categorize and prioritize support tickets using AI-powered analysis.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Trend Analysis",
      description:
        "Identify patterns and trends in your support data to proactively address customer needs.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your support is your goldmine
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hypersight synthesizes all your ticket data to generate actionable
            insights in guiding your product forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] select-none flex items-center justify-center"
            style={{
              perspective: '2000px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`absolute w-full h-full cursor-pointer`}
              style={{
                transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `
                  ${frontImage === 'dashboard' 
                    ? 'translateZ(100px) translateX(-5%) translateY(-5%) rotateY(-5deg)' 
                    : 'translateZ(-400px) translateX(-35%) translateY(-15%) rotateY(-25deg)'}
                `,
                opacity: frontImage === 'dashboard' ? 1 : 0.6,
                zIndex: frontImage === 'dashboard' ? 20 : 10
              }}
              onClick={() => setFrontImage('dashboard')}
            >
              <img
                src="/lovable-uploads/ea8e9384-86a2-4501-b686-5a95b634d919.png"
                alt="Hypersight Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ 
                  maxWidth: "90%",
                  margin: "0 auto",
                  transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `scale(${frontImage === 'dashboard' ? '1.05' : '0.95'})`,
                  filter: `
                    drop-shadow(0 ${frontImage === 'dashboard' ? '40px' : '20px'} 
                    50px rgb(0 0 0 / ${frontImage === 'dashboard' ? '0.6' : '0.3'}))
                    brightness(${frontImage === 'dashboard' ? '1' : '0.85'})
                  `
                }}
              />
            </motion.div>

            {/* Reports Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`absolute w-full h-full cursor-pointer`}
              style={{
                transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `
                  ${frontImage === 'reports' 
                    ? 'translateZ(100px) translateX(5%) translateY(5%) rotateY(5deg)' 
                    : 'translateZ(-400px) translateX(35%) translateY(15%) rotateY(25deg)'}
                `,
                opacity: frontImage === 'reports' ? 1 : 0.6,
                zIndex: frontImage === 'reports' ? 20 : 10
              }}
              onClick={() => setFrontImage('reports')}
            >
              <img
                src="/lovable-uploads/b48dc1f3-2fab-4171-b95b-80ec0562821d.png"
                alt="Hypersight Reports"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ 
                  maxWidth: "90%",
                  margin: "0 auto",
                  transition: 'all 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `scale(${frontImage === 'reports' ? '1.05' : '0.95'})`,
                  filter: `
                    drop-shadow(0 ${frontImage === 'reports' ? '40px' : '20px'} 
                    50px rgb(0 0 0 / ${frontImage === 'reports' ? '0.6' : '0.3'}))
                    brightness(${frontImage === 'reports' ? '1' : '0.85'})
                  `
                }}
              />
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <div className="space-y-8 max-w-xl ml-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;