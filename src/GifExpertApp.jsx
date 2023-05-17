import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman'])
    
    const onAddCategory = (newCategory) =>{

      if(categories.includes(newCategory)) return

      setCategories([newCategory,...categories, ])

    }

  return (
    <>
    {/* titulo */}
        <h1>GifExpertApp</h1>

    {/* input */}
    <AddCategory onNewCategory = { onAddCategory } />

    {/* listado de Gif */}
    {categories.map(cat => (

      <GifGrid 
        key={cat} 
        cat={cat} 
      />
      ))
    }
      
    {/* gif item */}


    </>
  )
}
