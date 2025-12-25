
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
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 theme-transition">
      <header className="glass border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-white font-bold text-xl">ف</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              مدونة<span className="text-primary-600">المستقبل</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">الرئيسية</Link>
            <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition">عن المشروع</Link>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary-400 transition-all shadow-sm"
              aria-label="تبديل الوضع الليلي"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-primary-400" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM21 12a.75.75 0 01.75.75V12.75a.75.75 0 01-1.5 0V12.75a.75.75 0 01.75-.75zM18.894 18.894a.75.75 0 010-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.591 1.591a.75.75 0 01-1.06 0zM12 21a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0V21a.75.75 0 01.75-.75zM5.106 18.894a.75.75 0 01-1.06 0l-1.591-1.591a.75.75 0 011.06-1.06l1.591 1.591a.75.75 0 010 1.06zM3 12a.75.75 0 01.75.75V12.75a.75.75 0 01-1.5 0V12.75A.75.75 0 013 12zM5.106 5.106a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.819.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {showAdminLink && (
              <Link 
                to="/admin" 
                className="bg-primary-600 text-white px-7 py-3 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 active:scale-95"
              >
                لوحة التحكم
              </Link>
            )}
          </nav>
          
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <Link to="/login" className="text-slate-500 dark:text-slate-400">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow theme-transition">
        {children}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-20 theme-transition">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ف</span>
                </div>
                <span className="text-xl font-bold dark:text-white">مدونة<span className="text-primary-600">المستقبل</span></span>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                منصة متكاملة لمشاركة المعرفة والابتكار، مصممة بأحدث التقنيات لخدمة المجتمع العربي الرقمي.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 dark:text-white">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                <li><Link to="/" className="hover:text-primary-600 transition">الرئيسية</Link></li>
                <li><Link to="/about" className="hover:text-primary-600 transition">عن المشروع</Link></li>
                <li><Link to="/login" className="hover:text-primary-600 transition">دخول المشرف</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 dark:text-white">تابعنا</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-sm">© 2024 جميع الحقوق محفوظة - مدونة المستقبل الحديثة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
