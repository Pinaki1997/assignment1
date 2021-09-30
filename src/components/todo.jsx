import React, {useEffect, useState} from "react"


const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    const addItem = (e) => {
        e.preventDefault()
        if (!inputData) {

        } else {
            setItems([ ... items, inputData])
            setInputData('')
        }
    }
    const deleteItem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind != id;
        })

        setItems(updateditems)
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])

    return(
                <div>
                    <form action="">
                        <input type="text" name="task" onChange={(e) => setInputData(e.target.value) } value={inputData} />
                        <button type="submit" onClick={addItem}>Add</button>
                    </form>
                    <h3>Lists</h3>
                    {
                        items.map((elem, ind) => {
                            return (
                                <div key={ind}>
                                    <div className="container">
                                        <table className="table table-striped">
                                            
                                            <tbody>
                                            <tr>
                                                <td>{ elem }</td>
                                                <td><button type="submit" onClick={() => deleteItem(ind)}>Delete</button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                   
                                    
                                </div>
                            )
                        })
                    }
                </div>
        )
}

export default Todo
