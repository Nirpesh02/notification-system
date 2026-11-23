import React from "react";
import { Users, BellRing, MessageSquare, Mail, Smartphone } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Accounts", value: "--", sub: "Active / Registered / Blocked", icon: Users },
    { label: "Total Services", value: "--", sub: "All accounts", icon: BellRing },
    { label: "SMS Active", value: "--", sub: "Admin activated", icon: MessageSquare },
    { label: "Email Active", value: "--", sub: "Admin activated", icon: Mail },
  ];

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
        <h1 className="text-lg sm:text-xl font-bold text-slate-800">Admin Dashboard</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Manage user accounts and activate SMS or Email notification channels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-slate-500">{s.label}</span>
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-bold text-slate-800">{s.value}</div>
              <div className="mt-1 text-[11px] sm:text-xs text-slate-400">{s.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 font-semibold text-emerald-700">
            <Smartphone className="w-4 h-4" />
            Push Notification
          </div>
          <p className="text-xs text-slate-500 mt-1.5">Default notification system.</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 font-semibold text-amber-700">
            <MessageSquare className="w-4 h-4" />
            SMS Notification
          </div>
          <p className="text-xs text-slate-500 mt-1.5">Activated by Admin.</p>
        </div>
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 font-semibold text-indigo-700">
            <Mail className="w-4 h-4" />
            Email Notification
          </div>
          <p className="text-xs text-slate-500 mt-1.5">Activated by Admin.</p>
        </div>
      </div>
    </div>
  );
}
