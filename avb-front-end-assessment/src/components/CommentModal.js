import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import TextField from "@mui/material/TextField"
import { v4 as uuid } from "uuid"

import { closeCommentsModal, getViewCommentsModalOpen } from "store/slices/view"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}))

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}

const CommentModal = ({ comments, setComments }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const isOpen = useSelector(getViewCommentsModalOpen)

  const handleClose = () => dispatch(closeCommentsModal())

  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const handleCreateNewComment = () => {
    return setComments([...comments, { id: uuid(), name, comment }])
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a comment
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault()
            handleCreateNewComment()
            console.log(comments)
            setComment("")
            setName("")
            handleClose()
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ marginTop: 2.5, marginBottom: 5 }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Your comment here"
            minRows={5}
            style={{ width: "100%" }}
            value={comment}
            onChange={e => setComment(e.target.value)}
          />

          <Button
            sx={{ marginTop: 2.5, display: "block" }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default CommentModal
