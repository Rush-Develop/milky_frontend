import styled from "styled-components";
import { Link } from "react-scroll";

function Sidemenu() {
  const StyledLink = styled(Link)`
    box-sizing: border-box;
    display: block;
    padding: 30px;
    margin: 0 auto;
    text-align: center;
  `;
  return (
    <div>
      <StyledLink to="1" spy={true} smooth={true}>
        <span>Section 1</span>
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
export default Sidemenu;
