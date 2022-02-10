const fs = require('fs')

function createFolder(name){
    fs.mkdir(`${name}`, (error) =>{
        if(error){
            console.log(error.message)
        }else{
            console.log("Carpeta creada exitosamente")
        }
    });
}

function createJsx(name){
    fs.writeFile(`./${name}/${name}.jsx`,
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

function createCss(name){
    fs.writeFile(`./${name}/${name}.css`, '/* insert your css code */', (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Archivo .css creado exitosamente")
        }
    })
}

function componentGenerator(name){
    createFolder(name)
    createJsx(name)
    createCss(name)
}

componentGenerator('Prueba')