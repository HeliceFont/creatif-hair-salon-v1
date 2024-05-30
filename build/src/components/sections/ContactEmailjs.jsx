
import emailjs from 'emailjs-com';

export const ContactEmailjs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log('Correo electrónico enviado con éxito:', result.text);
                alert('Correo electrónico enviado exitosamente!');
            }, (error) => {
                console.error('Error al enviar el correo electrónico:', error.text);
                alert('Ocurrió un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
            });

        e.target.reset(); // Resetear el formulario después de enviarlo
    };

    return (
        <form onSubmit={handleSubmit} className='contact__form'>
            <div className="mb-3 contact__contain">
                <label htmlFor="email" className="form-label">Dirección Email</label>
                <input 
                    type="email" 
                    className="form-control form__input" 
                    id="email" 
                    placeholder="name@example.com" 
                    name="from_email" 
                    required 
                />
            </div>
            <div className="mb-3 contact__contain">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                    className="form-control form__input" 
                    id="message" 
                    rows="3" 
                    name="message" 
                    required 
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
