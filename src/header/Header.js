import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/material';
import './Header.css';
import { servicesList } from '../Services/Services'

function Header(props) {
  const { sections, title, scroll } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAppCallBack = () => {

  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'primary.sec', }}>
        <Container maxWidth="xl" sx={{ display: 'flex' }}>
          <Typography
            component="h2"
            variant="h5"
            color="white"
            align="left"
            noWrap
            sx={{ flex: 1, marginLeft: { xs: 0, md: '1.5rem' } }}
          >
            {title}
          </Typography>
          <Button onClick={scroll} variant="contained" size="medium" sx={{ marginRight: { xs: 0, md: '2rem' } }}>
            Contact
          </Button>
        </Container>
      </Toolbar>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
            {sections.map((section) => (
              <MenuItem key={section.id} onClick={handleCloseNavMenu}>
                <Link
                  color="inherit"
                  noWrap
                  key={section.id}
                  variant="body2"
                  href={section.url}
                  underline="none"
                >
                  {section.title}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', display: { xs: 'none', sm: 'flex' } }}
        >
          {sections.map((section) =>
            section.id !== 2 ? (
              <Button
                color="inherit"
                noWrap
                key={section.id}
                variant="body2"
                href={section.url}
                sx={{ paddingRight: 1, flexShrink: 0, textDecoration: 'none' }}
              >
                {section.title}
              </Button>
            ) : (
              <div style={{ width: '100%' }}>
                <Button
                  color="inherit"
                  noWrap
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {section.title}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  sx={{ width: '100%' }}
                >
                  {servicesList.map(s => (
                    <MenuItem onClick={handleClose}>
                      <Link href={s.href} underline='none' color='inherit'>{s.title}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          )}
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', display: { xs: 'none', sm: 'flex' } }}
        >
          <Button
            color="inherit"
            noWrap
            variant="body2"
            href="#"
            sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
          >
            testemailgoeshere@mail.com
          </Button>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}

export default Header;