 function Price({salePrice, originalPrice}) {
    return(
        <>
        { salePrice ? (<><span className="origPrice">${originalPrice.toFixed(2)}</span>${salePrice.toFixed(2)}</>)
         :  (<>${originalPrice.toFixed(2)}</>)}
        </>
    )
 }

 export default Price