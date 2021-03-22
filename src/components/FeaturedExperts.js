import React from 'react'
import styled from 'styled-components'
import dataApi from '../assets/data.json'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import StarIcon from '@material-ui/icons/Star';
import TimerIcon from '@material-ui/icons/Timer';
import RoomIcon from '@material-ui/icons/Room';
const FeaturedExpersBack = styled.div`
    width:73vw;
    min-height:90vh;
`
const Toprow = styled.div`
    width:100%;
    height:4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        font-size:1.5rem;
    }
    select{
        width:15%;
        height:60%;
        font-size:1.3rem;
        outline:none;
    }
`
const ContentWrapper = styled.div`
    width:100%;
    min-height:80%;
    display: flex;
    flex-direction: column;
`
const SinglePerson = styled.div`
    width:100%;
    height:220px;
    background-color:white;
    margin-bottom:10px;
    padding:0px 10px;
    position:relative;

    img{
        width:100px;
        height:100px;
        border-radius:50px;
        position:absolute;
        top:5%;
        left:1.7%;
    }
    .name{
        font-size:1.3rem;
        font-weight:500;
    }
    .desig{
        font-size:0.9rem;
    }
`
const UpperPart = styled.div`
    height:32%;
    width:100%;
    border-bottom:1px solid rgba(218, 218, 218,1);
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding: 7px 10px 12px 10% ;
    .right{
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    .left{
        display: flex;
        align-items: center;
        button{
            all:unset;
            padding:6px 5px;
            margin-left:30px;
            background-color:coral;
            border-radius:2px;
            color:white;
            font-size:0.9rem;
        }
    }
`
const LowerPart = styled.div`
    height:68%;
    width:100%;
    /* background-color:red; */
    display:flex;
    .right{
        width:10%;
        padding-top:50px;
        display:flex;
        flex-direction:column;
        align-items:center;
        .price{
            color:rgb(173, 173, 173);
            font-size:0.9rem;
            .actalPrice{
            color:lightseagreen;
            font-weight:400;
            }
        }
        .starContainer{
            display:flex;
            padding:20px 10px 0px 10px;
            font-size:0.9rem;
            .starText{
                color:coral;
            }
        }
        /* background-color:green; */
    }
    .left{
        padding-left:40px;
        flex-grow:1;
        display:flex;
        flex-direction:column;
        .upper{ 
            display:flex;
            justify-content: flex-start;
            padding-top:10px;
            font-size:0.85rem;
            font-weight:300;
            .time{
                display:flex;
                align-items:center;
                color:grey;
                margin-right:10px;

            }
        }
        .middle{
            padding-top:20px;
            /* background-color:green; */
            .plainText{
                color:rgb(70, 70, 70);
                font-size:0.9rem;
                word-spacing:1px;
            }
            
        }
        .lower{
            /* background-color:black; */
            width:100%;
            flex-grow:1;
            display:flex;
            align-items:center;
            font-size:0.8rem;
            color:rgb(68, 79, 82);
            
        }
        /* background-color:green; */
        
    }
`
const SingleArea = styled.div`
    background-color:whitesmoke;
    vertical-align:center;
    margin:0px 4px;
    border-radius:10px;
    padding:5px 14px;

`

function FeaturedExpers() {
    return (
        <FeaturedExpersBack>
            <Toprow>
                <span className='text'>
                    Featured Experts
                </span>
                <select value="Best Match">
                    <option value="Best Match">Best Match</option>
                </select>
            </Toprow>
            <ContentWrapper>
                {
                    dataApi.map(single => <SinglePerson key={single.id}>
                        <UpperPart>
                            <div className='right'>
                                <span className='name'>{single.name}</span>
                                <span className='desig'>{single.designation}</span>
                            </div>
                            <div className='left'>
                                <FavoriteTwoToneIcon style={{ color: 'coral', fontSize: 30 }}></FavoriteTwoToneIcon>
                                <button>View Profile</button>
                            </div>
                        </UpperPart>
                        <LowerPart>
                            <div className='right'>
                                <span className='price'>Price:&nbsp;&nbsp;&nbsp;<span className='actalPrice'>{single.price}</span></span>
                                <div className='starContainer'>
                                    <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
                                    <span className='starText'>{single.rating}</span>&nbsp;&nbsp;({single.reviews})
                                </div>
                            </div>
                            <div className='left'>
                                <div className='upper'>
                                    <div className='time'>
                                        <TimerIcon style={{ color: 'grey', fontSize: 20 }} />&nbsp; {single.sessions}&nbsp; Free Sessions Available
                                    </div>
                                    <div className='time'>
                                        <RoomIcon style={{ color: 'grey', fontSize: 20 }} />{single.location}
                                    </div>
                                    <div className='time'>
                                        <span className='styleT'></span>𝐓&nbsp;&nbsp;{single.languages}
                                    </div>
                                </div>
                                <div className='middle'>
                                    <span className='plainText'>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.                                    </span>
                                </div>
                                <div className='lower'>
                                    {single.areas.map(area => <SingleArea>{area}</SingleArea>)}
                                </div>

                            </div>
                        </LowerPart>
                        <img src={single.avatar} alt='avatar' />
                    </SinglePerson>
                    )
                }
            </ContentWrapper>

        </FeaturedExpersBack >
    )
}

export default FeaturedExpers
