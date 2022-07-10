import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, Grid } from "@mui/material";
import { v1 as uuid } from 'uuid'

const Question = () => {
    const navigate = useNavigate();
    if(Cookies.get("user") == null){navigate("/login")}
    const [cubes,setcubes] = useState([])
    const Add = () => {
        setcubes(cubes.concat("Pic.svg"));
    }
    const Delete = () => {
        setcubes(cubes.slice(1))
    }
    return(
        <div>
            {Cookies.get("user") && 
            <>
                <Grid items container><VolumeUpIcon color="primary"></VolumeUpIcon><span>Use cubes to show 2.</span></Grid>
                <Box sx={{ p: 2, border: '1px solid grey' ,width:250,height:50}}>
                    <div style={{display:"flex",flexDirection: 'row',justifyContent:'flex-start'}}>
                    {(cubes !== []) &&
                            cubes.map((item)=>{
                                return(
                                    <button key={uuid()} onClick={Delete}>
                                        <img src={item}  width={50} height={50}/>
                                    </button>)
                            })
                    }
                    </div>
                </Box>
                <br></br>
                <button onClick={Add}><img src="/Pic.svg" width={50} height={50}/></button>
            </>}
        </div>
    );

}

export default Question;