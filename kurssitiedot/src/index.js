import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
           <h1> {props.course}</h1> 
        </div>
    )
}
/*
//STEP 1 (without Part component)
const Content = (props) => {
    return (
        <div>            
            <p>{props.part1} {props.exercises1}</p>
            <p>{props.part2} {props.exercises2}</p>
            <p>{props.part3} {props.exercises3}</p>            
        </div>

    )
}
*/

/*
//STEP 1.2
const Part = (props) => {
    return (
        <div>            
            <p>{props.part} {props.exercises}</p>            
        </div>
    )
}

const Content = (props) => {
    return (
        <div>            
            <Part part = {props.part1} exercises = {props.exercises1} />
            <Part part = {props.part2} exercises = {props.exercises2}/>
            <Part part = {props.part3} exercises = {props.exercises3}/>            
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
           <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course = {course} />
            <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2}
            part3 = {part3} exercises3 = {exercises3}  />
            <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}  />
        </div>
    )    
}
//END STEP 1.2
*/


/*
//STEP 1.3
const Part = (props) => {
    return (
        <div>            
            <p>{props.part.name} {props.part.exercises}</p>            
        </div>
    )
}

const Content = (props) => {
    return (
        <div>            
            <Part part = {props.part1}  />
            <Part part = {props.part2} />
            <Part part = {props.part3} />            
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
           <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course = {course} />
            <Content part1 = {part1} part2 = {part2} part3 = {part3} />
            <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}  />
        </div>
    )    
}
//END STEP 1.3
*/


//STEP 1.4
const Part = (props) => {
    return (
        <div>            
            <p>{props.part.name} {props.part.exercises}</p>            
        </div>
    )
}

const Content = (props) => {
    return (
        <div>            
            <Part part = {props.parts[0]}  />
            <Part part = {props.parts[1]} />
            <Part part = {props.parts[2]} />            
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
           <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half stack application development, step 1.4'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises: 14
        }
    ]

    return (
        <div>
            <Header course = {course} />
            <Content parts = {parts}  />
            <Total parts = {parts}  />
        </div>
    )    
}

//END STEP 1.4


ReactDOM.render(<App />, document.getElementById('root'));

