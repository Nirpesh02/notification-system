import React, { useState } from "react";
import { MessageSquare, Mail, Save } from "lucide-react";

export default function ChannelControls() {
  const [smsActive, setSmsActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);

  return (
    <div className="w-full max-w-3xl space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-slate-800">SMS & Email Controls</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Activate or deactivate SMS and Email notification channels. Push is default.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5 text-xs sm:text-sm">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-800 text-sm sm:text-base">SMS Channel</h2>
                <p className="text-xs text-slate-500">Admin activation status</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSmsActive(!smsActive)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer shrink-0 ${
                smsActive
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {smsActive ? "Active" : "Inactive"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block font-medium text-slate-700 mb-1">SMS Gateway URL</label>
              <input
                type="text"
                placeholder="https://sms-api.example.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">API Key / Sender ID</label>
              <input
                type="password"
                placeholder="Enter API key"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-slate-800 text-sm sm:text-base">Email Channel</h2>
                <p className="text-xs text-slate-500">Admin activation status</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setEmailActive(!emailActive)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer shrink-0 ${
                emailActive
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {emailActive ? "Active" : "Inactive"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block font-medium text-slate-700 mb-1">SMTP Host</label>
              <input
                type="text"
                placeholder="smtp.example.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">Sender Email</label>
              <input
                type="email"
                placeholder="noreply@example.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition cursor-pointer w-full sm:w-auto shadow-xs"
          >
            <Save className="w-4 h-4" />
            Save Controls
          </button>
        </div>
      </form>
    </div>
  );
}
