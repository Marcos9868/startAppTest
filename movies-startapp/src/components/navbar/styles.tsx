import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #101010;
  display: flex;
  justify-content: space-around;
  align-itens: center;
  height: 70px;
`

export const Logo = styled.h2`
  display: flex;
  align-itens: center;
  justify-content: center;
  margin-top: 15px;
`

export const Form = styled.form`
  display: flex;
  align-itens: center;
  justify-content: center;
  height: 30px;
  margin-top: 15px;
`

export const Input = styled.input`
  background-color: #202020;
  color: rgb(255, 208, 0);
  border-radius: 12px 0 0 12px;
  border: none;
  padding-left: 7px;
  outline: none;
`

export const SearchButton = styled.button`
  background-color: #151515;
  color: rgb(255, 208, 0);
  border-radius: 0 12px 12px 0;
  border: 1px solid rgb (255, 208, 0);
  border: none;
  width: 70px;
  cursor: pointer;
  &:hover .SearchButton {
    background-color: darkgolden;
    transition: 150ms;
  }
`