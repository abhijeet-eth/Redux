import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from "./ProductComponent"
import { setProducts } from "../redux/actions/productActions"
import axios from "axios"

const ProductListing = () => {
    const products = useSelector((state) => state)
    const disptach = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Error", err)
        })
        disptach(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    },[])
    console.log("Products =", products)
    return (
        <div className="ui grid container">
            <h1>
                <ProductComponent />
            </h1>
        </div>
    )
}

export default ProductListing