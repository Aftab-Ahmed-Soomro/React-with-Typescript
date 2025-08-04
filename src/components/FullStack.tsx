import React,{useState} from "react";

interface ISTATE {
    message : string
}

const FullStack: React.FC = () => {
    const [state,setState] = useState<ISTATE>({message : 'Welcome'})

    const handleGreet = (greet:string):void => {
        setState({message : greet})
    }
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h1 className="text-center mb-3">{state.message}</h1>
                            <button onClick={()=>handleGreet('Like')} className="btn btn-danger">
                                Like
                            </button>
                            <button onClick={()=>handleGreet('Comment')} className="btn btn-success ms-2">
                                Comment
                            </button>
                            <button onClick={()=>handleGreet('Subscribe')} className="btn btn-info ms-2">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullStack