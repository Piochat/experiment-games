const key: string = "?key=6e8c3bd35e8748b5bedf4d61b7bc5fe3";

export const getGames = async () => {
	const res = await fetch(`https://api.rawg.io/api/platforms${key}`);

	const data = res.json();
	console.info(data);

	return data;
};

export const getFamilyPlatforms = async () => {
	const res = await fetch(`https://api.rawg.io/api/platforms/lists/parents${key}`);

	const data = res.json();
	console.info(data);

	return data;
};
