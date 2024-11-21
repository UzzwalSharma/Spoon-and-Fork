import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="footer"
      style={{ backgroundColor: "#333", padding: "40px 20px", color: "#fff" }}
    >
      {/* Logo and Description */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <Typography variant="h4" fontWeight="bold" color="orange" gutterBottom>
          Spoon & Fork
        </Typography>
        <Typography variant="body1" color="white">
          Your go-to place for culinary stories and delicious recipes from around the world.
        </Typography>
      </motion.div>

      {/* Combined Quick Links, Follow Us, and Contact Us */}
      <Box
        display="flex"
        flexDirection="row" /* Changed to horizontal layout */
        justifyContent="space-between"
        alignItems="flex-start"
        gap={5}
        mb={4}
      >
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <Typography variant="h6" fontWeight="bold" color="inherit" gutterBottom>
            Quick Links
          </Typography>
          <Box className="d-flex flex-column">
            <Link href="/" color="inherit" underline="hover">
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about" color="inherit" underline="hover">
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/recipes" color="inherit" underline="hover">
              <Button color="inherit">Recipes</Button>
            </Link>
            <Link href="/blog" color="inherit" underline="hover">
              <Button color="inherit">Blog</Button>
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              <Button color="inherit">Contact</Button>
            </Link>
          </Box>
        </motion.div>

        {/* Follow Us */}
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <Typography variant="h6" fontWeight="bold" color="inherit" gutterBottom>
            Follow Us
          </Typography>
          <Box className="d-flex flex-column" textAlign="center">
            <Typography variant="body2" color="inherit" mb={2}>
              "Savor the joy of every bite, as we bring global flavors to your table."
            </Typography>
            <Typography variant="body2" color="inherit" mb={2}>
              "From kitchen secrets to gourmet delights, let’s make every meal special!"
            </Typography>
            <Box display="flex" justifyContent="center" gap={3}>
              <Link href="https://www.facebook.com" color="inherit" underline="hover">
                <FaFacebook size={30} />
              </Link>
              <Link href="https://twitter.com" color="inherit" underline="hover">
                <FaTwitter size={30} />
              </Link>
              <Link href="https://www.instagram.com" color="inherit" underline="hover">
                <FaInstagram size={30} />
              </Link>
              <Link href="https://www.linkedin.com" color="inherit" underline="hover">
                <FaLinkedin size={30} />
              </Link>
              <Link href="https://www.youtube.com" color="inherit" underline="hover">
                <FaYoutube size={30} />
              </Link>
            </Box>
          </Box>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center" }}
        >
          <Typography variant="h6" fontWeight="bold" color="inherit" gutterBottom>
            Contact Us
          </Typography>
          <Box className="d-flex flex-column">
            <Link href="mailto:info@spoonandfork.com" color="inherit" underline="hover">
              <Button color="inherit">info@spoonandfork.com</Button>
            </Link>
            <Link href="tel:+1234567890" color="inherit" underline="hover">
              <Button color="inherit">+1 (234) 567-890</Button>
            </Link>
            <Link href="/faq" color="inherit" underline="hover">
              <Button color="inherit">FAQ</Button>
            </Link>
            <Link href="/terms" color="inherit" underline="hover">
              <Button color="inherit">Terms & Conditions</Button>
            </Link>
            <Link href="/privacy" color="inherit" underline="hover">
              <Button color="inherit">Privacy & Policy</Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Footer Bottom */}
      <Box
        mt={6}
        pt={4}
        borderTop="1px solid #444"
        textAlign="center"
        color="textSecondary"
        fontSize="small"
      >
        <Typography variant="body2" color="inherit">
          &copy; 2024 Spoon & Fork. All Rights Reserved.
        </Typography>
        <Typography variant="body2" color="inherit" mt={2}>
        Made with ❤️ by  Ujjwal & Divyanshi
        </Typography>
      </Box>
    </motion.footer>
  );
};

export default Footer;
// suno ye footer dekh lena ek bar




