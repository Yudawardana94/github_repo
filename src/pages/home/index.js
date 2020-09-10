import React, {useState} from 'react'
import {connect} from 'react-redux'
import {InputGroup, FormControl, Button, Container} from 'react-bootstrap'

import {getUserRepos} from '../../stores/actions'

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    getUserRepos
}

function Home(props) {
    //state
    const [search, setSearch] = useState('')

    //function
    const handleSearch = () => {
        props.getUserRepos(search)
    }

    return (
        <Container>
            <h1> home </h1>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="type user`s name here..."
                aria-label="type user`s name here..."
                aria-describedby="basic-addon2"
                onChange={({target}) => {
                    setSearch(target.value)
                    console.log(search,'ini searchnya')
                }}
                onKeyPress={target => {
                    target.charCode === 13 ? handleSearch() : console.log(target.charCode)
                } }
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handleSearch}>Button</Button>
                </InputGroup.Append>
            </InputGroup>
            <h3>
                {props?.isEmpty?.message}
            </h3>
            {
                props?.userRepo.map((el, idx) => {
                    return <div key={idx}>
                        <p>{el.id}</p>
                    </div>
                })
            }
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
