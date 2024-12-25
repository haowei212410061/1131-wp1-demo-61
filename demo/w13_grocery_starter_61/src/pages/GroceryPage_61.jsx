import React from 'react'
import From from '../components/Form_xx'
import Items from '../components/Items_xx'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useState } from 'react'

function getLocalStorage() {
  const list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
}

function setLocalStorage(items) {
  localStorage.setItem('list', JSON.stringify(items))

}
const defaultStorage = JSON.parse(localStorage.getItem('list')) || '[]'

function GroceryPage_61() {
  const [items, setItems] = useState(defaultStorage)
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
    <section className="section-center">
      <From addItem={AddItem} />
      <Items removeItem={removeItem} items={items} editItem={editItem} />
    </section>
  )
}

export default GroceryPage_61
