import Button from '@mui/material/Button';
export default function MaterialUIDemo(){
    let handleClick=()=>{
        console.log(" click!");
    }
    return(
       <div>
    <h1>Material UI Demo</h1>
    <Button variant="contained" onClick={handleClick} href="/home" size="small">Click</Button>
    </div>
    )
}