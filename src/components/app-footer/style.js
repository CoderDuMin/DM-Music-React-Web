import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position: relative;
    height: 170px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .content{
        display: flex;
        justify-content: space-between;
        font-size:14px;
    }
`
export const FooterLeft = styled.div`
    padding-top:10px;
    font-size:12px;
    line-height:22px;
    .guide{
        span{
            padding:0 15px;
        }
    }
    .company-info{
        display:flex;
        color:#666;
        justify-content:space-between;
        div{
            padding-right: 10px;
        }
    }
    .record{
        color:#666;
    }
`
export const FooterRight = styled.div`
    display: flex;
    padding-top:10px;
    .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
        display: block;
        width: 50px;
        height: 45px;

        background-image: url(${require("@/assets/img/sprite_footer_02.png")});
        background-size: 110px 450px;
    }

    :nth-child(1) .link {
        background-position: -60px -101px;
    }
    :nth-child(2) .link {
        background-position: 0 0;
    }
    :nth-child(3) .link {
        background-position: -60px -50px;
    }
    :nth-child(4) .link {
        background-position: 0 -101px;
    }

    .title {
        margin-top: 5px;
        display: block;
        width: 52px;
        height: 10px;
        background-image: url(${require("@/assets/img/sprite_footer_01.png")});
        background-size: 180px 100px;
    }

    :nth-child(1) .title {
        background-position: -1px -90px;
    }
    :nth-child(2) .title {
        background-position: 0 0;
        margin-top: 7px;
    }
    :nth-child(3) .title {
        background-position: 0 -54px;
        margin-top: 6px;
    }

    :nth-child(4) .title {
        background-position: -1px -72px;
        margin-top: 6px;
    }
    }
`