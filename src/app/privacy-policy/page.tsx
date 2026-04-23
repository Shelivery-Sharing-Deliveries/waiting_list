'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MarkdownContent from '@/components/common/MarkdownContent';

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      try {
        const response = await fetch('/api/privacy-policy');
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }
        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPrivacyPolicy();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            Error loading privacy policy: {error}
          </div>
        )}

        {!loading && !error && (
          <MarkdownContent content={content} />
        )}

        {!loading && !error && !content && (
          <p className="text-gray-500">No privacy policy content available.</p>
        )}
      </main>
    </div>
  );
}