import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid';
const AppContext_61 = createContext()

function getLocalStorage() {
  const storedList = localStorage.getItem('list');
  return storedList ? JSON.parse(storedList) : [];
}

function setLocalStorage(items) {
  localStorage.setItem('list', JSON.stringify(items));
}


export function AppContextProvider_61({ children }) {
  const [items, setItems] = useState(getLocalStorage())

  function AddItem(item) {
    const newItem = {
      id: nanoid(),
      name: item,
      completed: false,

    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item added to the list')
    console.log(newItems)
  }

  function removeItem(itemid) {
    const newItems = items.filter(item => item.id !== itemid)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.warning('Item deleted')
  }

  function editItem(itemid) {
    const newItem = items.map((item) => {
      if (item.id === itemid) {
        const newItem = {
          ...item, completed: !item.completed
        }
        item.completed ? toast.success('item remove list') : toast.success('item add list')
        return newItem
      }
      return item
    })
    setItems(newItem)
    setLocalStorage(newItem)

  }
  return (
    <AppContext_61.Provider value={{ items, AddItem, removeItem, editItem }}>
      {children}
    </AppContext_61.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext_61)
}
