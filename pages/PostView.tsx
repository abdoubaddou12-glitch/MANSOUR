
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Post } from '../types';

interface PostViewProps {
  posts: Post[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const PostView: React.FC<PostViewProps> = ({ posts, isDarkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold dark:text-white">عذراً، المقال غير موجود.</h1>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 mt-4 inline-block">العودة للرئيسية</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4 inline-block">← العودة للرئيسية</Link>
          <div className="mb-4">
            <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} className="w-8 h-8 rounded-full" />
              <span className="font-bold text-gray-900 dark:text-white">{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} قراءة</span>
          </div>
        </header>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800">
          <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
        </div>

        <div className="mx-auto text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl text-lg">
          <p className="text-xl font-medium text-gray-900 dark:text-white mb-8 border-r-4 border-indigo-500 pr-6">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-8 dark:text-white">قد يعجبك أيضاً</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map(related => (
              <Link key={related.id} to={`/post/${related.id}`} className="group">
                <div className="flex gap-4 items-center bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-50 dark:border-gray-800 transition">
                  <img src={related.image} className="w-24 h-24 rounded-2xl object-cover shrink-0" alt="" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition line-clamp-2">{related.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{related.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PostView;
