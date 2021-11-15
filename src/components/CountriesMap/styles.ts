import styled from 'styled-components';

type TSvg = {
  width: number;
  height: number;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const CountryName = styled.div`
  position: fixed;
  bottom: 5vh;
  left: 5vw;
  font-family: sans-serif;
  font-size: 4rem;
  font-weight: bold;
  color: #468;
  opacity: 0.8;
  user-select: none;
`;

export const Svg = styled.svg.attrs<TSvg>((props) => ({
  viewBox: `0 0 ` + props.width + ` ` + props.height,
  preserveAspectRatio: `xMidYMid meet`,
  width: props.width,
  height: props.height,
}))``;

export const Path = styled.path`
  cursor: pointer;
  fill: #fff;
  stroke: #ccc;
  :hover {
    fill: #ada;
  }
  :active {
    opacity: 0.8;
  }
`;
