 let hamza = (hamzahouse, hamzabike, hamzasalary ) =>{ 
  return new Promise ((res, rej) => { 
    if(hamzahouse ==  true && hamzabike ==  true &&  hamzasalary >  50 ){
        resolve (" han bhaihogeya")
        console.log("hamza")
        console.log(hamzahouse)
        
    } else {
        reject ("better luck next time")
    }

 })
}


hamza(true, true, 60).then((x) => {
    console.log(x)
    console.log("hamza")
}) .catch ((err) =>{
    console.log(err)
})