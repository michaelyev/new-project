'use client'

import { useState, useEffect } from "react"
import useSWR from 'swr'


const page = () => {
  /* const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        setError(true)
      }

      return res.json();

      const data = await res.json()

      setData(data)

      isLoading(false)
    }
    
    getData()
  }, [])
 */

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data)

  return (
    <div>page</div>
  )
}

export default page