

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

//reusable drawer
type NextDrawerProps = {
    page: string
    form: React.JSX.Element
  }
  
  export function NextDrawer({
    page, 
    form,
  }: NextDrawerProps){
    return (
      <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="text-white">Add Next {page}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-16">
            <DrawerHeader>
              <DrawerTitle>Add Next {page}</DrawerTitle>
              <DrawerDescription>Add a Next {page} to the table</DrawerDescription>
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