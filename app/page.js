"use client"
import React, { useState } from 'react';

const Page = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMainTask([...mainTask, { title, desc }]);
        console.log('Task added:', { title, desc });
        settitle("");
        setdesc("");
    };
    const deleteHandler = (i) => {
        let copytask = [...mainTask]
        copytask
            .splice(i, 1)
        setMainTask(copytask);
    }
    let renderTask = < h2 > No Task Available < /h2>;

    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => ( <
            div key = { i }
            className = "flex justify-between item-center mb-5 w-2/3" >
            <
            h5 className = "text-2xl font-semibold" > { t.title } < /h5> <
            h6 className = "text-xl font-medium" > { t.desc } < /h6> <button  onClick={()=>deleteHandler(i)} className="bg-red-700 p-2 rounded-xl font-bold text-white">Delete</button > < /
            div >
        ));
    }

    return ( <
        >
        <
        h1 className = "bg-black text-white p-5 text-xl font-bold text-center" >
        Shreyansh Todo List <
        /h1> <
        form onSubmit = { submitHandler } >
        <
        input type = "text"
        className = 'border-zinc-800 border-2 text-2xl m-5 px-4 py-2 rounded-2xl'
        placeholder = "Enter The Task Here 😊"
        value = { title }
        onChange = {
            (e) => settitle(e.target.value)
        }
        /> <
        input type = "text"
        className = 'border-zinc-800 border-2 text-2xl m-5 px-4 py-2 rounded-2xl'
        placeholder = "Enter Description Here‼️"
        value = { desc }
        onChange = {
            (e) => setdesc(e.target.value)
        }
        /> <
        button className = "bg-black font-bold text-white p-3 rounded-2xl m-5 hover:text-cyan-300" >
        ADD TASK <
        /button> < /
        form > <
        hr / >
        <
        div className = 'p-8 bg-slate-200' >
        <
        ul className = 'font-bold' > { renderTask } < /ul> < /
        div > <
        />
    );
};

export default Page;