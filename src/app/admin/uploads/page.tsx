"use client";

import { Button } from "@/components/ui/button";
import { uploadFile } from "@/server/fetch.actions";

export default function UploadFile() {
  async function onSubmit(formData: FormData){
   await uploadFile(formData)
  }

  return (
    <div className="grid grid-cols-1">
      <form action={onSubmit} className="w-full flex flex-col p-20">
        <input type="file" placeholder="shadcn" name="file" />
        <Button type="submit" className="text-white mt-2">Submit</Button>
      </form>
    </div>
  );
}