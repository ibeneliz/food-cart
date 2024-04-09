import { Link } from 'react-router-dom';

export default function HomePage () {
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <p>Go to the <Link to="/products">list of products.</Link></p>
        </>
    );
}