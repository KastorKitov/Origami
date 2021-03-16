export const getAll = () =>{
   return fetch('http://localhost:5000/posts')
   .then(result=>result.json())
   .catch(error=>console.log(`!!!Problem when Fetching!!! - ${error}`));

};