import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contact(){
    return (
        <>
            <h2 className="mt-4">Contact Us</h2>
            <div className='text-center d-flex'>
                <Form className='p-4 flex-grow-1'> 
                    <Form.Group className="mb-3" controlId="contact.Email">
                        <div className='w-50'>
                            <Form.Label>Your email address</Form.Label>
                            <Form.Control type="email" placeholder="yourname@example.com" />
                        </div>
                    </Form.Group>                    
                    <div className='w-50'>
                        <Form.Group className="mb-3" controlId="contact.Message">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                    <Button variant="secondary">
                        Send
                    </Button>
                    </div>
                </Form>
                <div>
                    <iframe height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=ciudad%20de%20buenos%20aires&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </>
    );
}