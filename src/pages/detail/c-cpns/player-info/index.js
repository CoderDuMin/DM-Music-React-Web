import React, { memo, useEffect, useState } from 'react';

import { getSizeImage } from '@/utils/format-utils';
import { parseLyric } from '@/utils/parse-lyric'

import SongOperationBar from '@/components/song-operation-bar';
import {
  InfoWrapper,
  InfoLeft,
  InfoRight
} from './style';
import { getSongDetail, getSongLyric } from '../../../../service/player';

export default memo(function PlayerInfo(props) {
  // props and hooks
  const id = props.id || undefined
  const [isSpread, setIsSpread] = useState(false);
  const [songDetail, setSongDetail] = useState(null)
  const [songLyric, setSongLyric] = useState(null)

  //other hooks 
  useEffect(()=>{
    console.log('id变更,请求歌曲信息',id,props)
    if(!id) return;
    getSongDetail(id).then(res=>{
      console.log('歌曲详情',res.songs[0])
      setSongDetail(res.songs[0])
    }).catch()
    getSongLyric(id).then(res=>{
      const lyricList = parseLyric(res.lrc.lyric)
      setSongLyric(lyricList)
    }).catch()
  },[id]) 

  // handle code
  const totalLyricCount = isSpread ? songLyric.length : 13;

  return songDetail && songLyric && (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(songDetail?.al?.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{songDetail.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{songDetail.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{songDetail.al.name}</a>
        </div>

        <SongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle="(167366)"/>

        <div className="lyric">
          <div className="lyric-info">
            {
              songLyric?.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
