import { CardContent, Grid,Card,Rating,Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Product = () => {
    const[data,setData]=useState([]);
    const[categories,setCategories]=useState([]);
    const[dataCopy,setDataCopy]=useState([]);
    const[sendCate,setSendCate]=useState([]);  
    
    // console.log("sendCate===" ,sendCate)

    const getApi=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products");
        const result1=await axios.get("https://fakestoreapi.com/products/categories");

        setData(result.data);
        setDataCopy(result.data)
        setCategories(result1.data);

    }
    useEffect(()=>{
        getApi();
    },[])

    useEffect(()=>{
        const filt=dataCopy.filter((item)=>item.category === sendCate);
        setData(filt);
    },[sendCate])

  return (
    
    <Grid container spacing={2}>
    {
        categories.map((item)=>
        <Grid item xs={3} sx={{marginTop:"30px",marginBottom:"30px"}}>
            <Button variant="contained" fullWidth onClick={()=>setSendCate(item)}>{item}</Button>
        </Grid>
        )
    }
        {data.map((item)=>
            <Grid item xs={3}>
            <Card>
                <CardContent>
                <img src={item.image} height={"250px"} width={"250px"} alt="" />
                <h3>{item.title.slice(0,30)}</h3>
               <Button variant="contained" color="error">Rs.{item.price}</Button>
                <p>{item.description.slice(0,55)}</p>
                <Rating value={item.rating.rate} />({item.rating.count})
                </CardContent>
            </Card>
                
                
            </Grid>
           
        )}
        
    </Grid>
  );
};

export default Product;
