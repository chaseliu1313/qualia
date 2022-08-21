import { useState, useEffect } from "react"

export const useWindowResize = ()=>{

    const [size, setSize] = useState({height: window.innerHeight, width: window.innerWidth});


    const handleResize = ()=>
        {setSize({height: window.innerHeight, width: window.innerWidth})}
    
    useEffect(() => {
         window.addEventListener('resize', handleResize);

         handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ ])

    return {size}
}