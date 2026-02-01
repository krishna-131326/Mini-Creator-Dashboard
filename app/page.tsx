"use client"

import { useState } from "react"
import { creators as rawCreators } from "@/data/creators"
import {
  filterCreators,
  sortCreators,
  calculateMetrics
} from "@/lib/creators"
import { SummaryCards } from "@/components/SummaryCards"
import { CreatorTable } from "@/components/CreatorTable"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  const [search, setSearch] = useState("")
  const [activeOnly, setActiveOnly] = useState(false)
  const [sortKey, setSortKey] = useState<"followers" | "revenue">("followers")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filtered = filterCreators(rawCreators, search, activeOnly)
  const sorted = sortCreators(filtered, sortKey, sortOrder)
  const metrics = calculateMetrics(sorted)

  function handleSort(key: "followers" | "revenue") {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortOrder("asc")
    }
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Mini Creator Dashboard</h1>

      <SummaryCards {...metrics} />

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <Switch checked={activeOnly} onCheckedChange={setActiveOnly} />
          <span className="text-sm">Active only</span>
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No creators match the selected filters.
        </p>
      ) : (
        <CreatorTable creators={sorted} onSort={handleSort} />
      )}
    </main>
  )
}
  