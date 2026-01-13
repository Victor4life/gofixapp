"use client";
import { signup } from "@/lib/actions/signup";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border p-6">
        <h1 className="text-2xl font-bold mb-2 text-slate-900">
          Create an account
        </h1>
        <p className="text-slate-600 mb-6 text-sm">
          Sign up to request or provide services
        </p>

        {/* 🔑 CONNECTED HERE */}
        <form action={signup} className="space-y-4">
          <input
            name="full_name"
            placeholder="Full name"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <select
            name="role"
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="client">Client</option>
            <option value="artisan">Artisan</option>
          </select>

          <input
            name="phone"
            placeholder="Phone"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="address"
            placeholder="Address"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="city"
            placeholder="City"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="state"
            placeholder="State"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="country"
            placeholder="Country"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="w-full"
          />

          {/* Artisan-only (safe to submit even if client) */}
          <input
            name="business_name"
            placeholder="Business name (artisan)"
            className="w-full border px-3 py-2 rounded"
          />

          <textarea
            name="bio"
            placeholder="Bio (artisan)"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="years_experience"
            type="number"
            placeholder="Years of experience"
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
