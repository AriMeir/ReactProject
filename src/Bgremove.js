import close from './assets/close.jpeg'
import './Bgremove.css';

function Bgremove() {
  return (
    <div>
        <div className='bg_div_cont'>

            <div className='bg_div_header'>
                <image src = {close} className='close_img'/>
                <div className='bg_div_header_title'>העלאת תמונה כדי להסיר את הרקע</div>
                    <button className='bg_div_header_button'>העלאת תמונה</button>
                    <div className='bg_div_header_subtext'> pnj,jpeg - פורמטים נתמכים   </div>
                </div>
        </div>
    </div>
        
    
  );
}

export default Bgremove;
