import { useState } from 'react';

export default function UrlForm({ onAddUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) return;

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });
      const data = await res.json();
      if (res.ok) {
        onAddUrl(data);
        setOriginalUrl('');
      } else {
        alert(data.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Error shortening URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6 flex gap-2">
      <input
        type="url"
        placeholder="Enter your URL"
        className="flex-1 px-4 py-2 border rounded-md"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Shortening...' : 'Shorten'}
      </button>
    </form>
  );
}
