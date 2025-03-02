import { BottomNavigationAction } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDog } from "../../../redux/slices/dog.slice";
import { AppDispatch, RootState } from "../../../redux/store/store";

interface Dog {
	message: string;
	status: string;
}

interface Props {
	likedDogs: Dog[];
	setLikedDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
	dislikedDogs: Dog[];
	setDislikedDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
}

function Dog({ likedDogs, setLikedDogs, dislikedDogs, setDislikedDogs }: Props) {
	const { dogs, isDogLoading } = useSelector((state: RootState) => state.dog);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getDog());
		const storedLikedDogs = JSON.parse(localStorage.getItem("likedDogs") || "[]");
		setLikedDogs(storedLikedDogs);
		const storedDislikedDogs = JSON.parse(localStorage.getItem("dislikedDogs") || "[]");
		setDislikedDogs(storedDislikedDogs);
		console.log(dogs);
	}, [dispatch]);

	if (isDogLoading) {
		return <div>Loading...</div>;
	}

	const neutralHandler = () => {
		dispatch(getDog());
	};

	const likeHandler = (dog: Dog) => {
		const updatedLikedDogs = [...likedDogs, dog];
		setLikedDogs(updatedLikedDogs);
		localStorage.setItem("likedDogs", JSON.stringify(updatedLikedDogs));
		dispatch(getDog());
	};

	const dislikeHandler = (dog: Dog) => {
		const updatedDislikedDogs = [...dislikedDogs, dog];
		setDislikedDogs(updatedDislikedDogs);
		localStorage.setItem("dislikedDogs", JSON.stringify(updatedDislikedDogs));
		dispatch(getDog());
	};

	return (
		<Card style={{ width: "600px", height: "510px" }}>
			{dogs[0] && (
				<>
					<CardMedia
						component='img'
						alt='doge'
						height='400'
						image={dogs[0].message} // Используем поле `message` как URL изображения
					/>
					<CardActions>
						<BottomNavigationAction
							label='Like'
							value='Like'
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
									<path d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z' />
								</svg>
							}
							onClick={() => likeHandler(dogs[0])} // Передаем текущую собаку
						/>
						<BottomNavigationAction
							label='Neutral'
							value='Neutral'
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
									<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z' />
								</svg>
							}
							onClick={neutralHandler}
						/>
						<BottomNavigationAction
							label='Dislike'
							value='Dislike'
							icon={
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
									<path d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z' />
								</svg>
							}
							onClick={() => dislikeHandler(dogs[0])} // Передаем текущую собаку
						/>
					</CardActions>
				</>
			)}
		</Card>
	);
}

export default Dog;
