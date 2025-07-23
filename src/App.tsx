import RGL, { WidthProvider } from 'react-grid-layout'

const ReactGridLayout = WidthProvider(RGL)
function App() {

  return (
    <>
        <ReactGridLayout
        >
            <div key="a">a</div>
            <div key="b">b</div>
            <div key="c">c</div>
        </ReactGridLayout>
    </>
  )
}

export default App
