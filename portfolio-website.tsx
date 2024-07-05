import React, { useState } from 'react';

const AboutMe = () => (
  <div className="max-w-2xl mx-auto p-8">
    <h2 className="text-3xl font-light mb-6">About Me</h2>
    <p className="text-gray-600 leading-relaxed">
      Hello! I'm a passionate developer with a keen eye for clean, intuitive design. 
      My approach combines cutting-edge technology with user-centric solutions.
    </p>
  </div>
);

const Projects = () => (
  <div className="max-w-2xl mx-auto p-8">
    <h2 className="text-3xl font-light mb-6">My Projects</h2>
    <ul className="space-y-4">
      {['Project Alpha', 'Project Beta', 'Project Gamma'].map((project, index) => (
        <li key={index} className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">{project}</h3>
          <p className="text-gray-600">An innovative solution that revolutionizes the way we interact with technology.</p>
        </li>
      ))}
    </ul>
  </div>
);

const Transcripts = () => (
  <div className="max-w-2xl mx-auto p-8">
    <h2 className="text-3xl font-light mb-6">Transcripts</h2>
    <p className="text-gray-600 mb-4">A summary of my academic achievements and qualifications.</p>
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
      <p className="text-gray-600">Graduated Summa Cum Laude - GPA: 3.95</p>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'transcripts':
        return <Transcripts />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {['about', 'projects', 'transcripts'].map((page) => (
              <li key={page}>
                <button 
                  onClick={() => setCurrentPage(page)} 
                  className={`py-6 text-sm font-medium transition-colors duration-300 ${
                    currentPage === page ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto mt-12 px-4">
        {renderPage()}
      </main>

      <footer className="mt-16 bg-white border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
