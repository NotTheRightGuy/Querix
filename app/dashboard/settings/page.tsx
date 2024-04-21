"use client"
import React, { use, useEffect } from 'react'
import Sidebar from '@/components/ui/sidebar'
import Navbar from '@/components/ui/navbar'
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';

function Settings() {

    interface selectedDBDetails {
        dbName: string;
        dbURL: string;
        empty: boolean;
    }

    const [selectedDBDetails, setSelectedDBDetails] = useState<selectedDBDetails>({ dbName: '', dbURL: '', empty: true });
    const [defaultDBDetails, setDefaultDBDetails] = useState<selectedDBDetails>({ dbName: '', dbURL: '', empty: true });
    // const [allDB, setAllDB] = useState<selectedDBDetails[]>([]);
    const [editDetails, setEditDetails] = useState({ dbName: false, dbURL: false });
    const [errorMessage, setErrorMessage] = useState('');

    const allDB = [
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
        },
        {
            dbName: 'SQL Transactional 3',
            dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
        },
        {
            dbName: 'SQL Transactional 4',
            dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
        },
    ]

    useEffect(() => {
        // getDBDetails()
        setSelectedDBDetails({ ...selectedDBDetails, dbName: 'SQL Main', dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres', empty: false })
        setDefaultDBDetails({ ...defaultDBDetails, dbName: 'SQL Main', dbURL: 'postgres://postgres.wnbcdxihtfyqffzpvdgo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:5432/postgres', empty: false })
    }, [])
    const getAllDB = async () => {
        fetch('http://localhost:5000/api/v1/db', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                // setAllDB(data)
                setSelectedDBDetails({ ...selectedDBDetails, dbName: data[0].dbName, dbURL: data[0].dbURL, empty: false })
                setDefaultDBDetails({ ...defaultDBDetails, dbName: data[0].dbName, dbURL: data[0].dbURL, empty: false })

            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage(error)
            });
    }

    const updateDBDetails = async () => {
        fetch('http://localhost:5000/api/v1/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedDBDetails)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage(error)
            });
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col pl-24 w-full">
                <Navbar
                    currPage="Settings"
                />
                <h1 className='px-4 text-3xl font-bold w-full'>
                    Settings
                </h1>
                <div className='p-4'>
                    <div className='border-2 border-[#CDD7E1] p-6 rounded-md'>
                        <div className='flex'>

                            <div className='w-1/2'>
                                Current database
                            </div>
                            <div className='flex flex-col w-1/2 gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="dbName" className='font-medium'> Database name</label>
                                    <div className='flex items-center'>

                                        <Input
                                            // placeholder="SQL Main"
                                            onChange={(e) => {
                                                setSelectedDBDetails({ ...selectedDBDetails, dbName: e.target.value });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    updateDBDetails();
                                                }
                                            }}
                                            id='dbName'
                                            placeholder={selectedDBDetails.empty ? "SQL Main" : selectedDBDetails.dbName}
                                            // readOnly={selectedDBDetails.dbName}
                                        />
                                        <button
                                            className='px-6 p-1 h-5/6 -translate-x-20 bg-slate-700 hover:bg-slate-900 duration-200 text-white text-sm rounded flex items-center' onClick={
                                                () => {
                                                    setEditDetails({ ...editDetails, dbName: !editDetails.dbName })
                                                    console.log(editDetails.dbName)
                                                }
                                            }>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="dbURL" className='font-medium'> Database name</label>
                                    <div className='flex items-center'>

                                        <Input
                                            // placeholder="SQL Main"
                                            onChange={(e) => {
                                                setSelectedDBDetails({ ...selectedDBDetails, dbURL: e.target.value });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    updateDBDetails();
                                                }
                                            }}
                                            id='dbURL'
                                            placeholder={selectedDBDetails.empty ? "SQL Main" : selectedDBDetails.dbURL}
                                            readOnly={editDetails.dbURL}
                                        />
                                        <motion.button
                                            whileTap={{ scale: 0.95,
                                                transform: 'translateX(-80px)'

                                            }}  

                                            className='px-6 p-1 h-5/6 -translate-x-20 bg-slate-700 hover:bg-slate-900 duration-200 text-white text-sm rounded flex items-center' onClick={
                                                () => {
                                                    setEditDetails({ ...editDetails, dbName: !editDetails.dbName })
                                                    console.log(editDetails.dbName)
                                                }
                                            }>
                                            Edit
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr className='mt-10' />
                        <div className='flex items-center justify-end gap-2 mt-4'>
                            <button className='text-sm p-2 px-3 border-2 border-[E2E8F0] hover:border-black duration-200 rounded-lg'
                            onClick={
                                () => {
                                    setSelectedDBDetails({ dbName: defaultDBDetails.dbName, dbURL: defaultDBDetails.dbURL, empty: false })
                                    setEditDetails({ dbName: false, dbURL: false })
                                    console.log(setEditDetails)
                                    console.log(selectedDBDetails)
                                }
                            }>
                                Cancel
                            </button>
                            <Button className='bg-blue-600' onClick={updateDBDetails}>Save changes</Button>

                        </div>
                    </div>
                </div>
                <div className='p-4'>

                    <div className='border-2 border-solid border-[#CDD7E1] p-4 rounded-md'>
                        <h1 className='font-gray-900 text-xl font-medium'>Connected Databases</h1>
                        <header className='flex rounded-t-xl w-full text-xl font-medium text-gray-900 pt-2'>
                            <p className='w-1/3'>Database name </p>
                            <p>Database URL </p>
                        </header>
                        <div className='flex flex-col gap-1'>

                            {
                                allDB.map((db, index) => (
                                    <div key={index} className='flex items-center text-gray-900 font-medium w-full'>
                                        <p className='w-1/3'>{db.dbName}</p>
                                        <div className='w-2/4'>
                                        <Input
                                            placeholder={db.dbURL}
                                            readOnly={true} 
                                            className='w-3/4'
                                            />
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                        className='p-2 border-gray-300 border-2 hover:border-black rounded-xl duration-200 flex gap-1'
                                        onClick={
                                            () => {
                                                setSelectedDBDetails({ ...selectedDBDetails, dbName: db.dbName, dbURL: db.dbURL, empty: false})
                                                setDefaultDBDetails({ ...defaultDBDetails, dbName: db.dbName, dbURL: db.dbURL, empty: false })
                                            }
                                        }>
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 2.75L14.25 9.5L3.75 16.25V2.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <p >
                                                Use Database
                                            </p>
                                        </motion.button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings