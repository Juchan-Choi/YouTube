import React from "react";
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from  '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import chimtube from '../../assets/chimtube.jpg'
import chimtube_plus from '../../assets/chimtube-plus.jpg'
import chimtube_origin from '../../assets/chimtube-origin.jpg'
import rooftopcat from '../../assets/rooftopcat.jpg'
import kimpoong from '../../assets/kimpoong.jpg'
import joopearl from '../../assets/joopearl.jpg'

const Sidebar = ({sidebar,category,setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt=""></img><p>홈</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt=""></img><p>게임</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt=""></img><p>자동차</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt=""></img><p>스포츠</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt=""></img><p>예능</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt=""></img><p>기술</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt=""></img><p>음악</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt=""></img><p>블로그</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt=""></img><p>뉴스</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>구독</h3>
                <div className="side-link">
                    <img src={chimtube} alt="" /><p>침착맨</p>
                </div>
                <div className="side-link">
                    <img src={chimtube_plus} alt="" /><p>침착맨 플러스</p>
                </div>
                <div className="side-link">
                    <img src={chimtube_origin} alt="" /><p>침착맨 원본 박물관</p>
                </div>
                <div className="side-link">
                    <img src={rooftopcat} alt="" /><p>옥냥이</p>
                </div>
                <div className="side-link">
                    <img src={kimpoong} alt="" /><p>김풍천국</p>
                </div>
                <div className="side-link">
                    <img src={joopearl} alt="" /><p>주호민</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar