import React,{ useState } from "react";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";


const Loading = ({darkMode,setDarkMode}) => {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    let [loading, setLoading] = useState(true);
    let [color,setColor] = useState('white')
    
  
    return (
        <div className="sweet-loading">
      
  
        <ClockLoader
 color={color}
  loading={loading} css={override} size={150} />
      </div>
   
    );
};

export default Loading;