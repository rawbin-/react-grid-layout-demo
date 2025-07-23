import RGL, { WidthProvider } from 'react-grid-layout'
import './App.css'

const ReactGridLayout = WidthProvider(RGL)
function App() {

    return <div className="wrapper">
        <ReactGridLayout>
            <div className="item item-a" key="a">a</div>
            <div className="item item-b" key="b">b</div>
            <div className="item item-c" key="c">c</div>
            <div className="item item-d" key="d">d</div>
        </ReactGridLayout>
    </div>
}

export default App
