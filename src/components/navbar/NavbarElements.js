import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #D8D8D8;
  box-shadow: 2px 2px 2px 1px gray;
    height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLinkLogo = styled(Link)`
  color: #B69352;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-right: 10px;
  height: 70%;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
  color: #B69352;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin-right: 10px;
  height: 70%;
  cursor: pointer;
  &.active {
    color: #52504c;
  
  }
  &:hover {
    color: #E6E6E6;
    background: #B69352;
    font-size: 15px;
    border-radius: 6px;   
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

