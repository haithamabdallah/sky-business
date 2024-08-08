import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import x from "./assets/x.svg";
import instagram from "./assets/insta.svg";
import linkedIn from "./assets/linkedin.svg";
import whatsApp from "./assets/whatsapp.svg";

export const getSocialList = (settings) => {
  const facebookLink = settings.facebook_link
  const xLink =  settings.x_link
  const linkedInLink = settings.linkedin_link
  const instagramLink = settings.instagram_link
  // const whatsAppLink =  settings.whatsapp_link 
  const data = [
    { name: "facebook", src: facebook, route: facebookLink},
    // { name: "twitter", src: twitter, to: twitterXLink},
    { name: "x", src: x, route: xLink},
    { name: "instagram", src: instagram, route: instagramLink},
    { name: "linkedin", src: linkedIn, route:  linkedInLink},
    // { name: "whatsApp", src: whatsApp, to: whatsAppLink},
  ];
  return data
}
