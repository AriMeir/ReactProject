import './DownloadImg.css';


function DownloadImg(props) {
  return (
    <div className="DownloadImg_cont" style={{borderBottom: (props.borderFlag? "1px solid white" : "")}}>
      <div className='DownloadImg_title'> {props.title}</div>
      <div className='DownloadImg_subtitle'> {props.subtitle}</div>
      <button className='DownloadImg_btn'>{props.btntext}</button>
      <div className='DownloadImg_subtext'> {props.subtext}</div>
    </div>
  );
}

export default DownloadImg;
