import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import "../containers/SideNav.css"
const SideNav = () => {
    // console.log(brand)
    const dispatch = useDispatch();
    const [brand, setbrand] = useState([]);
    const [color, setcolor] = useState([]);
    const [cate, setcate] = useState([]);
    useEffect(() => {
        filterdata()
    }, [brand, color, cate])
    const filterdata = async () => {
        let res = await axios.get(`https://mytheresa.herokuapp.com/men/q?color=${color}&type=${cate}&brandName=${brand}`);
        console.log("res", res);
        dispatch(setProducts(res.data));
    }
    const handlebrand = (e, value) => {
        if (value == "brand") {
            if (e.target.checked) {
                setbrand([...brand, e.target.value])
            } else {
                console.log(e.target.value)
                const result = brand.filter(word => word !== e.target.value);
                setbrand(result)
            }
        }
        else if (value == "color") {
            if (e.target.checked) {
                setcolor([...color, e.target.value])
            } else {
                console.log(e.target.value)
                const result = color.filter(word => word !== e.target.value);
                setcolor(result)
            }
        } else if (value == "cate") {
            if (e.target.checked) {
                setcate([...cate, e.target.value])
            } else {
                console.log(e.target.value)
                const result = cate.filter(word => word !== e.target.value);
                setcate(result)
            }
        }

    }
    console.log(brand, "brand")
    console.log(color, "color")
    console.log(cate, "cate")
    // const [count, setCount] = useState(0);

    return (
        <div className="SideNavItems">
            <div>
                <h3>BRANDS</h3>
                <ul className="brands">
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="ALEXANDER MCQUEEN" /> Alexander McQueen</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="ETRO" /> Etro</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="KHAITE" /> Khaite</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="GUCCI" /> Gucci</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="GANNI" /> Ganni</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="NIKE" /> Nike</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="ISABEL MARANT" /> Isabe</li>
                    <li><input onChange={(e) => handlebrand(e, "brand")} type="checkbox" value="ADIDAS" /> Adidas</li>
                </ul>
            </div>
            <div>
                <h3>CATEGORY</h3>
                <ul className="category">
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Western" /> Western</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Skirt" /> Skirt</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Jeans" /> Jeans</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Shirts" /> Shirts</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="T-Shirts" /> T-Shirts</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Mini Dress" /> Mini Dress</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Bottom Wear" /> Bottom Wear</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Top Wear" /> Top Wear</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Sports" /> Sports</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Sandles" /> Sandals</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Flat" /> Flat</li>
                    <li><input onChange={(e) => handlebrand(e, "cate")} type="checkbox" value="Foot Wear" /> Foot Wear</li>
                </ul>
            </div>
            <div>
                <h3>COLORS</h3>
                <ul className="colors">
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Black" /> Black</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Blue" /> Blue</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Orange" /> Orange</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Pink" /> White</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Yellow" /> Yellow</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Brown" /> Brown</li>
                    <li><input onChange={(e) => handlebrand(e, "color")} type="checkbox" value="Pink" /> Pink</li>
                </ul>
            </div>
        </div>
    );
}

export default SideNav;