import {
  HeaderContainer,
  HeaderLocation,
  StyledHeader,
  HeaderCart,
} from "./styles";
import Coffee from "../../assets/Coffe.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Coffee} alt="" />
      </NavLink>
      <StyledHeader>
        <HeaderLocation>
          <MapPin size={22} weight="fill" />
          <p>Localização</p>
        </HeaderLocation>
        <NavLink to="/Checkout">
          <HeaderCart>
            <ShoppingCart size={22} weight="fill" /> <span>0</span>
          </HeaderCart>
        </NavLink>
      </StyledHeader>
    </HeaderContainer>
  );
}
