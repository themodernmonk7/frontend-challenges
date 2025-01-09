import { useCallback, useEffect, useState } from "react"
import {
  API_URL,
  IDLE,
  ITEMS_PER_PAGE,
  LOAD_DELAY,
  PENDING,
  REJECTED,
  SUCCESS,
} from "./constants/constants"
import { throttleFunction } from "./helper/helper"

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [status, setStatus] = useState(IDLE)
  const [paginationPage, setPaginationPage] = useState(ITEMS_PER_PAGE)
  const [hasMore, setHasMore] = useState(true)

  const fetchUsers = async () => {
    try {
      setStatus(PENDING)
      const response = await fetch(`${API_URL}?limit=${paginationPage}`)
      if (!response.ok) {
        throw new Error("Failed to fetch data", response.status)
      }
      const data = await response.json()
      setAllUsers(data?.users)
      setHasMore(data?.total > allUsers?.length)
      setStatus(SUCCESS)
    } catch (error) {
      setStatus(REJECTED)
      console.log("There was an error", error)
    }
  }

  const event = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.scrollHeight - 10
    ) {
      if (status === PENDING || !hasMore) return
      setPaginationPage((prev) => prev + ITEMS_PER_PAGE)
    }
  }, [status, hasMore])

  const optimizedScrollEvent = throttleFunction(event, LOAD_DELAY)

  useEffect(() => {
    if (status === PENDING || !hasMore) return
    fetchUsers()
  }, [paginationPage])

  useEffect(() => {
    window.addEventListener("scroll", optimizedScrollEvent)
    return () => window.removeEventListener("scroll", optimizedScrollEvent)
  }, [optimizedScrollEvent])

  // if (status === PENDING) {
  //   return <div>Loading...</div>
  // }

  if (status === REJECTED) {
    return <div>Error</div>
  }

  // Todo: Set error boundry

  return (
    <section className=" m-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {allUsers?.map((user, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center bg-green-200"
              key={user?.id}
            >
              <div className="">
                <p className="text-center text-xl font-semibold text-black">
                  {index + 1}
                </p>
                <img
                  src={user?.image}
                  alt={`${user?.firstName} ${user?.lastName}`}
                />
              </div>
              <div>
                {user?.firstName} {user?.lastName}
              </div>
            </div>
          )
        })}
        {status === PENDING || hasMore ? (
          <p className="text-2xl font-semibold text-black"> Loading more... </p>
        ) : null}
      </div>
    </section>
  )
}

export default App
