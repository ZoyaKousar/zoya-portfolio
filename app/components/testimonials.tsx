"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface Testimonial {
  date: string;
  description: string;
  clientName: string;
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
  rating?: number;
}

type ExperiencesInput =
  | {
      testimonials?: Testimonial[];
    }
  | Testimonial[]
  | null
  | undefined;

interface TestimonialsProps {
  experiences?: ExperiencesInput;
}

/** Shown when Sanity + reviews API return nothing — matches requested sample */
const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: "fallback-esther-howard",
    name: "Esther Howard",
    clientName: "Esther Howard",
    description:
      "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
    feedback:
      "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
    date: "2024-02-01",
  },
];

function listFromExperiences(experiences: ExperiencesInput): Testimonial[] {
  if (!experiences) return [];
  if (Array.isArray(experiences)) return experiences;
  return experiences.testimonials ?? [];
}

function avatarUrl(exp: Testimonial, index: number): string {
  if (exp.profilePhoto?.asset?._ref) {
    return urlFor(exp.profilePhoto).url();
  }
  const seed = encodeURIComponent(exp.clientName || exp.name || `client-${index}`);
  return `https://api.dicebear.com/7.x/notionists/png?seed=${seed}&size=512`;
}

function toAnimatedItems(items: Testimonial[]) {
  return items.map((exp, i) => ({
    quote: (exp.feedback || exp.description || "").trim(),
    name: exp.clientName || exp.name,
    designation: exp.date || exp.role || "Client",
    src: avatarUrl(exp, i),
  }));
}

const Testimonials = ({ experiences }: TestimonialsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

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
            reviewerImage { asset, alt }
        }`;

        const data = await client.withConfig({ useCdn: false }).fetch(query);

        const mappedReviews: Testimonial[] = (data || []).map(
          (review: {
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
          }) => ({
            id: review._id,
            name: review.name,
            clientName: review.name,
            description: review.review,
            feedback: review.review,
            date: review.submittedAt
              ? new Date(review.submittedAt).toLocaleDateString("en-CA")
              : new Date().toLocaleDateString("en-CA"),
            profilePhoto:
              review.reviewerImage?.asset != null
                ? {
                    asset: review.reviewerImage.asset,
                    alt: review.reviewerImage.alt || review.name,
                  }
                : undefined,
            rating: review.rating || 5,
          })
        );

        setReviews(mappedReviews);
      } catch {
        setReviews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const animatedItems = useMemo(() => {
    const fromCms = listFromExperiences(experiences);
    const baseList = reviews.length > 0 ? reviews : fromCms;
    const list = baseList.length > 0 ? baseList : FALLBACK_TESTIMONIALS;
    return toAnimatedItems(list);
  }, [reviews, experiences]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  if (loading) {
    return (
      <section className="relative flex w-full flex-col items-center px-4 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-white/90">Loading testimonials…</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="professional"
      className="relative flex w-full max-md:max-w-full flex-col items-center overflow-hidden px-4 py-16 md:px-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto mb-10 max-w-4xl text-center md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          What My <span className="text-fuchsia-500">Clients</span> Say
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          Real feedback from clients who&apos;ve worked with me
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl dark">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-2 py-6 shadow-xl shadow-black/20 backdrop-blur-md md:px-6 md:py-10">
          <AnimatedTestimonials testimonials={animatedItems} autoplay={animatedItems.length > 1} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
