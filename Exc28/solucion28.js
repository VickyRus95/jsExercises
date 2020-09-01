let whichIsLarger= (g, f)=> {
    
    if (g () > f ()) {console.log ("G es mayor")}
    else if (f () > g ()) {console.log ("F es mayor")}
    else {console.log ("Ninguno es mayor")}
}

whichIsLarger(() => 5, () => 10) 

whichIsLarger(() => 25,  () => 25) 

whichIsLarger(() => 505, () => 5050)