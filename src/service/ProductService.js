export default class ProductService {
    getProductsSmall() {
        return fetch('demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    // getProducts() {
    //     return fetch('demo/data/products.json')
    //         .then((res) => res.json())
    //         .then((d) => d.data);
    // }

    getVideos() {
        // return fetch('demo/data/videos.json')
        //     .then((res) => res.json())
        //     .then((d) => d.data);
        return fetch('https://184.162.117.121:4433?asset=videos')
            .then((res) => res.json())
            .then((d) => d.results.rows);
    }

    getProductsWithOrdersSmall() {
        return fetch('demo/data/products-orders-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
