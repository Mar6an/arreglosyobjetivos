

const propiedades_alquiler = [
  {
    nombre: 'Departamento Amueblado en Polanco',
    src: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Departamento moderno con muebles incluidos, cerca de centros comerciales y parques.',
    ubicacion: 'Polanco, Ciudad de México',
    habitaciones: 2,
    costo: 28000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa de Campo con Jardín',
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Hermosa casa estilo rústico con amplio jardín, ideal para familias.',
    ubicacion: 'Valle de Bravo, Estado de México',
    habitaciones: 3,
    costo: 18000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Estudio Económico en el Centro',
    src: 'https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Estudio compacto ideal para una persona, cerca del transporte público.',
    ubicacion: 'Centro, Puebla',
    habitaciones: 1,
    costo: 5500,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Departamento en Zona Universitaria',
    src: 'https://images.unsplash.com/photo-1608429835892-30be51ea4d6c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Cómodo departamento con dos recámaras, ideal para estudiantes o parejas jóvenes.',
    ubicacion: 'Ciudad Universitaria, CDMX',
    habitaciones: 2,
    costo: 9500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Loft Minimalista con Terraza',
    src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Loft moderno con terraza privada y excelente vista, incluye mantenimiento.',
    ubicacion: 'Santa Fe, Ciudad de México',
    habitaciones: 1,
    costo: 15500,
    smoke: true,
    pets: false
  }
];


// venta

const propiedades_venta = [
  {
    nombre: 'Casa Moderna en Zona Norte',
    src: 'https://images.unsplash.com/photo-1613553497126-a44624272024?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Amplia casa de 3 niveles con jardín, terraza y acabados de lujo.',
    ubicacion: 'Zona Norte, Ciudad de México',
    habitaciones: 4,
    costo: 5500000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Departamento en Playa del Carmen',
    src: 'https://plus.unsplash.com/premium_photo-1687960116506-f31f84371838?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Departamento frente al mar con acceso a alberca y gimnasio.',
    ubicacion: 'Playa del Carmen, Quintana Roo',
    habitaciones: 2,
    costo: 4200000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Loft Industrial en el Centro',
    src: 'https://plus.unsplash.com/premium_photo-1687960116741-d3a1468fdec1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Loft con diseño industrial, techos altos y excelente iluminación natural.',
    ubicacion: 'Centro Histórico, Guadalajara',
    habitaciones: 1,
    costo: 2100000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Residencia Familiar con Jardín',
    src: 'https://images.unsplash.com/photo-1635108199650-8115b597e283?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Residencia con amplio jardín, cochera para 2 autos y cuarto de servicio.',
    ubicacion: 'San Pedro Garza García, Nuevo León',
    habitaciones: 5,
    costo: 8900000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Penthouse con Vista Panorámica',
    src: 'https://plus.unsplash.com/premium_photo-1697729943758-191380ba8286?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Penthouse de lujo con vista a la ciudad, jacuzzi y elevador privado.',
    ubicacion: 'Lomas de Chapultepec, CDMX',
    habitaciones: 3,
    costo: 10500000,
    smoke: true,
    pets: false
  }
];
