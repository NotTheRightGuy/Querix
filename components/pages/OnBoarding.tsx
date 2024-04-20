import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ClipLoader from "react-spinners/ClipLoader";
export function OnBoarding() {
const [ConnectionStr, setConnectionStr] = useState('')  
const [loading, setloading] = useState(true);
const [message, setMessage] = useState('')
const postConnectionString = async () => {
  setloading(true)
    const response = await fetch('../../app/api/db/schema', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ connection_string: ConnectionStr }),
    })
    if (response.ok) {
      console.log('Connection String added')
      setloading(false)
    } else {
      console.error('Failed to add connection string')
      setloading(false)
      setMessage('Failed to add connection string');
    }
}
  return (
    <div className="flex items-center w-screen justify-center space-x-2">
    <div className="flex items-center justify-between bg-slate-100 rounded-sm p-4 space-x-2">
    <Card className="w-[350px] border-none rounded-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Connect to datasource</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Add connection string</Label>
              <Input id="name" onChange={(e)=> setConnectionStr(e.target.value)} placeholder="postgres://postgres.zasdmhfgdfsowcabo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:2404/postgres" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-start relative">
        
        <Button disabled={loading ? true:false} onClick={postConnectionString}>Connect {loading ? <ClipLoader color="#FFF" size={14} className="ml-2" / > : ''}</Button>
        <p className={`${message ==="" ? "hidden" : "block text-red-300"} absolute top-12`}>
          {
            message === "" ? "": message
          }
        </p>
      </CardFooter>
    </Card>
    <div className="h-56 w-1 bg-slate-300"></div>
    <Card className="w-[350px] border-none rounded-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Define your own DDL</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="invisible">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button>Define DDL</Button>
      </CardFooter>
    </Card>
    </div>
    </div>

  )
}