import styled from 'styled-components';

export const Movie = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: #121212;
  justify-content: center;
  align-itens: center;
`;

export const RenderMovie = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  background-color: #202020;
  margin: 4px;
  border-radius: 8px;
  padding: 12px;
  justify-content: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 75px;
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-self: center;
`;