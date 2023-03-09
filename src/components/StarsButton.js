import { Star } from '@mui/icons-material';

function StarsButton({ title, onHandleClick }) {
  return (
    <button className="button" onClick={onHandleClick}>
      <Star className="leftStar" />
      {title}
      <Star className="rightStar" />
    </button>
  );
}

export default StarsButton;
