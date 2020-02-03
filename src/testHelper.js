
const generateObservations = () => {
  const genVariedTime = () => {
    const now = new Date();
    return new Date((now.getFullYear() - Math.floor(Math.random() * 30)) + '-' + (now.getMonth()+1) + '-' + 
      now.getDay() + ', ' + (Math.floor(Math.random() * 24)) + ':' + now.getMinutes()); 
  }
  const observations =
  [
    {
      "id": 1,
      "timestamp": genVariedTime(),
      "species": "Tit",
      "rarity": "rare",
      "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      "date": genVariedTime()
    },
    {
      "id": 2,
      "timestamp": genVariedTime(),
      "species": "Kingfisher",
      "rarity": "extremely rare",
      "note": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "date": genVariedTime()  
    },
    {
      "id": 3,
      "timestamp": genVariedTime(),
      "species": "Labrador retriever",
      "rarity": "common",
      "note": " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "date": genVariedTime()  
    }  
  ]  
  return observations;
}

export default { generateObservations }