import React,{useState} from 'react'

function Form(){
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [usn,setUsn]=useState('');
    const [contact,setContact]=useState('');
    const [college,setCollege]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name:name,
            email:email,
            USN:usn,
            contact:contact,
            college:college
        }
        console.log();
    }
   
    return(
        <div><form align="center" onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='Student name' onChange={(e)=>setName(e.target.value)} /><br></br>
            <input type="email" value={email} placeholder='Student email' onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <input type="text" value={usn} placeholder='Student usn' onChange={(e)=>setUsn(e.target.value)} /><br></br>
            <input type="text" value={contact} placeholder='Student contact' onChange={(e)=>setContact(e.target.value)} /><br></br>
            <input type="text" value={college} placeholder='Student college' onChange={(e)=>setCollege(e.target.value)} /><br></br>
            <button>SUBMIT</button>
            </form>
            
           
            
            </div>
    )
}
export default Form