import './Header.css';
import { AskButton } from '../Button/Button';

export default function Header(props) {
  return (
    <>
      <span className="header_tag">All Question</span>
      <div className="header_btn">
        <AskButton />
      </div>
    </>
  );
}
