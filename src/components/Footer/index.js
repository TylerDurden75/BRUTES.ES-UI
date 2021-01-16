import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaDiscord, FaTwitter, FaTelegram, FaReddit } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer,
        FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
        SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
        SocialIcons, SocialIconLink } from './FooterElements';
import logo from '../../images/BRUTES_Logo_Horiz_W_S.png';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
          <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">About Us</FooterLink>
                                <FooterLink to="/">Gameplay Rules</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Terms of Services</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/">Best Gameplay</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Discord</FooterLink>
                                <FooterLink to="/">Telegram</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src={logo} alt='logo'/>
                        </SocialLogo>
                        <WebsiteRights>BRUT.ES &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.discord.com" target="_blank" arial-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="//www.telegram.com" target="_blank" arial-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.reddit.com" target="_blank" arial-label="Reddit">
                                <FaReddit />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
          </FooterContainer>  
        </>
    )
}

export default Footer;
