import React from "react";
// import PropTypes from "prop-types";
import '../Components/AlbumList/index'
import AlbumList from "../Components/AlbumList/index";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id : 1,
            name : "Top 100 Nhạc EDM Việt Hay Nhất",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/7/f/d/e7fd4a8069cd341063b838aeaa249626.jpg'
        },
        {
            id : 1,
            name : "#zingchart Tuần 13, 2021",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/charts_cover/bxh-song-viet-nam-tuan.0.1.jpg'
        },
        {
            id : 1,
            name : "Top 100 Nhạc V-Pop Hay Nhất",
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/f/1/9/1f1995b08ccaf6ea7045e2fc9acc5b94.jpg'
        }
    ]

    return (
        <div>
            <h3>TodoList</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;