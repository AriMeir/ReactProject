import './Image.css';
import { useState, useRef , useEffect} from "react";


function Image(props) {
  const [color, settcolor] = useState('transperent');
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.click();
  };
  function color_change(e){
    settcolor(e.target.value)

  }
  return (
    <div>
      <div className="image_disp_cont">
        {props.image_only?
        <>
        <div className='image_disp_cont_text'>אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף</div>
        <div className='color_btn' onClick={focusInput}>צבע רקע
        <span className='color_choose' style={{backgroundColor: color}}></span>
        </div>
        
     
        <input type='color'  ref={inputElement} className='input_color' onChange={color_change}></input>
        </>
        : ""}
        <div className='image_pace'>

        </div>
      </div>
    </div>
  );
}

export default Image;
