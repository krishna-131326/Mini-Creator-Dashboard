import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  totalCreators: number
  activeCreators: number
  totalRevenue: number
  avgRevenuePerActive: number
}

export function SummaryCards(props: Props) {
  const cards = [
    { title: "Total Creators", value: props.totalCreators },
    { title: "Active Creators", value: props.activeCreators },
    { title: "Total Revenue", value: `₹${props.totalRevenue}` },
    { title: "Avg Revenue / Active", value: `₹${props.avgRevenuePerActive}` }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {card.value}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
