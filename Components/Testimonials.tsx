"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { Star, Quote, ChevronsLeftRight } from "lucide-react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Amina S.",
    text: "The meat pies are always fresh and delivered hot! Deeekay Pastries never disappoints.",
    rating: 5,
    avatar: "/img/img3.png",
  },
  {
    name: "Tunde L.",
    text: "Fast delivery and delicious snacks. My office loves ordering from Deeekay!",
    rating: 5,
    avatar: "/img/img2.png",
  },
  {
    name: "Chioma O.",
    text: "I ordered for my party and everyone was impressed. Highly recommend Deeekay Pastries.",
    rating: 5,
    avatar: "/img/img1.png",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
    drag: true,
    animationEnded(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => slider.next(), 5000);
    },
  });

  return (
    <section className="py-20 bg-[var(--brand-yellow)]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--brand-red)]">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-base md:text-lg text-[var(--brand-red)]">
          Real feedback from happy customers across Ibadan
        </p>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider mt-12">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="keen-slider__slide flex justify-center"
            >
              <div
                className="
                  bg-white rounded-2xl p-6 max-w-lg
                  shadow-md transition-all duration-500
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-5">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />

                  <h4 className="mt-3 font-extrabold text-[var(--brand-red)] text-lg">
                    {item.name}
                  </h4>

                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="text-[var(--brand-yellow)]"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <Quote
                  size={26}
                  className="mx-auto mb-3 text-[var(--brand-red)] opacity-70"
                />

                <p className="text-[var(--brand-red)] text-base italic leading-relaxed">
                  “{item.text}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === idx
                  ? "bg-[var(--brand-red)] w-5"
                  : "bg-[var(--brand-red)]/40"
              }`}
            />
          ))}
        </div>

        {/* Swipe Hint (Mobile Only) */}
        <div className="flex items-center justify-center gap-2 mt-4 text-[var(--brand-red)] opacity-70 md:hidden">
          <ChevronsLeftRight size={16} />
          <span className="text-sm font-medium">Swipe</span>
        </div>
      </div>
    </section>
  );
}
