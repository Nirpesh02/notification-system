import React, { useState } from "react";
import { Plus, BellRing } from "lucide-react";
import ServiceForm from "./ServiceForm";

export default function MyServices() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">My Services</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            View registered services or open the inline service form below.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition cursor-pointer w-full sm:w-auto shrink-0 shadow-xs"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Hide Form" : "New Service"}
        </button>
      </div>

      {/* Inline Form (No Popup) */}
      {showForm && <ServiceForm onCancel={() => setShowForm(false)} />}

      {/* Services Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 tracking-wider">
                <th className="py-3 px-4">Service Id</th>
                <th className="py-3 px-4">Service Name</th>
                <th className="py-3 px-4">Start Date & Time</th>
                <th className="py-3 px-4">Repetition</th>
                <th className="py-3 px-4">Next Reminder</th>
                <th className="py-3 px-4">Reminder Days</th>
                <th className="py-3 px-4">Re-reminder Gap</th>
                <th className="py-3 px-4">Service Status</th>
                <th className="py-3 px-4">Re-reminder Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" className="py-12 sm:py-16 text-center">
                  <BellRing className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">No services found</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Click "New Service" to fill out the form directly on this page.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
