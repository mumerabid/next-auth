import { getSession } from "next-auth/react"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Blog(props) {
    const [sessionVal, setSessionVal] = useState(props.sSession);
    useEffect(() => {
        console.log(sessionVal);
    }, [sessionVal]);


    return (
        <div>Blog</div>
    )
}

async function getServerSideProps(context) {
    const sSession = await getSession(context);
    console.log(session);
    return {
        props: {
            sSession
        }
    }

}