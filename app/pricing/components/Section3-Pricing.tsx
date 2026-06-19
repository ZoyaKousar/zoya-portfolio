'use client';
import React, { useState } from 'react';
import {
  Check, X, HelpCircle, TrendingUp, Shield, Zap,
  XCircle, Send, User, Mail, Phone, FileText, Calendar,
  Star, Rocket, Crown
} from 'lucide-react';

export type PricingTier = 'ESSENTIAL' | 'PROFESSIONAL' | 'PREMIUM';

export interface PricingFeature {
  name: string;
  essential: string | boolean;
  professional: string | boolean;
  premium: string | boolean;
}

const pricingData: PricingFeature[] = [
  { name: "Platform Coverage", essential: "Single Platform", professional: "Both Platforms", premium: "Both + Wearables" },
  { name: "Initial Consultation", essential: "1 Hour", professional: "2 Hours", premium: "Unlimited" },
  { name: "Development Scope", essential: "Core Features", professional: "Advanced Features", premium: "Full Customization" },
  { name: "Technology Stack", essential: "Standard Stack", professional: "Flexible Choice", premium: "Any Tech Stack" },
  { name: "UI/UX Design", essential: "Standard Templates", professional: "Custom Design", premium: "Brand-First Design" },
  { name: "Feature Implementation", essential: "Up to 8 Features", professional: "Up to 15 Features", premium: "Unlimited Features" },
  { name: "API Development", essential: "Basic Endpoints", professional: "RESTful APIs", premium: "GraphQL + REST" },
  { name: "Data Storage", essential: "Cloud Basic", professional: "Cloud Advanced", premium: "Enterprise Database" },
  { name: "User Authentication", essential: "Email/Password", professional: "Social Login", premium: "Biometric + SSO" },
  { name: "Speed Optimization", essential: "Standard", professional: "Advanced Caching", premium: "Enterprise Grade" },
  { name: "Management Dashboard", essential: false, professional: "Standard Dashboard", premium: "Analytics Dashboard" },
  { name: "Push Alerts", essential: false, professional: "Basic Notifications", premium: "Smart Notifications" },
  { name: "Data Protection", essential: "SSL Security", professional: "GDPR Compliant", premium: "Bank-Level Encryption" },
  { name: "Marketplace Launch", essential: "Standard Review", professional: "Fast-Track", premium: "Full Launch Support" },
  { name: "Customer Support", essential: "48hr Response", professional: "24hr Support", premium: "Priority 24/7" },
  { name: "Analytics Tools", essential: false, professional: "Monthly Reports", premium: "Live Dashboard" },
  { name: "Maintenance Plan", essential: "Quarterly Updates", professional: "Monthly Updates", premium: "Weekly + Hotfixes" }
];

const plans = ['ESSENTIAL', 'PROFESSIONAL', 'PREMIUM'] as const;
const prices = { ESSENTIAL: 1399, PROFESSIONAL: 1599, PREMIUM: 2999 };
const planBadges = {
  ESSENTIAL: { color: "from-blue-500 to-blue-600", text: "Perfect Start", icon: Rocket },
  PROFESSIONAL: { color: "from-purple-500 to-pink-500", text: "Most Popular", icon: Star },
  PREMIUM: { color: "from-pink-500 to-rose-500", text: "Maximum Power", icon: Crown }
};

// Modal Component
interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingTier;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/pricing-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan,
          price: prices[selectedPlan]
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            projectDetails: ''
          });

          onClose();
        }, 2000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gray-900 rounded-2xl max-w-md w-full border border-gray-700 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <XCircle className="w-6 h-6" />
        </button>

        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-purple-600">
              {React.createElement(planBadges[selectedPlan].icon, { className: "w-5 h-5 text-white" })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{selectedPlan} Plan</h3>
              <p className="text-purple-400 text-sm">${prices[selectedPlan]} / project</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
              <p className="text-gray-400">Your inquiry has been sent. I&apos;ll reach out shortly!</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your app idea, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </span>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our privacy policy. Your information is safe with me.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

// Main PricingTable Component
export const PricingTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingTier>('PROFESSIONAL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = (plan: PricingTier) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-gray-950 text-gray-100 py-20 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Investment Plans</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Choose Your </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Path
              </span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select the package that aligns with your project goals and budget
            </p>
          </div>

          {/* Mobile: Card Layout */}
          <div className="block lg:hidden space-y-8">
            {plans.map((plan) => (
              <div key={plan} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan}</h3>
                      <p className="text-gray-400 text-sm mt-1">{planBadges[plan].text}</p>
                    </div>
                    {plan === 'PROFESSIONAL' && (
                      <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                        Best Value
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${prices[plan]}</span>
                    <span className="text-gray-400">/project</span>
                  </div>
                  <button
                    onClick={() => handleGetStarted(plan)}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-400 mb-4">WHAT&apos;S INCLUDED:</p>
                  <div className="space-y-3">
                    {pricingData.map((feature, idx) => {
                      const value = feature[plan.toLowerCase() as keyof typeof feature];
                      return (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            )
                          ) : (
                            <div className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          )}
                          <span className="text-gray-300 flex-1">
                            <span className="font-medium text-white">{feature.name}:</span>{' '}
                            {typeof value === 'boolean' ? (
                              value ? 'Included' : 'Not included'
                            ) : (
                              value
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table Layout */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-4 text-left text-gray-400 font-medium">FEATURES</th>
                  {plans.map((plan) => (
                    <th key={plan} className="p-6 text-center">
                      <div className="space-y-2">
                        {plan === 'PROFESSIONAL' && (
                          <div className="text-purple-400 text-xs font-semibold mb-2">RECOMMENDED</div>
                        )}
                        <div className="text-xl font-bold text-white">{plan}</div>
                        <div className="text-3xl font-bold text-purple-400">${prices[plan]}</div>
                        <button
                          onClick={() => handleGetStarted(plan)}
                          className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                        >
                          Select Plan
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors duration-200"
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="p-4 font-medium text-white">
                      {row.name}
                      {hoveredRow === idx && (
                        <HelpCircle className="w-3 h-3 text-gray-500 inline ml-2" />
                      )}
                    </td>
                    {plans.map((plan) => {
                      const value = row[plan.toLowerCase() as keyof typeof row];
                      return (
                        <td key={plan} className="p-4 text-center">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-5 h-5 text-green-500 inline" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 inline" />
                            )
                          ) : (
                            <span className="text-gray-300 text-sm">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>No hidden costs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Flexible scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
};