import React, { useState } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";
import { faLinkedinIn, faSnapchatGhost, faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { cleanSelected } from '../../Services';
import { CSSTransition } from 'react-transition-group'



function PageHeader({ above = '' }) {
    const history = useHistory();
    const [share, setShare] = useState(false);// if share is false the share conrols will hide , if it true share conrols will show
    const [clicked, setClicked] = useState(false);// if clicked is false the class of button conrols will hide , if it true the class of button conrols will show

    // class name change if screen size is less than 576px or there is div above the controls   (window.innerWidth < '576' || navigator.vendor.includes('Apple')) &&
    let classname = ''
    if (above !== '') {
        classname = 'col-12 p-0'
    }
    else if (above === '') {
        classname = 'row'
    }

    return (
        <div className="container">
            <div className={classname} style={{ zIndex: '4' }} >

                <div className="control_container" >
                    <Button classname="controls"
                        label={<FontAwesomeIcon icon={faTimes} />}
                        handleClick={() => { cleanSelected(); history.push('/'); }} />
                </div>

                <div className={clicked ? 'control_container_clicked' : "control_container"} >
                    <Button classname="controls"
                        label={<FontAwesomeIcon icon={faShareAlt} />}
                        handleClick={() => { setShare(!share); setClicked(!clicked); }} />
                </div>

            </div>
            {above}

            <CSSTransition
                timeout={300}
                classNames='share'
                in={share}
                unmountOnExit>

                <div className='text-right mr-3 mr-md-5  mt-2'>
                    <Button classname="share_controls" label={<FontAwesomeIcon className='share_icon' icon={faLinkedinIn} />} handleClick={() => { window.open("https://www.linkedin.com/shareArticle?mini=true&url=") }} />
                    <Button classname="share_controls" label={<FontAwesomeIcon className='share_icon' icon={faSnapchatGhost} />} handleClick={() => { }} />
                    <Button classname="share_controls" label={<FontAwesomeIcon className='share_icon' icon={faTwitter} />} handleClick={() => { window.open("https://twitter.com/intent/tweet?url=&text=مؤسسة ريد فريم ") }} />
                    <Button classname="share_controls" label={<FontAwesomeIcon className='share_icon' icon={faTelegramPlane} />} handleClick={() => { window.open("https://t.me/share/url?url=https://www.linkedin.com/shareArticle?mini=true&url=&text=مؤسسة ريد فريم") }} />

                </div>

            </CSSTransition>

        </div>
    )
}




export default PageHeader;