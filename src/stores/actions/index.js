import axios from 'axios'


export function getUserRepos(input) {
    return async dispatch => {
        console.log('akan diapnggil')
        try {
            let repos = await axios({
                method: 'GET',
                url: ` https://api.github.com/users/${input}/repos`
            })
            console.log(repos, 'ini hasilnya')
            console.log(repos.data.length > 0, 'ini hasilnya')
            repos.data.length > 0 ?(
                dispatch({
                    type: 'GET_USER_REPO',
                    payload: {
                        userRepos: repos.data,
                        isEmpty: {
                            status: false,
                            message: `found Repos for user ${input}`
                        }
                    }
                })
            ) : (
                dispatch({
                    type: 'SET_EMPTY_RESULT',
                    payload: {
                        status: true,
                        message: `user with username "${input}" doesn't have any repos`
                    }
                })
            )
        } catch (error) {
            console.log(error)
            dispatch({
                type: 'SET_USER_NOT_FOUND',
                payload: {
                    status: true,
                    message: `user with username "${input}" is not found`
                }
            })
        }
    }
}