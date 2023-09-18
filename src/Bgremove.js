import close from './assets/close.jpeg'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import './Bgremove.css';
import DownloadImg from './DownloadImg';
import { useState } from "react";
import Image from './Image';

function Bgremove() {
  const [tabname, settabname] = useState('original');
  function tab_click(e) {
    if(e.target.className == "tab_button_original"){
      settabname('original');
    }
    else{
      settabname('no_bg')
    }

        
  }
  

  return (
    <div>
        <div className='bg_div_cont'>

            <div className='bg_div_header'>
                <image src = {close} className='close_img'/>
                <div className='bg_div_header_title'>העלאת תמונה כדי להסיר את הרקע</div>
                    <button className='bg_div_header_button'>העלאת תמונה</button>
                    <div className='bg_div_header_subtext'> pnj,jpeg - פורמטים נתמכים   </div>
                </div>
                <div className='main_cont'>
                  <div className='main_cont_left'>
                    <div className='middle_div_left'>
                        <div className="tab_button_no_bg" style={{borderBottom: (tabname=="no_bg" ? "3px solid #9C27B0": "")}} onClick={tab_click}> הוסר רקע </div>
                        <div className="tab_button_original"  style={{borderBottom: (tabname=="original" ? "3px solid #9C27B0": "")}} onClick={tab_click}> מקורי </div>
                        {tabname == "no_bg"?
                        <Image image_only = {true}/>
                        :
                        <Image image_only = {false}/>
                        }             

                    </div>
                   



                    <div className='main_cont_left_footer'>
                    <div className='main_cont_left_footer_text'>ע"י העלאת תמונה הנך מסכים לתנאים וההגבלות של החברה.</div>
                    <button className='company_policy_btm'>תקנון החברה</button>

                    </div>

                  </div>
                  <div className='main_cont_right'>
                    <div className='middle_div_right'>
                      <DownloadImg title = "תמונה חינם" subtitle = " תצוגה מקדימה של תמונה 612x418" btntext = "הורד" subtext="האיכות הטובה עד 0.25 מגה פיקסל" borderFlag = {true} titleImg = {false}/>
                      <DownloadImg title = "Pro" subtitle = "תמונה מלאה 1280x1920" btntext = "HD הורד" subtext="האיכות הטובה ביותר עד 0.25 מגה פיקסל"  borderFlag = {false} titleImg = {true}/>
                      
                    </div>
                  </div>

                </div>
                <div className='footer_cont'>
                  <img src={logo} className='logo'/>
                  <a href='http://www.google.com'target='_blank'><img src={banner} className='banner'/></a>

                </div>
        </div>
    </div>
        
    
  );
}

export default Bgremove;
