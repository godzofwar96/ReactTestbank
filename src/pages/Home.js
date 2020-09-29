import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import ImageLoading from '../Ultils/ImageLoading';

const Home = () => {
    const [arr, setArr] = useState([]);
    const [count, setCount] = useState(0);
    const setClickButton =()=>{
        setCount(count+1);
        let dice = Math.random();
        arr.push(dice);
    }
    return (
        <div>
            <Button
                variant="success"
                onClick={()=>setClickButton()}
            >
                Click me!
            </Button>
            <ul className="list-group">
                {
                    arr.map((i,index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <p className="h3">{i}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <ImageLoading notMobile="342px" desktop="409px" mobile="188px" tablet="254px" smallSrc="https://i0.wp.com/s1.uphinh.org/2020/09/26/kent.jpg" largeSrc="https://i0.wp.com/s1.uphinh.org/2020/09/26/kent.jpg" />
            <p className="h4">a</p>
            <Image className="img-fluid" src={require("../assets/images/anphat_logo.png")} alt="logo"/>
        </div>
    )
}

export default Home
