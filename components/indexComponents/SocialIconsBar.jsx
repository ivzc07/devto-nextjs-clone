import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialIcons from './SocialIcons';

export default function SocialIconsBar(){
    const socialIcons = [
        { iconClass: "fab fa-twitter" },
        { iconClass: "fab fa-facebook"},
        { iconClass: "fab fa-github"},
        { iconClass: "fab fa-instagram" },
        { iconClass: "fab fa-twitch"},
        
      ];
    return(
        <>
            <div className="flex flex-row mt-2">
                {socialIcons.map((icon, index) => (
                    <SocialIcons 
                    key={`social-icons-${index}`} 
                    iconClass={icon.iconClass} 
                    />
                ))}
            </div>

        </>
        
    )
}