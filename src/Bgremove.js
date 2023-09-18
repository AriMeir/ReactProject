import close from './assets/close.png'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import './Bgremove.css';
import DownloadImg from './DownloadImg';
import { useState, useRef } from "react";
import Image from './Image';

function Bgremove() {
  //for the file
  const inputFileElement = useRef();
  const focusInput = () => {
    inputFileElement.current.click();
  };
  const [open_poup, setopen_poup] = useState(false);

  function open_popup(){
    setopen_poup(true);

  }
  function close_popup(){
    setopen_poup(false);
  }


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
                    <button className='bg_div_header_button' onClick={focusInput}>העלאת תמונה</button>
                    <input type='file'  ref={inputFileElement} className='file_input'></input>
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
                    <button className='company_policy_btm' onClick={open_popup}>תקנון החברה</button>

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
        {open_poup? <>
        <div className='takanon_popup_overlay'></div>
          <div className='takanon_popup'>
          <img src={close} className='close_popup_img' onClick={close_popup}/>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
          </div>
          </>
          : ""}
        
        
      <div className='download_popup'>
      <div className='top_img'>

      </div>
      <div className='download_popup_title' >אישור להורדת תמונה</div>
      <div className='download_popup_subtitle'>האם להוריד את התמונה?</div>
      <div className='not_robot_cont'>
      <input type='checkbox' className='download_popup_checkbox'/>
      <span className='download_popup_not_robot'>אני לא רובוט</span>
      </div>
      <button className='download_popup_cancel'>ביטול</button>
      <button className='download_popup_approve'>אישור</button>

      </div> 
    </div>
        
    
  );
}

export default Bgremove;
