import { useopenStatus } from "./hooks/openStatus";
import { NavigationSection } from "./NavigationSection";
import NavBar from "./NavBar";

export default function DesktopNav(){
    const { openDialogStatus, setOpenStatus } = useopenStatus()

    return (
        <NavigationSection 
            openDialog={openDialogStatus.settingsBar}
            setDialogStatusfun={() => setOpenStatus(1)}
            navBarElement={<NavBar openDialog={openDialogStatus.settingsBar}/>}
        />
    )
}