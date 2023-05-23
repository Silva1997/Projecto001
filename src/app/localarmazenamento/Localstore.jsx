
export const EditarItem = (key , value) =>{
localStorage.setItem(key,JSON.stringify(value));

}

export const PegarItem = (key) =>{
  return  JSON.parse(localStorage.getItem(key))
  
}