import { useEffect } from "react";

export function usecloseNavigation(ref, handleClickEvent, navigationCheck){
    useEffect(() => {
        function handleClick(event){
            if(!ref || !ref.contains(event.target) && navigationCheck){
                handleClickEvent()
            }
        }

        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick)
        }
    }, [ref, navigationCheck])
}