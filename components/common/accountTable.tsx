import { User } from "@/core/models/user"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

// export const columns: ColumnDef<User>

export function AccountDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>haha</TableHead>
          <TableHead>haha</TableHead>
          <TableHead>haha</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
          <TableCell>hihi</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
