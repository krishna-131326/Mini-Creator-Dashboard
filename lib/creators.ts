import { Creator } from "@/data/creators"

export type SortKey = "followers" | "revenue"
export type SortOrder = "asc" | "desc"

export function filterCreators(
  creators: Creator[],
  search: string,
  activeOnly: boolean
): Creator[] {
  return creators.filter((creator) => {
    const matchesSearch = creator.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesActive = activeOnly ? creator.active : true

    return matchesSearch && matchesActive
  })
}

export function sortCreators(
  creators: Creator[],
  key: SortKey,
  order: SortOrder
): Creator[] {
  return [...creators].sort((a, b) => {
    const diff = a[key] - b[key]

    if (diff === 0) {
      return a.name.localeCompare(b.name)
    }

    return order === "asc" ? diff : -diff
  })
}

export function calculateMetrics(creators: Creator[]) {
  const totalCreators = creators.length
  const activeCreators = creators.filter((c) => c.active)
  const totalRevenue = creators.reduce((sum, c) => sum + c.revenue, 0)

  const avgRevenuePerActive =
    activeCreators.length === 0
      ? 0
      : Math.round(
          activeCreators.reduce((sum, c) => sum + c.revenue, 0) /
            activeCreators.length
        )

  return {
    totalCreators,
    activeCreators: activeCreators.length,
    totalRevenue,
    avgRevenuePerActive
  }
}
