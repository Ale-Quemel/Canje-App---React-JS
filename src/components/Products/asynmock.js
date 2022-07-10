export const products = [   
    {
        id: 1,
        price: 7550,
        name: 'Joystick',
        description: 'Compatible con Ps4 y Ps5.',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/joystick.jpg',
        alt: 'joystick-para-playstation-4-y-5',
        stock: 5
    },
    {
        id: 2,
        price: 9500,
        name: 'Bicicleta',
        description: 'Bicicleta de paseo, rodado 26.',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/bike.jpg',
        alt: 'bicicleta-de-paseo-rodado-26',
        stock: 3
    },
    {
        id: 3,
        price: 15400,
        name: 'Longboard',
        description:'Cruiser Retro, inspirado en los 70',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/longboard.jpg',
        alt: 'longboard-retro-con-ruedas-siliconadas',
        stock: 3
    },
    {
        id: 4,
        price: 1300,
        name: 'Maniquí',
        description:'Para estudio/ referencia artística',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/manikin.jpg',
        alt: 'maniquí-de-madera-para-estudiar-y-dibujar',
        stock: 8
    },
    {
        id: 5,
        price: 12000,
        name: 'Mesa',
        description:'Estilo escandinava para 6 personas',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/mesa.jpg',
        alt: 'Mesa-madera-de-pino-para-6-personas',
        stock: 5
    },
    {
        id: 6,
        price: 800,
        name: 'Peluche',
        description:'Oso de tela fina ',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/peluche.jpg',
        alt: 'oso-de-peluche-tela-algodón',
        stock: 12
    },
    {
        id: 7,
        price: 3500,
        name: 'Silla Pc',
        description:'Patas metálicas, tela de cuero',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/silla.jpg',
        alt: 'Sillón-de-cuero-para-oficina-pc',
        stock: 6
    },
    {
        id: 8,
        price: 1500,
        name: 'Remera',
        description:'100% Algodón, varios colores.',
        detail: 'Este párrafo contiene más detalles sobre el producto a comprar.',
        image: './images/remera.jpg',
        alt: 'remera-algodón-peinado-color-oscuro',
        stock: 20
    }    
]

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
        resolve(products);
        }, 2000);
    });
};

export const getProductDetail = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
        resolve(products);
        }, 5000);
    });
};