import styled from "styled-components";
import { Link } from "react-scroll";

function Menu() {
  const StyledLink = styled(Link)`
    box-sizing: border-box;
    padding: 20px 30px 10px 30px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid red;
  `;
  return (
    <div>
      <StyledLink to="1" spy={true} smooth={true}>
        <span style={{ paddingLeft: "150px" }}>Section 1</span>
      </StyledLink>
      <StyledLink to="2" spy={true} smooth={true}>
        <span>Section 2</span>
      </StyledLink>
      <StyledLink to="3" spy={true} smooth={true}>
        <span>Section 3</span>
      </StyledLink>
      <StyledLink to="4" spy={true} smooth={true}>
        <span>Section 4</span>
      </StyledLink>
    </div>
  );
}

export default Menu;
