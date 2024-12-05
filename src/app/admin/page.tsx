import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    }
]

export default function AdminPage() {
  return (
    <div className="px-8 py-4">
        <div>
    <Tabs defaultValue="account" className="mt-6">
      <TabsList className="flex flex-row justify-between">
      <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="user">Users</TabsTrigger>
        <TabsTrigger value="password">Events</TabsTrigger>
        <TabsTrigger value="password">Articles</TabsTrigger>
        <TabsTrigger value="password">Courses</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <div className="p-6 w-full grid grid-cols-4 gap-4">
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Users</p></div>
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Mentors</p></div>
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Schedules</p></div>
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Enrollments</p></div>
        </div>
        <div className="px-6">
            <div className=" border rounded-2xl p-6">
            <h5>Enrollments</h5></div>
        </div>
        <div className="p-6 w-full grid grid-cols-2 gap-4">
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Users</p></div>
            <div className="p-8 border rounded-2xl"><h3>0</h3><p>Mentors</p></div>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div className="flex flex-row">
        <div className="flex flex-col p-8">
            <Button>Account Details</Button>
        </div>
        <div className="p-8">
        <h5>Welcome Admin</h5>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
        </div>
        </div>
      </TabsContent>
      <TabsContent value="user">
        <div>
            <Tabs defaultValue="users">
                <TabsList className="flex flex-row justify-between">
                    <TabsTrigger value="users"><p>Users</p></TabsTrigger>
                    <TabsTrigger value="mentors"><p>Mentors</p></TabsTrigger>
                    <TabsTrigger value="subscriptions"><p>Subscriptions</p></TabsTrigger>
                    <TabsTrigger value="enrollments"><p>Enrollments</p></TabsTrigger>
                </TabsList>
                <TabsContent value="users">
                    <div className="flex flex-row">
                <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
                </div>
                <Button>Add New User</Button>
                </TabsContent>
            </Tabs>
        </div>
      </TabsContent>
    </Tabs>
        </div>
    </div>
  )
}
