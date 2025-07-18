import Sidebar from "@/components/AdminComponents/Sidebar";
import { assets } from "@/public/Assets/assets";
import Image from "next/image";

export default function Layout({children}){

    return <>
    <div className="flex">
        <Sidebar/>
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full border border-black py-3">
                <h3 className="font-medium ml-3">Admin Panel</h3>
                <Image src={assets.profile_icon} width={40} alt=""/>
            </div>
            {children}
            
        </div>
        
    

    </div>

   
    </>

}