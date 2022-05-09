import { useSelector } from "react-redux";
export const Detail =()=>{
    let product = useSelector((state) => state.product);
    const { brandName,color } = product;
    return (
    <div>
        <p style={{background:"rgb(250, 250, 250)",fontFamily:"monospace"}}>
A layered design, this crewneck T-shirt from {brandName} is made from a blend of cotton and linen.</p>
<ul>
    <li>care instructions: hand wash</li>
    <li>Made in Italy</li>
    <li>Designer colour name: {color}</li>
    <li>Runs small, please see Size & Fit tab</li>
</ul>
       
    </div>
    )
}
export const Sizedetails=()=>{
    return (
        <div style={{fontFamily:"monospace"}}>
            <ul>
                <li>True to size</li>
                <li>Designed for a loose fit</li>
                <li>Elasticated waist</li>
                <li>Adjustable at the waist</li>
                <li>Mid-weight material</li>
          
                <li>The model in the picture is 185cm-6'1" and wearing a size M</li>
            </ul><br/>
            <p>If you have any questions, please call our customer care team at +49 89 127695-101</p>
        </div>
    )
}
export const Deliver=()=>{
    return(
        <div>
            <p style={{fontFamily:"monospace"}}>All orders are shipped worldwide via our affiliate courier DHL. Please see the shipping method as well as shipping costs and delivery times for your destination here.</p>
            <p style={{fontFamily:"monospace",fontWeight:"lighter"}}>We gladly accept returns within 30 days of receipt free of charge. Read here.</p>
        </div>
    )
}