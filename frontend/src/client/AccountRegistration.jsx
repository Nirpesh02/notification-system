import React from "react";
import { Save } from "lucide-react";

export default function AccountRegistration() {
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
    // Strip any non-numeric characters (handles paste or autofill)
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  return (
    <div className="w-full max-w-3xl space-y-4 sm:space-y-5">
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-800">Account Registration</h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Register or update your account profile, contact details, and login credentials.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4 text-xs sm:text-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Account Id</label>
            <input
              type="text"
              placeholder="Auto / API generated"
              disabled
              className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 outline-none"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Login Status</label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Active">Active</option>
              <option value="Registered">Registered</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Account Name</label>
            <input
              type="text"
              placeholder="Enter account name"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Contact Address</label>
            <input
              type="text"
              placeholder="Enter contact address"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Phone No.</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone number"
              onKeyDown={handleNumericKeyDown}
              onInput={handleNumericInput}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">SMS Service No.</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="SMS service number"
              onKeyDown={handleNumericKeyDown}
              onInput={handleNumericInput}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block font-medium text-slate-700 mb-1">Email Id</label>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">Login Id</label>
            <input
              type="text"
              placeholder="Login ID"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-slate-700 mb-1">Login Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-end pt-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition cursor-pointer w-full sm:w-auto shadow-xs"
          >
            <Save className="w-4 h-4" />
            Save Account
          </button>
        </div>
      </form>
    </div>
  );
}
