import styled from 'styled-components';

export const CARD_WIDTH = 150;

export const CardWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 20px;
  top: 20px;
  width: ${CARD_WIDTH}px;
  height: 90px;
  overflow: hidden;
  cursor: pointer;
  background: #abc;
  border-radius: 5px;
  user-select: none;
  opacity: 0.8;
  border: 2px solid #0002;
  transition: 0.15s;
  transform: translate3d(0, 0, 0);
  :hover {
    opacity: 0.9;
    height: 100px;
    transform: translate3d(0, -5px, 0);
    strong {
      color: #005a9b;
      transform: translate3d(0, 5px, 0);
    }
    :active {
      transform: translate3d(0, -5px, 0) scale3d(0.98, 0.98, 1);
      transition: none;
    }
  }
`;

export const CardBodyWrapper = styled.div`
  padding: 10px;
  font-size: 1.2rem;
  label {
    display: block;
    white-space: nowrap;
    letter-spacing: 1px;
    color: #679;
  }
  strong {
    display: block;
    font-family: sans-serif;
    font-size: 1.5rem;
    color: #293d51;
    opacity: 0.8;
    transition: 0.15s;
    transform: translate3d(0, 0 0);
  }
  .message {
    padding-top: 8px;
    font-family: sans-serif;
    font-size: 1rem;
    color: #333;
  }
`;
