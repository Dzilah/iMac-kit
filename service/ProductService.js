const PRODUCTS = [
    {
        id: 100,
        name: 'Blue Airpod Max',
        price: 350,
        image: require('../assets/Products/Blue Airpod Max.jpeg'),
        description: 'Requires AirPods Max with the latest version of software, and iPhone and iPod touch models with the latest version of iOS; iPad models with the latest version of iPadOS; Apple Watch models with the latest version of watchOS; Mac models with the latest version of macOS; or Apple TV models with the latest version of tvOS..'

    }, 

    {
        id: 101,
        name: 'iMac 2021',
        price: 600,
        image: require('../assets/Products/iMac 2021.jpeg'),
        description: 'The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life.'

    },

    {
        id: 102,
        name: 'Apple Watch Series 7',
        price: 2,
        image: require('../assets/Products/Series 7.jpeg'),
        description: 'The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet.'

    }
];


export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}