import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function Dislikes() {
  const dislikedCats: unknown | string = localStorage.getItem("dislikedCats");
	const dislikedCatsArr = JSON.parse(dislikedCats);

  return (
    <>
			{dislikedCatsArr.map(dislikedCat => (
        <Card style={{ width: "600px", height: "400px" }} >
          <CardMedia  component='img' alt='like' height='400' image={dislikedCat.url} />
        </Card>
				
			))}
  </>
    )
}

export default Dislikes