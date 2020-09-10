import React, {useState} from 'react'
import {connect} from 'react-redux'
import {InputGroup, FormControl, Button, Container, Card, CardGroup} from 'react-bootstrap'

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
            <h2> Search git Repos</h2>
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
                    return <Card style={{width: '18rem', margin: 15 }}>
                            <Card.Img variant="top" src={el.owner.avatar_url} style={{width: '100%'}} />
                            <Card.Body>
                                <Card.Title><h1>{el.name}</h1></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{el.full_name}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Owner: {el.owner.login}</Card.Subtitle>
                                <Card.Text> 
                                    <h4 style={{margin: 0}}>private:</h4> 
                                </Card.Text>
                                <Card.Text> 
                                    <p>{JSON.stringify(el.private, null,2 )}</p>
                                </Card.Text>
                                <Card.Text> 
                                    <h4 style={{margin: 0}}>description: </h4>
                                </Card.Text>
                                <Card.Text> 
                                    <p>{el.description}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                })
            }
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
