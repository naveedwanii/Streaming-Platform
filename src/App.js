
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
])



function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
        {/* <Body /> */}
      <RouterProvider router={appRouter} />

      
     
      {
        /*
        - Head
        - Body
        -  Sidebar
        -   MenuItems
        -   MainContainer
        -     ButtonsList
        -     VideoContainer
        -      VideoCard
        */
          }
           
    </div>
    </Provider>
    
  );
}

export default App;
