import React from "react"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"


const CommentList = ({ comments }) => {

  ///////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      {comments.map(mockComment => {
        return (
          <ListItem key={mockComment.id}>
            <ListItemAvatar>
              <Avatar>{mockComment.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={mockComment.name}
              secondary={mockComment.comment}
            />
          </ListItem>
        )
      })}
    </div>
  )
}

export default CommentList
