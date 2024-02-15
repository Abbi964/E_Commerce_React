import React, { Fragment } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';

function HomePage(){
    const tourArr = [
        {date : 'JUL16', city : 'DETROIT, MI' , venue : 'DTE ENERGY MUSIC THEATRE'},
        {date : 'JUL19', city : 'TORONTO,ON' , venue : 'BUDWEISER STAGE'},
        {date : 'JUL22', city : 'BRISTOW, VA' , venue : 'JIGGY LUBE LIVE'},
        {date : 'JUL29', city : 'PHOENIX, AZ' , venue : 'AK-CHIN PAVILION'},
        {date : 'AUG 2', city : 'LAS VEGAS, NV', venue : 'T-MOBILE ARENA'},
        {date : 'AUG 7', city : 'CONCORD, CA' , venue : 'CONCORD PAVILION'},
    ]


    return (
        <Fragment>
            <div className="d-flex justify-content-center bg-dark-subtle pb-5"
                style={{ fontSize: "5rem" }}>
                The Generics
            </div>
            <div className='bg-dark-subtle pb-3'>
                <Button style={{marginLeft:'40%'}} size='lg' variant='secondary'>Get Our Latest Album</Button>{'  '}
            </div>
            <div>
                <div style={{fontSize:'2rem', padding:'1rem 0px 1rem 36rem'}}>TOURS</div>
                <Container style={{width:'74%'}} className='p-2'> 
                    {tourArr.map((tour)=>{
                        return (
                            <Row style={{borderBottom:'1px solid'}} className='p-1 mb-1'>
                                <Col>
                                    {tour.date}
                                </Col>
                                <Col>
                                    {tour.city}
                                </Col>
                                <Col>
                                    {tour.venue}
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <Button>BUY TICKETS</Button>
                                </Col>
                            </Row>
                        )
                    })}
                </Container>
            </div>
        </Fragment>
    )
}

export default HomePage;