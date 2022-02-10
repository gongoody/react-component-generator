const fs = require('fs')

//Creacion del archivo .jsx
export default function createJsx(name){
    fs.writeFile(`${name}.jsx`,
    //Codigo del archivo
    `import './${name}.css'
    
    export default function ${name}(){
        return(
            <>
                <h1>${name} works!</h1>
            </>
        )
    }
    `,
     (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Archivo .jsx creado exitosamente")
        }
    })
}