"use client"
import Sidebar from "@/components/ui/sidebar"
import Navbar from "@/components/ui/navbar"
export default function UserPermission(){
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <Navbar
                    currPage="Roles and Permissions"
                />
            </div>
        </div>
    )
}