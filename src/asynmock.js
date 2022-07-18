const products = [   
    {
        id: '1',
        price: 7550,
        category: 'tecnologia',
        name: 'Joystick',
        description: 'Compatible con Ps4 y Ps5.',
        detail: 'Joystick inalámbrico con bluetooth, vibración y touchpad incorporado.',
        image: '../images/joystick.jpg',
        alt: 'joystick-para-playstation-4-y-5',
        stock: 5
    },
    {
        id: '2',
        price: 14550,
        category: 'tecnologia',
        name: 'Drone',
        description: 'DM107S Full HD',
        detail: 'Drone aéreo Full HD de 4 motores, incluye batería y control especializado.',
        image: '../images/droneBlack.jpg',
        alt: 'drone-full-hd',
        stock: 5
    },
    {
        id: '3',
        price: 8900,
        category: 'tecnologia',
        name: 'Polaroid Land 100',
        description: 'Cámara vintage intantánea.',
        detail: 'Polaroid Land modelo 1000, cámara instantánea, imprime en tamaño 79 x 79 mm.',
        image: '../images/polaroid.jpg',
        alt: 'cámara-vintage-polaroid',
        stock: 5
    },
    {
        id: '4',
        price: 9000,
        category: 'hogar',
        name: 'Mesa de Luz',
        description: 'Estilo Nórdico en melamina',
        detail: 'Mesa de luz tipo nórdica hecha en melamina y patas de pino.',
        image: '../images/mesadeluz.jpg',
        alt: 'mesa-de-luz-estilo-nordico',
        stock: 3
    },
    {
        id: '5',
        price: 860,
        category: 'hogar',
        name: 'Vasija',
        description: 'Moderna de cerámico',
        detail: 'Vasija florero confeccionada artesanalmente en cerámica mate. Altura: 23 cm, ancho: 13,5 x 12 cm.',
        image: '../images/florero.jpg',
        alt: 'vasija-florero-de-ceramico',
        stock: 4
    },
    {
        id: '6',
        price: 21500,
        category: 'hogar',
        name: 'Sillón Vintage',
        description: 'De cuero, de 1 cuerpo',
        detail: 'Exlusivo en cuero vacuno 100%, estructura de saligna reforzada con laca poliuretánica.',
        image: '../images/silloncuero.jpg',
        alt: 'sillon-de-cuero-vintage',
        stock: 4
    },
    {
        id: '7',
        price: 13400,
        category: 'deportes',
        name: 'Longboard',
        description:'Cruiser Retro, inspirado en los 70',
        detail: 'Longboard retro con ruedas siliconadas, trucks de acero y rulemanes abec-9.',
        image: '../images/longboard.jpg',
        alt: 'longboard-retro-con-ruedas-siliconadas',
        stock: 3
    },
    {
        id: '8',
        price: 16780,
        category: 'deportes',
        name: 'Mancuernas',
        description:'Par de 20 kg.',
        detail: 'Mancuerna con discos de acero 20K totales.',
        image: '../images/mancuernas.jpg',
        alt: 'par-de-mancuernas-de-acero-20-kilos',
        stock: 8
    },
    {
        id: '9',
        price: 19690,
        category: 'deportes',
        name: 'Zapatillas',
        description:'Puma Future Rider',
        detail: 'Zapatillas Puma modelo Future, serie Rider en talle 38, unisex.',
        image: '../images/zapatillas.jpg',
        alt: 'zapatillas-puma-rider-talle-38',
        stock: 5
    },
    {
        id: '10',
        price: 790,
        category: 'decoart',
        name: 'Portaretrato',
        description:'Cuadro 20x30',
        detail: 'Marco de madera, frente de vidrio reforzado.',
        image: '../images/marcofoto.jpg',
        alt: 'marco-de-madera-tamaño-a4',
        stock: 12
    },
    {
        id: '11',
        price: 3500,
        category: 'decoart',
        name: 'Alfombra',
        description:'Felpudo para entrada',
        detail: 'Alfombra de bienvenida 40 x 60, ideal para entradas, fabricado en hilos encerados y pvc.',
        image: '../images/alfombra.jpg',
        alt: 'alfombra-felpudo-para-entrada-de-hogar',
        stock: 6
    },
    {
        id: '12',
        price: 1500,
        category: 'decoart',
        name: 'Reloj',
        description:'Minimalista clásico',
        detail: 'Reloj de pared con estilo minimalista clásico, ideal para living moderno. Diámetro 25cm - Funciona con una pila DOBLE A (no incluida).',
        image: '../images/reloj.jpg',
        alt: 'reloj-analógico-minimalista',
        stock: 5
    }    
]

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}