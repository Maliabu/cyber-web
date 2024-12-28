import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-row p-6 sm:p-8 pointer">
            <p>looking for?... search here... </p>
            <Search className="h-3 w-3 mx-4 size-8" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            what would you like to find?...
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Input id="name" placeholder="search here..." className="col-span-3" />
          </div>
          <div className="border-b mt-2 py-3">
            <p className="text-2xl font-bold tracking-tight">Results Found</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
