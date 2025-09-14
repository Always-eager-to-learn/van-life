import { loginStatusData } from "../auth"
import HostHeader from "./HostHeader"
import { Outlet } from "react-router-dom"
import { mediaQuery } from "./hooks/mediaQuery"

export default function HostHeaderLayout(){
    const { isDesktop } = mediaQuery()
    return (
        <>
            {isDesktop ? <HostHeader /> : null}
            <Outlet />
        </>
    )
}