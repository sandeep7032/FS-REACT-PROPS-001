import Cards from './components/Cards';
import './App.css';

const style = {
  display: "flex",
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  fontFamily: 'Arial, Helvetica, sans-serif'
}

function App() {
  return (
    <div style={style}>
      <Cards colorCode="#FF6563" colorName="PINK" />
      <Cards colorCode="#333333" colorName="GRAY" />
      <Cards colorCode="#000000" colorName="BLACK" />
      <Cards colorCode="#38BB14" colorName="GREEN" />
      <Cards colorCode="#C90B0B" colorName="RED" />
      <Cards colorCode="#FF8000" colorName="ORANGE" />
      <Cards colorCode="#FFF500" colorName="YELLOW" />
      <Cards colorCode="#CCCCCC" colorName="LIGHT GRAY" />
      <Cards colorCode="#7E41A2" colorName="PURPLE" />
      <Cards colorCode="#C14911" colorName="BROWN" />
    </div>
  );
}

export default App;
