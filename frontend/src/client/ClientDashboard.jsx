import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Repeat, Send, CheckCircle2 } from "lucide-react";

export default function ClientDashboard({ onNavigate }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate("services");
    } else {
      navigate("/myservice");
    }
  };

  const cards = [
    { label: "Total Services", value: "--", sub: "Account linked", icon: Bell },
    { label: "Active Re-Reminders", value: "--", sub: "Recurring reminders", icon: Repeat },
    { label: "Notifications Sent", value: "--", sub: "Push / SMS / Email", icon: Send },
    { label: "Login Status", value: "--", sub: "Active / Registered / Blocked", icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">Client Dashboard</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Overview of your services, deadline reminders, and sent notifications.
          </p>
        </div>
        <button
          type="button"
          onClick={handleNavigate}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer w-full sm:w-auto shrink-0 shadow-xs"
        >
          Manage Services
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-slate-500">{c.label}</span>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-bold text-slate-800">{c.value}</div>
              <div className="mt-1 text-[11px] sm:text-xs text-slate-400">{c.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 text-center">
        <p className="text-sm font-medium text-slate-600">No client records loaded</p>
        <p className="text-xs text-slate-400 mt-1">
          Backend API connect garepachi yaha services ra reminders dekhinechhan.
        </p>
      </div>
    </div>
  );
}
