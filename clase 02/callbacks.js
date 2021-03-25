// const saludar = () => console.log("holaaaaaa");

// setTimeout(saludar, 2000)

const reporte = (id, callback) =>{

    const user = {
        id,
        nombre: "torrres"
    }

    setTimeout(() => callback(user), 1000)
}

const impresor = ({id, nombre}) => console.log(`Bienvenido ${nombre.toUpperCase()} ID: ${id}`);

reporte(10, impresor)