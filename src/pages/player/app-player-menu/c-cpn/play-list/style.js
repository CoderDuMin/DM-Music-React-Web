import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 100px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
        &:hover{
          background-position: -80px 0;
        }
      }
    }
    .operator{
      position: relative;
      display: none;
      flex:1;
      align-items: center;
      .btn {
        width: 14px;
        height: 14px;
        cursor: pointer;
        float: left;
        overflow: hidden;
        margin: 7px 0 0 10px;
        text-indent: -9999px;
      }
      .favor{
        background-position: -25px 0;
        &:hover{
          background-position: -25px -20px;
        }
      }
      .share{
        background-position: 0 0;
        &:hover{
          background-position: 0 -20px;
        }
      }
      .down{
        background-position: -57px -50px;
        &:hover{
          background-position: -80px -50px;
        }
      }
      .delete{
        background-position: -51px 0;
        &:hover{
          background-position: -51px -20px;
        }
      }
    }
    &:hover .operator{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 20px ;
    }
  }
`