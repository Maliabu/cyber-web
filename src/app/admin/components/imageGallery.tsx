"use client"

import { Button } from "@/components/ui/button";
import { CloudUploadIcon, Image, Upload, X } from "lucide-react";
import {FileUploader} from 'react-drag-drop-files'
import GalleryImage from "./GalleryImage";
import { deleteEditorFile, uploadArticleFile, uploadEditorFile } from "@/server/fetch.actions";
import { useState } from "react";
import { useImages } from "./context/imageProvider";
import Editor from "./editor";
import { Toast } from "@/components/ui/toast";

interface Props{
    visible: boolean
    onClose(state: boolean): void 
    onSelect?(src: string): void
    onDelete?(image: string): void
}
export default function ImageGallery({visible, onClose, onSelect, onDelete}:Props){
    const [isUploading, setIsUploading] = useState(false)
    const image = useImages()
    const images = image?.images
    const updateImages = image?.updateImages
    const removeOldImages = image?.removeOldImages

    const handleClose = () => {
        onClose(!visible)
    }

    function path(imagePath: string){
        return "/editor/"+imagePath
    }

    const handleSelection = (src: string) => {
        onSelect && onSelect(src)
        handleClose()
    }

    if(!visible) return null


    return (
        <div tabIndex={-1} onKeyDown={({key}) => {
            if(key === "Escape") handleClose()
        }} className="fixed inset-0 bg-black bg-opacty-40 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="md:w-[760px] relative w-[80%] h-[80%] bg-background border text-foreground p-4 rounded-md overflow-y-auto">
                <div className="absolute top-0 right-0">
                    <Button onClick={() => handleClose()} variant="ghost"><X/></Button>
                </div>
                <div className="text-2xl font-bold tracking-tight leading-5">
                    Image Upload
                </div>
                <p className="desc">Select an image or images to upload to your article. These images are all images available to the editor uplaoded from previous articles</p>
                <div className="border rounded-md p-8">
                    <div className="bg-muted rounded-md p-8 flex flex-col items-center">
                    <div className="rounded-md p-4 border-2 border-primary">
                        <FileUploader handleChange={async(file: File) => {
                            setIsUploading(true)
                            try {
                                const formData = new FormData()
                                formData.append("file", file)
                                console.log(file)
                                if(file.size < 1000000){
                                    const res = await uploadEditorFile(formData)
                                    if(res && updateImages){
                                        updateImages([res.image])
                                    }
                                } else{
                                    const err = document.getElementById("err")
                                    if(err !== null){
                                        err.innerHTML = "Info: The selected image exceeds upload size limit . Try compressing the image before upload."
                                        err.style.color = "#02a5fa"
                                        err.style.border = "1px solid #02a5fa"
                                        err.style.borderRadius = "10px"
                                        setTimeout(() => {
                                            err.style.color = "gray"
                                            err.style.border = "none"
                                            err.innerHTML = "Upload Size Limit: 1 MB"
                                        }, 10000)
                                    }
                                    setIsUploading(false)
                                }
                            } catch (error) {
                                const err = document.getElementById("err")
                                if(err !== null){
                                    err.innerHTML = "1MB upload limit exceeded"
                                }
                            }
                            setIsUploading(false)
                        }
                            } types={["png", "jpg", "jpeg"]} name="file">
                        <CloudUploadIcon size={30} className="text-primary"/>
                        </FileUploader>
                    </div>
                    <div className="mt-4 leading-3">Click or Drag&Drop to upload an image</div>
                    <p className="desc">audio (mp3) and large video (mp4) files may not be supported yet. Supported formats are images of *png, *jpg, *jpeg.</p>
                    <p id="err" className="p-2">Upload Size Limit: 1 MB/image (~1000000 bytes)</p>
                    </div>
                    {
                        !images?.length ? <div className="p-8 flex flex-col items-center">
                            <Image className="text-gray-500 p-3" size={100}/>
                            <div className="leading-3">No images to render</div>
                            <p className="desc">all images from your previous article uploads are rendered here for reference</p>
                        </div>
                        : null
                    }

                    <div className="flex flex-row justify-between border-b">
                        <p>Images Available to Editor</p>
                        <p>{images?.length}</p>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-2 mt-4 gap-2">
                        { isUploading && <div className="w-full animate-pulse bg-muted rounded aspect-square flex items-center justify-center overflow-hidden">uploading...</div>
                        } 
                        {images?.map((image) => {
                            return(
                                <div>
                                <GalleryImage 
                                key={image} 
                                onSelect={() => handleSelection(image)} 
                                src={path(image)} 
                                onDelete={async() => {
                                    const del = document.getElementById("del")
                                    if(del !== null){
                                        del.innerHTML = "del..."
                                    }
                                    const res = await deleteEditorFile(image)
                                    if(res.error === false && res !== undefined && removeOldImages){
                                    removeOldImages(image)
                                }
                                }}/>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
}