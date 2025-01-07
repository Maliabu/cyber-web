import { DialogHeader, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

//reusable drawer
type ReusableDialogProps = {
    title: string
    description: string
    trigger: React.JSX.Element
    results: React.JSX.Element
    form: React.JSX.Element
  }
  
  export function ReusableDialog({
    title,
    description,
    trigger,
    results, 
    form,
  }: ReusableDialogProps){
    return (
      <div>
        <Dialog>
        <DialogTrigger asChild>
            {trigger}
        </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] h-3/4">
        <DialogHeader>
          <DialogTitle><div className="text-3xl text-bold leading-7">{title}</div></DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {form}
        <div>{results}</div>
      </DialogContent>
        </Dialog>
      </div>
    )
  }