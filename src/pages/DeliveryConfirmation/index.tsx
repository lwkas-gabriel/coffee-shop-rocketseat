import image  from "../../assets/delivery.png";
import { Container, DeliveryInfoContainer, InfoHeader } from "./styles";

export function DeliveryConfirmation(){
    return (
        <Container>
            <InfoHeader>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </InfoHeader>
            <DeliveryInfoContainer>
                <div>
                    <div></div>
                </div>
                <img src={image} alt="" />
            </DeliveryInfoContainer>
        </Container>
    );
}