
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Post } from '../types';
import { generateBlogDraft } from '../services/gemini';

interface EditorProps {
  posts?: Post[];
  onSave: (post: Post) => void;
}

const Editor: React.FC<EditorProps> = ({ posts, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<Partial<Post>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'تقنية',
    image: 'https://picsum.photos/seed/new/800/450',
    author: 'أدمن',
    date: new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: '5 دقائق'
  });

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isEditing && posts) {
      const existing = posts.find(p => p.id === id);
      if (existing) setFormData(existing);
    }
  }, [id, posts, isEditing]);

  const handleGenerateAI = async () => {
    if (!formData.title) {
      alert('يرجى كتابة عنوان أولاً ليتمكن الذكاء الاصطناعي من مساعدتك.');
      return;
    }
    setIsGenerating(true);
    const draft = await generateBlogDraft(formData.title);
    setFormData(prev => ({ ...prev, content: draft }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      ...(formData as Post),
      id: isEditing ? (id as string) : Math.random().toString(36).substr(2, 9)
    };
    onSave(newPost);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'تعديل المقال' : 'إضافة مقال جديد'}
          </h1>
          <Link to="/admin" className="text-gray-500 hover:text-gray-900 transition font-medium">إلغاء والعودة</Link>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">عنوان المقال</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition text-lg font-bold"
                placeholder="أدخل عنواناً جذاباً..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">التصنيف</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition appearance-none"
                >
                  <option value="تقنية">تقنية</option>
                  <option value="تصميم">تصميم</option>
                  <option value="برمجة">برمجة</option>
                  <option value="ريادة أعمال">ريادة أعمال</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رابط الصورة</label>
                <input 
                  type="text" 
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">المقتطف (Excerpt)</label>
              <textarea 
                rows={2}
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                className="w-full px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="وصف مختصر يظهر في قائمة المقالات..."
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">محتوى المقال</label>
                <button 
                  type="button"
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg font-bold hover:bg-indigo-100 transition flex items-center gap-1"
                >
                  {isGenerating ? 'جاري التوليد...' : '✨ استعن بالذكاء الاصطناعي'}
                </button>
              </div>
              <textarea 
                rows={12}
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full px-5 py-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition font-serif leading-relaxed"
                placeholder="اكتب قصتك هنا..."
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button 
              type="submit"
              className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-gray-800 transition transform hover:-translate-y-1"
            >
              {isEditing ? 'حفظ التعديلات' : 'نشر المقال'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editor;
