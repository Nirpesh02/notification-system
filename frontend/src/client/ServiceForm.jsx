import React from "react";
import { Save, RotateCcw } from "lucide-react";

export default function ServiceForm({ onCancel }) {
  const handleNumericKeyDown = (e) => {
    // Allow control and navigation keys
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key) ||
      (e.ctrlKey || e.metaKey)
    ) {
      return;
    }
    // Block any non-digit key
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleNumericInput = (e) => {
    // Strip non-numeric characters
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-100">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-800">
            Service Setup & Reminder Rules
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure repetition interval, deadline lead days, and re-reminder loop.
          </p>
        </div>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition cursor-pointer w-full sm:w-auto self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Back to List
          </button>
        )}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-xs sm:text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Service Id</label>
            <input
              type="text"
              placeholder="Auto / API generated"
              disabled
              className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 outline-none"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Account Id</label>
            <input
              type="text"
              placeholder="Linked Account ID"
              disabled
              className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Service Name</label>
            <input
              type="text"
              placeholder="Enter service name"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Service Remarks</label>
            <input
              type="text"
              placeholder="Enter remarks"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Service Start Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Service Start Time</label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block font-medium text-slate-700 mb-1">Next Reminder Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Service Repetition Interval
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Interval number"
              onKeyDown={handleNumericKeyDown}
              onInput={handleNumericInput}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Interval Type</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Day">Day</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block font-medium text-slate-700 mb-1">Service Status</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Active">Active</option>
              <option value="Stopped">Stopped</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-100">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Reminder Days Before Deadline
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Days before deadline"
              onKeyDown={handleNumericKeyDown}
              onInput={handleNumericInput}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Re-reminder Interval In Days
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Re-reminder gap in days"
              onKeyDown={handleNumericKeyDown}
              onInput={handleNumericInput}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block font-medium text-slate-700 mb-1">Re-reminder Status</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Active">Active</option>
              <option value="Stop">Stop</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition cursor-pointer w-full sm:w-auto shadow-xs"
          >
            <Save className="w-4 h-4" />
            Save Service
          </button>
        </div>
      </form>
    </div>
  );
}
