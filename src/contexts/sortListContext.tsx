import React from 'react'
type Props = {
    actualSort?:string;
    sorts:string[];
}
export const SortListContext = React.createContext<Props>({
    sorts: []
})

export function SortListProvider({children}:any){
    const [actualSort, setActualSort] = React.useState<string>()
    const sorts = ['numberAsc','numberDesc','nameAsc','nameDesc']

    function getSort(){
        if(typeof window !== 'undefined'){
            const local = localStorage.getItem('sort')
            if(local){
                return ('A')
            }
            else{
                return ('B')
            }
            
           
          }
    }
    
    React.useEffect(()=>{
        setActualSort(getSort())
    },[])
    
    
    return (
        <SortListContext.Provider value={{ sorts, actualSort}}> 
            {children}
        </SortListContext.Provider>
    )


}

export function useSortListContext(){
    return React.useContext(SortListContext)
}