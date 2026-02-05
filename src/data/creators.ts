export type Creator = {
  id: number
  name: string
  followers: number
  revenue: number
  active: boolean
  createdAt: string
}

export const creators: Creator[] = [
  { id: 1, name: "Aman", followers: 1200, revenue: 4500, active: true, createdAt: "2025-01-10" },
  { id: 2, name: "Riya", followers: 540, revenue: 0, active: false, createdAt: "2025-01-12" },
  { id: 3, name: "Karan", followers: 9800, revenue: 12000, active: false, createdAt: "2025-01-21" },
  { id: 4, name: "Neha", followers: 9800, revenue: 2000, active: true, createdAt: "2025-02-02" },
  { id: 5, name: "Raj", followers: 4500, revenue: 8000, active: false, createdAt: "2025-02-10" },
  { id: 7, name: "Priya", followers: 7200, revenue: 15000, active: true, createdAt: "2025-02-15" },
  { id: 8, name: "Sneha", followers: 3200, revenue: 5000, active: true, createdAt: "2025-02-18" },
  { id: 9, name: "Vikram", followers: 11000, revenue: 25000, active: true, createdAt: "2025-02-20" }
]
