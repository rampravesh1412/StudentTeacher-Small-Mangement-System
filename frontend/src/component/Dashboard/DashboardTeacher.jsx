import React, { useEffect, useState } from "react";
import "./DashboardTeacher.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const DashboardTeacher = () => {

  useEffect(()=>{
    const newHandler = async() => {
      const res =  await fetch('http://localhost:3000/api/v1/teacher/dashboard');
        const datas = await res.json()
        console.log(datas);
    }
    newHandler()
  
    },[])

  return (
    <div className="flex justify-center p-6">
      {/* <div>
        <div>
          <h1 className="text-2xl shadow font-bold underline-offset-4">
            DashboardTeacher
          </h1>
        </div>

        <div>
          <table className="">
            <tr key="">
              <th>id</th>
              <th>Name</th>
              <th>RollNumber</th>
              <th>Accept/Reject</th>
            </tr>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardTeacher;
