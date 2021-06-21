import React, {useState} from 'react';
import './App.css';

const apiKey = '283673cf'

function App() {
  const [darkmode,setDarkmode] = useState(false);
  const [data,setData] = useState<any>([])

  const changeTheme = () => {
    if(darkmode){
    document.body.style.backgroundColor = "white"
    document.body.style.textDecorationColor= "black"
    }else{
    document.body.style.backgroundColor = "black"
    document.body.style.textDecorationColor= "white"
    }
    setDarkmode(!darkmode)
  }

  const getMovieRequest = async () => {
		const url = "http://www.omdbapi.com/?type=movie&s=inception&apikey="+apiKey;

		const response = await fetch(url);
		const responseJson = await response.json();

		
		setData(responseJson.Search);
	};
  const getSeriesRequest = async () => {
		const url = "http://www.omdbapi.com/?type=series&s=friends&apikey="+apiKey
		const response = await fetch(url);
		const responseJson = await response.json();

		
		setData(responseJson.Search);
	};
  return (
    <div className="main">
      <div className="header"><h1>Challenge App</h1></div>
      <div className="container">
        <button onClick={()=>{
        getMovieRequest();
        }}>Movies</button>
        <button onClick={()=>{
        getSeriesRequest();
        }} >Series</button>
      </div>
      <div>
        {data.sort((a:any, b:any) => a.Year > b.Year ? 1 : -1).map((item:any) =><li><a href="">{item.Title}</a><p></p></li>)}
      </div>
      <button onClick={()=>{
        changeTheme();
      }}>Change Theme</button>
    </div>
  );
}

export default App;
