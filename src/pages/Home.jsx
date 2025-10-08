import Carousel from 'react-bootstrap/Carousel';
import RandomDog from "../components/RandomDog";
import { Card } from "react-bootstrap";

export default function Home(){
    return (
        <>
            <h2 className="my-4">Random Dogs as Home Page</h2>
            <Carousel>
                <Carousel.Item>
                    <RandomDog/>
                    <Carousel.Caption>
                        <h5 className='text-light bold'><b>First dog slide</b></h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <RandomDog/>
                    <Carousel.Caption>
                        <h5 className='text-light bold'><b>Second dog slide</b></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <RandomDog/>
                    <Carousel.Caption>
                        <h5 className='text-light bold'><b>Third dog slide</b></h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div class="flex-div">
                <div className="py-2 pe-4 card-div">
                    <Card border="info" >
                        <Card.Body className='p-0' >
                            <Card.Title className="bg-info text-light p-2 fs-4 rounded-top border-2">
                                <i className="bi bi-truck pe-2"></i>
                                Fast Delivery
                            </Card.Title>
                            <div className='p-2'>
                                <Card.Subtitle className='mb-2 text-muted fs-5'>2 business days</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="/contact" className='text-info link-hover'>More info</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>    
                </div>
                <div className="py-2 pe-4 card-div">
                    <Card border="primary">
                        <Card.Body className='p-0' >
                            <Card.Title className="bg-primary text-light p-2 fs-4 rounded-top border-2">
                                <i class="bi bi-credit-card pe-2"></i>
                                Pay by card
                            </Card.Title>
                            <div className='p-2'>
                                <Card.Subtitle className='mb-2 text-muted fs-5'>Or cash!</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="/products" className='text-primary link-hover'>See products</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>    
                </div>
                <div className="py-2">
                    <Card border="warning">
                        <Card.Body className='p-0' >
                            <Card.Title className="bg-warning text-light p-2 fs-4 rounded-top border-2">
                                <i class="bi bi-shield-lock pe-2"></i>
                                Stay safe!
                            </Card.Title>
                            <div className='p-2'>
                                <Card.Subtitle className='mb-2 text-muted fs-5'>Personal info not shared</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="/contact" className='text-warning link-hover'>More ionfo</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>    
                </div>
            </div>
        </>
    )
}

