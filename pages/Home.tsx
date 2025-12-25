
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Post } from '../types';

interface HomeProps {
  posts: Post[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Home: React.FC<HomeProps> = ({ posts, isDarkMode, toggleDarkMode }) => {
  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900/10 opacity-70"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/40 dark:bg-primary-600/10 blur-5xl rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-right lg:text-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6 animate-pulse">
              أهلاً بك في عالم الابتكار ✨
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-slate-900 dark:text-white leading-[1.2]">
              نصنع <span className="text-primary-600">المحتوى</span> الذي <br />
              يرسم معالم الغد.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              اكتشف أحدث المقالات في البرمجيات، التصميم، والذكاء الاصطناعي مع تجربة قراءة فائقة السرعة والجمال.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all">
                ابدأ القراءة
              </button>
              <Link to="/about" className="px-10 py-4 rounded-2xl font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">
                اعرف المزيد
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-5xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" alt="Tech" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 z-20 glass p-8 rounded-3xl border border-white/20 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">✓</div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">مقالات موثوقة</div>
                  <div className="text-xs text-slate-500">تم مراجعتها من خبراء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                  آخر ما <span className="text-primary-600">نُشر</span>
                </h2>
                <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {posts.map(post => (
                <article key={post.id} className="group bg-white dark:bg-slate-900/50 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-5 right-5">
                      <span className="glass px-4 py-2 rounded-2xl text-xs font-bold text-primary-600 dark:text-primary-400 border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                       <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs uppercase">{post.author[0]}</div>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                       </div>
                       <Link to={`/post/${post.id}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 transform group-hover:-translate-x-2 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                       </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="w-full md:w-96 space-y-10">
            <div className="bg-primary-600 rounded-4xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">اشترك في النشرة 📧</h3>
              <p className="text-primary-100 mb-8 leading-relaxed opacity-90">كن أول من يحصل على الدروس الحصرية والمقالات المميزة فور صدورها.</p>
              <div className="space-y-4 relative z-10">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 outline-none transition-all" 
                />
                <button className="w-full bg-white text-primary-600 py-4 rounded-2xl font-bold hover:bg-primary-50 active:scale-95 transition-all">اشتراك الآن</button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-8 dark:text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                التصنيفات الشائعة
              </h3>
              <ul className="space-y-4">
                {['تقنية', 'تصميم', 'برمجة', 'ريادة أعمال'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center group">
                      <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary-600 font-medium transition">{cat}</span>
                      <span className="w-8 h-8 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-xs text-slate-400 dark:text-slate-500 font-bold group-hover:bg-primary-50 group-hover:text-primary-600 transition">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
