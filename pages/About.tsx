
import React from 'react';
import Layout from '../components/Layout';

interface AboutProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const About: React.FC<AboutProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">عن المشروع والتقنيات المستخدمة</h1>
        
        <div className="prose prose-lg prose-indigo mx-auto dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            تم تصميم هذا النظام ليكون مدونة حديثة، سريعة، وسهلة الإدارة. يعتمد المشروع على فلسفة "الواجهات الأمامية أولاً" مع إمكانية التوسع الكامل.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">أفضل التقنيات المناسبة لـ Vercel</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong className="text-gray-900 dark:text-white">React & Tailwind CSS:</strong> لضمان واجهات مستخدم رشيقة وقابلة للتخصيص.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Gemini API:</strong> لتوليد المحتوى وتحسين المقالات تلقائياً باستخدام الذكاء الاصطناعي.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">طريقة عمل المدونة ولوحة التحكم</h2>
          <p className="text-gray-600 dark:text-gray-300">
            المدونة مقسمة إلى جزئين أساسيين: الواجهة العامة المصممة للقراءة، ولوحة التحكم المؤمنة لإدارة المحتوى.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">كيفية نشر المشروع على Vercel</h2>
          <div className="bg-gray-900 dark:bg-black text-gray-100 p-8 rounded-3xl overflow-x-auto text-sm leading-relaxed border border-gray-800">
            <p className="mb-4">1. ارفع الكود إلى مستودع على <strong>GitHub</strong>.</p>
            <p className="mb-4">2. اربط حسابك بمنصة <strong>Vercel</strong>.</p>
            <p className="mb-0">3. سيقوم Vercel تلقائياً ببناء الموقع وتوفير رابط آمن.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
