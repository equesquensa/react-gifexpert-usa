import { useState, useEffect } from "react"

import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (cat) => {
  
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(cat)
        setImages(newImages)
        setisLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {

        images,
        isLoading
    }

}
