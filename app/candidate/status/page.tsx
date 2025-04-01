'use client';

import { Suspense } from 'react';
import { MainLayout } from "@/components/main-layout";
import dynamic from 'next/dynamic';

const CandidateStatus = dynamic(
  () => import('@/components/candidate-status').then(mod => mod.CandidateStatus),
  { 
    ssr: false,
    loading: () => <div className="flex justify-center p-8">Loading application status...</div>
  }
);

export default function Status() {
  return (
    <MainLayout>
      <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
        <CandidateStatus />
      </Suspense>
    </MainLayout>
  );
}