import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

function Likes() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const likedCats: any  = localStorage.getItem("likedCats");
	const likedCatsArr = JSON.parse(likedCats);

	return (
    <React.Fragment>
			{likedCatsArr.map((likedCat: { url: string | undefined; }) => (
        <Card style={{ width: "600px", height: "400px" }} >
          <CardMedia  component='img' alt='like' height='400' image={likedCat.url} />
        </Card>
				
			))}
  </React.Fragment>
	);
}

export default Likes;
