
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showAdminLink?: boolean;
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, showAdminLink = true, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
            مدونة<span className="text-gray-900 dark:text-white">المستقبل</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">الرئيسية</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">عن المشروع</Link>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {showAdminLink && (
              <Link 
                to="/admin" 
                className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 dark:shadow-none"
              >
                لوحة التحكم
              </Link>
            )}
          </nav>
          
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="text-gray-500 dark:text-gray-400">
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <Link to="/login" className="text-gray-500 dark:text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© 2024 جميع الحقوق محفوظة - مدونة المستقبل الحديثة</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">تويتر</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">لينكد إن</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
