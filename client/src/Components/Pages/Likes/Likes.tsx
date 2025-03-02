import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

function Likes() {
	const likedCats: unknown | string = localStorage.getItem("likedCats");
	const likedCatsArr = JSON.parse(likedCats);

	return (
    <React.Fragment>
			{likedCatsArr.map(likedCat => (
        <Card style={{ width: "600px", height: "400px" }} >
          <CardMedia  component='img' alt='like' height='400' image={likedCat.url} />
        </Card>
				
			))}
  </React.Fragment>
	);
}

export default Likes;
