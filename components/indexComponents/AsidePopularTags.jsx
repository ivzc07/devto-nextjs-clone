import MenuItem from "./MenuItem";

export default function AsidePopularTags(){
    const menuItems = [
        { icon: "", label: "#home" },
        { icon: "", label: "Podcasts" },
        { icon: "", label: "Videos" },
        { icon: "", label: "Tags" },
        { icon: "", label: "DEV Help" },
        { icon: "", label: "Forem Shop" },
        { icon: "", label: "Advertise on DEV" },
        { icon: "", label: "DEV Challenges" },
        { icon: "", label: "DEV Showcase" },
        { icon: "", label: "About" },
        { icon: "", label: "Contact" },
        { icon: "", label: "Guides" },
        { icon: "", label: "Software comparisons" },
      ];
    return(
        <>
            <div className="py-2 px-4 font-bold">Popular Tags</div>
            <div className="h-60 overflow-y-auto">
                {
                    menuItems.map((items,index) => {
                        return(
                            <MenuItem
                                key={`menu-items-tag${index}`}
                                icon={items.icon}
                                label= {items.label}
                            />
                        )
                    })
                }    
            </div>
            
        </>
        
    )
}