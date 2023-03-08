import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar>
        <Link to="url1">Link 1</Link>
        <Link to="url2">Link 2</Link>
        <Link to="url3">Link 3</Link>
      </Sidebar>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #8f8f8f;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
`;
export default Layout;
