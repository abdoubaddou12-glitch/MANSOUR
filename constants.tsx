
import { Post, Category } from './types';

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    title: 'مستقبل الذكاء الاصطناعي في عام 2025',
    excerpt: 'استكشاف شامل لكيفية تغيير تقنيات الذكاء الاصطناعي التوليدي لمشهد العمل الرقمي.',
    content: 'يعتبر الذكاء الاصطناعي المحرك الأساسي للثورة الصناعية الرابعة...',
    category: 'تقنية',
    image: 'https://picsum.photos/seed/tech1/800/450',
    date: '15 مايو 2024',
    author: 'أحمد علي',
    readTime: '5 دقائق'
  },
  {
    id: '2',
    title: 'أفضل ممارسات تجربة المستخدم في تطبيقات الويب',
    excerpt: 'كيف تزيد من تفاعل المستخدمين من خلال تصميم واجهات بسيطة وفعالة.',
    content: 'تصميم تجربة المستخدم ليس مجرد ألوان وأشكال، بل هو فهم عميق لسلوك البشر...',
    category: 'تصميم',
    image: 'https://picsum.photos/seed/design1/800/450',
    date: '12 مايو 2024',
    author: 'سارة خالد',
    readTime: '8 دقائق'
  }
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'تقنية', count: 12 },
  { id: '2', name: 'تصميم', count: 8 },
  { id: '3', name: 'برمجة', count: 15 },
  { id: '4', name: 'ريادة أعمال', count: 5 }
];
