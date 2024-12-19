// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Axios } from 'axios'
export default function Currency() {

    let { id } = useParams();

    useEffect(() => {
        Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(
            (response) => {
                console.log(response.data[0]);
            }
        )
    });

    return (<div>{id}</div>)


}
