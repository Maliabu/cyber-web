

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

//reusable drawer
type ReusableDrawerProps = {
    page: string
    form: React.JSX.Element
  }
  
  export function ReusableDrawer({
    page, 
    form,
  }: ReusableDrawerProps){
    return (
      <div className="font-[family-name:var(--font-futura)]">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="text-white">Add New {page}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-16 font-[family-name:var(--font-futura)]">
            <DrawerHeader>
              <DrawerTitle>Add New {page}</DrawerTitle>
              <DrawerDescription>Add a New {page} to the table</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              {form}
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
    )
  }