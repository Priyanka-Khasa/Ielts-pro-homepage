import React from "react";
import { Mic, FileText, Bot, Calendar } from "lucide-react";

const features = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Speaking Practice",
    desc: "Daily mock speaking rooms with instant feedback and fluency tips.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Full-length Mock Tests",
    desc: "Exam-like tests with band-level analysis for each section.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Band Score",
    desc: "Upload answers and get an AI-predicted band score with improvement plan.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Flexible Schedules",
    desc: "Weekend & weekday batches, online + classroom options.",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-py bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container-px">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Everything You Need to Hit Band 7+
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Focused practice, expert guidance, and data-driven feedback to accelerate your IELTS preparation journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-lg group-hover:blur-xl" />
              <div className="relative bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${f.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="mt-6 font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors">
                  {f.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {f.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                  <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            <span>Start Your Journey Today</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}