
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PostView from './pages/PostView';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import About from './pages/About';
import { Post } from './types';
import { INITIAL_POSTS } from './constants';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('blog_posts');
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_admin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: Post) => {
    setPosts(prev => [post, ...prev]);
  };

  const updatePost = (updatedPost: Post) => {
    setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const deletePost = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المقال؟')) {
      setPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleLogin = (status: boolean) => {
    setIsAuthenticated(status);
    localStorage.setItem('is_admin', status.toString());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('is_admin');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostView posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/admin" /> : <Login onLogin={handleLogin} />
          } />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={
            isAuthenticated ? <Dashboard posts={posts} onDelete={deletePost} onLogout={handleLogout} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/new" element={
            isAuthenticated ? <Editor onSave={addPost} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/edit/:id" element={
            isAuthenticated ? <Editor posts={posts} onSave={updatePost} /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
