import React from "react"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"

function TopCommenters({ comments }) {
  let commenterMap = {}

  for (let commenter of comments) {
    commenterMap[commenter.name] = commenterMap[commenter.name] + 1 || 1
  }
  const top3 = Object.entries(commenterMap).slice(0, 3)

  //grabbed the comments state and created a commenter map which gave an object
  //I converted this object into an array of key value pairs and took the top 3

  return (
    <div style={{ backgroundColor: "#e3e3e3" }}>
      <h2 style={{ marginTop: 0 }}>TOP USERS</h2>
      {top3.map(topUser => {
        return (
          <ListItem key={topUser.id}>
            <ListItemAvatar>
              <Avatar>{topUser[0][0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={topUser[0]} secondary={topUser[1]} />
          </ListItem>
        )
      })}
    </div>
  )
}

export default TopCommenters
