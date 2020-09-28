import styled from "styled-components";

const Wrapper = styled.div`
  position: "absolute";
  top: 0;
  left: 0;
  z-index: "99";
  width: "100%";
  height: 100vh;
  /* background-color: hsla(0,100%,50%, 0.2); */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
`;

const MenuList = styled.ul`
  padding: 0;
  text-align: center;
`;

const MenuListItem = styled.li`
  list-style: none;
  padding: 0.5rem;
  font-size: 1.75rem;
`;

const MenuLogo = styled.img`
  /* cursor: pointer; */
`;

export { Wrapper, MenuListItem, MenuList, MenuLogo };
