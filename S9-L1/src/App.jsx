import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"
import milanLogo from "./assets/milan.png"

function App() {
  return (
    <>
      <ButtonComponent name="Sabatino" />
      <ImageComponent src={milanLogo} alt={"logo Milan"} />
    </>
  )
}

export default App
