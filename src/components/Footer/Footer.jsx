import React from 'react'
import "./Footer.css"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    border: 'none',   
    boxShadow: 'none',
    borderRadius : "0"
  }));

const Footer = () => {
  return (
    <div style={{width : "100vw"}}>
        <Divider sx={{mb : 4}} />
        <div style={{ display: 'flex', margin : "0 2rem"}}>
            
            <Item style={{ flexBasis: '40%' }}>
                <Typography variant="h6" gutterBottom>
                    Meet Us At
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Indira Gandhi Delhi Technical University for Women, New Church Rd, Opp. St James Church, Kashmere Gate, Delhi 110006
                </Typography>
                
                <Button variant="outlined" sx={{border : "1px dashed", mt : 2}} startIcon={<MailIcon />}>
                    <Link to="#" sx={{cursor:"pointer", textTransform : "lowercase"}} underline="none">igdtuieee@gmail.com</Link>
                </Button>
                <br />

                <Link to="#" underline="none"><FacebookIcon sx={{cursor:"pointer",mr : 1,mt : 1}} /></Link>
                <Link to="#" underline="none"><InstagramIcon sx={{cursor:"pointer",mr : 1,mt : 1}} /></Link>
                <Link to="#" underline="none"><LinkedInIcon sx={{cursor:"pointer",mr : 1,mt : 1}} /></Link>
                <Link to="#" underline="none"><TelegramIcon sx={{cursor:"pointer",mr : 1,mt : 1}} /></Link>

            </Item>
            
            <Item style={{ flexBasis: '30%' }}>
                <Typography variant="h6" gutterBottom>
                    Useful Links
                </Typography>
                <Link to="#" sx={{cursor:"pointer"}} underline="none">About Us</Link><br />
                <Link to="#" sx={{cursor:"pointer"}} underline="none">WIE IGDTUW</Link><br />
                <Link to="#" sx={{cursor:"pointer"}} underline="none">Achievements</Link><br />
                <Link to="#" sx={{cursor:"pointer"}} underline="none">Events</Link><br />
                <Link to="#" sx={{cursor:"pointer"}} underline="none">Newsletter</Link><br />
                <Link to="#" sx={{cursor:"pointer"}} underline="none">Our Team</Link><br />
            </Item>
            
            <Item style={{ flexBasis: '30%' }}>
                <Typography variant="h6" gutterBottom>
                    For any queries
                </Typography>
                <Button size='small' variant="contained">CONTACT US</Button>
            </Item>
        
        </div>
        
        <Typography variant="body2" sx={{ textAlign : "center", fontSize : "12px", mb : 4}}>
            Copyright © IEEE IGDTUW All rights reserved
        </Typography>
    
    </div>
  )
}

export default Footer
