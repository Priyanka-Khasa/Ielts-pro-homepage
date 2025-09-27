import React, { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, Play, Award, TrendingUp } from "lucide-react";

const testimonials = [
  {
    quote: "I jumped from 6.0 to 7.5 in just 6 weeks. The AI feedback and curated practice were absolute game-changers for my writing section!",
    name: "Aarav Sharma",
    role: "Student — General Training",
    avatar: "https://images.unsplash.com/photo-1547106634-56dcd53ae883?q=80&w=1080&auto=format&fit=crop",
    bandScore: "+1.5",
    duration: "6 weeks",
    rating: 5,
    highlight: "Writing"
  },
  {
    quote: "Speaking rooms gave me daily confidence. Mentors were super supportive and specific with feedback! I aced my speaking test with 8.0!",
    name: "Simran Kaur",
    role: "Student — Academic",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1080&auto=format&fit=crop",
    bandScore: "+1.0",
    duration: "4 weeks",
    rating: 5,
    highlight: "Speaking"
  },
  {
    quote: "Mock tests felt like the real exam. The band analysis told me exactly where to improve. Scored 8.5 in Listening!",
    name: "Rohit Verma",
    role: "Working Professional",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1080&auto=format&fit=crop",
    bandScore: "+2.0",
    duration: "8 weeks",
    rating: 5,
    highlight: "Listening"
  },
  {
    quote: "The personalized study plan helped me manage my busy schedule. Improved my overall score by 1.5 bands while working full-time!",
    name: "Priya Patel",
    role: "Software Engineer",
    avatar: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bandScore: "+1.5",
    duration: "10 weeks",
    rating: 5,
    highlight: "Overall"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="relative section-py bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-72 bg-gradient-to-r from-sky-300/20 to-blue-300/20 blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="bg-primary-100 p-4 rounded-2xl backdrop-blur-sm border border-primary-200 shadow-lg">
          <Award className="h-8 w-8 text-primary-600" />
        </div>
      </div>
      <div className="absolute bottom-10 right-10 animate-float delay-1000">
        <div className="bg-green-100 p-4 rounded-2xl backdrop-blur-sm border border-green-200 shadow-lg">
          <TrendingUp className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <div className="container-px relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2 mb-6 shadow-sm">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-gray-700 font-semibold text-sm">Rated 4.9/5 by 2,000+ Students</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Results That Speak
            <span className="block text-transparent bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text"> For Themselves</span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Real learners. Real improvements. Real band scores. Join thousands who've transformed their IELTS journey with us.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Large Testimonial Card */}
          <div 
            className="bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 lg:p-12 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="h-12 w-12 text-primary-200 mb-6" />
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="mt-8 flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="h-16 w-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                  />
                  
                  <div>
                    <div className="text-gray-900 font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-2">
                    {testimonials[currentIndex].bandScore}
                  </div>
                  <div className="text-gray-700 font-semibold">Band Improvement</div>
                  
                  <div className="mt-4 bg-white/80 rounded-lg p-3 border border-gray-100">
                    <div className="text-gray-700 font-semibold">Focus Area</div>
                    <div className="text-primary-600 text-lg font-bold">{testimonials[currentIndex].highlight}</div>
                  </div>
                  
                  <div className="mt-3 text-gray-500 text-sm">
                    Achieved in {testimonials[currentIndex].duration}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/80 hover:bg-white border border-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/80 hover:bg-white border border-gray-200 text-gray-700 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Small Testimonial Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ${
                index === currentIndex 
                  ? 'border-primary-400 shadow-lg shadow-primary-200' 
                  : 'border-gray-100 hover:border-primary-200'
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-start gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-xl object-cover flex-shrink-0 border border-gray-200"
                />
                <div>
                  <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-700 text-sm line-clamp-3">"{testimonial.quote}"</p>
              <div className="mt-3 inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs border border-green-200">
                <TrendingUp className="h-3 w-3" />
                +{testimonial.bandScore} bands
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
            <div className="text-gray-900 font-semibold text-lg">Ready to start your success story?</div>
            <a 
              href="#enroll" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Play className="h-4 w-4" />
              Start Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hover\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}