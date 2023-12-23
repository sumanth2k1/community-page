import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/navlogo.png';
import { Link, useNavigate } from 'react-router-dom';


const navItems = [
  {
    navTitle: "Home",
    pageURL: "/"
  },
  {
    navTitle: "live darshan",
    pageURL: "/liveDarshan"
  },
  {
    navTitle: "online services",
    pageURL: "/onlineservices",
    // subItems: [{
    //   navTitle: "Donations",
    //   pageURL: "/donations"
    // },{
    //   navTitle: "Booking Services",
    //   pageURL: "/bookingservices"
    // }]
  },
  {
    navTitle: "photo gallery",
    pageURL: "https://photos.app.goo.gl/fxrJvsJWLEcXeWPk9"
  },
  {
    navTitle: "social activity",
    pageURL: "/socialactivity"
  },
  {
    navTitle: "About",
    pageURL: "/maintainance"
  },
  {
    navTitle: "Contact",
    pageURL: "/contact"
  }
];


export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="sticky" color="transparent" style={{background:'rgba(255, 92, 0, 0.55)'}} sx={{backdropFilter:"blur(20px)"}}>
      <Container maxWidth="xl" sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <Toolbar disableGutters>

          <Avatar alt="Remy Sharp" src={logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 4}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((page) => (

              
                // page.subItems?page.subItems.map((item) =>(
                // <Button
                // key={page.pageURL}
                // onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: 'orange', display: 'block' }}
                // >
                // {page.navTitle}
                // <MenuItem key={item.pageURL} onClick={handleCloseNavMenu}>
                //   <Link to={`${item.pageURL}`}>
                //     {item.navTitle}
                //   </Link>
                // </MenuItem>
                // </Button>)):
                (
                  <Button
                  key={page.pageURL}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                <Menu>
                <MenuItem key={page.subItems?.pageURL} onClick={handleCloseNavMenu}>
                  <Link to={`${page.subItems?.pageURL}`}>
                    <Typography  className='text-6xl' textAlign="center">{page.subItems?.navTitle}</Typography>
                  </Link>
                </MenuItem>
              </Menu>
              <Link to={`${page.pageURL}`}>
                {page.navTitle}
              </Link>
              </Button>
              )


            ))}
          </Box>


          <Box sx={{  flexGrow:0, display: { xs:'flex',sm:'flex', md: 'none'},justifyContent:"space-between"}}>
          <Avatar alt="Remy Sharp" src={logo} sx={{margin:1}}/>
          <Typography justifySelf={"center"} alignSelf={"center"}>SHREE SHANESHWARA CHAMUNDESHWARI AYYAPPA BHAKTA VRINDA FOUNDATION</Typography>
          <Box sx={{ flexGrow: 1 , margin:1}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map((page) => (
                <MenuItem key={page.pageURL} onClick={handleCloseNavMenu}>
                  <Link to={`${page.pageURL}`}>
                    <Typography textAlign="center">{page.navTitle}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}