import MenuItem from "./MenuItem";

export default function AsideBarMenu(){
    const menuItems = [
        { icon: "🏠", label: "Home" },
        { icon: "🎙️", label: "Podcasts" },
        { icon: "🎥", label: "Videos" },
        { icon: "🏷️", label: "Tags" },
        { icon: "💡", label: "DEV Help" },
        { icon: "🛍️", label: "Forem Shop" },
        { icon: "❤️", label: "Advertise on DEV" },
        { icon: "🏆", label: "DEV Challenges" },
        { icon: "✨", label: "DEV Showcase" },
        { icon: "📰", label: "About" },
        { icon: "📞", label: "Contact" },
        { icon: "📚", label: "Guides" },
        { icon: "🤔", label: "Software comparisons" },
      ];

      const policyItems = [
        { icon: "👍", label: "Code of Conduct" },
        { icon: "🤓", label: "Privacy Policy" },
        { icon: "👀", label: "Terms of use" },
      ];

    return(
        <>
            {
                menuItems.map((items,index) => {
                    return(
                        <MenuItem
                            key={`menu-items-${index}`}
                            icon={items.icon}
                            label= {items.label}
                        />
                    )
                })
                    
                
                
            }

            <div className="py-2 px-4 font-bold">Others</div>

            {
                policyItems.map((items,index) => {
                    return(
                        <MenuItem
                            key={`policy-items-${index}`}
                            icon={items.icon}
                            label= {items.label}
                        />
                    )
                })   
            }
            
        </>
    )
}