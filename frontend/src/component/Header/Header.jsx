import { useNavigate , useParams } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    let {role} = useParams();
    // console.log(role)

    const roleHandler = (e) =>{
        console.log(e.target.value);
        const value = e.target.value;

       if(value == 'Student'){
        role = 'student'
        navigate(`${role}/signup`)
       }if (value == 'Teacher') {
        role = 'teacher'
        navigate(`${role}/signup`) 
       } 

    }
  return (
    <div className="flex justify-center shadow-lg p-6">
        
        <select onChange={roleHandler}>
            <option value="Choose Your Role">Choose Your Role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
        </select>
      
    </div>
  )
}

export default Header
