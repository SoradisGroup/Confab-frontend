export interface productType {
    name: string;
    slug:string;
    price: number;
    desc: string;
    category: string;
    productID: string;
    images: string[];
}


export const ProductList:productType[]  = [
    {
        name:'International Conference and Award Ceremony',
        slug:'International-Conference-and-Award-Ceremony',
        price:0.50,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        category:' Vietnam',
        productID:'11507',
        images:[
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0001.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0002.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0003.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0004.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0005.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0006.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0007.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0008.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0009.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0010.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0011.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0012.webp',
            '/assets/images/product/product1/Vietnam-Global-Conference-Nov2024_page-0013.webp',
        ]
        }
]