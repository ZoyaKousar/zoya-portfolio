"use client";
import React, { useState, useEffect, useRef } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { Star } from "lucide-react";

interface Testimonial {
    date: string
    description: string
    clientName: string
    id: string;
    name: string;
    feedback: string;
    role?: string;
    profilePhoto?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    starPhoto?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    rating?: number; // For reviews
}

interface TestimonialsProps {
    experiences?: {
        length: number;
        testimonials: Testimonial[];
    };
}

const Testimonials = ({ experiences }: TestimonialsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [reviews, setReviews] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsPerPage = 3;

    // Fetch published reviews from backend
    useEffect(() => {
        async function fetchReviews() {
            try {
                const query = `*[_type == "review" && status == "published"] | order(submittedAt desc) {
                    _id,
                    name,
                    company,
                    rating,
                    review,
                    submittedAt,
                    reviewerImage {
                        asset,
                        alt
                    }
                }`;
                
                console.log('Fetching reviews from Sanity...');
                console.log('Query:', query);
                const data = await client.withConfig({ useCdn: false }).fetch(query);
                console.log('Reviews fetched:', data);
                console.log('Number of reviews:', data?.length || 0);
                console.log('First review data:', data?.[0]);
                
                // Map reviews to testimonial format
                const mappedReviews: Testimonial[] = (data || []).map((review: {
                    _id: string;
                    name: string;
                    company?: string;
                    rating: number;
                    review: string;
                    submittedAt?: string;
                    reviewerImage?: {
                        asset: { _ref: string };
                        alt?: string;
                    };
                }) => {
                    console.log('Mapping review:', review);
                    return {
                        id: review._id,
                        name: review.name,
                        clientName: review.name,
                        description: review.review,
                        feedback: review.review,
                        date: review.submittedAt 
                            ? new Date(review.submittedAt).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
                            : new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }),
                        profilePhoto: review.reviewerImage && review.reviewerImage.asset ? {
                            asset: review.reviewerImage.asset,
                            alt: review.reviewerImage.alt || review.name
                        } : undefined,
                        rating: review.rating || 5,
                    };
                });
                
                console.log('Mapped reviews:', mappedReviews);
                console.log('Mapped reviews details:', JSON.stringify(mappedReviews, null, 2));
                setReviews(mappedReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setReviews([]);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    // Use reviews if available, otherwise fallback to experiences
    const testimonials = reviews.length > 0 ? reviews : (experiences?.testimonials || []);
    const totalItems = testimonials.length;
    
    console.log('Testimonials component state:', {
        reviewsCount: reviews.length,
        experiencesCount: experiences?.testimonials?.length || 0,
        totalItems,
        loading,
        testimonials: testimonials,
        reviewsData: reviews
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const handleNext = () => {
        if (currentIndex + itemsPerPage < totalItems) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    // Show loading state
    if (loading) {
        return (
            <section className="relative flex flex-col items-center px-4 md:px-16 w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white">Loading testimonials...</p>
                </div>
            </section>
        );
    }

    // Show debug message if no reviews
    if (totalItems === 0) {
        console.log('No testimonials to show. Reviews:', reviews.length, 'Experiences:', experiences?.testimonials?.length || 0);
        return (
            <section className="relative flex flex-col items-center px-4 md:px-16 w-full py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        What My <span className="text-fuchsia-500">Clients</span> Say
                    </h2>
                    <p className="text-white mb-4">No published reviews found.</p>
                    <p className="text-gray-400 text-sm">Debug: Reviews fetched: {reviews.length}, Experiences: {experiences?.testimonials?.length || 0}</p>
                </div>
            </section>
        );
    }
    return (
        <section
            ref={sectionRef}
            id="professional"
            className="relative flex flex-col items-center px-4 md:px-16 w-full py-16 md:py-24 max-md:max-w-full overflow-hidden"
        >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
            
            {/* Section Header */}
            <motion.div 
                className="max-w-4xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    What My <span className="text-fuchsia-500">Clients</span> Say
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Real feedback from clients who&apos;ve experienced exceptional results working with me
                </p>
            </motion.div>
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {(() => {
                        const slicedTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
                        console.log('Rendering desktop testimonials:', {
                            currentIndex,
                            itemsPerPage,
                            totalTestimonials: testimonials.length,
                            slicedCount: slicedTestimonials.length,
                            slicedTestimonials
                        });
                        return slicedTestimonials.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="flex flex-col p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl relative overflow-hidden group cursor-pointer min-h-[320px]"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-600/0 to-blue-600/0 group-hover:from-fuchsia-500/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                                
                                {/* Border glow on hover */}
                                <div className="absolute inset-0 border border-gray-700/50 group-hover:border-fuchsia-500/50 rounded-2xl transition-all duration-500 shadow-lg group-hover:shadow-fuchsia-500/20"></div>
                                
                                {/* Quote icon */}
                                <div className="absolute top-4 right-4 text-fuchsia-500/20 text-6xl font-serif">&quot;</div>
                                
                                {/* Stars */}
                                <div className="relative z-10 mb-4">
                                    {exp.starPhoto && exp.starPhoto?.asset ? (
                                        <img
                                            src={urlFor(exp.starPhoto).url()}
                                            alt={exp.starPhoto.alt}
                                            className="h-5 w-auto"
                                        />
                                    ) : (
                                        <div className="flex gap-1">
                                            {[...Array(exp.rating || 5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i < (exp.rating || 5)
                                                            ? 'text-yellow-400 fill-yellow-400'
                                                            : 'text-gray-400'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                
                                {/* Testimonial text */}
                                <div className="flex-1 relative z-10 mb-6">
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed font-light italic">
                                        {exp.description}
                                    </p>
                                </div>
                                
                                {/* Client info */}
                                <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-700/50">
                                    {exp.profilePhoto && exp.profilePhoto?.asset ? (
                                        <div className="relative">
                                            <img
                                                src={urlFor(exp.profilePhoto).url()}
                                                alt={exp.profilePhoto?.alt || "Client photo"}
                                                className="w-14 h-14 rounded-full border-2 border-fuchsia-500/50 object-cover"
                                            />
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20"></div>
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                            {exp.clientName?.charAt(0) || exp.name?.charAt(0) || "C"}
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold text-lg">
                                            {exp.clientName || exp.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {exp.date}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Decorative corner */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-fuchsia-500 to-transparent rounded-tl-full"></div>
                                </div>
                            </motion.div>
                        ));
                    })()}
                </div>

                {/* Mobile layout */}
                <div className="grid md:hidden gap-6">
                    {(() => {
                        console.log('Rendering mobile testimonials:', {
                            totalTestimonials: testimonials.length,
                            testimonials,
                            isVisible
                        });
                        return testimonials.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl relative overflow-hidden"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-3 right-3 text-fuchsia-500/20 text-5xl font-serif">&quot;</div>
                            
                            {/* Stars */}
                            <div className="relative z-10 mb-4">
                                {exp.starPhoto && exp.starPhoto?.asset ? (
                                    <img
                                        src={urlFor(exp.starPhoto).url()}
                                        alt={exp.starPhoto.alt}
                                        className="h-5 w-auto"
                                    />
                                ) : (
                                    <div className="flex gap-1">
                                        {[...Array(exp.rating || 5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < (exp.rating || 5)
                                                        ? 'text-yellow-400 fill-yellow-400'
                                                        : 'text-gray-400'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* Testimonial text */}
                            <div className="flex-1 relative z-10 mb-6">
                                <p className="text-white/90 text-base leading-relaxed font-light italic">
                                    {exp.description}
                                </p>
                            </div>
                            
                            {/* Client info */}
                            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-700/50">
                                {exp.profilePhoto && exp.profilePhoto?.asset ? (
                                    <div className="relative">
                                        <img
                                            src={urlFor(exp.profilePhoto?.asset).url()}
                                            alt={exp.profilePhoto?.alt || "Client photo"}
                                            className="w-12 h-12 rounded-full border-2 border-fuchsia-500/50 object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                        {exp.clientName?.charAt(0) || "C"}
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h4 className="text-white font-semibold">
                                        {exp.clientName || exp.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {exp.date}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        ));
                    })()}
                </div>

                {/* Navigation Arrows */}
                {totalItems > itemsPerPage && (
                    <>
                        <motion.button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            whileHover={{ scale: 1.15, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`hidden md:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-50 rounded-full w-14 h-14 items-center justify-center transition-all shadow-lg ${
                                currentIndex === 0
                                    ? "bg-gray-700 opacity-50 cursor-not-allowed"
                                    : "bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 hover:shadow-xl hover:shadow-fuchsia-500/50"
                            }`}
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                        <motion.button
                            onClick={handleNext}
                            disabled={currentIndex + itemsPerPage >= totalItems}
                            whileHover={{ scale: 1.15, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`hidden md:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-50 rounded-full w-14 h-14 items-center justify-center transition-all shadow-lg ${
                                currentIndex + itemsPerPage >= totalItems
                                    ? "bg-gray-700 opacity-50 cursor-not-allowed"
                                    : "bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 hover:shadow-xl hover:shadow-fuchsia-500/50"
                            }`}
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </>
                )}
                
                {/* Pagination dots */}
                {totalItems > itemsPerPage && (
                    <div className="hidden md:flex justify-center gap-2 mt-8">
                        {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx * itemsPerPage)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    Math.floor(currentIndex / itemsPerPage) === idx
                                        ? "bg-fuchsia-500 w-8"
                                        : "bg-gray-600 hover:bg-gray-500"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
