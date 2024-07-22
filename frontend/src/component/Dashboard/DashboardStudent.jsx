
import {useState} from 'react'


const DashboardStudent = () => {
    const [currentValue , setCurrentValue] = useState({
        bookname: "",
        name: "",
        rollnumber: "",
        startingdate:"",
        returingdate:""
    })

    const changeDataHandler = (e) => {
        setCurrentValue({
            ...currentValue,
            [e.target.name]: e.target.value
            })

    }
    console.log(currentValue);

    const requestHandler = async(event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/api/v1/student/dashboard` , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(currentValue)
        })
        const data = await response.json();
        console.log(data);
        alert(`Hi ${currentValue.name} is successfully requested `)
        
        
      
      }


    
    return (
        <div className="flex justify-center p-2">
            <div>
            <h1 className="underline text-2xl p-2 font-bold">Appointment booking</h1>
                
            <div className="font-semibold text-xl p-2 ">
                    <label htmlFor="bookname">bookname</label>
                    <input onChange={changeDataHandler} name='bookname' className="ml-2" id="bookname" type="text" placeholder="Enter your bookname" />
                </div>
    
                <div className="font-semibold text-xl p-2 ">
                    <label htmlFor="name">name</label>
                    <input onChange={changeDataHandler} name='name' className="ml-14" id="name" type="text" placeholder="Enter your name" />
                </div>

                <div className="font-semibold text-xl p-2 ">
                    <label htmlFor="rollnumber">rollnumber</label>
                    <input onChange={changeDataHandler} name='rollnumber' className="ml-10" id="rollnumber" type="text" placeholder="Enter your RollNumber" />
                </div>
                
                <div className="font-semibold text-xl p-2 ">
                    <label htmlFor="startingdate">startingdate</label>
                    <input onChange={changeDataHandler} name='startingdate' id='startingdate' className="ml-10" type="date" />
                </div>
    
                <div className="font-semibold text-xl p-2 ">
                    <label htmlFor="returingdate">returingdate</label>
                    <input onChange={changeDataHandler} name='returingdate' id='returingdate' className="ml-10" type="date"  />
                </div>
                <div>
                    <button onClick={requestHandler} type='submit' className="py-2 px-10 bg-yellow-500 rounded  shadow-sm ">Request</button>
                </div>
    
            </div>
        </div>
      )
  
}

export default DashboardStudent

