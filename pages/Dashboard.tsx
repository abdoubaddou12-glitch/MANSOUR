
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  posts: Post[];
  onDelete: (id: string) => void;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ posts, onDelete, onLogout, isDarkMode, toggleDarkMode }) => {
  const chartData = [
    { name: 'يناير', views: 400 },
    { name: 'فبراير', views: 300 },
    { name: 'مارس', views: 600 },
    { name: 'ابريل', views: 800 },
    { name: 'مايو', views: 1000 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex theme-transition">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 hidden lg:flex flex-col shadow-sm theme-transition">
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold">ل</div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">لوحة التحكم</h1>
        </div>
        
        <nav className="flex-grow p-6 space-y-2 mt-4">
          <Link to="/admin" className="flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-2xl border border-primary-100 dark:border-primary-900/30">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
             <span className="font-bold">إدارة المقالات</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 p-4 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
             <span>زيارة الموقع</span>
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="w-full flex items-center gap-3 p-4 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            <span>{isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي'}</span>
          </button>
        </nav>
        
        <div className="p-6 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-4 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-2xl font-bold transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">أهلاً بك، <span className="text-primary-600">أدمن</span> 👋</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">تحكم في محتوى مدونتك وتابع أداء المقالات من هنا.</p>
            </div>
            <Link 
              to="/admin/new" 
              className="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-primary-500/30 hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              مقال جديد
            </Link>
          </header>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { label: 'إجمالي المقالات', value: posts.length, color: 'text-primary-600', bg: 'bg-primary-50 dark:bg-primary-900/20' },
              { label: 'المشاهدات (شهر)', value: '3,450', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
              { label: 'التعليقات', value: '18', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' }
            ].map((metric, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-4xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg">
                <span className="text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{metric.label}</span>
                <p className={`text-4xl font-black mt-4 ${metric.color}`}>{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-4xl border border-slate-100 dark:border-slate-800 mb-12 shadow-sm theme-transition">
            <h3 className="text-xl font-bold mb-8 dark:text-white">إحصائيات القراء (أداء الشهر)</h3>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#334155' : '#e2e8f0'} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} />
                  <Tooltip 
                    cursor={{fill: isDarkMode ? '#1e293b' : '#f8fafc'}} 
                    contentStyle={{borderRadius: '16px', border: 'none', backgroundColor: isDarkMode ? '#0f172a' : '#fff', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', color: isDarkMode ? '#fff' : '#0f172a'}} 
                  />
                  <Bar dataKey="views" fill="#8b5cf6" radius={[10, 10, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-4xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm theme-transition">
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">إدارة المحتوى</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-5">المقال</th>
                    <th className="px-8 py-5 text-center">التصنيف</th>
                    <th className="px-8 py-5 text-center">التاريخ</th>
                    <th className="px-8 py-5 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800 text-sm">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                      <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">{post.title}</td>
                      <td className="px-8 py-6 text-center">
                        <span className="bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-center text-slate-500 dark:text-slate-400 font-medium">{post.date}</td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex justify-center gap-6">
                          <Link to={`/admin/edit/${post.id}`} className="text-primary-600 dark:text-primary-400 font-bold hover:underline">تعديل</Link>
                          <button 
                            onClick={() => onDelete(post.id)}
                            className="text-rose-500 font-bold hover:underline"
                          >
                            حذف
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
