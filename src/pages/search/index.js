import React, { memo, useCallback,useState } from 'react'
// import { AudioOutlined } from '@ant-design/icons';
import { Input,Tabs} from 'antd';

import { SearchPageWrapper } from './style'
import { querySongsByKeywords } from '../../service/songs';
import { useDispatch } from 'react-redux';
import { addSongInPlayListAction, getCurrentSongAction } from '../player/store/actionCreator';

const { Search } = Input;

export default memo(function SearchPage() {
  // state
  const [keywords, setKeywords] = useState('')
  const [result,setResult] = useState([])
  const [total,setTotal] = useState(0)

  // redux-hook
  const dispatch = useDispatch()
  // other handler
  const onSearch = useCallback((value)=>{
    console.log('搜索',value)
    setKeywords(value)
    querySongsByKeywords(value).then(res=>{
      setTotal(res.result.songCount)
      setResult(res.result.songs)
    })
  },[])
  // 播放当前歌曲
  const handlePlaytheSong = useCallback((id)=>{
    dispatch(getCurrentSongAction(id))
  },[dispatch])
  // 添加歌曲至歌单
  const handleAddSong = useCallback((id) => {
    dispatch(addSongInPlayListAction(id))
  },[dispatch])
  // others
  const typeTags = [
    {
      label: `单曲`,
      key: '1',
    },
    {
      label: `歌手`,
      key: '100',
    },
    {
      label: `专辑`,
      key: '10',
    },
  ]

  return (
    <SearchPageWrapper>
      <div className="content wrap-v2">
        <div className='search-bar'>
          <Search  placeholder="音乐/视频/电台/用户" onSearch={e => onSearch(e)}  />
        </div>
        {
          keywords && <p className='tips'>搜索'{keywords}',找到{total}条结果</p>
        }
        <div className="tabs">
          <Tabs
            defaultActiveKey="1"
            items={typeTags}
          />
        </div>
        <div className="search-result">
          {
            result.map((item,index)=>{
              return (
                <div className="item" key={item.id} onDoubleClick={e => handlePlaytheSong(item.id)}>
                  <div className="left">
                    <div className='play-btn sprite_table' onClick={e => handlePlaytheSong(item.id)}></div>
                    <span>{item.name}</span>
                  </div>
                  <div className="operator">
                    <i className='add btn sprite_btns' title='添加到播放列表' onClick={e => handleAddSong(item.id)}></i>
                    <i className='favor btn sprite_table' title='收藏'></i>
                    <i className="share btn sprite_table" title='分享'></i>
                    <i className="down btn sprite_table" title='下载'></i>
                  </div>
                  <div className="right">
                    <div className='artist'>{item.artists[0].name}</div>
                    <div className='album'>《{item.album.name}》</div>
                    <div className='duration'>{item.duration}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </SearchPageWrapper>
  )
})
