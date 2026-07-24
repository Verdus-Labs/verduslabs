"use client";

import { SYNTHETIC_ACTIONS, type RecommendedAction } from "@/lib/vineyard-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Leaf, Wrench } from "lucide-react";

const PRIORITY_STYLES = {
  high: "bg-red-50 border-red-200 text-red-800",
  medium: "bg-amber-50 border-amber-200 text-amber-800",
  low: "bg-emerald-50 border-emerald-200 text-emerald-800",
};

const PRIORITY_ICONS = {
  high: AlertCircle,
  medium: Wrench,
  low: Leaf,
};

export function ActionsPanel() {
  return (
    <Card className="border-stone-200">
      <CardHeader>
        <CardTitle className="text-lg">Recommended actions</CardTitle>
        <p className="text-sm text-stone-500">
          AI-suggested interventions based on plant health
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {SYNTHETIC_ACTIONS.map((action) => (
          <ActionItem key={action.id} action={action} />
        ))}
      </CardContent>
    </Card>
  );
}

function ActionItem({ action }: { action: RecommendedAction }) {
  const Icon = PRIORITY_ICONS[action.priority];
  const style = PRIORITY_STYLES[action.priority];

  return (
    <div
      className={`rounded-lg border p-4 transition-colors hover:bg-stone-50/50 ${style}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-full bg-white/80 p-1.5">
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium capitalize">{action.priority} priority</span>
            <span className="text-xs text-stone-500">• {action.block}</span>
          </div>
          <h4 className="font-semibold text-stone-900 mt-1">{action.title}</h4>
          <p className="text-sm text-stone-600 mt-1">{action.description}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium border">
              {action.plantCount} plant{action.plantCount !== 1 ? "s" : ""}
            </span>
            <span className="text-sm font-medium text-stone-700">
              → {action.action}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
