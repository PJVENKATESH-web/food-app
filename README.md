<!-- 
props are nothing but arguements 
arguements are passed to the functions as props are passed to the functional components
props can be used {props.nameOfProp} inside the component 
props are used for dynamically fetching the data

here some devlopers use destructing of the fly means instead of => this is javascript
(props) =>{props.resName},{props.cuisine}
({resName, cuisine}) =>{resName},{cuisine}

<div className="res-container">
          <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
          <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
</div>

const RestaurantCard =(props)=>{
    console.log(props)
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src=
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1bc9ddf53de574cdc35ab2f717df234" alt="res-logo"/>
            <h3>{props.resName}</h3> 
            <h4>{props.cuisine}</h4>  
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>

    )
} -->

//how restaurant card will come from the backend
if you go to swiggy.com

Inspect ->Network ->Fetch/XHR->you can find one of the api of restaurants->preview
if mapi is ther after swiggy.com change it to dapi
https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4889338&lng=78.3922053&carousel=true&third_party_vendor=1

//json viewer plugin

?. is optional chaining
<div className="res-container">
            {resList.map((restaurant)=>{
                <RestaurantCard resData={restaurant}/>
            })}
</div>

<img className="res-logo" src=
            {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} 
            alt="res-logo"
            />
Template literals: Use backticks (`) to create a template literal and embed variables or expressions using ${}.
Curly braces in JSX: Wrap the entire expression in {} to tell JSX that it’s JavaScript code.