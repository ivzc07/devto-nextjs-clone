import Tab from "./Tab";

export default function TabasCenter(){
    const tabs = [
        {
            name:'Relevant'
        },
        {
            name:'Latest'
        },
        {
            name:'Top'
        }
    ]

    return(
       <div className="flex flex-row">
        {
            tabs.map((item,idx)=> {
                return(
                    <Tab
                      key={`tab-${idx}`}  
                      name ={item.name}
                    />
                )
            })
        }
       </div>
        
    )
}