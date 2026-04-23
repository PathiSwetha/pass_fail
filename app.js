async function getafact(){
   let result= await fetch('https://meowfacts.herokuapp.com/');
   let finalresult=await result.json();
   let fact=finalresult.data[0]
   document.getElementById('container').innerText=fact
}
