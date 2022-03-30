import React from 'react'
import { useRouter } from 'next/router'

const NotePage = () => {
    const router = useRouter()
    const { params } = router.query
    // catch-all example => [...params].jsx
    // params will be an array of all params, in order
    console.log(params)

    return (
        <h1>Note</h1>
    )
}

export default NotePage


// optional catch-all also includes the parent path
// perfect for documentation. Make 1 page and not the rest. Acts like a template without having to create all the files.
// optional catch-all example => notes/[[...params]].jsx