import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/insta.svg";
import linkedIn from "./assets/linkedin.svg";
import whatsApp from "./assets/whatsapp.svg";

export const getSocialList = (settings) => {
  const facebookLink = settings.facebook_link
  const twitterXLink =  settings.x_link
  const linkedInLink = settings.linkedin_link
  const instagramLink = settings.instagram_link
  const whatsAppLink =  settings.whatsapp_link 
  const data = [
    { name: "facebook", src: facebook, to: facebookLink},
    { name: "twitter", src: twitter, to: twitterXLink},
    { name: "instagram", src: instagram, to: linkedInLink},
    { name: "linkedin", src: linkedIn, to: instagramLink},
    { name: "whatsApp", src: whatsApp, to: whatsAppLink},
  ];
  return data
}
