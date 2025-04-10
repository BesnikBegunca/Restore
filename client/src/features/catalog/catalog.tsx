import { Button, } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5113/api/Product')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <ProductList products={products} />
            <Button variant='contained'>Add Product</Button>
        </>

    );
}