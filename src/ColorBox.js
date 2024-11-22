import { useState } from 'react';
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard onCopy={handleCopy}>
      <div className='ColorBox' style={{ background }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ background }}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
