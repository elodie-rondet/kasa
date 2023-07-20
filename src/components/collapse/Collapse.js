import './collapse.scss'
import arrow from '../../images/arrow.png';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle && location.pathname !== '/Apropos' ? 'collapse_content' : location.pathname === '/Apropos' && toggle ? 'collapse_content_apropos' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
