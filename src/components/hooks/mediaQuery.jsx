import { useMediaQuery } from "react-responsive"

export function mediaQuery(){
    const isPhone = useMediaQuery({
        query: '(max-width: 576px)'
    })

    const isDesktop = useMediaQuery({
        query: '(min-width: 576px)'
    })

    return {isPhone, isDesktop}
}