import React from "react";
import { Search, Users } from "lucide-react";

export default function ManageAccounts() {
  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-800">Manage Accounts</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            View accounts, update Login Status, and activate SMS/Email channels.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search account..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 tracking-wider">
                <th className="py-3 px-4">Account Id</th>
                <th className="py-3 px-4">Account Name</th>
                <th className="py-3 px-4">Phone / SMS No.</th>
                <th className="py-3 px-4">Email Id</th>
                <th className="py-3 px-4">Login Status</th>
                <th className="py-3 px-4">Push (Default)</th>
                <th className="py-3 px-4">SMS Channel</th>
                <th className="py-3 px-4">Email Channel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="8" className="py-12 sm:py-16 text-center">
                  <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">No accounts loaded</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
