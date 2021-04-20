import React, { Component } from 'react';
import SelectService from './SelectService';
import ServiceForm from './ServiceForm';
import Terms from './Terms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import path from './../Assets/Path.png'
import welcome from './../Assets/welcome.png'
import PageHeader from './common/PageHeader';
import EndPhase from './EndPhase';


export class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //  the content shows in the page will be based on which phase you on
            phase: 'first'
        };

    }

    // this function will change the phase to second after you finish first phase
    callbackFunction = () => {
        this.setState({
            phase: 'second'
        })
    }

    // this function will change the phase to third after you finish second phase

    callback = () => {
        this.setState({
            phase: 'third'
        })
    }

    /* this function will change the phase to end (which is the thank you for applyng page) 
    after you finish third phase */
    end = () => {
        this.setState({
            phase: 'end'
        })
    }

    render() {
        const phase = this.state.phase;

        return (
            <div style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl' }}>
                <div className="container">

                    {/* this is page header component with the prograss bar pass to it */}
                    <PageHeader above={
                        <div className={window.innerWidth < '576' ? "col-9 p-0 position-relative" : "row position-relative"}>
                            <img src={path} id='path' alt="progress line" />
                            <img src={welcome} id='welcome' alt="welcome" />

                            <table className="progross_table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className='current_phase_box'>
                                                <FontAwesomeIcon icon={faCheckCircle} className='icon_check' />
                                            </div><p className='prgross_stage'>اختيار الخدمة</p>
                                        </td>

                                        <td>
                                            <div className={phase !== 'first' ? 'current_phase_box' : 'pass_phase_box'} >
                                                <FontAwesomeIcon icon={faCheckCircle}
                                                    className={phase !== 'first' ? 'icon_check' : 'icon_noncheck'} /></div>
                                            <p className='prgross_stage'>الشروط والاحكام</p>
                                        </td>

                                        <td>
                                            <div className={phase !== 'second' && phase !== 'first' ? 'current_phase_box' : 'pass_phase_box'} >
                                                <FontAwesomeIcon icon={faCheckCircle}
                                                    className={phase !== 'second' && phase !== 'first' ? 'icon_check' : 'icon_noncheck'} />
                                            </div> <p className='prgross_stage'> تعبئة الطلب</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    } />

                    {/* this will present component depends on which phase is now */}

                    {phase === 'first' && <SelectService callbackFromParent={this.callbackFunction} />}
                    {phase === 'second' && <Terms callbackParent={this.callback} />}
                    {phase === 'third' && <ServiceForm parentCallback={this.end} />}
                    {phase === 'end' && <EndPhase />}
                </div>
            </div>

        );
    }
}


export default Order;