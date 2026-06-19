// components/sections/ServicesOverview.tsx
import React from 'react';
import { 
  Smartphone, 
  LayoutDashboard, 
  Database, 
  Shield, 
  Trophy,
  Code2,
  Cloud,
  Bell,
  Gauge,
  Lock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  { 
    icon: Smartphone, 
    title: "Native & Cross-Platform Apps",
    description: "iOS and Android development with modern frameworks",
    gradient: "from-purple-500 to-purple-600"
  },
  { 
    icon: LayoutDashboard, 
    title: "Modern UI/UX Design",
    description: "Custom interfaces with responsive layouts",
    gradient: "from-pink-500 to-pink-600"
  },
  { 
    icon: Database, 
    title: "Backend & API Integration",
    description: "Scalable databases and third-party connections",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: Shield, 
    title: "Secure Authentication",
    description: "Admin panels with multi-layer protection",
    gradient: "from-pink-500 to-purple-500"
  },
  { 
    icon: Bell, 
    title: "Real-time Notifications",
    description: "Push alerts and in-app messaging systems",
    gradient: "from-purple-500 to-purple-600"
  },
  { 
    icon: Gauge, 
    title: "Performance Optimization",
    description: "Fast loading speeds and smooth animations",
    gradient: "from-pink-500 to-pink-600"
  },
  { 
    icon: Lock, 
    title: "Security & Compliance",
    description: "GDPR, CCPA, and industry standards",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: Cloud, 
    title: "App Store Deployment",
    description: "End-to-end submission and approval support",
    gradient: "from-pink-500 to-purple-500"
  },
  { 
    icon: Code2, 
    title: "Ongoing Maintenance",
    description: "Bug fixes, updates, and performance monitoring",
    gradient: "from-purple-500 to-purple-600"
  }
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-6">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Comprehensive Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What I Deliver
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end development services tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid - Improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Flexible Options</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Choose Your </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Investment Plan
            </span>
          </h3>
          
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Select the package that fits your project scope and timeline
          </p>
          
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            <span>View Pricing Details</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              No Hidden Fees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              Transparent Timeline
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              Post-Launch Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};