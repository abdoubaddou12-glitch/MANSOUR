
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold mb-10 text-center">عن المشروع والتقنيات المستخدمة</h1>
        
        <div className="prose prose-lg prose-indigo mx-auto">
          <p>
            تم تصميم هذا النظام ليكون مدونة حديثة، سريعة، وسهلة الإدارة. يعتمد المشروع على فلسفة "الواجهات الأمامية أولاً" مع إمكانية التوسع الكامل.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">أفضل التقنيات المناسبة لـ Vercel</h2>
          <ul className="space-y-4">
            <li>
              <strong>Next.js / React:</strong> أفضل إطار عمل للتعامل مع Vercel، يوفر سرعة استثنائية من خلال Rendering الثابت (SSG) والديناميكي (SSR).
            </li>
            <li>
              <strong>Tailwind CSS:</strong> لضمان واجهات مستخدم رشيقة وقابلة للتخصيص دون ملفات CSS ضخمة.
            </li>
            <li>
              <strong>Supabase / Firebase:</strong> كقاعدة بيانات خلفية (Database) للتعامل مع البيانات في الوقت الفعلي.
            </li>
            <li>
              <strong>Gemini API:</strong> لتوليد المحتوى، تحسين العناوين، وتلخيص المقالات تلقائياً.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">طريقة عمل المدونة ولوحة التحكم</h2>
          <p>
            المدونة مقسمة إلى جزئين أساسيين:
          </p>
          <ol>
            <li><strong>الواجهة العامة:</strong> مصممة لتكون "صديقة للقراءة" مع التركيز على التايبوغرافي (Typography) والسرعة.</li>
            <li><strong>لوحة التحكم:</strong> نظام مغلق بكلمة مرور يسمح للمدير بإدارة المحتوى (إضافة، تعديل، حذف) مع إحصائيات فورية للأداء.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900">كيفية نشر المشروع على Vercel</h2>
          <div className="bg-gray-900 text-gray-100 p-8 rounded-3xl overflow-x-auto text-sm leading-relaxed">
            <p className="mb-4">1. ارفع الكود إلى مستودع على <strong>GitHub</strong>.</p>
            <p className="mb-4">2. اربط حسابك في GitHub بمنصة <strong>Vercel</strong>.</p>
            <p className="mb-4">3. اختر المشروع واضغط على <strong>Deploy</strong>.</p>
            <p className="mb-0">4. سيقوم Vercel تلقائياً ببناء الموقع وتوفير رابط مباشر (URL) آمن.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
