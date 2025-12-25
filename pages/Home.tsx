
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
      <section className="bg-indigo-600 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">اكتشف أحدث الأفكار في التكنولوجيا والتصميم</h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">مدونة حديثة مبنية بأحدث التقنيات لتقديم تجربة قراءة استثنائية وسريعة.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              أحدث المقالات
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(post => (
                <article key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-indigo-900/10 transition-all border border-gray-100 dark:border-gray-800 group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                      <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
                       <Link to={`/post/${post.id}`} className="text-indigo-600 dark:text-indigo-400 font-bold text-sm inline-flex items-center gap-1 group-hover:underline">
                         اقرأ المزيد
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                       </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="w-full md:w-80 space-y-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">اشترك في النشرة البريدية</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">احصل على آخر المقالات مباشرة في بريدك الإلكتروني.</p>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none mb-3 text-sm transition-colors" 
              />
              <button className="w-full bg-gray-900 dark:bg-indigo-600 text-white py-2 rounded-lg font-bold text-sm hover:opacity-90 transition">اشتراك</button>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">التصنيفات</h3>
              <ul className="space-y-3">
                {['تقنية', 'تصميم', 'برمجة', 'ريادة أعمال'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                      <span>{cat}</span>
                      <span className="bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded text-xs text-gray-400 dark:text-gray-500">12</span>
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
