import Test from "@/components/test/Test"
import React from "react"

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const data = await response.json()

  return {
    props: {
      data,
    },
  }
}

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  return response.json()
}

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  return response.json()
}

export default async function page(data: any) {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])

  console.log(users, posts)

  return (
    <>
      <h1>Posts Server Side</h1>
      <h1>{users.name}</h1>
      <Test />
    </>
  )
}
