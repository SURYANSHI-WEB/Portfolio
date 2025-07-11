import React, { useEffect } from "react";
// import KineticTitle from "../components/KineticTitle";

export default function Resume() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Header Bar */}
      <header className="bg-gray-900 border-b-4 border-gray-800 px-4 py-10 md:py-12 text-center">
        <h1 className="text-4xl md:text-6xl text-white mb-2" style={{ fontWeight: 500 }}>
          Suryanshi Singh
        </h1>
        <div className="text-xl md:text-2xl text-blue-300 font-medium mt-2">
          suryanshisinghsengar@gmail.com
        </div>
      </header>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-gray-950 shadow-lg rounded-none md:rounded-lg p-0 md:p-10 flex flex-col md:flex-row gap-0 md:gap-8 border-t border-gray-800">
        {/* Left Column */}
        <aside className="w-full md:w-1/3 p-6 md:pr-8 flex-shrink-0 space-y-8 border-b md:border-b-0 md:border-r border-gray-800">
          {/* Social Links */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">SOCIAL LINKS</h2>
            <div className="text-base space-y-1 text-gray-400">
              <div>
                <span className="font-bold text-white">LINKEDIN</span><br />
                linkedin.com/in/suryanshi-singh-sengar
              </div>
              <div className="mt-2">
                <span className="font-bold text-white">GITHUB</span><br />
                github.com/SURYANSHI-WEB
              </div>
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Education */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">EDUCATION</h2>
            <div className="text-base text-gray-400">
              RAYAT-BAHRA UNIVERSITY<br />
              B.Tech- Computer Science<br />
              2022 - 2026
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Technical Skills */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">TECHNICAL SKILLS</h2>
            <div className="text-base space-y-1 text-gray-400">
              <div><b>Languages:</b> Python, Java, JavaScript, SQL</div>
              <div><b>ML/AI Tools:</b> Pandas, NumPy</div>
              <div><b>Web:</b> HTML, CSS, ReactJS, API Integration</div>
              <div><b>Tools:</b> Git, VS Code, Canva, Hostinger</div>
              <div><b>Databases:</b> MySQL</div>
              <div><b>Soft Skills:</b> Problem-solving, Fast Learning, Communication</div>
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Certifications */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">CERTIFICATIONS</h2>
            <div className="text-base text-gray-400">
              <div><b>Python Programming</b><br />Reliance Foundation Skilling Academy</div>
              <div className="mt-2"><b>Python Web Developer</b><br />ICT Academy [Infosys Foundation]</div>
              <div className="mt-2"><b>Core Java & SQL Database</b><br />MCP Technology</div>
            </div>
          </section>
        </aside>

        {/* Right Column */}
        <section className="w-full md:w-2/3 p-6 md:pl-8 space-y-8">
          {/* About Me */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">ABOUT ME</h2>
            <p className="text-base max-w-2xl text-gray-300">
              Detail-oriented software engineering student with experience in Python, Java, JavaScript, and ReactJS. Demonstrated ability to build and deploy real-world projects, manage community tech initiatives, and learn new technologies quickly. Eager to contribute to development teams and build scalable software solutions.
            </p>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Projects */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">PROJECTS</h2>
            <div className="mt-4">
              <div className="font-bold text-base text-white">
                <a href="#" className="underline hover:text-blue-400 transition-colors">AI-Powered Post Ideas Generator</a>
              </div>
              <ul className="list-disc list-inside text-base ml-4 mb-2 text-gray-300">
                <li>Built using Python and APIs for generating social media post ideas.</li>
                <li>Practiced API handling and data parsing.</li>
              </ul>
              <div className="font-bold text-base text-white">
                <a href="#" className="underline hover:text-blue-400 transition-colors">Portfolio Website (ReactJS)</a>
              </div>
              <ul className="list-disc list-inside text-base ml-4 mb-2 text-gray-300">
                <li>Created and deployed a personal portfolio using ReactJS.</li>
                <li>Practiced component-based UI and responsive design.</li>
              </ul>
              <div className="font-bold text-base text-white">
                <a href="#" className="underline hover:text-blue-400 transition-colors">Polaris Pharma Website Deployment</a>
              </div>
              <ul className="list-disc list-inside text-base ml-4 text-gray-300">
                <li>Deployed a live pharma business website using Hostinger AI builder.</li>
                <li>Managed content and ensured mobile-friendly structure.</li>
              </ul>
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Extra-Curricular Activities */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">EXTRA- CURRICULAR ACTIVITIES</h2>
            <ul className="list-disc list-inside text-base ml-4 text-gray-300">
              <li>Vice President, Kaizen Club, leading tech event organization and management.</li>
              <li>Managed and delivered technical workshops as Developer Intern at ICP Crewsphere.</li>
              <li>Managed and executed campus tech events as Partnership Manager at ICP Crewsphere.</li>
              <li>Participated in coding competitions and hackathons.</li>
              <li>Active participant in college tech communities and event volunteer.</li>
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
} 