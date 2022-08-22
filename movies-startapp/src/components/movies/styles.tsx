import styled from 'styled-components';

export const Table = styled.table`
  background-color: #101010;
  width: 80%;
  height: 80%;
  display: flex;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  flex-direction: column;
  border-radius: 12px;
  border-spacing: 0 8px;
  justify-content: space-around;
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  height: 200px;
  width: 90%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border-spacing: 8px;
  border: 1px solid darkorange
  padding-top: 20px;
`;

export const Td = styled.li`
  display: flex;
  justify-content: space-around;
  align-itens: center;
  margin-bottom: 15px;
`;

export const MovieBox = styled.div`
  background-color: #202020;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 85px;
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 80px;
  height: 100px;
  background-color: whitesmoke;
`;