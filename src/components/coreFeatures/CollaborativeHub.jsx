import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CollaborativeHub() {
  const [showForm, setShowForm] = useState(false);
  const categories = ["Mental Health", "Wellness", "Meditation", "Relationships"];

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const payload = {
      title: title.trim(),
      description: description.trim(),
      url: url.trim(),
      category,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    console.log("Form submitted:", payload);
    setShowForm(false); // close form after submit
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
      >
        Add Resource
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">Submit a Resource</h3>
              <button
                onClick={() => setShowForm(false)}
                className="rounded-full p-2 hover:bg-gray-100 transition"
                aria-label="Close"
              >
                <XMarkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Coping with Anxiety: Beginner’s Guide"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">URL *</label>
                <input
                  type="url"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/article"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Category</label>
                <select
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe this resource…"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="anxiety, sleep, routines"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
