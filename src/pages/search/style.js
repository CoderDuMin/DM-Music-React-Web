import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  .content{
    background-color: #fff;
    padding: 15px;
    .search-bar{
      width: 420px;
      height: 40px;
      padding: 10px;
      margin: 0 auto;
      box-sizing: content-box;
      z-index: 10;
      .ant-input-group-wrapper.ant-input-search{
        width: 420px !important;
        height: 40px;
      }
      .ant-input-wrapper.ant-input-group{
        height: 40px;
      }
      .ant-input{
        height: 40px;
        outline: none;
        border-color:#eee;
      }
      .ant-input-search-button{
        height: 40px;
        width: 40px;
        outline: none;
        border-color:#eee;
      }
    }
    .search-result{
      margin-top: 10px;
      .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        color:#333;
        &:hover{
          background-color: #f5f5f5;
        }
        .left{
          width: 35%;
          display: flex;
          align-items: center;
          .play-btn{
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            margin-right: 5px;
            cursor: pointer;
            &:hover{
              background-position: 0 -128px;
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
          .add{
            background-position: 0 -700px;
            &:hover{
              background-position: -22px -700px;
            }
          }
          .favor{
            background-position: -2px -174px;
            &:hover{
              background-position: -22px -174px;
            }
          }
          .share{
            background-position: -1px -195px;
            &:hover{
              background-position: -21px -195px;
            }
          }
          .down{
            background-position: -82px -174px;
            &:hover{
              background-position: -105px -174px;
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
        .right{
          width:35%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
`