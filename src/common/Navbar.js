import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mq from '../MediaQuery';

/** 메뉴바 컴포넌트 스타일 정의 */
const NavbarContainer = styled.nav`
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    div {
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        a {
            display: block;
            color: white;
            text-align: center;
            padding:14px 20px;
            font-size: 16px;

            ${mq.maxWidth('sm')`
                font-size: 14px;
            `}

            &:hover {
                background-color: #ddd;
                color: black;
            }

            &.active {
                background-color: #666;
                color: white;
            }

            &.right {
                ${mq.maxWidth('sm')`
                margin-left: auto;
            `}
            }
        }
    }
`;


const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/link1">Link1</NavLink>
            <NavLink to="/link2">Link2</NavLink>
            <NavLink to="/link3" className="right">Link3</NavLink>
        </div>
    </NavbarContainer>
  );
};

export default Navbar;