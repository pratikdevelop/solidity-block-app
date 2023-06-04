import Head from 'next/head';
import { useRouter } from 'next/router';
import React ,{ useEffect, useState, useContext} from 'react';
import { ToDoListContext } from '../context/TodoAppList';
const index = () => {
const route = useRouter()
	const {checkIfWalletconnect} = useContext(ToDoListContext);
	// useEffect(() => {
	//  checkIfWalletconnect()
	// }, [])
	
	return (
		<>
			<div className="flex  flex-col p-3 w-1/3  rounded-sm shadow-xl  shadow-gray-700  m-auto bg-dark h-2/3 ">
			<h1 className=' text-center text-2xl font-bold text-white'>todo next app</h1>
			</div>
		</>
	)
}

export default index