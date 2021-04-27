import React, { useRef } from 'react';
import deco from './../Assets/AboutUsDeco.png'
import Map from "./common/MapContainer";
import Qmark from './../Assets/Qmark.png'
import small_logo from './../Assets/small_logo.png'
import PageHeader from './common/PageHeader';
import Statics from './common/Statics';
import UseOnScreen from './common/UseOnScreen'

// this page represent about us page
function AboutUs() {
    const textRef = useRef();
    const fHeadline = useRef();
    const sHeadline = useRef();
    const tableRef = useRef();
    const QTextRef = useRef();
    const mapRef = useRef();

    return (

        <div style={{ backgroundColor: 'white', padding: '10px', paddingTop: '0', direction: 'rtl' }}>
            <div className="container">
                <div className="row">
                    <PageHeader />
                </div>
                <div className="container">
                    <h2 ref={fHeadline} className={UseOnScreen(fHeadline) ? "headlines entering" : "headlines"} >من نحن ؟</h2>
                    <div className="row">
                        <div className="col-md-2 d-xs  ">
                            <img src={Qmark} alt="Qustion mark" id='Qmark' />
                        </div>
                        <div className="col-md-10 ">
                            <p ref={QTextRef} id={UseOnScreen(QTextRef) && "QText"} className="text">ﻣﺆﺳﺴﺔ إﻃﺎر أﺣﻤﺮ <img src={small_logo} style={{ width: '18%', backgroundColor: 'black' }} alt="red frame"></img> ﻣﺆﺳﺴﺔ  ﺳﻌﻮدﻳﺔ،
                            ﻣﻘﺮﻫﺎ اﻟﺮﺋﻴﺴﻲ ﻣﺪﻳﻨﺔ اﻟﺮﻳﺎض ﺑﺎﻟﻤﻤﻠﻜﺔ اﻟﻌﺮﺑﻴﺔ اﻟﺴﻌﻮدﻳﺔ. ﺗﻘﺪم ﺧﺪﻣﺎت إﻋﻼﻣﻴﺔ ﺗﺘﻔﻖ ﻣﻊ ﻃﺒﻴﻌﺔ اﻟﻌﺼﺮ اﻟﺤﺪﻳﺚ اﻟﺬي ﻳﻤﺘﺎز ﺑﺎﻟﺴﺮﻋﺔ
                            واﻟﺠﻮدة واﻹﺑﺪاع. وﻻ ﻳﺘﻌﻠﻖ اﻷﻣﺮ ﺑﺎﻗﺘﺮاح ﻣﺎ ﻳﺘﻌﻴﻦ ﻗﻮﻟﻪ أو ﻓﻌﻠﻪ ﻓﺤﺴﺐ.
                            ﺑﻞ ﺗﻮاﻛﺐ أﺣﺪث اﻟﻤﻤﺎرﺳﺎت اﻟﺬﻛﻴﺔ اﻟﺘﻲ ﺗﻨﺘﺞ أﻋﻤﺎﻻ ﻣﺒﺘﻜﺮة. اﻟﺘﺠﺎرب اﻟﻨﺎﺟﺤﺔ ﻟﻠﺸﺮﻛﺎت ﺳﺎﻋﺪت ﻓﻲ ﺗﻜﻮﻳﻦ ﺛﺮوة ﻣﻌﺮﻓﻴﺔ ﻻ ﺗﻘﺪر ﺑﺜﻤﻦ، وﺑﺎﻟﺘﺎﻟﻲ اﻟﻘﺪرة ﻋﻠﻰ وﺿﻊ ﺧﻴﺎرات وﺑﺪاﺋﻞ ﻣﺘﺠﺪدة، ﻟﻴﻨﻌﻢ اﻟﺸﺮﻛﺎء ﺑﺮاﺣﺔ اﻟﺒﺎل واﻻﻃﻤﺌﻨﺎن
                            وﻫﻢ ﻳﻨﻄﻠﻘﻮن ﺑﺜﻘﺔ ﻟﺘﺤﻘﻴﻖ أﻫﺪاﻓﻬﻢ، ﻣﺴﺘﻨﺪﻳﻦ ﻋﻠﻰ ﻋﻤﻞ إﻋﻼﻣﻲ ﻣﺤﺘﺮف.
                            </p>
                        </div>
                    </div>
                    <p ref={textRef} id="side_line" className={UseOnScreen(textRef) ? 'text entering' : "text"}>
                        <strong>ﺿﻤـﺎن ﺟـﻮدة اﻟﻤﻬﺎم واﻹﺟﺮاءات واﻟﻤﺨﺮﺟـﺎت ﻓﻲ اﻟﻤﺸـﺮوع</strong>
                        <br />
                        ﺗـﺘﺒﻨﻰ اﻟﻤﺆﺳﺴــﺔ ﻣـﻨﻬﺠﺎ ﻋـﻠﻤﻴﺎ ﻓـﻲ إﺟـﺮاءات ﺿـﻤﺎن اﻟـﺠﻮدة ﻓـﻲ اﻟـﻤﺸﺎرﻳـﻊ ،ﺑـﺎﻋـﺘﺒﺎرﻫـﺎ ﻋـﻤﻠﻴﺔ ﺗـﻮﺛـﻴق ﻟﻠﺒﺮاﻣــﺞ واﻹﺟـﺮاءات وﺗﻄﺒﻴـﻖ اﻷﻧﻈﻤـﺔ واﻟﻠﻮاﺋـﺢ واﻟﺘﻮﺟﻴﻬـﺎت، وﻳﻘﺼـﺪ ﺑﺠـﻮدة اﻟﻌﻤـﻞ ﻓـﻲ اﻟﻤﺸـﺮوع: أن ﻳﻜـﻮن اﻟﻌﻤـﻞ واﺿﺤـﺎ وﻣﺨﻄﻄــﺎ ﻟــﻪ وﺿﻤــﻦ ﻣﺴــﺎرات ﻣﺤــﺪدة وﺗﺤﺪﻳــﺪا ﻟﻠﻤﻬــﺎم ﻣــﻊ ﺗﺤﺪﻳــﺪ ﻣﺆﺷــﺮات وﻣﻌﺎﻳﻴــﺮ ﻟﺠــﻮدة اﻟﻤﻨﺘــﺞ واﻟﻤﺨﺮﺟــﺎت اﻟﻨﻬﺎﺋﻴـﺔ، وأن ﻳﻜـﻮن ﺟﻤﻴـﻊ أﻋﻀـﺎء ﻓﺮﻳـﻖ اﻟﻌﻤـﻞ ﻋﻠـﻰ وﻋـﻲ ودراﻳـﺔ ﺑﻜﺎﻓـﺔ اﻟﺸـﺮوط واﻟﻤﻮاﺻﻔـﺎت واﻟﻤﻌﺎﻳﻴـﺮ ﻟﺘﺤﻘﻴـﻖ
اﻷﻫﺪاف وﺿﻤﺎن ﺟﻮدة اﻹﺟﺮاءات واﻟﻤﻨﺘﺠﺎت وﻳﺄﺧــﺬ ﻣﻔﻬــﻮم اﻟﺠــﻮدة ﻋﻨــﺪ ﺗﻄﺒﻴﻘــﻪ ﻓــﻲ اﻟﻤﺸــﺮوع أﺑﻌــﺎدا أوﺳــﻊ. ﺣﻴــﺚ ﺗﻬﺘــﻢ ﻓــﺮق اﻟﻤﺘﺎﺑﻌــﺔ ﻣــﻦ اﻟﻤﺆﺳﺴــﺔ وﺑﻤﺸــﺎرﻛﺔ ﻓــﺮق اﻟﻤﺘﺎﺑﻌــﺔ واﻹﺷــﺮاف ﻓــﻲ اﻟﺸــﺮﻛﺔ ﺑﺘﺤﺴــﻴﻦ ﻋﻤﻠﻴــﺎت ﻛﻞ ﻣــﻦ اﻟﺼﻴﺎﻏــﺔ واﻟﺘﺤﺮﻳــﺮ واﻟﺘﺪﻗﻴــﻖ واﻹﻧﺘــﺎج
واﻹﺧﺮاج، ﺑﺎﻹﺿﺎﻓﺔ إﻟﻰ ﻋﻤﻠﻴﺎت اﻷرﺷﻔﺔ واﻟﺘﻮﺛﻴﻖ ﻟﻜﺎﻓﺔ اﻟﻤﻬﺎم وﺗﻄﻮﻳﺮ اﻷداء
</p>
                    <table ref={tableRef}>
                        <tbody>
                            <tr>
                                <td><span className={UseOnScreen(tableRef) && 'fade'} style={{ animationDelay: '0ms' }}>تصميم</span></td>
                                <td><img style={{ width: '30%' }} src={deco} alt="" /></td>
                                <td><span className={UseOnScreen(tableRef) && 'fade'} style={{ animationDelay: '2000ms' }}>عمل فني</span></td>
                                <td><img src={deco} style={{ width: '30%' }} alt="" /></td>
                            </tr>
                            <Statics />
                            <tr>
                                <td><img src={deco} style={{ width: '30%' }} alt="" /></td>
                                <td><span className={UseOnScreen(tableRef) && 'fade'} style={{ animationDelay: '1000ms' }}>عميل</span></td>
                                <td><img src={deco} style={{ width: '30%' }} alt="" /></td>
                                <td><span className={UseOnScreen(tableRef) && 'fade'} style={{ animationDelay: '3000ms' }}>إنتاج إعلامي</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 ref={sHeadline} className={UseOnScreen(sHeadline) ? "headlines entering" : "headlines"}>أين موقعنا</h2>
                    <address>الرياض</address>
                    <div ref={mapRef} id="mapcontainer" className={UseOnScreen(mapRef) && 'entering'}>
                        <Map />
                    </div>
                </div ></div>
        </div>
    );
}


export default AboutUs;