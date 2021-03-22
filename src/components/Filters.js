import React, { useState } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';

import FormControlLabel from '@material-ui/core/FormControlLabel';
const FilterBack = styled.div`
    width:19vw;
    min-height:70vh;
    /* background-color:white; */
`
const FilterText = styled.div`
    display: block;
    width:100%;
    height:4%;
    padding-top:8px;
    font-size:1.5rem;
`
const FiltersContainer = styled.div`
    width:100%;
    height:100%;
    padding:15px;
    background-color:white;
    
    .greyText{
        color:rgb(173, 173, 173);
        font-weight:700;
        text-transform:uppercase;
        font-size:0.8rem;
    }
    .flexColumn{
        display:flex;
        flex-direction:column;
        margin-top:30px;
        .opt{
            display: inline-block;
            width:80%;
            transform:translateX(-8%);
        }
        .rows{

            height:30px;
        }
        .check{
            margin-bottom:12px;
        }
    }
    .greenText{
        display:inline-block;
        margin:18px;
        color:lightseagreen;
        font-weight:700;
        font-size:0.9rem;
    }
    `
const ExpertiseDiv = styled.div`
    position:relative;
    width:100%;
    height:8%;
    /* background-color:grey; */
    .inputDiv{
        display:flex;
        justify-content:center;
        input{
            margin-top:20px;
            width:100%;
            background-color:rgba(218, 218, 218,0.2);
            border: 0.5px solid rgba(218, 218, 218,0.6);
            outline:none;
            border-radius:4px;
            height:45px;
            font-size:3rem;
            z-index:10;
            &:focus{
                background-color:rgba(218, 218, 218,1);
                color:white;
                font-size:0.8rem;
                padding:3px;
                letter-spacing:2px;
            }
        }
        

    }
    .focus{
        width:85%;

    }

`
const TagesDiv = styled.div`

    width:50%;
    position:absolute;
    height:100%;
    /* border:1px solid black; */

    top:13px;
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
    z-index:1;
    
`
const SingleTag = styled.div`
    display:inline-block;
    margin:0px 3px;
    margin-top:20px;
    padding: 0px 7px;
    background:${props => props.color};
    border-radius:20px;
    color:white;
    height:25px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:0.8rem;
    .text{
        margin-right:10px;
        
    }
    button{
        all:unset;
        cursor:pointer;
    }
`
const SecondFilter = styled.div`
    margin-top:50px;
`

const sessionAvailableArr = [
    '30 min',
    '60 min',
    '15 min'
]
const Ratings = styled.div`
    margin-top:80px;
    width:100%;
    height:10%;
    .ratingsContainer{
        display:flex;
        flex-wrap: wrap;
    }
    .starContainer{
        width:43%;
        /* background-color:grey; */
        display:flex;
        justify-content:flex-start;
        align-items:center;
        transform:translateX(-6%);
    }
    label{
        all:unset;
    }
    
`
function Filters() {
    const [prices, setPrices] = useState({
        free: false,
        lessThan25: false,
        lessThan50: true,
        lessThan100: false,
        moreThan100: false,
    })
    let priceChangeHandler = (event) => {
        setPrices({ ...state, [event.target.name]: !state[event.target.name] });
    }
    const handleChange = (event) => {
        console.log(event.target.checked)
        setState({ ...state, [event.target.name]: !state[event.target.name] });
    };
    const GreenCheckbox = withStyles({
        root: {
            color: 'rgba(218, 218, 218,0.8)',
            '&$checked': {
                color: 'lightseagreen'
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const [state, setState] = React.useState({
        checkedG1: true,
        checkedG2: true,
        checkedG3: true,
        checkedG4: true,
    });

    const [session, setSession] = React.useState({
        thirty: true,
        sixty: false,
        fifteen: false,
    });
    let sessionChangeHandler = (event) => {
        setSession({ ...state, [event.target.name]: !state[event.target.name] });
    }

    const [lang, setLang] = useState({
        English: true,
        French: false,
        German: false,
        Hindi: false,
        Arabic: false,
        Mandarin: false
    })
    const handleLangChange = (event) => {
        setLang({ ...state, [event.target.name]: !state[event.target.name] });

    }
    const [expertise, setExpertise] = useState(['Branding', 'Srategy'])
    const [focus, setFocus] = useState(['Focus Area', 'Focus Areab', 'Focus Areac', 'Focus Aread'])


    let oneStar = <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 4px' }} />
    let twoStar =
        <>     <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
        </>
    let threeStar =

        <>     <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />

            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
        </>
    let fourStar =

        <>     <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />

            <StarIcon style={{ color: 'coral', fontSize: 16, margin: '0px 2px', transform: 'translateX(-50%)' }} />
        </>


    const [ip1, set1] = useState('');
    const [ip2, set2] = useState('');
    const create1 = (str) => {
        if (ip1 !== '') {
            let newArr = expertise.concat(ip1);
            setExpertise(newArr)
            set1('')
        }
    }
    const handleSub1 = (ev) => {
        if (ev.key === 'Enter') {
            create1();
        }
    }
    const del1 = (str) => {
        let newArr = expertise.filter(single => single !== str);
        setExpertise(newArr)
    }
    const del2 = (str) => {
        let newArr = focus.filter(single => single !== str);
        setFocus(newArr)
    }
    const create2 = (str) => {
        if (ip2 !== '') {
            let newArr = focus.concat(ip2);
            setFocus(newArr)
            set2('')
        }
    }
    const handleSub2 = (ev) => {
        if (ev.key === 'Enter') {
            create2();
        }
    }
    return (
        <FilterBack>
            <FilterText>Filters</FilterText>
            <FiltersContainer>
                <span className='greyText'>Expertise</span>
                <ExpertiseDiv>
                    <div className='inputDiv'>
                        <input value={ip1} onChange={e => set1(e.target.value)} onKeyPress={handleSub1}></input>
                    </div>
                    <SearchIcon style={{ color: '#32bc9b', position: 'absolute', top: '27px', right: '3%', fontSize: 30, zIndex: 100, cursor: 'pointer' }} onClick={create1} />
                    <TagesDiv>
                        {expertise.map((single, index) =>
                            <SingleTag key={index} color={index == 1 ? 'rgb(153, 189, 107)' : 'royalblue'}>
                                <span className='text'>{single}</span>
                                <button onClick={e => del1(single)}>x</button>
                            </SingleTag>
                        )}
                    </TagesDiv>
                </ExpertiseDiv>
                <SecondFilter>

                    <span className='greyText'>foucs area</span>
                    <ExpertiseDiv>
                        <div className='inputDiv'>
                            <input value={ip2} onChange={e => set2(e.target.value)} onKeyPress={handleSub2}></input>
                        </div>
                        <SearchIcon style={{ color: '#32bc9b', position: 'absolute', top: '27px', right: '3%', fontSize: 30, zIndex: 100, cursor: 'pointer' }} onClick={create1} />
                        <TagesDiv className='focus'>
                            {focus.map((single, key) =>

                                <SingleTag key={key} color={single == 'Focus Areab' ? 'rgb(153, 189, 107)' : 'royalblue'}>
                                    <span className='text'>{single}</span>
                                    <button onClick={e => del2(single)}>x</button>
                                </SingleTag>
                            )}
                        </TagesDiv>
                    </ExpertiseDiv>
                </SecondFilter>
                <Ratings>
                    <span className='greyText'>ratings</span>
                    <div className='ratingsContainer'>
                        <div className='starContainer'>
                            <FormControlLabel control={<GreenCheckbox checked={state.checkedG1} onChange={handleChange} name="checkedG1" />} /> {fourStar}
                        </div>
                        <div className='starContainer'>
                            <FormControlLabel control={<GreenCheckbox checked={state.checkedG2} onChange={handleChange} name="checkedG2" />} />{threeStar}
                        </div>
                        <div className='starContainer'>
                            <FormControlLabel control={<GreenCheckbox checked={state.checkedG3} onChange={handleChange} name="checkedG3" />} />{threeStar}
                        </div>
                        <div className='starContainer'>
                            <FormControlLabel control={<GreenCheckbox checked={state.checkedG4} onChange={handleChange} name="checkedG4" />} />{twoStar}
                        </div>
                    </div>
                </Ratings>
                <div className='flexColumn'>
                    <span className='greyText check'>price</span>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={prices.free}
                                onChange={priceChangeHandler} name={"free"} />} />
                        <span className='opt'>Free</span>
                    </div>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={prices.lessThan25}
                                onChange={priceChangeHandler} name={"lessThan25"} />} />
                        <span className='opt'>Less than $25</span>
                    </div>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={prices.lessThan50}
                                onChange={priceChangeHandler} name={"lessThan50"} />} />
                        <span className='opt'>$25-$50</span>
                    </div>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={prices.lessThan100}
                                onChange={priceChangeHandler} name={"lessThan100"} />} />
                        <span className='opt'>$50-$100</span>
                    </div>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={prices.moreThan100}
                                onChange={priceChangeHandler} name={"moreThan100"} />} />
                        <span className='opt'>More than $100</span>
                    </div>
                </div>
                <div className='flexColumn'>
                    <span className='greyText check'>session availability</span>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={session.thirty}
                                onChange={sessionChangeHandler}
                                name="thirty" />} />
                        <span className='opt'>30 min</span>
                    </div>
                    <div className='rows'>

                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={session.sixty}
                                onChange={sessionChangeHandler}
                                name="sixty" />} />
                        <span className='opt'>60 min</span>
                    </div>
                    <div className='rows'>





                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={session.fifteen}
                                onChange={sessionChangeHandler}
                                name="fifteen" />} />
                        <span className='opt'>15 min</span>
                    </div>
                </div>
                <div className='flexColumn'>
                    <span className='greyText check'>languages</span>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.English}
                                onChange={handleLangChange}
                                name="English" />} />
                        <span className='opt'>English</span>
                    </div>
                    <div className='rows'>

                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.French}
                                onChange={handleLangChange}
                                name="French" />} />
                        <span className='opt'>French</span>
                    </div>
                    <div className='rows'>

                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.German}
                                onChange={handleLangChange}
                                name="German" />} />
                        <span className='opt'>German</span>
                    </div>
                    <div className='rows'>

                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.Hindi}
                                onChange={handleLangChange}
                                name="Hindi" />} />
                        <span className='opt'>Hindi</span>
                    </div>
                    <div className='rows'>

                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.Arabic}
                                onChange={handleLangChange}
                                name="Arabic" />} />
                        <span className='opt'>Arabic</span>
                    </div>
                    <div className='rows'>
                        <FormControlLabel
                            control={<GreenCheckbox
                                checked={lang.Mandarin}
                                onChange={handleLangChange}
                                name="Mandarin" />} />
                        <span className='opt'>Mandarin Chineese</span>
                    </div>
                </div>
                <span className='greenText'>MORE</span>

            </FiltersContainer>
        </FilterBack>
    )
}

export default Filters
