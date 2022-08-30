import lazin from "../../assets/lazin.jpg";
import React from "react"
import { Link } from "react-router-dom";
import * as S from "./styles";
const Home = () =>{
    return <>
        <S.Home>
        <h1>ACEITA SER NOSSO PARANINFO?</h1>
        <img src={lazin}/>
        <div>
        <Link to="/sim">SIM</Link>
        <Link to="/nao">NAO</Link>
        </div>
        
        </S.Home>
        
        </>;
};
export default Home;