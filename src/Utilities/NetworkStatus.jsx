import { useState } from 'react';
import styled from 'styled-components';


const NetworkStatus = () => {
  // const isOnline= NetworkStatusStore(state => state.IsOnline);
  // const setIsOnline= NetworkStatusStore(state => state.setIsOffline); 
  const [isOnline, setIsOnline] = useState(true);
  window.addEventListener("load", () => {
    navigator.onLine
      ? setIsOnline(true)
      : setIsOnline(false);
  });

  window.addEventListener("online", () => {
    setIsOnline(true);
  });

  window.addEventListener("offline", () => {
    setIsOnline(false);
  });

  if (!isOnline) {
    return (
      <NotificationContainer>
        <div>You are offline</div>
      </NotificationContainer>
    )
  }
  return <div></div>;
};
export default NetworkStatus;


const NotificationContainer = styled.div`
    position: fixed;
    top: 5px;  
    right: 0;
    width: 100px; 
    background: #ff4b5c;
    color: var(--btn-bg); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    border-radius: 2px;
    div{
        padding: 8px;
        font-size: 11px;
        font-weight: 500; 
        text-shadow: 0 0 2px white;
    }
`;