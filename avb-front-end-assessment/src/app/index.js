import React, { useState } from "react"

import "app/App.css"
import Header from "components/Header"
import CommentModal from "components/CommentModal"
import CommentList from "components/CommentList"
import TopCommenters from "../components/TopCommenters"
import { mockComments } from "../store/api"

function App() {
  //took state from mockComments and sent it to the other components to be used
  const [comments, setComments] = useState(mockComments)
  return (
    <>
      <Header />
      <TopCommenters comments={comments} />
      <CommentModal comments={comments} setComments={setComments} />
      <CommentList comments={comments} />
    </>
  )
}

export default App
