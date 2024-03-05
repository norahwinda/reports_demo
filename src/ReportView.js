import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

const ReportView = () => {

    const [jsonData, setJSonData] = useState()
    const [numOfScales, setNumOfScales] = useState()

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://100035.pythonanywhere.com/report/scale_id/65e477d4b03c50d68115abd1`);
            setNumOfScales(response.data.report.categorize_scale_report.no_of_scales);
            setJSonData(response.data); 
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
      }, [numOfScales]);

  return (
    <div>
        <React.Fragment>
           <JsonView data={jsonData} shouldExpandNode={allExpanded} style={defaultStyles} />
      {/* <JsonView data={jsonData} shouldExpandNode={allExpanded} style={darkStyles} /> */}
      </React.Fragment>
    </div>
  )
}

export default ReportView
