import { Provider } from "react-redux"
import Router from "./shared/Router"
import GlobalStyle from "./styles/globalStyles"
import { store } from "./redux/config/configStore"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <GlobalStyle/>
      <ToastContainer 
        autoClose={1500}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={true}
        theme="light"/>
        <Provider store={store}>      
          <Router/>
        </Provider>
    </>
  )
}

export default App
