import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
<div style={{width:"100vw",height:"100vh",display:"flex"}}>
<div style={{position:"relative",top:"0px",left:"0px",height:"100vh",width:"40vw",backgroundColor:"grey"}}>
    <p style={{color:"red"}}>hii how are you</p>
</div>
<div style={{position:"relative",top:"0px",left:"0px",height:"100vh",width:"60vw"}}>
<SignIn />
</div>
</div>
  );
  
//   <SignIn />;
}