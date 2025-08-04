import React,{useState} from 'react'

interface ISTATE {
    count : number
}

const Counter: React.FC = () => {
    const [state, setState] = useState<ISTATE>({count : 0})

    const Increment = ():void => {
        setState({ count: state.count + 1 })
    }
    const Decrement = ():void => {
        setState({ count: state.count - 1 })
    }
    return (
        <div style={{textAlign : "center"}}>
            <h1>Event Handling</h1>
            <div className="row mt-4 d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className='display-3'>{state.count}</h2>
                            <button onClick={Increment} className='btn btn-success'>Increment</button>
                            <button onClick={Decrement} className='btn btn-danger ms-3'>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter