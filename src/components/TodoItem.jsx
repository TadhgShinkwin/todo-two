import React, {useState, useEffect} from "react"

function TodoItem(props){
    
    const [checker, setChecker]=useState(false)
    const [tester, setTester] = useState("")


    let chosenStyle
    const checkedStyle = {
        textDecoration: "line-Through",
        color: "#737373"
    }
    const defaultStyle={
        textDecoration: "none"
    }

    useEffect(()=> {
        if(checker){
            setTester("checked")
        }
        else{
            setTester("unchecked")
        }
    }, [checker])

    return(
        <div>
            <label style={chosenStyle}><input 
            type="checkbox" 
            name="checked"
            checked={checker}
            onChange={()=>setChecker(!checker)}
            />
            {props.item.text} </label>
            <p>{tester}</p>
        </div>
    )
}

export default TodoItem