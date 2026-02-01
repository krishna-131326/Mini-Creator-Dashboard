"use client"

import { Creator } from "@/data/creators"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

type Props = {
  creators: Creator[]
  onSort: (key: "followers" | "revenue") => void
}

export function CreatorTable({ creators, onSort }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => onSort("followers")}>
              Followers
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" onClick={() => onSort("revenue")}>
              Revenue
            </Button>
          </TableHead>
          <TableHead>Active</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {creators.map((creator) => (
          <TableRow key={creator.id}>
            <TableCell>{creator.name}</TableCell>
            <TableCell>{creator.followers}</TableCell>
            <TableCell>₹{creator.revenue}</TableCell>
            <TableCell>
              {creator.active ? "Active" : "Inactive"}
            </TableCell>
            <TableCell>{creator.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
