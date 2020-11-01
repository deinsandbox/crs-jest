export const getCharacter = (data) => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
});

export const getUser = () => ({
  name: "equiman",
  createAt: new Date(),
  id: Math.floor(Math.random() * 20),
});
