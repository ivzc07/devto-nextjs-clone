import AsideCard from "./AsideCard";
import AsideBarMenu from "./AsideBarMenu";
import SocialIconsBar from "./SocialIconsBar";
import AsidePopularTags from "./AsidePopularTags";
import DarkModeCar from "./DarkModeCar";
import TabsCenter from "./TabsCenter";
import PostCard from "./PostCard";
import AsideRightHashTags from "./AsideRightHashTag";

export default function ContentContainer() {
    return (
        <div className="bg-[#f5f5f5] p-4">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,7.5fr,1fr] gap-4 w-full">
                <div className="hidden lg:block"></div>
                <div className="flex flex-col lg:flex-row gap-[15px]">
                    <div className="hidden lg:flex w-full lg:w-[20%] flex-col gap-4">
                        <AsideCard />
                        <AsideBarMenu />
                        <SocialIconsBar />
                        <AsidePopularTags />
                        <DarkModeCar />
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
                    <div className="w-full lg:w-[60%] flex flex-col">
                        <TabsCenter />
                        <PostCard />
                    </div>
                    <div className="w-full lg:w-[20%] flex flex-col gap-4">
                        <AsideRightHashTags />
                        <AsideRightHashTags />
                    </div>
                </div>
                <div className="hidden lg:block"></div>
            </div>
        </div>
    );
}
