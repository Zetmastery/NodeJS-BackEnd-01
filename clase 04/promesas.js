//a ver que cosa sucede

const empleados = [
    {
        id: 1,
        nombre: "ramon"
    },
    {
        id:2,
        nombre: "pepe"
    },
    {
        id:3,
        nombre: "roman"
    }
]


const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
    
]

// const getEmpleadoById = (id, callback) => {

//     const empleado = empleados.find( (x) => x.id === id);

//     if(empleado) {
//         callback(null, empleado);
//         return
//     }
//     callback(new Error("El empleado no existe"));
// }

//misma funcion superior pero con promesas

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {
            const empleado = empleados.find( (x) => x.id === id);

            if(empleado) {
                resolve(empleado);
                 return
             }
    reject((`El empleado con el ID: ${id} no existe`));
    });




}

const id = 5;

getEmpleadoById(id).then(empleado => {
    console.log(`El empleado con el ID: ${id}, es ${empleado.nombre}`);
}).catch((err)=>{console.log(err);})

