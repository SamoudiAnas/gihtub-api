import {useState, useEffect} from 'react'
import axios from 'axios'
export default function GetRepos (pageNum)  {

    //set the loading if we still didn't get the data so we know it is loading
    const [loading,setLoading] = useState(true)

    //the data of the repositories
    const [repos,setRepos] = useState([])

    //this variable will help us know where to stop making axios request to get the data if we scrolled through everything
    const [hasMore,setHasMore] = useState(false)


    useEffect(() => {
        setLoading(true);
        
        axios({
            method: 'GET',
            url: 'https://api.github.com/search/repositories?q=created:>2021-08-31&sort=stars&order=desc',
            params: {page: pageNum},

            }).then(res => {
                setRepos(prevRepos => {
                    return [...prevRepos, ...res.data.items]
            })
            setHasMore(res.data.items.length > 0)
            setLoading(false)

            }).catch(e => {
                console.log(e)
            })





    }, [pageNum])


    return {repos, loading, hasMore}
}


