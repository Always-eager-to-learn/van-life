export default function DesignButton({ noOfDivs }){
    const divs = []
    for(let i = 0; i < noOfDivs; i++){
        divs.push(
            <div aria-hidden={true} key={i}></div>
        )
    }

    return (
        <>
            {divs}
        </>
    )
}