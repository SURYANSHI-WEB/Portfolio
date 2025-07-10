import React from "react";

export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header Bar */}
      <header className="bg-gray-900 border-b-4 border-gray-800 px-4 py-10 md:py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">Suryanshi Singh</h1>
        <div className="text-xl md:text-2xl text-gray-300 font-medium">
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
              RAYAT-BAHRA UNIVERSITY, PB<br />
              B.Tech- Computer Science<br />
              2022 - 2026
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Technical Skills */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">TECHNICAL SKILLS</h2>
            <div className="text-base space-y-1 text-gray-400">
              <div>&bull; Languages: Python, Java, JavaScript, SQL</div>
              <div>&bull; Web: HTML, CSS, ReactJS</div>
              <div>&bull; Tools: Git, VS Code, Canva, Hostinger</div>
              <div>&bull; Databases: MySQL</div>
              <div>&bull; Soft Skills: Problem-solving, Fast Learning, Communication</div>
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Languages */}
          <section>
            <h2 className="uppercase font-bold text-sm tracking-widest mb-2 text-gray-200">LANGUAGES</h2>
            <div className="text-base text-gray-400">
              &bull; English<br />
              &bull; Hindi
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
          {/* Professional Experience */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">PROFESSIONAL EXPERIENCE</h2>
            <div className="mt-4">
              <div className="font-bold text-base text-white">Developer Intern</div>
              <div className="font-bold text-base text-white">ICP Crewsphere - India <span className="float-right font-normal text-gray-400">Jan 2024 - June 2024</span></div>
              <ul className="list-disc list-inside text-base ml-4 mt-1 mb-3 text-gray-300">
                <li>Conducted technical workshops and live coding sessions.</li>
                <li>Delivered demos on blockchain and web technologies.</li>
                <li>Improved technical presentation skills.</li>
              </ul>
              <div className="font-bold text-base text-white">Partnership Manager</div>
              <div className="font-bold text-base text-white">ICP Crewsphere - India <span className="float-right font-normal text-gray-400">Jul 2024 - Nov 2024</span></div>
              <ul className="list-disc list-inside text-base ml-4 mt-1 text-gray-300">
                <li>Managed participant and sponsor data using Excel.</li>
                <li>Created ROI reports and organized outreach plans.</li>
                <li>Helped execute campus tech events.</li>
              </ul>
            </div>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Projects */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">PROJECTS</h2>
            <div className="mt-4">
              <div className="font-bold text-base text-white">
                <a href="https://post-generator-black-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition-colors">AI-Powered Post Ideas Generator</a>
              </div>
              <ul className="list-disc list-inside text-base ml-4 mb-2 text-gray-300">
                <li>Built using Python and APIs for generating social media post ideas.</li>
                <li>Practiced API handling and data parsing.</li>
              </ul>
              <div className="font-bold text-base text-white">Job Board Platform</div>
              <ul className="list-disc list-inside text-base ml-4 mb-2 text-gray-300">
                <li>flask + mysql. jobs posted, applied, and tracked.</li>
              </ul>
              <div className="flex gap-2 ml-4 mb-4">
                <span className="px-3 py-1 bg-gray-800 text-sm rounded-full">flask</span>
                <span className="px-3 py-1 bg-gray-800 text-sm rounded-full">mysql</span>
                <span className="px-3 py-1 bg-gray-800 text-sm rounded-full">crud</span>
              </div>
              <div className="font-bold text-base text-white">
                <a href="https://polarispharma.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition-colors">Polaris Pharma Website Deployment</a>
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
              <li>Managed and delivered technical workshops as Developer Intern at ICP Crewsphere.</li>
              <li>Led outreach and campus tech event organization as Partnership Manager at ICP Crewsphere.</li>
              <li>Participated in college coding competitions and hackathons.</li>
              <li>Vice President of Kaizen Club, managing and organizing all tech events in college.</li>
              <li>Active member of college tech communities and event volunteer.</li>
            </ul>
          </section>
          <hr className="my-4 border-gray-800" />
          {/* Certifications */}
          <section>
            <h2 className="uppercase font-bold text-base tracking-widest mb-2 text-gray-200">CERTIFICATIONS</h2>
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-bold text-white">Project Management Certification</span><br />
                <span className="text-gray-400">Rayat Bahra University</span>
              </div>
              <div>
                <span className="font-bold text-white">Python Web Developer</span><br />
                <span className="text-gray-400">ICT Academy [Infosys Foundation]</span>
              </div>
              <div>
                <span className="font-bold text-white">Core Java & SQL Database</span><br />
                <span className="text-gray-400">MCP Technology</span>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
} 