import './DownloadImg.css';
import newImg from './assets/new.png';

function open_download_popup(){

}

function DownloadImg(props) {
  return (
    <div className="DownloadImg_cont" style={{borderBottom: (props.borderFlag? "1px solid #ffffff85" : "")}}>
      <div className='title_container'>
      <div className='DownloadImg_title'> {props.title}</div>
      {props.titleImg? <img className='newImg' src={newImg}/>: ""}
      </div>
      <div className='DownloadImg_subtitle'> {props.subtitle}</div>
      <button className='DownloadImg_btn' onClick={open_download_popup}>{props.btntext}</button>
      <div className='DownloadImg_subsubtext'> {props.subtext}</div>







    </div>
  );
}

export default DownloadImg;
