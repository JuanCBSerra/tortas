

const ContactForm = () => {
    return (
        <section id="contacto" style={{ margin: "48px 0" }}>
            <form className="form">
                <h2 className="hero-title" style={{ fontSize: "1.5rem", marginBottom: 24 }}>¡Hacé tu pedido!</h2>
                <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input className="form-input" type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="form-textarea" id="mensaje" name="mensaje" rows="3" required />
                </div>
                <button className="button" type="submit">Enviar</button>
            </form>
        </section>
    )
};

export default ContactForm; 