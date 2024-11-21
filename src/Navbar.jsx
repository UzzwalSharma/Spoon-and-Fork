import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, useMediaQuery, Divider } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { FaSearchLocation } from 'react-icons/fa'; // Import React Icon for Nearby Restaurants
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink for smooth scrolling

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle menu opening and closing
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // List of nav items
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
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Typography
          variant="h5"
          component={Link} // Use Link here
          to="/" // Define the route for the logo link
          sx={{
            fontWeight: '700',
            color: '#333',
            textDecoration: 'none',
            letterSpacing: '2px',  // Extra letter spacing for a sleek look
            fontSize: '1.8rem',  // Larger font size
            '&:hover': { color: '#4CAF50' },
          }}
        >
          Spoon & Fork
        </Typography>

        {/* Desktop Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={item === 'Features' ? ScrollLink : Link} // Use ScrollLink for Features
                to={item === 'Features' ? 'features-section' : `/${item.toLowerCase()}`} // Set target for scroll on Features
                spy={true}
                smooth={true}
                offset={-70} // Offset to account for the Navbar height
                duration={500} // Duration for scroll animation
                sx={{
                  color: '#333',
                  fontWeight: '500',
                  textTransform: 'uppercase',  // Modern uppercase text
                  letterSpacing: '1px',  // Slight letter spacing
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
              {/* Nearby Restaurants Link with Icon */}
              <Button
              component={Link} // Use Link here
              to="/nearby-restaurants" // Add the route for Nearby Restaurants page
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
              <FaSearchLocation /> {/* Icon for Nearby Restaurants */}
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
                  borderImage: '10px linear-gradient(45deg, #E55D87, #5FC3E4) 1',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '8px 20px',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(106, 27, 154, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  '@media (max-width: 768px)': {
                    fontSize: '12px',
                    padding: '6px 18px',
                    borderRadius: '8px',
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

        {/* Mobile Menu Icon */}
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

        {/* Mobile Menu */}
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
              component={item === 'Features' ? ScrollLink : Link} // Use ScrollLink for Features
              to={item === 'Features' ? 'features-section' : `/${item.toLowerCase()}`} // Use "to" prop for scroll or regular navigation
              sx={{
                color: '#333',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1rem',
                letterSpacing: '0.5px',
                '&:hover': { backgroundColor: '#F0F0F0', color: '#4CAF50' },
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
