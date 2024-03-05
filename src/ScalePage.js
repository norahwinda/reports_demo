import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';

const ScalePage = () => {
  const [score, setScore] = useState(null)
  const [numOfScales, setNumOfScales] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  const [btn4, setBtn4] = useState(false)
  const [btn5, setBtn5] = useState(false)
  const navigate = useNavigate();
  // const idRef = React.useRef(numOfScales);

  const handleScoreBtn1 = (e) =>{
    setScore(e.target.id)
    setBtn1(true)
    setBtn2(false)
    setBtn3(false)
    setBtn4(false)
    setBtn5(false)
  }

  const handleScoreBtn2 = (e) =>{
    setScore(e.target.id)
    setBtn1(false)
    setBtn2(true)
    setBtn3(false)
    setBtn4(false)
    setBtn5(false)
  }

  const handleScoreBtn3 = (e) =>{
    setScore(e.target.id)
    setBtn1(false)
    setBtn2(false)
    setBtn3(true)
    setBtn4(false)
    setBtn5(false)
  }

  const handleScoreBtn4 = (e) =>{
    setScore(e.target.id)
    setBtn1(false)
    setBtn2(false)
    setBtn3(false)
    setBtn4(true)
    setBtn5(false)
  }

  const handleScoreBtn5 = (e) =>{
    setScore(e.target.id)
    setBtn1(false)
    setBtn2(false)
    setBtn3(false)
    setBtn4(false)
    setBtn5(true)
  }

  const payload = {
    username: "User",
    scale_id : "65e477d4b03c50d68115abd1",
    score: score,
    instance_id: numOfScales + 1,
    brand_name: "brand envue",
    product_name: "envue",
    process_id: ""
}
  
  async function handleSubmit (){
    try {
      setIsSubmitting(true)
      const response = await axios.post('https://100035.pythonanywhere.com/stapel/api/stapel_responses_create/', payload);
      setIsSubmitting(false)
      return response;
  } catch (error) {
      console.log(error);
  }
  }

  const fetchData = async () => {
    try {
        const response = await axios.get(`https://100035.pythonanywhere.com/report/scale_id/65e477d4b03c50d68115abd1`);
        setNumOfScales(response.data.report.categorize_scale_report.no_of_scales);
        console.log(response.data.report.categorize_scale_report.no_of_scales,'s')
    } catch (error) {
        console.error(error);
    } finally {
        // setIsLoading(false);
    }
  }
  
  useEffect(() => {
  // console.log(scale.settings.name)
  // const interval = setInterval(() => {
    fetchData();
  // }, 1000)

  // return () => clearInterval(interval)
}, []);

  console.log(numOfScales + 1, "HHHHHHHHHHHHHHHHHHHHHHH")
  return (
    <div className="App">
      <div className="boxesContainer">
      <div onClick={handleScoreBtn1} className="box" id = "1" style={{ backgroundColor: btn1 ? 'green' : 'grey', marginRight: '5px', borderRadius: '3px' }}>1</div>
        <div onClick={handleScoreBtn2} className="box" id = "2" style={{ backgroundColor: btn2 ? 'green' : 'grey', marginRight: '5px', borderRadius: '3px' }}>2</div>
        <div onClick={handleScoreBtn3} className="box" id = "3" style={{ backgroundColor: btn3 ? 'green' : 'grey', marginRight: '5px', borderRadius: '3px' }}>3</div>
        <div onClick={handleScoreBtn4} className="box" id = "4" style={{ backgroundColor: btn4 ? 'green' : 'grey', marginRight: '5px', borderRadius: '3px' }}>4</div>
        <div onClick={handleScoreBtn5} className="box" id = "5" style={{ backgroundColor: btn5 ? 'green' : 'grey', borderRadius: '3px' }}>5</div>
        </div>
        <Button onClick={handleSubmit} style={{marginBottom:'10px'}} variant="contained">{isSubmitting ? "Submitting" : "Submit"}</Button>
        <Button onClick={()=> navigate("/reportView")} style={{marginBottom:'10px'}} variant="contained">View report</Button>
    </div>
  )
}

export default ScalePage
