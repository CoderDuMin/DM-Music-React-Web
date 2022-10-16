import styled from 'styled-components'

export const PlayerMenuWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width:986px;
  height: 300px;
  bottom:50px;
  border-radius: 8px 8px 0 0;
  background-color: rgba(0,0,0,.8);
  ${props => props.isShow ? 'display:block;':'display:none;'}
`