import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className = 'home_container'>
                <img className ='background_image' src='http://pngimg.com/uploads/amazon/amazon_PNG24.png' alt=''/>
                <div className = 'home_row'>
                <Product id='38273819' title='Ramtons RM/570 Cordless Kettle' price={63.99} image='https://www.ramtons.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/r/m/rm-349.jpeg' rating={3}/>
                <Product id='84728392' title='Vincero Deluxe Watch' price={1589.99} image='https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1585705986' rating={3}/>
                <Product id='20382718' title='Samsung Microwave MS1532' price={220.99} image='https://brain-images-ssl.cdn.dixons.com/9/4/10164049/u_10164049.jpg' rating={3}/>
                {/*Products*/}
                {/*Products*/}
                </div>    
                <div className = 'home_row'>
                <Product id='93728373' title="Rockfield Men's Sneakers" price={21.99} image='https://images-na.ssl-images-amazon.com/images/I/611TWd7sDIL._UL1500_.jpg' rating={3}/>
                <Product id='30288484' title='Playstation 5' price={499.99} image='https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg' rating={5}/>
                <Product id='80680686' title='Ramtons Fridge Freezer' price={999.99} image='https://copia.co.ke/wp-content/uploads/2020/06/Ramtons-90-L-Double-Door-Direct-Cool-Fridge-Silver-RF222_Refrigerators_16596_1.jpeg' rating={3}/>
                <Product id='94854945' title='William Lawson Whiskey' price={79.99} image='https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/846721/1.jpg?2626' rating={3}/>
                {/*Products*/}
                {/*Products*/}
                {/*Products*/}
                </div> 
                <div className = 'home_row'>
                
                <Product id='49854858' title='Nutribullet Blender 1200W' price={53.99} image='https://images-na.ssl-images-amazon.com/images/I/71t6qSxiaWL._AC_SL1500_.jpg' rating={3}/>
                <Product id='85948848' title='LG UHD TV 49 Inch' price={1299.99} image='https://www.lg.com/eastafrica/images/tvs/md06145038/gallery/D1.jpg' rating={3}/>
                {/*Products*/}
                
                </div>                 
            </div>
            
        </div>
    )
}

export default Home
