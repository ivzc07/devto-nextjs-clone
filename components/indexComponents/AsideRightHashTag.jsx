import AsideHashtag from "./AsideHashtag";

export default function AsideRighHashTags(){
    const discussions = [
        { title: "Meme Monday", comments: "29 comments" },
        { title: "What are your goals for week 27 of 2024? Midyear.", comments: "1 comment"},
        { title: "When has rolling your own auth gone wrong?", comments: "1 comment" },
        { title: "About the \"S\" in Solid", comments: "2 comments" },
        { title: "Solved error in flutter_rating_bar in Flutter News 2024 #26 ", comments: "New" },
      ];
      
    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">#discuss</h2>
          <p className="text-sm text-gray-600 mb-4">Discussion threads targeting the whole community</p>
          <ul>
            {discussions.map((discussion, idx) => (
               <AsideHashtag
                    key={`aside-hashtag-${idx}`} 
                    title={discussion.title}
                    comments={discussion.comments}
               />
            ))}
          </ul>
        </div>
      );
}