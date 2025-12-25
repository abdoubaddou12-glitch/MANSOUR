
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showAdminLink?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showAdminLink = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
            مدونة<span className="text-gray-900">المستقبل</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition">الرئيسية</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition">عن المشروع</Link>
            {showAdminLink && (
              <Link 
                to="/admin" 
                className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
              >
                لوحة التحكم
              </Link>
            )}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu toggle would go here */}
            <Link to="/login" className="text-gray-500">
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

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© 2024 جميع الحقوق محفوظة - مدونة المستقبل الحديثة</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-500">تويتر</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">لينكد إن</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
