
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
    try {
      const saved = localStorage.getItem('blog_posts');
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch (e) {
      return INITIAL_POSTS;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('is_admin') === 'true';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // تأثير تبديل الثيم على مستوى الوثيقة بالكامل
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('blog_posts', JSON.stringify(posts));
  }, [posts]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const addPost = (post: Post) => setPosts(prev => [post, ...prev]);
  const updatePost = (updatedPost: Post) => setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
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
      <div className="min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home posts={posts} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/post/:id" element={<PostView posts={posts} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/admin" /> : <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          } />

          <Route path="/admin" element={
            isAuthenticated ? <Dashboard posts={posts} onDelete={deletePost} onLogout={handleLogout} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/new" element={
            isAuthenticated ? <Editor onSave={addPost} isDarkMode={isDarkMode} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/edit/:id" element={
            isAuthenticated ? <Editor posts={posts} onSave={updatePost} isDarkMode={isDarkMode} /> : <Navigate to="/login" />
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
