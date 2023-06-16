import styled from 'styled-components'
import SidhyaTubeLogo from '../assets/yt.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    background-color: ${({theme})=>theme.bg};
    height: 100vh;
    color: ${({theme})=>theme.text};
    scroll-behavior: smooth;
    overflow-y: scroll;
    position: sticky;
    top: 0px;
    
`

const Wrapper = styled.div`
    padding: 1rem 1.5rem;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 30px;
`

const Typography = styled.span`
    font-size: 17px;
    font-weight: 600;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding:9px 0px;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: .5px solid ${({theme})=>theme.soft};
`

const Login = styled.div`

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


const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <NavLink style={{textDecoration:"none",color:"inherit"}} to="/" >
        <Logo>
            <Img src={SidhyaTubeLogo} />
            <Typography>SidhyaTube</Typography>
        </Logo>
        </NavLink>
        <Item><HomeIcon/>Home</Item>
        <Item><ExploreIcon/>Explore</Item>
        <Item><SubscriptionsIcon/>Subscription</Item>
        <Hr/>
        <Item><VideoLibraryIcon/>Library</Item>
        <Item><HistoryIcon/>History</Item>
        <Hr/>
        <Login>
          <p>Sign in to like videos,comment & subscribe</p>
          <Button ><AccountCircleIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Item><LibraryMusicIcon/>Music</Item>
        <Item><SportsBaseballIcon/>Sports</Item>
        <Item><SportsEsportsIcon/>Gaming</Item>
        <Item><MovieIcon/>Movie</Item>
        <Item><NewspaperIcon/>News</Item>
        <Item><LiveTvIcon/>Live</Item>
        <Hr/>
        <Item><SettingsIcon/>Setting</Item>
        <Item><FlagIcon/>Report</Item>
        <Item><HelpIcon/>Help</Item>
        <Item onClick={()=>setDarkMode(!darkMode)}  >{darkMode?<LightModeIcon/> :<DarkModeIcon/>}{darkMode?"Light mode":"Dark mode"}</Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
