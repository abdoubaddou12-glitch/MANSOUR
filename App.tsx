
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
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Error loading posts from localStorage:", e);
    }
    return INITIAL_POSTS;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('is_admin') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      localStorage.setItem('blog_posts', JSON.stringify(posts));
    } catch (e) {
      console.error("Error saving posts to localStorage:", e);
    }
  }, [posts]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

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
    try {
      localStorage.setItem('is_admin', status.toString());
    } catch (e) {}
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('is_admin');
    } catch (e) {}
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home posts={posts} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/post/:id" element={<PostView posts={posts} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/admin" /> : <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          } />

          <Route path="/admin" element={
            isAuthenticated ? <Dashboard posts={posts} onDelete={deletePost} onLogout={handleLogout} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/new" element={
            isAuthenticated ? <Editor onSave={addPost} /> : <Navigate to="/login" />
          } />
          <Route path="/admin/edit/:id" element={
            isAuthenticated ? <Editor posts={posts} onSave={updatePost} /> : <Navigate to="/login" />
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
