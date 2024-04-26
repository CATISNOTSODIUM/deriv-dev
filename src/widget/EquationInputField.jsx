import MathJax from "react-mathjax2"; //for input field
import React, { useState, useEffect, Component,useRef } from "react";
import { Form, Input, } from "antd";
import "antd/dist/reset.css";
import { derivative, symbolicEqual } from 'mathjs'
//Sample equations
const sampleEquation1 = "";
const sampleEquation2 = "c = a^2 + b^2";
const sampleEquation3 =
    "f(a) = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";
const displayProblem = "(sin(x))^2" 

const EquationInputField = () => {
    const inputRef = useRef(null);
    var [equation, setEquation] = useState(sampleEquation1);
    var [form] = Form.useForm();
    return (
        <div class=" w-screen h-auto min-h-40 flex justify-center align-center">
            <Form 
                form={form}
                onValuesChange={(changedValue) => {
                    setEquation(changedValue.equation);
                }}
                className="bg-inherit caret-primaryTitle text-white text-3xl"
            >
                <div className="h-20">
                    <MathJax.Context input="ascii">
                        <MathJax.Node>{"d/dx (" + displayProblem + ")  =  "}</MathJax.Node>
                    </MathJax.Context>
                    <MathJax.Context input="ascii">
                        <MathJax.Node>{equation}</MathJax.Node>
                    </MathJax.Context>
                </div>
                <Form.Item name="equation" initialValue={equation} className="bg-inherit">

                <input ref={inputRef}  class="bg-inherit mt-10  caret-primaryTitle w-screen mx-36 font-mono text-2xl text-white text-center focus:outline-none" 
                autoFocus="autofocus" placeholder='Input your equation here.'
                    onKeyDown={(e) => {
                        if (e.key === "Enter"){
                            //inputRef.current.value  //check the correctness
                            if (symbolicEqual(derivative(polishQuestionExpression(displayProblem), 'x'), inputRef.current.value)){ //correct answer
                                inputRef.current.value = "";
                            } 
                            
                        }
                    }}
                ></input>
                </Form.Item>
            </Form>
            

        </div>
)};

//submission system

function addParenthesis(expression) {
    let ans = expression.replace("ln", "log")
    return ans;

}
function polishQuestionExpression(expression){
    let ans = expression.replace("ln", "log")
    //insert parenthesis over ln ... 
    //find ln and find consecutive x -> not number -> cut

    return ans;
}
export default EquationInputField;
