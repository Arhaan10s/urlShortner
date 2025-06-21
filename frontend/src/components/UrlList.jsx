export default function UrlList({ urls }) {
  if (urls.length === 0) return null;

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shortened URLs</h2>
      <ul className="space-y-2">
        {urls.map((url) => {
          const shortUrl = url.shortUrl.startsWith('http')
            ? url.shortUrl
            : `http://localhost:3000/${url.shortUrl}`;

          return (
            <li
              key={url.shortUrl}
              className="flex flex-col border-b pb-2 last:border-none"
            >
              <span className="text-gray-700">{url.originalUrl}</span>
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                {shortUrl}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
