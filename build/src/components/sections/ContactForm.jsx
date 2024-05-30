
import emailjs from 'emailjs-com';

export const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Envía el correo electrónico utilizando EmailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log('Correo electrónico enviado con éxito:', result.text);
                alert('Correo electrónico enviado exitosamente!');
            }, (error) => {
                console.error('Error al enviar el correo electrónico:', error.text);
                alert('Ocurrió un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com" 
                    name="email" 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    name="message" 
                    required 
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
