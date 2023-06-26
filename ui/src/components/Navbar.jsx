import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';




const Container = styled.div`
  position: sticky;
  top: 0px;
  /* display: flex; */
  /* align-items: center; */
  background-color: ${({theme})=>theme.bg};
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`
const Search = styled.div`
  display: flex;
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #cccc;
  border-radius: 3px;
`
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  color:${({theme})=>theme.text} ;
  padding-left: 10px;
  padding-right: 10px;
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' ></Input>
          <SearchIcon/>
        </Search>
        <NavLink to="signin" style={{textDecoration:"none"}} >
          <Button>
          <AccountCircleIcon/>
          SIGN IN
          </Button>
        </NavLink>
      </Wrapper>
    </Container>
  )
}

export default Navbar
