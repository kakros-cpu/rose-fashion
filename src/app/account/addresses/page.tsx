import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreVertical, Plus } from "lucide-react"

const addresses = [
    {
        id: 1,
        isPrimary: true,
        name: "Jane Doe",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    {
        id: 2,
        isPrimary: false,
        name: "Jane Doe",
        street: "456 Office Ave",
        city: "Brooklyn",
        state: "NY",
        zip: "11201"
    }
]

export default function AddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-headline font-semibold">My Addresses</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Address
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {addresses.map(address => (
            <Card key={address.id}>
                <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                        <CardTitle>{address.name}</CardTitle>
                        {address.isPrimary && <CardDescription>Primary Address</CardDescription>}
                    </div>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <p>{address.street}</p>
                    <p>{address.city}, {address.state} {address.zip}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  )
}
