"use client"

import { useState, useEffect } from "react"
import { Calendar, BookOpen, TrendingUp, Smile, Frown, Meh, Heart, Zap } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const moodOptions = [
  { value: 1, label: "Very Sad", icon: Frown, color: "text-red-500" },
  { value: 2, label: "Sad", icon: Frown, color: "text-orange-500" },
  { value: 3, label: "Neutral", icon: Meh, color: "text-yellow-500" },
  { value: 4, label: "Happy", icon: Smile, color: "text-green-500" },
  { value: 5, label: "Very Happy", icon: Heart, color: "text-primary" },
]

const reflectionPrompts = [
  "What made you smile today?",
  "What are you grateful for right now?",
  "What challenged you today and how did you handle it?",
  "What's one thing you learned about yourself today?",
  "How did you show kindness to yourself or others today?",
]

export default function JournalDashboard() {
  const [entries, setEntries] = useState([])
  const [currentEntry, setCurrentEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState(null)
  const [currentPrompt, setCurrentPrompt] = useState("")

  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries")
    if (savedEntries) setEntries(JSON.parse(savedEntries))

    const randomPrompt = reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)]
    setCurrentPrompt(randomPrompt)
  }, [])

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries))
  }, [entries])

  const saveEntry = () => {
    if (!currentEntry.trim() || selectedMood === null) return
    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      content: currentEntry,
      mood: selectedMood,
      moodLabel: moodOptions.find((m) => m.value === selectedMood)?.label || "",
    }
    setEntries((prev) => [newEntry, ...prev])
    setCurrentEntry("")
    setSelectedMood(null)

    const randomPrompt = reflectionPrompts[Math.floor(Math.random() * reflectionPrompts.length)]
    setCurrentPrompt(randomPrompt)
  }

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return date.toISOString().split("T")[0]
  }).reverse()

  const moodData = last7Days.map((date) => {
    const dayEntries = entries.filter((entry) => entry.date === date)
    const avgMood =
      dayEntries.length > 0 ? dayEntries.reduce((sum, entry) => sum + entry.mood, 0) / dayEntries.length : 0
    return {
      date: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      mood: avgMood,
    }
  })

  const entryFrequency = last7Days.map((date) => ({
    date: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
    entries: entries.filter((entry) => entry.date === date).length,
  }))

  const averageMood = entries.length > 0 ? entries.reduce((sum, entry) => sum + entry.mood, 0) / entries.length : 0
  const todaysEntries = entries.filter((entry) => entry.date === new Date().toISOString().split("T")[0])

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            My Journal & Mood Tracker
          </h1>
          <p className="text-gray-600">Track your daily thoughts and emotions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[{ icon: Calendar, label: "Total Entries", value: entries.length },
            { icon: TrendingUp, label: "Avg Mood", value: averageMood.toFixed(1) + "/5" },
            { icon: Zap, label: "Today's Entries", value: todaysEntries.length },
            { icon: Heart, label: "Streak", value: "7 days" }
          ].map((stat, idx) => {
            const StatIcon = stat.icon
            return (
              <div key={idx} className="bg-white p-4 rounded shadow flex items-center gap-2">
                <StatIcon className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* New Entry */}
          <div className="bg-white p-4 rounded shadow space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5" />
              New Journal Entry
            </div>

            {/* Prompt */}
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-500 mb-1">Today's reflection prompt:</p>
              <p>{currentPrompt}</p>
            </div>

            {/* Mood Selection */}
            <div>
              <p className="text-sm font-medium mb-2">How are you feeling?</p>
              <div className="flex gap-2 flex-wrap">
                {moodOptions.map((mood) => {
                  const Icon = mood.icon
                  const isSelected = selectedMood === mood.value
                  return (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={`flex items-center gap-1 px-2 py-1 border rounded ${isSelected ? "bg-blue-600 text-white" : "border-gray-300"}`}
                    >
                      <Icon className={`h-4 w-4 ${isSelected ? "text-white" : mood.color}`} />
                      {mood.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Journal Textarea */}
            <textarea
              placeholder="Write about your day..."
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              className="w-full min-h-[120px] p-2 border rounded"
            ></textarea>

            <button
              onClick={saveEntry}
              disabled={!currentEntry.trim() || selectedMood === null}
              className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
              Save Entry
            </button>
          </div>

          {/* Charts */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Mood Trend (Last 7 Days)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="mood" stroke="#3B82F6" strokeWidth={2} dot={{ fill: "#3B82F6" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Entry Frequency</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={entryFrequency}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="entries" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Entries */}
        <div className="bg-white p-4 rounded shadow space-y-4 max-h-96 overflow-y-auto">
          <h3 className="font-semibold mb-2">Recent Entries</h3>
          {entries.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No entries yet. Start by writing your first journal entry!</p>
          ) : (
            entries.slice(0, 10).map((entry) => {
              const moodOption = moodOptions.find((m) => m.value === entry.mood)
              const MoodIcon = moodOption?.icon || Meh
              return (
                <div key={entry.id} className="border-l-4 border-blue-600 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-sm border px-1 rounded">
                        <MoodIcon className={`h-3 w-3 ${moodOption?.color}`} />
                        {entry.moodLabel}
                      </span>
                      <span className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-sm">{entry.content}</p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
