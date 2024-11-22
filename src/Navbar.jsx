import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, useMediaQuery, Divider } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { FaSearchLocation } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navItems = ['Home', 'Features', 'About', 'Contact'];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#333',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3, // Padding for content alignment
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            fontWeight: '700',
            color: '#333',
            textDecoration: 'none',
            letterSpacing: '2px',
            fontSize: '1.8rem',
            '&:hover': { color: '#4CAF50' },
            transition: 'color 0.3s ease',
          }}
        >
          Spoon & Fork
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={item === 'Features' ? ScrollLink : Link}
                to={item === 'Features' ? 'features-section' : `/${item.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  color: '#333',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontSize: '1rem',
                  position: 'relative',
                  '&:hover': {
                    color: '#4CAF50',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -4,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#4CAF50',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}

            {/* Nearby Restaurants */}
            <Button
              component={Link}
              to="/nearby-restaurants"
              sx={{
                color: '#333',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '1rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                '&:hover': {
                  color: '#4CAF50',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -4,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#4CAF50',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                },
              }}
            >
              <FaSearchLocation />
              Nearby Restaurants
            </Button>
          </Box>
        )}

        {/* SignIn / User Button */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="outlined"
                sx={{
                  color: '#6a1b9a',
                  borderColor: '#6a1b9a',
                  fontWeight: '600',
                  fontSize: '14px',
                  px: 3,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#f3e5f5',
                    color: '#6a1b9a',
                  },
                }}
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>

        {/* Mobile Menu */}
        {isMobile && (
          <IconButton
            edge="end"
            onClick={handleMenuClick}
            sx={{
              color: '#333',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#333',
              minWidth: '200px',
              borderRadius: 1,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item}
              onClick={handleMenuClose}
              component={item === 'Features' ? ScrollLink : Link}
              to={item === 'Features' ? 'features-section' : `/${item.toLowerCase()}`}
              sx={{
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '0.5px',
                '&:hover': { backgroundColor: '#F0F0F0', color: '#4CAF50' },
              }}
            >
              {item}
            </MenuItem>
          ))}

          <Divider sx={{ my: 1 }} />

          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/nearby-restaurants"
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '&:hover': { backgroundColor: '#F0F0F0', color: '#4CAF50' },
            }}
          >
            <FaSearchLocation />
            Nearby Restaurants
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
