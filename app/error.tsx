'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーログを記録（本番環境では削除）
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">エラーが発生しました</h1>
        <p className="text-[#a8a8c8] mb-6">
          ページの読み込み中に問題が発生しました。もう一度お試しください。
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#4a9eff] text-white font-bold rounded-lg hover:bg-[#5cb0ff] transition-colors"
        >
          再試行
        </button>
      </div>
    </div>
  );
}

