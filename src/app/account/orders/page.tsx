import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils";

const orders = [
  {
    id: "ORD001",
    date: "2023-11-23",
    status: "Terkirim",
    total: 2550000,
  },
  {
    id: "ORD002",
    date: "2023-12-05",
    status: "Diproses",
    total: 1350000,
  },
  {
    id: "ORD003",
    date: "2024-01-12",
    status: "Dikirim",
    total: 3750000,
  },
];


export default function OrdersPage() {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-headline font-semibold">Pesanan Saya</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Pesanan</TableHead>
              <TableHead>Tanggal</TableHead>
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
                      order.status === 'Terkirim' ? 'default' : 
                      order.status === 'Diproses' ? 'secondary' : 'outline'
                    }
                    className={
                      order.status === 'Terkirim' ? 'bg-green-100 text-green-800' :
                      order.status === 'Diproses' ? 'bg-yellow-100 text-yellow-800' : ''
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{formatPrice(order.total)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}
