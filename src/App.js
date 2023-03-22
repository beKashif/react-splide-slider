import logo from './logo.svg';
import './App.css';
import SplideSlider from './components/SplideSlider';

function App() {
  const images = [
    "https://picsum.photos/id/1018/800/600",
    "https://picsum.photos/id/1019/800/600",
    "https://picsum.photos/id/1020/800/600",
    "https://picsum.photos/id/1021/800/600",
    "https://picsum.photos/id/1022/800/600",
  ]

  return (
    <div>
    <SplideSlider images={images} />  
    </div>
  );
}

export default App;
