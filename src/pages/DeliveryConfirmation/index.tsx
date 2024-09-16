import { MapPin } from "@phosphor-icons/react";
import image  from "../../assets/delivery.png";
import imageError  from "../../assets/error.jpeg";
import { Bullet, Container, DeliveryInfoContainer, ErrorImage, InfoHeader } from "./styles";
import { useLocation } from "react-router-dom";

export function DeliveryConfirmation(){

    const location = useLocation();
    const { formData } = location.state || {};

    // if(!formData){
    //     return(
    //         <div>
    //             Erro: Nenhum dado foi passado!
    //         </div>
    //     );
    // }
    
    return (
        <Container>
            <section>
                <InfoHeader>
                    <h2>{ formData ? "Uhu! Pedido confirmado" : "Erro! Nenhum dado encontrado!"}</h2>
                    <p>{ formData ? "Agora é só aguardar que logo o café chegará até você" : "Tivemos um problema aqui, desculpe!"}</p>
                </InfoHeader>
                { formData ? <DeliveryInfoContainer>
                    <section>
                        <Bullet className="purple">
                            <MapPin size={16} weight="fill"/>
                        </Bullet>
                        <div>
                            <p>Entrega em <strong>{formData.street}, {formData.houseNumber}</strong></p>
                            <p>{formData.neighborhood}, {formData.city}, {formData.state}</p>
                        </div>
                    </section>
                    <section>
                        <Bullet className="orange">
                            <MapPin size={16} weight="fill"/>
                        </Bullet>
                        <div>
                            <p>Previsão de Entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </section>
                    <section>
                        <Bullet className="yellow">
                            <MapPin size={16} weight="fill"/>
                        </Bullet>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{formData.paymentMethod === "credit" ? "Cartão de Crédito" : formData.paymentMethod === "debit" ? "Cartão de Débito" : "PIX"}</strong></p>
                        </div>
                    </section>
                </DeliveryInfoContainer> : <></>}
            </section>
            { formData ? <img src={image} alt="" /> : <ErrorImage src={imageError} alt="" /> }
        </Container>
    );
}