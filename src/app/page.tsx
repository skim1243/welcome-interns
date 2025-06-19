"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const sections = [
  {
    key: "welcome",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-[#457b9d]">
            Hi Nathaniel!
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-[#22223b] mt-2">
            Welcome to your first day 🎉
          </p>
        </div>
        <div className="text-lg leading-relaxed text-[#22223b] p-4 items-center justify-center content-center">
          You&#39;ll get hands-on with AI chatbots, Flutter video integration, API calls, and full-stack projects.
          <br />
          <br />
          As you navigate through the resources, there is no need to understand everything. Think of them as a primer for what we&#39;ll be doing over the summer!
        </div>
      </div>
    ),
  },
    {
    key: "teams",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#457b9d]">Install Microsoft Teams</h2>
          <a
            href="https://www.microsoft.com/en-us/microsoft-teams/download-app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#457b9d] text-white rounded-lg shadow hover:bg-[#274472] transition"
          >
            Download Teams
          </a>
        </div>
        <div className="text-lg text-[#22223b] p-4">
          Teams is our communication hub&#8212;used for meetings, async check-ins, and quick collaboration.
        </div>
      </div>
    ),
  },
  {
    key: "figma",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#457b9d]">Install Figma</h2>
          <a
            href="https://www.figma.com/downloads/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#457b9d] text-white rounded-lg shadow hover:bg-[#274472] transition"
          >
            Download Figma
          </a>
        </div>
        <div className="text-lg text-[#22223b] p-4">
          Figma is our go-to for reviewing UI/UX designs, collaborating on prototypes, and leaving feedback.
        </div>
      </div>
    ),
  },
  {
    key: "vscode-cursor",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#457b9d]">Install VSCode or Cursor</h2>
          <div className="flex gap-6 mt-4">
            <a
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#457b9d] text-white rounded-lg shadow hover:bg-[#274472] transition"
            >
              Download VSCode
            </a>
            <a
              href="https://www.cursor.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#22223b] text-white rounded-lg shadow hover:bg-[#4a4e69] transition"
            >
              Download Cursor (free for students!)
            </a>
          </div>
        </div>
        <div className="text-lg text-[#22223b] p-4">
          Cursor is an AI-powered coding companion built on top of VSCode. Use either to write, debug, and deploy code across projects.
        </div>
      </div>
    ),
  },
  {
    key: "notion-setup",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#457b9d]">Join Our Notion Workspace</h2>
          <a
            href="https://www.notion.so/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-[#457b9d] text-white rounded-lg shadow hover:bg-[#274472] transition"
          >
            Sign Up / Log In to Notion
          </a>
        </div>
        <div className="text-lg text-[#22223b] p-4">
          We use Notion for project documentation, meeting notes, and knowledge sharing. Once logged in, you'll receive an invite to our team space.
        </div>
      </div>
    ),
  },

  // existing tool installation sections...
  {
    key: "ai-chatbot",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#457b9d] mb-4">AI Chatbot Training</h2>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>Prompt engineering</li>
            <li>NLP basics</li>
            <li>Fine-tuning models</li>
            <li>RAG (Retrieval-Augmented Generation)</li>
            <li>Chatbot UX best practices</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#457b9d] mb-2">Resources</h3>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li><a href="https://platform.openai.com/docs" className="underline text-blue-600" target="_blank">OpenAI API docs</a></li>
            <li><a href="https://docs.langchain.com/" className="underline text-blue-600" target="_blank">LangChain documentation</a></li>
            <li><a href="https://learnprompting.org/" className="underline text-blue-600" target="_blank">Introduction to Prompt Engineering</a></li>
            <li>YouTube: &quot;How to Build an AI Chatbot with GPT and LangChain&quot;</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "flutter-video",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#457b9d] mb-4">Flutter + Video Integration</h2>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>Firebase Storage</li>
            <li>Video compression</li>
            <li>Player widgets</li>
            <li>File picker</li>
            <li>Platform permissions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#457b9d] mb-2">Resources</h3>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li><a href="https://firebase.flutter.dev/" className="underline text-blue-600" target="_blank">FlutterFire Documentation</a></li>
            <li><a href="https://pub.dev/packages/video_player" className="underline text-blue-600" target="_blank">video_player plugin</a></li>
            <li><a href="https://pub.dev/packages/flutter_webrtc" className="underline text-blue-600" target="_blank">Flutter WebRTC (for live streaming)</a></li>
            <li>YouTube: &quot;Flutter Video App with Firebase Upload and Playback&quot;</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "nextjs",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#457b9d] mb-4">Next.js for Web Apps</h2>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>App routing & layouts</li>
            <li>API routes & handlers</li>
            <li>Server components</li>
            <li>SSR/SSG fundamentals</li>
            <li>Authentication and deployment</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#457b9d] mb-2">Resources</h3>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li><a href="https://nextjs.org/learn" className="underline text-blue-600" target="_blank">Next.js Official Docs</a></li>
            <li><a href="https://github.com/vercel/next.js/tree/canary/examples" className="underline text-blue-600" target="_blank">Vercel Next.js Examples</a></li>
            <li>YouTube: &quot;Fullstack App with Next.js and Firebase&quot;</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "api-integration",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#457b9d] mb-4">API Integration</h2>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>REST & GraphQL basics</li>
            <li>Postman for testing</li>
            <li>Async/await in JavaScript</li>
            <li>Error handling & logging</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#457b9d] mb-2">Resources</h3>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>YouTube: RESTful API Crash Course</li>
            <li><a href="https://www.postman.com/resources/videos/" className="underline text-blue-600" target="_blank">Postman API Fundamentals</a></li>
            <li><a href="https://pub.dev/packages/http" className="underline text-blue-600" target="_blank">Flutter HTTP Package</a></li>
            <li><a href="https://nextjs.org/docs/api-routes/introduction" className="underline text-blue-600" target="_blank">Next.js API routes</a></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "system-design",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <h2 className="text-4xl font-bold text-[#457b9d] mb-4">System Design Basics</h2>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li>Client-server architecture</li>
            <li>Database schema design</li>
            <li>API gateway concepts</li>
            <li>Monolith vs microservices</li>
            <li>Scalability principles</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#457b9d] mb-2">Resources</h3>
          <ul className="list-disc pl-6 text-[#22223b] text-lg">
            <li><a href="https://github.com/donnemartin/system-design-primer" className="underline text-blue-600" target="_blank">System Design Primer</a></li>
            <li>YouTube: Gaurav Sen&#39;s System Design playlist</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    key: "congratulations",
    content: (
      <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in relative overflow-hidden">
        {/* Confetti animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: [
                  '#457b9d', '#f3dfc1', '#ddbea8', '#baa898', '#f2e2ba', '#ffb4a2', '#a8dadc', '#e63946'
                ][Math.floor(Math.random() * 8)],
              }}
            />
          ))}
        </div>
        <h1 className="text-6xl font-extrabold text-[#457b9d] mb-6 text-center z-10">Congratulations! 🎉</h1>
        <p className="text-2xl text-[#22223b] mb-4 text-center z-10">You&#39;ve completed your onboarding journey.</p>
        <p className="text-xl text-[#457b9d] text-center z-10">We&#39;re excited to see what you&#39;ll build next, and we&#39;ll use your progress to begin on your tasks on Monday! Please email skim@websiteinnovator.com anytime with any questions.</p>
      </div>
    ),
  },
];

export default function Home() {
  const [section, setSection] = useState(0);
  const [fade, setFade] = useState(true);
  const progress = ((section + 1) / sections.length) * 100;

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeout);
  }, [section]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full flex items-center px-6 py-3 bg-[#457b9d] shadow-md z-20">
        <Image src="/wi_logo.png" alt="WI Logo" width={48} height={48} className="h-12 w-auto" priority />
      </nav>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div
          className="h-full bg-[#457b9d] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center p-6">
        <div
          className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}
        >
          {sections[section].content}
        </div>
        
        
      <div className="absolute bottom-10 flex flex-col items-center justify-center gap-4">
          <div className="flex justify-center items-center gap-12">
            <button
              onClick={() => setSection((s) => Math.max(0, s - 1))}
              disabled={section === 0}
              className={`p-3 rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white ${section === 0 ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
              aria-label="Previous section"
            >
              <FaArrowLeft size={32} />
            </button>
            <button
              onClick={() => setSection((s) => Math.min(sections.length - 1, s + 1))}
              disabled={section === sections.length - 1}
              className={`p-3 rounded-full bg-white/80 text-gray-800 shadow transition hover:bg-white ${section === sections.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:scale-110"}`}
              aria-label="Next section"
            >
              <FaArrowRight size={32} />
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {sections.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === section ? 'bg-[#457b9d] scale-110' : 'bg-gray-300'}`}
                onClick={() => setSection(idx)}
                aria-label={`Go to section ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
