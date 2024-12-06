import ColorBox from './ColorBox';
import './Palette.css';

const Palette = ({ palette }) => {
  const colorBoxes = palette.colors[300].map((color) => (
    <ColorBox background={color.hex} name={color.name} key={color.name} />
  ));

  return (
    <div className='Palette'>
      <div className='Palette-colors'>{colorBoxes}</div>
    </div>
  );
};

export default Palette;
