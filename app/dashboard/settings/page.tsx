"use client"
import React, { use, useEffect } from 'react'
import Sidebar from '@/components/ui/sidebar'
import Navbar from '@/components/ui/navbar'
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';

function Settings() {

    interface DBDetails {
        dbName: string;
        dbURL: string;
        empty: boolean;
    }

    const [DBDetails, setDBDetails] = useState<DBDetails>({ dbName: '', dbURL: '', empty: true });
    // const [allDB, setAllDB] = useState<DBDetails[]>([]);
    const [editDetails, setEditDetails] = useState({ dbName: false, dbURL: false });
    const [errorMessage, setErrorMessage] = useState('');

    const allDB = [
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'http://localhost:5000/api/v1/db'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'http://localhost:5000/api/v1/db'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'http://localhost:5000/api/v1/db'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'http://localhost:5000/api/v1/db'
        },
        {
            dbName: 'SQL Transactional 2',
            dbURL: 'http://localhost:5000/api/v1/db'
        },
    ]

    // useEffect(() => {
    //     getDBDetails()
    // }, [])
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
                setDBDetails({ ...DBDetails, dbName: data[0].dbName, dbURL: data[0].dbURL, empty: false })

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
            body: JSON.stringify(DBDetails)
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
            <div className="flex flex-col pl-24 w-full gap-2">
                <Navbar
                    currPage="Settings"
                />
                <h1 className='p-4 text-3xl font-bold w-full'>
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
                                                setDBDetails({ ...DBDetails, dbName: e.target.value });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    updateDBDetails();
                                                }
                                            }}
                                            id='dbName'
                                            placeholder={DBDetails.empty ? "SQL Main" : DBDetails.dbName}
                                            readOnly={editDetails.dbName}
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
                                    <label htmlFor="dbName" className='font-medium'> Database name</label>
                                    <div className='flex items-center'>

                                        <Input
                                            // placeholder="SQL Main"
                                            onChange={(e) => {
                                                setDBDetails({ ...DBDetails, dbName: e.target.value });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    updateDBDetails();
                                                }
                                            }}
                                            id='dbName'
                                            placeholder={DBDetails.empty ? "SQL Main" : DBDetails.dbName}
                                            readOnly={editDetails.dbName}
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
                            </div>

                        </div>
                        <hr className='mt-10'/>
                        <div className='flex items-center justify-end gap-2 mt-4'>
                            <button className='text-sm p-2 px-3 border-2 border-[E2E8F0] hover:border-black duration-200 rounded-lg'>
                                Cancel
                            </button>
                            <Button className='bg-blue-600' onClick={updateDBDetails}>Save changes</Button>

                        </div>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='border-2 border-solid border-[#CDD7E1]'>
                        <h1 className='font-gray-900 text-xl'>Connected Databases</h1>
                        <header className='p-4flex rounded-t-xl w-full font-bold   '>
                            <p className='w-1/3'>Database name </p>
                            <p>Database URL </p>
                        </header>
                    </div>
                    {
                        allDB.map((db, index) => (
                            <div key={index} className='p-4 border-2 border-solid border-[#CDD7E1] flex justify-between items-center text-sm w-full'>
                                <p className='w-1/3'>{db.dbName}</p>
                                <p>{db.dbURL}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Settings