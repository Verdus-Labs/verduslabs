"use client";

import Link from "next/link";
import { VineyardMap } from "@/components/dashboard/vineyard-map";
import { ActionsPanel } from "@/components/dashboard/actions-panel";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-[family-name:var(--font-aktiv-grotesk)]">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <h1 className="text-lg font-semibold text-stone-900">
              Vineyard health overview
            </h1>
            <div className="w-16" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-medium text-stone-900">
                Aerial view — Block North
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                Plant-level health from NDVI (synthetic data)
              </p>
            </div>
            <VineyardMap />
          </div>

          <div>
            <ActionsPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
