import React, {useState, useEffect, useRef} from 'react'

export default function One() {

    const [num, setNum] = useState<number>(0);

    const refval = useRef(0);
    refval.current++;

    console.log(refval);

    useEffect(() => {
        console.log("Mounted!");

        setInterval(() => {
            // refval.current++;
            // setNum((prev) => ++prev);
        }, 1000);

        return () => console.log("unmount");
    }, []);


    useEffect(() => {
        console.log("Num Changed");
    }, [num]);


    return (
        <>
        <div>
            {num}
            <p>{refval.current}</p>
        </div>
        </>
    )
}
