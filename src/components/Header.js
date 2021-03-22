import React from 'react'
import styled from 'styled-components'
import dataApi from '../../src/assets/data.json'
const HeaderBack = styled.div`
    width:100%;
    height:7%;
    background-color:rgba(255, 166, 0, 0.3);
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const LogoContainer = styled.div`
    width:6%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    justify-content:center;
    @media(max-width:500px){
        width:22%;
    }
    
`
const Logo = styled.div`
    width:18px;
    height:18px;
    border-radius:100%;
    background-color:rgb(0, 179, 54);
    margin-right:10px;
    @media(max-width:500px){
        margin-right:3px;
    }
    
`
const LogoText = styled.div`
    font-size:1.3rem;   
`
const NavBar = styled.div`
    margin-left:200px;
    width:25%;
    display:flex;
    justify-content:space-between;
    @media(max-width:500px){
        width:50%;
        font-size:0.8rem;
    }
    
    `
const ProfileOptions = styled.div`
    width:13%;
    margin-right:100px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    .notif{
        width:30px;
        border:none;
        align-self:center;
    }
    select{
        width:10%;
        background:none;
        border:none; 
        color:orange;
        z-index:-1;
        transform:translateX(-60%);
    }
    img{
        width:40px;
        height:40px;
        border-radius:30px;
    }
    
`

const Btn = styled.button`
    all:unset;
    padding:5px;
    cursor:pointer;
    color:${props => props.active ? 'rgb(255, 123, 0)' : 'black'};
    font-size:1.3rem;
    border-bottom:${props => props.active ? '4px solid rgb(255, 123, 0)' : 'none'};
`

function Header(props) {
    return (
        <HeaderBack>
            <LogoContainer>
                <Logo />
                <LogoText>Logo</LogoText>
            </LogoContainer>
            <NavBar>
                <Btn active={props.navBtn === 0 ? true : false} onClick={e => props.set(0)}>Dashboard</Btn>
                <Btn active={props.navBtn === 1 ? true : false} onClick={e => props.set(1)}>Find Expert</Btn>
                <Btn active={props.navBtn === 2 ? true : false} onClick={e => props.set(2)}>Discussion</Btn>
            </NavBar>
            <ProfileOptions>
                <svg className='notif' viewBox="0 0 16 20" version="1.1">
                    <title>notifications_none</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Icons" stroke="orange" stroke-width="0.3" fill="none" fill-rule="none">
                        <g id="Rounded" transform="translate(-376.000000, -4100.000000)">
                            <g id="Social" transform="translate(100.000000, 4044.000000)">
                                <g id="-Round-/-Social-/-notifications_none" transform="translate(272.000000, 54.000000)">
                                    <g>
                                        <path d="M19.29,17.29 L18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4.71,17.29 C4.08,17.92 4.52,19 5.41,19 L18.58,19 C19.48,19 19.92,17.92 19.29,17.29 Z M16,17 L8,17 L8,11 C8,8.52 9.51,6.5 12,6.5 C14.49,6.5 16,8.52 16,11 L16,17 Z M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z" id="🔹-Icon-Color" fill="orange"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg className='notif' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g>
                        <path stroke='orange' fill='orange' d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
                    </g>
                </svg>
                <img src={dataApi[0].avatar} />
                <select>

                </select>
            </ProfileOptions>
        </HeaderBack >
    )
}

export default Header
