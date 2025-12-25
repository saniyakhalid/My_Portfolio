function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-6xl backdrop-blur-xl bg-white/95 border border-white/30 rounded-3xl shadow-2xl px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SANIYA SHIKALGAR
          </h1>
          <button className="p-3 rounded-2xl bg-slate-200 hover:bg-slate-300 transition-all shadow-lg">
            ☀️
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6 py-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col items-center space-y-6">
              <img 
                src="/assets/user.png" 
                alt="Saniya Shikalgar" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-2xl ring-4 ring-white/50 object-cover"
              />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm{' '}
                <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Saniya Shikalgar
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 max-w-3xl mx-auto leading-relaxed">
              C++ Developer | Full Stack Developer | B.Tech CSE Student
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://github.com/saniyakhalid" target="_blank" rel="noopener noreferrer" 
                 className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                View Projects →
              </a>
              <a href="/assets/resume.pdf" download className="px-10 py-5 border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-bold rounded-2xl transition-all duration-300">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS - NO PERCENTAGES */}
        <section id="skills" className="py-28 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Languages', skills: ['C++', 'C', 'Java', 'Python'] },
              { title: 'Web Tech', skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'] },
              { title: 'Databases', skills: ['MySQL', 'MongoDB', 'Oracle'] },
              { title: 'Core CS', skills: ['DSA', 'OOP', 'Algorithms', 'System Design'] },
              { title: 'Tools', skills: ['Git', 'GitHub', 'Vite', 'Arduino', 'VS Code'] }
            ].map((category, index) => (
              <div key={category.title} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-black mb-10 text-center text-slate-800 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 group-hover:shadow-inner transition-all">
                      <span className="text-2xl font-bold text-slate-800">{skill}</span>
                      <div className="w-24 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: '/assets/edusity.png', title: 'Edusity', tech: 'React + Tailwind', desc: 'Education platform', link: 'https://github.com/saniyakhalid' },
              { img: '/assets/netflix.png', title: 'Netflix Clone', tech: 'React + Framer', desc: 'Streaming UI', link: 'https://github.com/saniyakhalid' },
              { img: '/assets/gemini.png', title: 'Gemini Clone', tech: 'React + Node.js', desc: 'AI Chatbot', link: 'https://github.com/saniyakhalid' },
              { img: '/assets/movie.png', title: 'Movie App', tech: 'React + TMDB API', desc: 'Movie browser', link: 'https://github.com/saniyakhalid' }
            ].map((project) => (
              <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" 
                 className="group bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 border border-white/50 hover:border-blue-300/70 transition-all duration-500 hover:-translate-y-4 block">
                <div className="h-72 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.desc}</p>
                  <span className="px-6 py-3 bg-blue-100 text-blue-800 rounded-2xl font-bold">{project.tech}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION - CORRECTED PERCENTAGES */}
        <section id="education" className="py-28 px-8 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              { title: 'B.Tech Computer Science Engineering', grade: 'Pursuing', period: '2023 - Present', college: 'Annasaheb Dange College of Engineering Ashta' },
              { title: 'Higher Secondary Certificate (HSC)', grade: '94.20%', period: '2021 - 2023' },
              { title: 'Secondary School Certificate (SSC)', grade: '63.33%', period: '2019 - 2021' }
            ].map((edu, index) => (
              <div key={edu.title} className={`flex items-center justify-center ${index % 2 ? 'flex-row-reverse' : ''}`}>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-blue-500/30 transition-all hover:scale-[1.02] max-w-lg w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl flex-shrink-0">
                      <span className="text-2xl font-bold text-white">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{edu.title}</h3>
                      {edu.college && <p className="text-slate-600 mb-2">{edu.college}</p>}
                      <div className="flex gap-4 items-center">
                        <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl shadow-lg">
                          {edu.grade}
                        </span>
                        <span className="text-xl font-bold text-slate-600">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's connect!
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed">
                Passionate about building amazing software. Open to exciting opportunities in C++ development and Full Stack projects!
              </p>
              <div className="space-y-4 pt-8">
                <a href="mailto:saniyakhalid2004@gmail.com" className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-200/50 hover:border-blue-500 hover:bg-white/90 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
                  <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">✉️</span>
                  <div>
                    <span className="block font-bold text-slate-900 group-hover:text-blue-600">saniyakhalid2004@gmail.com</span>
                    <span className="text-sm text-slate-500">Click to email</span>
                  </div>
                </a>
                <a href="https://github.com/saniyakhalid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-200/50 hover:border-blue-500 hover:bg-white/90 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
                  <span className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">🐙</span>
                  <div>
                    <span className="block font-bold text-slate-900 group-hover:text-blue-600">github.com/saniyakhalid</span>
                    <span className="text-sm text-slate-500">20+ repositories</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/saniya-shikalgar-a4a187290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-200/50 hover:border-blue-500 hover:bg-white/90 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
                  <span className="w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">💼</span>
                  <div>
                    <span className="block font-bold text-slate-900 group-hover:text-blue-600">linkedin.com/in/saniya-shikalgar</span>
                    <span className="text-sm text-slate-500">Professional profile</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <form className="space-y-6 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/50 shadow-2xl">
                <input type="text" placeholder="Your Name" className="w-full p-5 bg-white/50 backdrop-blur-xl border border-blue-200/50 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all text-lg placeholder-slate-500 hover:border-blue-300" />
                <input type="email" placeholder="your.email@example.com" className="w-full p-5 bg-white/50 backdrop-blur-xl border border-blue-200/50 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all text-lg placeholder-slate-500 hover:border-blue-300" />
                <textarea rows="5" placeholder="Tell me about your project..." className="w-full p-5 bg-white/50 backdrop-blur-xl border border-blue-200/50 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all text-lg placeholder-slate-500 resize-none hover:border-blue-300" />
                <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-blue-500/40 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Send Message ➤
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 text-center bg-white/50 backdrop-blur-xl border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-6">
          <img src="/assets/user.png" alt="Saniya" className="w-24 h-24 mx-auto rounded-2xl mb-6 shadow-xl" />
          <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Saniya Shikalgar
          </h3>
          <p className="text-2xl text-slate-600 mb-2">C++ Developer | Full Stack | B.Tech CSE</p>
          <div className="flex gap-6 justify-center mb-6">
            <a href="mailto:saniyakhalid2004@gmail.com" className="text-2xl hover:text-blue-600 transition-colors">✉️</a>
            <a href="https://github.com/saniyakhalid" target="_blank" className="text-2xl hover:text-gray-800 transition-colors">🐙</a>
            <a href="https://www.linkedin.com/in/saniya-shikalgar-a4a187290" target="_blank" className="text-2xl hover:text-blue-600 transition-colors">💼</a>
          </div>
          <p className="text-lg text-slate-500">© 2025 Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  )
}

export default App
