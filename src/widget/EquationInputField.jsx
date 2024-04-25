import MathJax from "react-mathjax2"; //for input field
import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import "antd/dist/reset.css";

//Sample equations
const sampleEquation1 = "ln (x)";
const sampleEquation2 = "c = a^2 + b^2";
const sampleEquation3 =
    "f(a) = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))";


const EquationInputField = () => {
    const [equation, setEquation] = useState(sampleEquation1);
    const [form] = Form.useForm();

    return (
        <div class=" w-screen h-auto min-h-40 flex justify-center align-center">
            <Form 
                form={form}
                onValuesChange={(changedValue) => {
                    setEquation(changedValue.equation);
                }}
                className="bg-inherit caret-primaryTitle text-white text-3xl"
            >
                <Form.Item name="equation" initialValue={equation} className="bg-inherit">
                    <Input.TextArea autoFocus="autofocus" className="max-h-1 resize-none text-white border-none focus:border-none focus:bg-inherit hover:bg-inherit bg-primaryBackground placeholder-slate-300 font-semibold" placeholder="Type here"/>
                </Form.Item>
                <div className="relative">
                    <MathJax.Context input="ascii">
                        <div>
                            <MathJax.Node>{equation}</MathJax.Node>
                        </div>
                    </MathJax.Context>
                </div>
            </Form>
            

        </div>
)};
export default EquationInputField;
//<input class="bg-inherit caret-primaryTitle w-screen mx-36 text-4xl focus:outline-none" autoFocus="autofocus" placeholder='Input your equation here.'></input>