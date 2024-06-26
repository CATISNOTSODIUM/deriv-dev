import MathJax from "react-mathjax2"; //for input field
import React, { useState, useEffect, Component,useRef } from "react";
import { Form, Input, } from "antd";
import { unstable_batchedUpdates } from 'react-dom';
import "antd/dist/reset.css";
import { derivative, symbolicEqual, simplify } from 'mathjs'
import functionFilter from "../math/functionFilter";
import { modifiedSymbolicEqual } from "../math/modifiedSymbolicEqual";
import Timer from "./timer";
import { polynomialGenerator } from "../math/polynomialGenerator";
import { problemGenerator } from "../math/problemGenerator";
//Sample equations
//working with resetting input
const nullEquation = "";
var displayProblemList = problemGenerator(2);
var countScore = 0;
var indexProblem = 0; //find a way to change problem
const EquationInputField = () => {
    const inputRef = useRef(null);
    var [equation, setEquation] = useState(nullEquation);
    var [form] = Form.useForm();
    var [displayProblem, setProblem] = useState(displayProblemList[0]);
    const [name, setName] = useState('');
    const [score, setScore] = useState("0");
    const [isOpen, setIsOpen] = useState("visible");
    return (
        <>
        <div class="absolute inset-0 z-10 top-1/4 h-2/4 text-2xl backdrop-blur-xl"
        style={{visibility: isOpen}}
        onClick={() => {
            setIsOpen("hidden");
            console.log(isOpen);
        }}>
                <div class="flex flex-row h-full justify-center items-center ">
                Click anywhere to start
            </div>
        </div>
        <div class=" w-screen h-auto min-h-40 flex justify-center align-center">
            
            <Form 
                form={form}
                onValuesChange={(changedValue) => {
                    setEquation(changedValue.equation);
                    setName(changedValue.equation);
                }}
                className="bg-inherit caret-primaryTitle text-white text-3xl font-Quicksand"
            >
                <div className="text-center mb-12 font-MonoDisplay">
                    {(isOpen == "hidden") ? <Timer initialTime={60}/>:<>Start</>}
                    <div className="text-center mb-12 font-MonoDisplay" >score {score}</div>
                </div>
                
                <div className="h-20">
                    <MathJax.Context input="ascii">
                        <MathJax.Node>{"d/dx (" + displayProblem + ")  =  "}</MathJax.Node>
                    </MathJax.Context>
                    <MathJax.Context input="ascii">
                        <MathJax.Node>{name}</MathJax.Node>
                    </MathJax.Context>
                </div>
                <Form.Item name="equation" initialValue={equation} className="bg-inherit" value={name}>
                <input class="text-black opacity-0" value={name}/> 
                <input value={name}  ref={inputRef} class="bg-inherit mt-10  caret-primaryTitle w-screen mx-36 font-MonoDisplay text-2xl text-primarySubTitle text-center focus:outline-none" 
                        autoFocus="autofocus" placeholder='Input your equation here.' autocomplete="off" 
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.shiftKey) {   
                            unstable_batchedUpdates(() => {

                                indexProblem++;
                                setEquation('');
                                setProblem(displayProblemList[indexProblem]);
                                inputRef.current.value = "";
                                setName('');
                                e.target.reset;

                                setScore(countScore);
                                displayProblemList = displayProblemList.concat(problemGenerator(1));
                                console.log(problemGenerator(1))
                            });
                           
                        }
                        if (e.key === "Enter"){

                            //We use Functionfilter to add extra parenthesis for safe inputs (eg. sinx -> sin(x))
                            
                            //alert(functionFilter(displayProblem), 'x');
                            //alert(derivative(functionFilter(displayProblem), 'x'));
                            //alert(functionFilter(inputRef.current.value));
                            if (modifiedSymbolicEqual(derivative(functionFilter(displayProblem), 'x'), functionFilter(inputRef.current.value))===true){ //correct answer
                                //inputRef.current.value = ""; //not working
                                indexProblem++;
                                unstable_batchedUpdates(() => {
                                    
                                    setEquation('');
                                    setProblem(displayProblemList[indexProblem]);
                                    inputRef.current.value="";
                                    setName('');
                                    e.target.reset;
                                    console.log(inputRef.current.value);
                                    countScore++;
                                    setScore(countScore);
                                    displayProblemList = displayProblemList.concat(problemGenerator(1));

                                });
                            } 
                            
                        }
                        
                    }}/>
                </Form.Item>
            </Form>
            

        </div>
        </>
)};

//submission system
export default EquationInputField;

