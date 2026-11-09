/* ==========================================
   RETO 1: EL CONTRATO DE LA API
   ========================================== */

/* 1. MODELADO DE DATOS */
// Interfaz que define la estructura de un usuario recibido desde la API
interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: 'admin' | 'editor' | 'alumno';
  token?: string;
}

/* 2. OBJETO DE PRUEBA VÁLIDO */
// Objeto que cumple todos los requisitos de la interfaz UsuarioAPI
const usuarioValido: UsuarioAPI = {
  id: 1,
  username: 'ildefonso',
  email: 'ilde@ejemplo.com',
  rol: 'admin',
  token: 'abc123token'
};

/* 3. COMPROBACIÓN DE PROPIEDAD OPCIONAL */
// El token puede omitirse porque es una propiedad opcional
const usuarioSinToken: UsuarioAPI = {
  id: 2,
  username: 'alumno1',
  email: 'alumno@ejemplo.com',
  rol: 'alumno'
};

/* 4. COMPROBACIÓN DEL TIPADO RESTRINGIDO */
// Este objeto debe producir un error de compilación
// porque 'invitado' no está permitido como valor de rol
// Si deseas probarlo, descomenta el siguiente bloque de código y observa el error de TypeScript
/* const usuarioInvalido: UsuarioAPI = {
  id: 3,
  username: 'invitado1',
  email: 'invitado@ejemplo.com',
  rol: 'invitado'
};*/

/* ==========================================
   RETO 2: INMUTABILIDAD TIPADA
   ========================================== */

/* 1. MODELADO DE DATOS */
// Interfaz Tarea definida en la teoría del bloque 2
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
  fechaEntrega?: string;
}

/* 2. ARRAY DE TAREAS */
// Array de tareas tipado estrictamente con la interfaz Tarea
const misTareas: Tarea[] = [
  {
    id: 1,
    titulo: 'Estudiar TypeScript',
    completada: false,
    prioridad: 'Alta'
  },
  {
    id: 2,
    titulo: 'Practicar interfaces',
    completada: false,
    prioridad: 'Media'
  },
  {
    id: 3,
    titulo: 'Aprender Angular',
    completada: false,
    prioridad: 'Baja'
  }
];

/* 3. FUNCIÓN PARA COMPLETAR UNA TAREA */
// Recibe una lista de tareas y el identificador que queremos buscar
// Devuelve un array nuevo sin modificar la lista original
function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {

  // Utilizamos map() para crear un nuevo array
  return lista.map((tarea) => {

    // Comprobar si el identificador coincide con el buscado
    if (tarea.id === idBuscar) {

      // Crear un nuevo objeto con la tarea modificada
      return {
        ...tarea,
        completada: true
      };
    }

    // Si no coincide, devolver la tarea sin modificar
    return tarea;
  });
}

/* 4. COMPROBACIÓN DE LA INMUTABILIDAD */
// Completar la tarea cuyo id es 2
const tareasActualizadas: Tarea[] = completarTarea(misTareas, 2);

// Mostrar la lista original
console.log('Lista original:');
console.log(misTareas);

// Mostrar la nueva lista
console.log('Lista actualizada:');
console.log(tareasActualizadas);

/* ==========================================
   RETO 3: CLASE COMPONENTE Y ENCAPSULACIÓN
   ========================================== */

/* 1. CLASE PRODUCTCOMPONENT */

// Clase que representa un componente de producto
class ProductComponent {

  // Propiedad privada que almacena el IVA
  private iva: number = 0.21;

  // Constructor con el atajo de parámetros de TypeScript
  constructor(
    public nombreProducto: string,
    private precioBase: number
  ) {
  }

  /* 2. MÉTODO PARA OBTENER EL PRECIO FINAL */

  // Devuelve el precio base aplicando el IVA
  public obtenerPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}

/* 3. COMPROBACIÓN DE LA CLASE */

// Crear una instancia de ProductComponent
const producto = new ProductComponent('Teclado', 50);

// Mostrar el nombre del producto
console.log('Nombre del producto:');
console.log(producto.nombreProducto);

// Obtener el precio final mediante el método público
console.log('Precio final con IVA:');
console.log(producto.obtenerPrecioFinal());

// Intentar modificar el precio base desde fuera de la clase
//producto.precioBase = 100;

/* ==========================================
   RETO 4: CONTROL DE ERRORES
   ========================================== */

/* 1. INTERFAZ RESPUESTASERVIDOR */
// Define la estructura de las respuestas del servidor
interface RespuestaServidor {
  status: 'success' | 'error';
  data?: string[];
  mensajeError?: string;
}

/* 2. FUNCIÓN PARA PROCESAR LA RESPUESTA */
// Recibe una respuesta del servidor y no devuelve ningún valor
function procesarRespuesta(res: RespuestaServidor): void {

  // Comprobar si la respuesta ha sido exitosa
  if (res.status === 'success' && res.data) {

    console.log('Respuesta correcta:');

    // Recorrer los datos recibidos
    res.data.forEach((dato) => {
      console.log(dato);
    });

  } else if (res.status === 'error') {

    // Mostrar el mensaje de error recibido
    console.log('Error del servidor:');
    console.log(res.mensajeError);
  }
}

/* 3. COMPROBACIÓN DE LA FUNCIÓN */
// Crear una respuesta correcta
const respuestaCorrecta: RespuestaServidor = {
  status: 'success',
  data: ['Usuario recibido', 'Datos cargados', 'Operación completada']
};

// Crear una respuesta de error
const respuestaError: RespuestaServidor = {
  status: 'error',
  mensajeError: 'No se ha podido conectar con el servidor'
};

// Procesar ambas respuestas
procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaError);

/*const respuestaIncorrecta: RespuestaServidor = {
  status: 'pending'
}; 
*/

/* ==========================================
   RETO 5: HERENCIA Y USO DE SUPER()
   ========================================== */

/* 1. CLASE BASE SERVICIODATOS */
// Clase que representa un servicio de datos
class ServicioDatos {

  // Propiedad pública que almacena el endpoint
  public endpoint: string;

  // Constructor que inicializa el endpoint
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /* 2. MÉTODO PARA CONECTAR */
  // Muestra por consola el endpoint al que se conecta
  public conectar(): void {
    console.log("Conectando a " + this.endpoint);
  }
}

/* 3. CLASE HIJA SERVICIOUSUARIOS */
// Hereda las propiedades y métodos de ServicioDatos
class ServicioUsuarios extends ServicioDatos {

  // Propiedad propia de la clase hija
  public entidad: string = 'usuarios';

  // Constructor que recibe el endpoint y lo pasa a la clase padre
  constructor(endpoint: string) {
    super(endpoint);
  }
}

/* 4. COMPROBACIÓN DE LAS CLASES */
// Crear una instancia de ServicioUsuarios
const servicio = new ServicioUsuarios('https://api.ejemplo.com');

// Mostrar el endpoint heredado
console.log('Endpoint:', servicio.endpoint);

// Mostrar la entidad propia
console.log('Entidad:', servicio.entidad);

// Ejecutar el método heredado de la clase padre
servicio.conectar();
