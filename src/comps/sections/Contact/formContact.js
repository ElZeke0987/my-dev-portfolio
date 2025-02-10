"use client";

import { useState } from "react";
import { subjects } from "./contactVars"
import CustomSelect from "@/comps/reusable/customSelect/customSelect";

export default function FormContact(){
    const [fullname, setFullname]=useState("");
    const [email, setEmail]=useState("");
    const [subject, setSubject]=useState("");
    const [secondSubject, setSecondSubject]=useState("")

    function handleFirstSubjectSelect(opt){
        setSubject(opt);
    }
    function handleSecondSubjectSelect(opt){
        setSecondSubject(opt.txt);
    }

    return(
        <div className="flex flex-col justify-center contact-form-container w-full">
            <div className="w-full flex justify-center">
                <form className="contact-form flex flex-col ">
                    <div className="flex flex-col">
                        <label>Full Name</label>
                        <input type="text"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Subject</label>
                        <div className="subject-gap flex flex-col">
                            <CustomSelect opts={subjects} propTxt="title" onSelect={handleFirstSubjectSelect}/>
                            {subject?.secondSubjects&&<CustomSelect opts={subject.secondSubjects} onSelect={handleSecondSubjectSelect}/>}
                            {
                                subject?.val=="other"&&<input type="text"/>
                            }
                        </div>
                        
                    </div>
                    
                    <div className="flex flex-col">
                        <label>Content of email</label>
                    
                        <textarea name="" id="input" className="form-control" rows="3" required="required"></textarea>
                        
                    </div>
                    <button>Consultar</button>
                </form>
            </div>
                
            </div>
    )
}