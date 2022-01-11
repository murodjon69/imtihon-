
const form = document.getElementById('form')
const letter = document.getElementById('letter')
const selectType = document.getElementById('selectType')
const search = document.getElementById('search')
const  template = document.getElementById('template')

let pokemon = document.querySelector('#pokemons')

pokemons.forEach(poke => {
   let box = template.content.cloneNode(true)

   box.querySelector('img').src= poke.img
   box.querySelector('#pokeName').textContent=poke.name
   box.querySelector('#type').textContent=poke.type
   box.querySelector('#lost').textContent=poke.weight
   box.querySelector('#height').textContent=poke.height

   pokemon.appendChild(box)




});

form.addEventListener('submit', e=>{
   e.preventDefault()
   let type = selectType.value
   let sortting = letter.value
   let name = search.value
   pokemon.innerHTML=""

   pokemons.forEach(
      poke=>{
         let types = poke.type
         if(poke.name==name && (types[0]==selectType.value || types[1]==selectType.value)){
            let box = template.content.cloneNode(true)
            box.querySelector('img').src= poke.img
            box.querySelector('#pokeName').textContent=poke.name
            box.querySelector('#type').textContent=poke.type
            box.querySelector('#lost').textContent=poke.weight
            box.querySelector('#height').textContent=poke.height

            pokemon.appendChild(box)
         }     
      }
   )

   if(search.value==""){
      pokemons.forEach(poke=>{
         let types = poke.type
   
         // if(types[0]==selectType.value || types[1]==selectType.value){
         //    let box = template.content.cloneNode(true)
         //    box.querySelector('img').src= poke.img
         //    box.querySelector('#pokeName').textContent=poke.name
         //    box.querySelector('#type').textContent=poke.type
         //    box.querySelector('#lost').textContent=poke.weight
         //    box.querySelector('#height').textContent=poke.height
   
         //    pokemon.appendChild(box)
         // }
   
      
         if(types[0]==selectType.value || types[1]==selectType.value){
            let box = template.content.cloneNode(true)
            box.querySelector('img').src= poke.img
            box.querySelector('#pokeName').textContent=poke.name  
            box.querySelector('#type').textContent=poke.type
            box.querySelector('#lost').textContent=poke.weight
            box.querySelector('#height').textContent=poke.height
   
            pokemon.appendChild(box)
         }
      }) 
   }

   
   

})