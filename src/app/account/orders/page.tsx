import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "ORD001",
    date: "2023-11-23",
    status: "Delivered",
    total: "$169.98",
  },
  {
    id: "ORD002",
    date: "2023-12-05",
    status: "Processing",
    total: "$89.99",
  },
  {
    id: "ORD003",
    date: "2024-01-12",
    status: "Shipped",
    total: "$249.50",
  },
];


export default function OrdersPage() {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-headline font-semibold">My Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      order.status === 'Delivered' ? 'default' : 
                      order.status === 'Processing' ? 'secondary' : 'outline'
                    }
                    className={
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}
