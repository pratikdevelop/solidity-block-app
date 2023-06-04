import  {ethers} from 'ethers'
import  React, { useEffect, useState } from 'react'
import { ToDoistAbi, toDoListListAddress } from './constant'
const  fetchContract = (signerOrProvider) => {
    new ethers.Contract(toDoListListAddress, ToDoistAbi, signerOrProvider);
}
export const ToDoListContext =  React.createContext();
const ToDoListProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [error, setError] = useState('')
    const [allToDoList, setAllToDoList] = useState([])
    const [myList, setMyList] = useState([])

    const checkIfWalletconnect = async() =>{
        if (!window.ethereum) {
            alert('please first  install metamask');
            return setError('please first  install metamask');
        }

        const account = await window.ethereum
        console.log('acconut', account);
        if (account.length) {
            setCurrentAccount(account[0]);
            console.log(account[0]);
        }
        else {
            setError('please install metamask and connect your account and reload');
            alert('please install metamask and connect your account and reload')
        }
    }
    // useEffect(()=>{
    //     checkIfWalletconnect();
    // },[])
  return (
  <ToDoListContext.Provider value={{checkIfWalletconnect}}>
    {children}
  </ToDoListContext.Provider>
  )
}

export default ToDoListProvider