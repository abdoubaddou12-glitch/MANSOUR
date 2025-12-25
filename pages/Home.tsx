
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
      <section className="relative pt-24 pb-20 overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-500/5 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/30">
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
              <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">تحديثات يومية</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1]">
              نكتشف <span className="text-primary-600">المستقبل</span> <br /> 
              كلمة بكلمة.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              انضم إلى آلاف القراء في رحلة استكشاف الذكاء الاصطناعي، البرمجة، وتصميم تجربة المستخدم بأفضل المعايير العصرية.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all">تصفح المقالات</button>
              <Link to="/about" className="text-slate-600 dark:text-slate-400 font-bold hover:text-primary-600 transition">كيف نعمل؟ ←</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-5xl border-8 border-white dark:border-slate-900 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" alt="Tech" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border border-white/20 shadow-2xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">مقالات موثوقة</p>
                  <p className="text-xs text-slate-500">محدثة باستمرار</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">آخر المقالات</h2>
              <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <article key={post.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="glass px-3 py-1.5 rounded-xl text-xs font-bold text-primary-600 dark:text-primary-400 border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} قراءة</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white leading-tight hover:text-primary-600 transition-colors">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 line-clamp-2 mb-8 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 font-bold text-xs uppercase">
                        {post.author[0]}
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                    </div>
                    <Link to={`/post/${post.id}`} className="text-primary-600 dark:text-primary-400 font-bold text-sm hover:underline">اقرأ المزيد ←</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
