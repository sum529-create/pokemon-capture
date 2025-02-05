import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin:0 auto;
  padding: 2rem;
  box-sizing: border-box;
`

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header/>
      <Main>
        <Content>
          <Outlet/>
        </Content>
      </Main>
    </LayoutWrapper>
  )
}

export default Layout