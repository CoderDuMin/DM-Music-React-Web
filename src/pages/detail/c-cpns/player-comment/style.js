import styled from "styled-components";

export const SongCommentsWrapper = styled.div`
  padding: 20px 30px 40px;
  .comment-list{
    padding: 10px 0;
    .comment-item{
      display: flex;
      align-items: flex-start;
      padding: 10px 0;
      border-bottom: 1px dotted #ccc;
      .image{
        width: 50px;
        height: 50px;
      }
      .info{
        flex:1;
        padding: 0 10px;
        .info-content{
          font-size: 12px;
          line-height: 18px;
          margin-bottom: 10px;
          color:#333;
          .author{
            color: #0c73c2;
            padding-right: 3px;
          }
        }
        .foot{
          display: flex;
          justify-content:space-between;
          color:#999;
          font-size: 12px;
          .time{

          }
          .handler{
            display: flex;
            align-items: center;
            .divider{
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
`