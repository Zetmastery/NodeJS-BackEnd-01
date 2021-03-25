const ramon = {
    nombre: "Ramon",
    frase: "Ya lo dijo",
    musica: "puro perreo",
    codigo: "facilito",
    edad: 44,
    sexo: undefined,
    getDescripcion = () => `${nombre} conocido por decir ${frase} le gusta lo que el llama ${musica}. 
        Su edad es ${edad} y su sexo: ${sexo}`
    
}

const imprimirPersona = (Persona) => console.log(Persona);

console.log(getDescripcion());