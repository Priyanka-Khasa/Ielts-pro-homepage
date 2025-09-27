import React, { useState, useEffect } from "react";
import { Star, Calendar, Users, TrendingUp, PlayCircle, Award, Clock, BookOpen } from "lucide-react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Band 7+", "Band 8+", "Band 9"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-py bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50/60">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-300/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container-px relative z-10">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left relative">
            {/* Animated Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl px-6 py-3 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-800">Trusted by 10,000+ learners</span>
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs font-bold text-green-700">+97% Success</span>
              </div>
            </div>

            {/* Main Heading with Typing Animation */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-gray-900">Crack Your</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 bg-clip-text text-transparent">
                    IELTS {texts[currentText]}
                  </span>
                  <span className="absolute -right-4 top-0 w-1 h-full bg-primary-600 animate-pulse"></span>
                </span>
                <span className="block text-gray-800">With AI-Powered Coaching</span>
              </h1>
              
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-slide-right"></div>
            </div>
            
            {/* Subtitle */}
            <p className="mt-8 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Personalized practice, <span className="font-semibold text-primary-600">AI-powered feedback</span>, and expert mentors—so you focus on what actually moves your score forward.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: BookOpen, text: "Daily Mock Tests" },
                { icon: Award, text: "Band 7+ Guarantee" },
                { icon: Clock, text: "Flexible Schedule" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                  <item.icon className="h-4 w-4 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                id="enroll" 
                href="#contact" 
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-3xl hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <Calendar className="h-6 w-6" />
                <span className="relative z-10">Book a Free Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              
              <a 
                href="#features" 
                className="group inline-flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-800 px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary-500 hover:text-primary-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <PlayCircle className="h-6 w-6" />
                <span>Watch Demo</span>
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">🎬</span>
                </div>
              </a>
            </div>

            {/* Stats Section */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8 text-sm">
              {/* Student Avatars with Animation */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 relative">
                  {[
                    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1080&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1080&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1080&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1080&auto=format&fit=crop"
                  ].map((src, i) => (
                    <img 
                      key={i}
                      className="h-12 w-12 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                      src={src} 
                      alt={`student ${i + 1}`}
                    />
                  ))}
                  <div className="h-12 w-12 rounded-full bg-primary-600 border-2 border-white shadow-lg grid place-items-center text-white text-xs font-bold">
                    +996
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500 animate-bounce" />
                  <span className="font-bold text-gray-800">Avg. improvement: <span className="text-green-600">+1.5 Bands</span></span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-gray-700">97% Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute delay-1000"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-gray-700">Live Classes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative group perspective-1000">
              {/* Main Image Card with 3D Effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-3xl transform group-hover:rotate-y-2 group-hover:scale-[1.02] transition-all duration-700">
                <img
                  className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1557989048-03456d01a26e?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2lybHMlMjBhbmQlMjBib3lzJTIwc3R1ZHlpbmclMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="IELTS students achieving success together"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Floating Text Overlay */}
                <div className="absolute bottom-8 left-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-2xl font-bold">Start Your Journey Today</div>
                  <div className="text-sm opacity-90">Join thousands of successful students</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-8 -right-8 hidden lg:block animate-float">
                <div className="bg-white rounded-3xl p-6 shadow-3xl border border-gray-100 transform hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 p-3 rounded-2xl shadow-lg">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Next batch starts</div>
                      <div className="text-2xl font-bold text-gray-900">October 10</div>
                      <div className="text-xs text-green-600 font-semibold">Limited Seats</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Floating Element */}
              <div className="absolute -top-8 -left-8 hidden xl:block animate-float delay-500">
                <div className="bg-gradient-to-br from-primary-500 to-blue-500 text-white rounded-3xl p-5 shadow-3xl transform hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold">4.9/5</div>
                    <div className="flex justify-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <div className="text-xs opacity-90 mt-1">2,000+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-20 -right-20 w-96 h-96 bg-gradient-to-r from-primary-200 to-blue-200 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-primary-500 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
}