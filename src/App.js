import { useState } from "react";
import { useQuery } from "react-query";

//components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//styles
import { Wrapper } from "./styles";

export type CartItemType {
    id: number;
    category: String;
    description: String;
    price: Number;
    image: string;
    amount: String;
    title: string;
}

const getProducts = async(): Promise < CartItemType > =>
    await (await fetch('https://fakestoreapi.com/products')).json();
const App = () => {
    return ( <
        div className = "App" >
        <
        h1 > Start < /h1> < /
        div >
    );
}

export default App;