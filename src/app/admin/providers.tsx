import { ReactNode } from "react";
import ImageProvider from "./components/context/imageProvider";


interface Props{
    children: ReactNode
}

export default function Providers({children}: Props){
    return <ImageProvider>{children}</ImageProvider>
}