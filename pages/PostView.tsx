
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Post } from '../types';

interface PostViewProps {
  posts: Post[];
}

const PostView: React.FC<PostViewProps> = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold">عذراً، المقال غير موجود.</h1>
          <Link to="/" className="text-indigo-600 mt-4 inline-block">العودة للرئيسية</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <Link to="/" className="text-indigo-600 text-sm font-medium mb-4 inline-block">← العودة للرئيسية</Link>
          <div className="mb-4">
            <span className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} className="w-8 h-8 rounded-full" />
              <span className="font-bold text-gray-900">{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} قراءة</span>
          </div>
        </header>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
        </div>

        <div className="prose prose-lg prose-indigo mx-auto text-gray-700 leading-relaxed max-w-2xl">
          <p className="text-xl font-medium text-gray-900 mb-8 border-r-4 border-indigo-500 pr-6">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold mb-8">قد يعجبك أيضاً</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map(related => (
              <Link key={related.id} to={`/post/${related.id}`} className="group">
                <div className="flex gap-4 items-center">
                  <img src={related.image} className="w-24 h-24 rounded-2xl object-cover shrink-0" alt="" />
                  <div>
                    <h4 className="font-bold group-hover:text-indigo-600 transition line-clamp-2">{related.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{related.date}</p>
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
