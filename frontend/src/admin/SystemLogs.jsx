import React, { useState } from "react";
import { Search, History } from "lucide-react";

export default function SystemLogs() {
  const [type, setType] = useState("All");

  return (
    <div className="space-y-4 sm:space-y-5">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-slate-800">System Logs</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          All notification history records across accounts.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-between bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search HId, Device Id, or text..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
          />
        </div>
        <div className="flex flex-wrap gap-1.5 shrink-0">
          {["All", "Push", "SMS", "Email"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer ${
                type === item
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 tracking-wider">
                <th className="py-3 px-4">HId</th>
                <th className="py-3 px-4">Sent Date</th>
                <th className="py-3 px-4">Sent Time</th>
                <th className="py-3 px-4">Device Id</th>
                <th className="py-3 px-4">Notification Text</th>
                <th className="py-3 px-4">Notification Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="py-12 sm:py-16 text-center">
                  <History className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">No system logs</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
