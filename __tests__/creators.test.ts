import { describe, it, expect } from "vitest"
import {
  filterCreators,
  sortCreators,
  calculateMetrics
} from "../lib/creators"
import { creators } from "../data/creators"

describe("Creator utilities", () => {
  it("sorts followers ascending", () => {
    const result = sortCreators(creators, "followers", "asc")
    expect(result[0].name).toBe("Riya")

    const top = result.filter(c => c.followers === 9800)
    expect(top[0].name).toBe("Karan")
    expect(top[1].name).toBe("Neha")
  })

  it("sorts followers descending", () => {
    const result = sortCreators(creators, "followers", "desc")
    expect(result[0].name).toBe("Karan")
  })

  it("sorts revenue ascending", () => {
    const result = sortCreators(creators, "revenue", "asc")
    expect(result[0].revenue).toBe(0)
  })

  it("sorts revenue descending", () => {
    const result = sortCreators(creators, "revenue", "desc")
    expect(result[0].revenue).toBe(12000)
  })

  it("keeps stable order for ties using name", () => {
    const result = sortCreators(creators, "followers", "desc")
    const tied = result.filter(c => c.followers === 9800)
    expect(tied[0].name).toBe("Karan")
    expect(tied[1].name).toBe("Neha")
  })

  it("filters by search and active only together", () => {
    const result = filterCreators(creators, "a", true)
    const names = result.map(c => c.name)
    expect(names).toContain("Aman")
    expect(names).toContain("Karan")
    expect(names).not.toContain("Riya")
  })

  it("returns avg revenue 0 when no active creators", () => {
    const inactiveOnly = creators.filter(c => !c.active)
    const metrics = calculateMetrics(inactiveOnly)
    expect(metrics.avgRevenuePerActive).toBe(0)
  })
})
