import { useState } from "react";

export default function openStatus(){
    function setOpenStatus(number){
        if(number == 1)
            setOpenDialogStatus((value) => {
                return {...value,
                'settingsBar': !value.settingsBar,
                'navigateDown': !value.navigateDown
            }})
        
        else if(number == 2)
            setOpenDialogStatus((value) => {
                return {...value,
                    'hostHeaderSet': !value.hostHeaderSet
            }})

        else if(number == 3)
            setOpenDialogStatus((value) => {
                return {...value,
                    'navigationBar': !value.navigationBar
            }})
    }

    const [openDialogStatus, setOpenDialogStatus] = useState({
        'settingsBar': false,
        'navigateDown': false,
        'hostHeaderSet': false,
        'navigationBar': false
    })

    return { openDialogStatus, setOpenStatus}
}