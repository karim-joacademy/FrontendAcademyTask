import './App.css'
import AppRoutes from "./routes/index.jsx";
import {AuthContextProvider} from "src/context/AuthContextProvider.jsx";

function App() {

    return (
        <AuthContextProvider>
            <AppRoutes />
        </AuthContextProvider>

    )
}

export default App
