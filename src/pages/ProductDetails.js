import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: '1', title: 'Product 1' },
    { id: '2', title: 'Product 2' },
    { id: '3', title: 'Product 3' }
];
export default function ProductDetailsPage() {
    // const params = useParams();
    return (
        <>
            <h1>Product Details</h1>
            <ul>{PRODUCTS.map((prod) => (
                <li>
                <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
            ))}</ul>
        </>);
}