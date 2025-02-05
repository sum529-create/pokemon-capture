import { Provider } from "react-redux"
import Router from "./shared/Router"
import GlobalStyle from "./styles/globalStyles"
import { store } from "./redux/config/configStore"

function App() {

  return (
    <>
      <GlobalStyle/>
        <Provider store={store}>      
          <Router/>
        </Provider>
    </>
  )
}

export default App
