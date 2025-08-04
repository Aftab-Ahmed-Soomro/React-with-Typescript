import type React from "react";
import { useState } from "react";

interface dummyInterface {
    isLogin: boolean;
}

const AuthUser: React.FC = () => {
    const [state, setState] = useState<dummyInterface>({
        isLogin: false,
    });

    // login function
    const handleLogin = (): void => {
        setState({ isLogin: true });
    };

    // logout function
    const handleLogout = (): void => {
        setState({ isLogin: false });
    };

    return (
        <>
            <div className="container">
                <div className="row card p-4 mt-4">
                    <div className="col-md-6">
                        {state.isLogin ? (
                            <>
                                <h1>Welcome User</h1>
                                <button onClick={handleLogout} className="btn btn-danger ms-2">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <h1>Please Login for Dashboard</h1>
                                <button onClick={handleLogin} className="btn btn-primary m-2">
                                    Login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthUser;