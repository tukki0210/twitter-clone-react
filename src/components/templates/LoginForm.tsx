import React, { FC, useReducer, useEffect } from "react";
import axios from 'axios';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { TextField, Card, CardContent, CardActions, CardHeader, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
)

type State = {
    username: string
    password: string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
}

const initialState: State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};

type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

// reducer: dispatchされたときに呼ばれる関数
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            }
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            }
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };

        default:
            return {
                ...state
            }
    }
}

type Props = {
    setUser: React.Dispatch<React.SetStateAction<{
        userName: string;
        userId: string;
    }>>
}

const Login: FC<Props> = ({ setUser }) => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    // emailとpassが入力されるまでログインボタンを無効化
    useEffect(() => {
        if (state.username.trim() && state.password.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        } else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.username, state.password])


    // Loginボタンを押した時の挙動
    const handleLogin = async () => {

        // axiosは戻り値がpromise
        const res  = await axios.post('/api/user', {
            loginUser: state.username,
            loginPass: state.password
        })
        
        /* eslint-disable */
        const userId: string = res.data.userId
   
        if (res.status === (201)) {

            const secondUser = {
                userName: state.username,
                userId
            }
            /* eslint-disable */
            setUser(secondUser)

            dispatch({
                type: 'loginSuccess',
                payload: 'Login Successfully'
            })
        } else {
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
        }
    }


    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            /* eslint-disable no-unused-expressions */
            state.isButtonDisabled || handleLogin();
        }
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({
            type: 'setUsername',
            payload: event.target.value
        });
    };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({
            type: 'setPassword',
            payload: event.target.value
        });
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Login App" />
                <CardContent>
                    <div>
                        <TextField
                            error={state.isError}
                            fullWidth
                            id="name"
                            type="email"
                            label="Username"
                            placeholder="Username"
                            margin="normal"
                            onChange={handleUsernameChange}
                            onKeyPress={handleKeyPress}
                        />
                        <TextField
                            error={state.isError}
                            fullWidth
                            id="password"
                            type="password"
                            label="password"
                            placeholder="Password"
                            margin="normal"
                            helperText={state.helperText}
                            onChange={handlePasswordChange}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        className={classes.loginBtn}
                        onClick={handleLogin}
                        disabled={state.isButtonDisabled}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        </form>
    )
}


export default Login;
