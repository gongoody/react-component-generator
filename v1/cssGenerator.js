const fs = require('fs')

//Creacion del archivo .css
export default function createCss(name){
    fs.writeFile(`${name}.css`, '/* insert your css code */', (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Archivo .css creado exitosamente")
        }
    })
}
