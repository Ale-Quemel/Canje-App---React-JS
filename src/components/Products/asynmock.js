export const products = [   
    {
        id: 1,
        price: 7550,
        name: 'Joystick',
        description: 'Compatible con Ps4 y Ps5.',
        image: './images/joystick.jpg',
        stock: 5
    },
    {
        id: 2,
        price: 9500,
        name: 'Bicicleta',
        description: 'Bicicleta de paseo, rodado 26.',
        image: './images/bike.jpg',
        stock: 3
    },
    {
        id: 3,
        price: 15400,
        name: 'Longboard',
        description:'Cruiser Retro, inspirado en los 70',
        image: './images/longboard.jpg',
        stock: 3
    },
    {
        id: 4,
        price: 1300,
        name: 'Maniquí',
        description:'Para estudio/ referencia artística',
        image: './images/manikin.jpg',
        stock: 8
    },
    {
        id: 5,
        price: 12000,
        name: 'Mesa',
        description:'Estilo escandinava para 6 personas',
        image: './images/mesa.jpg',
        stock: 5
    },
    {
        id: 6,
        price: 800,
        name: 'Peluche',
        description:'Oso de tela fina ',
        image: './images/peluche.jpg',
        stock: 12
    },
    {
        id: 7,
        price: 3500,
        name: 'Silla Pc',
        description:'Patas metálicas, tela de cuero',
        image: './images/silla.jpg',
        stock: 6
    },
    {
        id: 8,
        price: 1500,
        name: 'Remera',
        description:'100% Algodón, varios colores.',
        image: './images/remera.jpg',
        stock: 20
    }    
]

export const customFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        resolve(task);
        }, time);
    });
}