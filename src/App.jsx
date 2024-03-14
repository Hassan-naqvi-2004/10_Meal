import React from 'react'
import { useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";
import { RxDiscordLogo } from "react-icons/rx";



const App = () => {

    const api = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        async function meal(){
        const data = await fetch(api);
        const data2 = await data.json()

        console.log(data2.meals)
        setMeals(data2.meals)
      }
      meal()
      
    },[])
    
    const handleChange = async (e)=>{
      const api2 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`
      const data = await fetch(api2);
      const data2 = await data.json()

      console.log(data2.meals)
      setMeals(data2.meals)
    }

    const mySearch = async (e)=>{
      const api3 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      const data = await fetch(api3);
      const data2 = await data.json()

      console.log(data2.meals)
      setMeals(data2.meals)
    }

  return (
  <div>
  <nav>
      <div className='navbar'>
        
      <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
      <div className='name'>
      <button>Home</button>
      <div className='btn'>
      <button>API</button>
      </div>
      <div className='btn1'>
      <input placeholder='Search' type="text" onChange={handleChange}/>
      </div>
      </div>

      </div>
  </nav>
<div className='mainDIV'> 
<div className='icon'>
     
    <div className='btn2'>
      <input placeholder='Search' type="text" onChange={(e)=> setSearch(e.target.value)}/>
      <button onClick={mySearch}><CiSearch style={{color:'black'}} /></button>
    </div>
    <div className='image'>
      <img src="https://www.themealdb.com/images/icons/meal-icon6.png" alt=""/>
      <p><b>Total Meals</b>:302</p>
      <img src="https://www.themealdb.com/images/icons/meal-icon4.png" alt="" />
      <p><b>Total Ingrediants</b>:575 </p>
      <img src="https://www.themealdb.com/images/icons/image2.png" alt="" />
      <p><b>Images</b>:302</p> 
    </div>
 
  </div>
  {/* <hr></hr> */}
  <div className='list'>
      <h1>Latest Meals</h1>
      </div>
      <div className='main'>
      
      {meals.map((e)=>{
        const {strMeal,strMealThumb} = e
        return(
          <>
          
          <div className='text'> 
          
          <img src={strMealThumb} alt="" />
          <h1>{strMeal}</h1>
          </div>
         
          </>
        )
      })}
      
      </div>
      
</div>
<div className='main-footer-i'>
    <div className='footer'>
       <p>&copy; 2024 TheMealDB<br/>Proudly built in the PK</p>
       <div className='f-icon'>
          <h1>Social:</h1>
          <i><RiFacebookBoxLine /></i>
          <i><LiaTwitterSquare /></i>
          <i><RxDiscordLogo /></i>
        </div> 
        <div className='t-footer'>
          <p>About</p>
          <p>Faq</p>
          <p>Contact</p>
        </div>
        
    </div>
    <div className='main-footer'>
          <div className='img-footer'>
          <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
          <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
          </div>

          <div className='img1'>
          <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
          </div>
     </div>
</div>     
  {/* <hr></hr> */}
  

 </div> 
  )
}

export default App
