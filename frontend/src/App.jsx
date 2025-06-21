import { useState } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import './App.css';
export default function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const addUrl = (url) => setShortenedUrls([url, ...shortenedUrls]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">URL Shortener</h1>
      <UrlForm onAddUrl={addUrl} />
      <UrlList urls={shortenedUrls} />
    </div>
  );
}
