import styled from 'styled-components';

export const PlaybarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 999;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 48px;
    .draw-lyric{
      position: fixed;

      width: auto;
      height: 45px;
      top:-50px;
      left: 50%;
      color:#fff;
      font-size: 18px;
      font-weight: bold;
      text-shadow: 0 0 10px skyblue,0 0 15px skyblue;
      transform: translateX(-50%);
      padding: 10px 20px;
      background-color: rgba(0,0,0,.6);
      border-radius: 8px;
      transition: all .5s;
      ${props => props.showLyric ? 'display:flex;':'display:none;' }
      justify-content: center;
      align-items: center;
    }
  }
  

`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    &:hover{
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
    cursor: pointer;
  }

  .next {
    background-position: -80px -130px;
    &:hover{
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    img{
      width: 34px;
      height: 34px;
    }
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .lrc{
    background-position: 0 0;
    &:hover{
      background-position-y: -25px;
    }
  }
  .favor {
    background-position: -88px -163px;
    &:hover{
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover{
      background-position: -114px -189px;
    }
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    display: flex;
    position: relative;

    
    .volume {
      background-position: -2px -248px;
      position: relative;
      
      &:hover{
        background-position: -31px -248px;
      }
      
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
      &:hover{
        background-position: ${props => {
          switch(props.sequence) {
            case 1:
              return "-93px -248px"
            case 2:
              return "-93px -344px"
            default:
              return "-33px -344px"
          }
        }};
      }
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
      padding-left: 20px;
      color:#666;
      line-height: 25px;
      &:hover{
        background-position: -42px -98px;
      }
    }
    
    .volume-bar{
      position: fixed;
      display: ${props => props.showVolume ? 'block;' : 'none;'};
      top: -112px;
      width: 32px;
      height: 113px;
      z-index:999;
      .bgbar{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
      }
      .ant-slider {
        width: 32px;
        /* margin-right: 10px; */
        height: 95px;
        margin-top: 10px;
      }
      .ant-slider-track,.ant-slider:hover .ant-slider-track{
        background-color: #C60C0C;
      }
      .ant-slider-handle{
        /* border-color: #fff; */
      }
    }
  }
`
