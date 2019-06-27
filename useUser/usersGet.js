async function getUser(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJson = await response.json();
  const userReturn = responseJson.filter(user => user.id === id)[0];

  return userReturn;
}

export default getUser;
