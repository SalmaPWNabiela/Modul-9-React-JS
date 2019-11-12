import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct({product}){
    return(
        <tr>
            <td scope="row">{product.product_id}</td>
            <td scope="row">{product.product_name}</td>
            <td scope="row">{product.product_price}</td>
            <td>
                <Link className="btn btn-dark" to={'/editProduct/' + 
                product.product_id}>Edit</Link>
            </td>

            
        </tr>
    )
}

export default CardProduct