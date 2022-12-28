import React from 'react'
type Props = {
    favorites?: string[];
    setFavorites:React.Dispatch<React.SetStateAction<string[] | undefined>>;
}
export const FavoritesContext = React.createContext<Props>({
    setFavorites: ()=>{}
})

export function FavoritesProvider({children}: any){
    const [favorites, setFavorites] = React.useState<string[]>()

    function getFavorites(){
        // fixing localstorage error on next
        if (typeof window !== 'undefined') {
            const favorites = localStorage.getItem('favorites')
            if(favorites){
                return JSON.parse(favorites)
            }
            else{
              localStorage.setItem('favorites', JSON.stringify([]))
              return []
            }
        }

    }

    // first load
    React.useEffect(()=>{
        setFavorites(getFavorites)
    },[])
    return(
        <FavoritesContext.Provider value={{favorites, setFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}   

export function useFavoritesContext(){
    return React.useContext(FavoritesContext)
}