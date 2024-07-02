import AsideCard from "./AsideCard";
import AsideBarMenu from "./AsideBarMenu";
import SocialIconsBar from "./SocialIconsBar";
import AsidePopularTags from "./AsidePopularTags";
import DarkModeCar from "./DarkModeCar";
import TabasCenter from "./TabsCenter";
import PostCard from "./PostCard";
import AsideRighHashTags from "./AsideRightHashTag";

export default function ContentContainer(){
    return (
        <div>
            <div className="w-full  bg-[#f5f5f5] grid grid-cols-[1fr,7.5fr,1fr] p-4">
                <div></div>
                <div className="flex flex-row gap-[15px]">
                    <div className="w-[20%] flex flex-col gap-0">
                        <AsideCard />
                        <AsideBarMenu />
                        <SocialIconsBar/>
                        <AsidePopularTags/>
                        <DarkModeCar/>
                        <p className="text-gray-600 mb-4 text-left mt-4">
                            DEV Community A constructive and inclusive social network for software developers. With you every step of your journey.   
                        </p>
                        <p className="text-gray-600 mb-4 text-left">
                            Built on Forem — the open source software that powers DEV and other inclusive communities.
                        </p>
                        <p className="text-gray-600 mb-4 text-left">
                             Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
                        </p>
                    </div>
                    <div className="w-[60%] flex flex-col">
                        <TabasCenter/>
                        <PostCard/>

                    </div>
                    <div className="w-[20%] flex flex-col gap-4">
                        <AsideRighHashTags/>
                        <AsideRighHashTags/>
                    </div>

                </div>
                <div ></div>
</div>
        </div>
    )
}