import React from "react"
import {Grid, Paper, Avatar, TextField, FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ()=>{
    const paperStyle = {padding: 20, height: "70vh", width: "50vh", margin: "20px auto"}
    const lockBackgroundColor = {backgroundColor: "black"}
    const textFieldPadding = {paddingBottom: "20px"} 
    return (
        <Grid align = "center">
            <Paper elevation={10} style={paperStyle}>
                <Avatar style = {lockBackgroundColor}>
                    <LockOutlinedIcon/>
                </Avatar>
                <h2>Sign-in</h2>
                <TextField style = {textFieldPadding} label = "Username" placeholder = "Enter Username" fullWidth required/>
                <TextField label = "Password" placeholder = "Enter Password" type = "password" fullWidth required/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
                <Button type="submit" color="primary" variant="contained"   fullWidth>Sign-in</Button>
            </Paper>
        </Grid>
    )
}


export default Login