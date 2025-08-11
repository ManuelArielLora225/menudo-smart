
//Crear componente para modal, o ventana emergente segun sea necesario

const Modal = ({ show, onClose, children }) => {

    //show es el prop que se usara para mostrarlo, onclose para cerrarlo y children lo que estara dentro del componente

    if(!show) return null; //Si show es falso no se mostrara

    return(

        <div className="modal-container">

            <div className="modal-info-container">

                {children}

                <button onClick={onClose}>Cerrar</button> {/* boton para cambiar valor de show */}

            </div>

        </div>
    )

}

export default Modal //Exportar el Modal