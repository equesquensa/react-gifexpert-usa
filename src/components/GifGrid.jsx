import { GifItem } from "./GifItem"

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({cat}) => {

  const { images,isLoading} = useFetchGifs( cat)

  return (
    <>
        <h3>{cat}</h3>
        {
          isLoading && ( <h2>Loading...</h2>)
        }
        
        <div className="card-grid">
          {images.map((image)=> (
          < GifItem 
            key={image.id} 
            {...image}
          />
        ))}
        </div>


    </>
  )
}
