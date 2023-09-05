import './DownloadImg.css';


function DownloadImg(props) {
  return (
    <div className="DownloadImg">
      <div> {props.title}</div>
      <div> {props.subtitle}</div>
      <button>{props.btntext}</button>
      <div> {props.subtext}</div>
    </div>
  );
}

export default DownloadImg;
