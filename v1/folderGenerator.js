const fs = require('fs')

//Creacion de la carpeta contenedora del componente
export default function createFolder(name){
    fs.mkdir(`${name}`, (error) =>{
        if(error){
            console.log(error.message)
        }else{
            console.log("Carpeta creada exitosamente")
        }
    });
}
