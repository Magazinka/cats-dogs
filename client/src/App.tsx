// import { useState } from 'react'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Cat from "./Components/Pages/Cat/Cat";
import Dislikes from "./Components/Pages/Dislikes/Dislikes";
import Dog from "./Components/Pages/Dog/Dog";
import Likes from "./Components/Pages/Likes/Likes";
import Navbar from "./Components/UI/Navbar/Navbar";

function App() {
	const [likedCats, setLikedCats] = useState<{ id: string; url: string }[]>([]);
	const [dislikedCats, setDislikedCats] = useState<{ id: string; url: string }[]>([]);

	const [likedDogs, setLikedDogs] = useState<{ message: string; status: string }[]>([]);
	const [dislikedDogs, setDislikedDogs] = useState<{ message: string; status: string }[]>([]);

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/cats'
						element={
							<Cat likedCats={likedCats} setLikedCats={setLikedCats} dislikedCats={dislikedCats} setDislikedCats={setDislikedCats} />
						}
					/>
					<Route
						path='/dogs'
						element={
							<Dog likedDogs={likedDogs} setLikedDogs={setLikedDogs} dislikedDogs={dislikedDogs} setDislikedDogs={setDislikedDogs} />
						}
					/>
					<Route path='/likes' element={<Likes />} />
					<Route path='/dislikes' element={<Dislikes />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
