import React, { useState, useEffect } from "react";
import './Feed.css'
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({category}) => {

    const [data,setData] = useState([]);

    const fetchData = async () =>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=KR&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    useEffect(()=>{
        fetchData();
    },[category])

    return (
        <div className="feed">
            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
                )
            })}
            
        
        </div>
        
    )
}

export default Feed

// import React, { useState, useEffect } from "react";
// import './Feed.css';
// import { Link } from "react-router-dom";
// import { API_KEY, value_converter } from "../../data";
// import moment from "moment";

// const Feed = ({ category }) => {
//     const [data, setData] = useState([]);

//     // 여러 채널 ID를 배열로 저장
//     const CHANNEL_IDS = [
//         'UCUj6rrhMTR9pipbAWBAMvUQ', // 채널 1
//         'UCC1LvVTX2ySKYjeIXkAtvsQ', // 채널 2
//         'UCewitUbsXnyjvJjGgxa0IYw'
//     ];

//     const fetchData = async () => {
//         const allVideos = [];

//         // 각 채널의 데이터를 순차적으로 가져오기
//         for (const channelId of CHANNEL_IDS) {
//             const videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${API_KEY}`;
            
//             // fetch를 사용하여 데이터 가져오기
//             const response = await fetch(videoList_url);
//             const data = await response.json();

//             if (data.items) {
//                 allVideos.push(...data.items);
//             }
//         }

//         setData(allVideos);
//     };

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     return (
//         <div className="feed">
//             {data.map((item, index) => {
//                 return (
//                     <Link to={`video/${item.snippet.channelId}/${item.id.videoId}`} className='card' key={index}>
//                         <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//                         <h2>{item.snippet.title}</h2>
//                         <h3>{item.snippet.channelTitle}</h3>
//                         <p>
//                             {moment(item.snippet.publishedAt).fromNow()}
//                         </p>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// };

//export default Feed;
