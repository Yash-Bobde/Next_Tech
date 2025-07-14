import { Metadata } from 'next';
type Props = {
    params: Promise<{ productId: string }>; 
};
export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
    const { productId: id } = await params;
    return {
        title: `Product ${id}`,
        description: `Details of product ${id}`,
        keywords: `product, ${id}, details`,
    };
};

export default async function ProductDetails({ 
    params,
 } : { 
    params: { productId: string }; 
}) {
    const productId = params.productId;
    return <h1>PRODUCT DETAILS {productId}</h1>;
}