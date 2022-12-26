import React from 'react'
 const useFavorites =  () => {
    
    function getFavorites(){
        // fixing localstorage error on next
        if (typeof window !== 'undefined') {
            //localStorage.setItem('favorites', JSON.stringify(['charmander', 'charizard']))
            const favorites = localStorage.getItem('favorites')
            if(favorites){
                return JSON.parse(favorites)
          }
        }

    }

    const [favorites,setFavorites] = React.useState<string[]>()

    React.useEffect(()=>{
        setFavorites(getFavorites)
    },[])
    


    
    
   
   
  return {
     favorites
  }
}

export default useFavorites