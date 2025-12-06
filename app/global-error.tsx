'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-white mb-4">エラーが発生しました</h1>
            <p className="text-[#a8a8c8] mb-6">
              アプリケーションで重大なエラーが発生しました。ページをリロードしてください。
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#4a9eff] text-white font-bold rounded-lg hover:bg-[#5cb0ff] transition-colors"
            >
              再試行
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

