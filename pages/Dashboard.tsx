
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  posts: Post[];
  onDelete: (id: string) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ posts, onDelete, onLogout }) => {
  const chartData = [
    { name: 'يناير', views: 400 },
    { name: 'فبراير', views: 300 },
    { name: 'مارس', views: 600 },
    { name: 'ابريل', views: 800 },
    { name: 'مايو', views: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden lg:flex flex-col">
        <div className="p-8 border-b border-gray-800">
          <h1 className="text-xl font-bold tracking-tight">لوحة التحكم</h1>
        </div>
        <nav className="flex-grow p-4 space-y-2 mt-4">
          <Link to="/admin" className="flex items-center gap-3 p-3 bg-indigo-600 rounded-xl">
             <span className="font-medium">المقالات</span>
          </Link>
          <Link to="/" className="flex items-center gap-3 p-3 text-gray-400 hover:text-white transition">
             <span>مشاهدة الموقع</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={onLogout}
            className="w-full text-left p-3 text-red-400 hover:bg-red-900/20 rounded-xl transition"
          >
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">أهلاً بك، أيها المدير</h2>
              <p className="text-gray-500 mt-1">إليك نظرة سريعة على أداء مدونتك اليوم.</p>
            </div>
            <Link 
              to="/admin/new" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition"
            >
              + مقال جديد
            </Link>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <span className="text-sm text-gray-400 font-medium">إجمالي المقالات</span>
              <p className="text-3xl font-bold mt-2">{posts.length}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <span className="text-sm text-gray-400 font-medium">المشاهدات هذا الشهر</span>
              <p className="text-3xl font-bold mt-2">3,450</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <span className="text-sm text-gray-400 font-medium">التعليقات الجديدة</span>
              <p className="text-3xl font-bold mt-2">18</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
            <h3 className="font-bold mb-6 text-gray-900">إحصائيات القراء</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                  <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="views" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-bold text-gray-900">إدارة المقالات</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-gray-50 text-xs text-gray-400 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">المقال</th>
                    <th className="px-6 py-4">التصنيف</th>
                    <th className="px-6 py-4">التاريخ</th>
                    <th className="px-6 py-4">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {posts.map(post => (
                    <tr key={post.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-bold text-gray-900">{post.title}</td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{post.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-4">
                          <Link to={`/admin/edit/${post.id}`} className="text-indigo-600 font-bold hover:underline">تعديل</Link>
                          <button 
                            onClick={() => onDelete(post.id)}
                            className="text-red-600 font-bold hover:underline"
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
