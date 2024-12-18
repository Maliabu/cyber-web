"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// will disturb on dialogs, drawers etc
//popover component has a primitive portal tag that should
// be removed to solve the issue
export function DatePicker(field: any) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
        <p className="desc">Start Date</p>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left text-dark",
            !date
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-dark" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={field.onChange}
          initialFocus
          className="text-dark"
        />
      </PopoverContent>
    </Popover>
  )
}
