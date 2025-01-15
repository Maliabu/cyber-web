

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

//reusable drawer
type ReusableDrawerProps = {
    page: string
    form: React.JSX.Element
  }
  
  export function EditDrawer({
    page, 
    form,
  }: ReusableDrawerProps){
    return (
      <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="text-white">Update</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm p-16">
            <DrawerHeader>
              <DrawerTitle>Edit this {page} and save changes to update</DrawerTitle>
              <DrawerDescription>Provide the details as required for {page}</DrawerDescription>
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