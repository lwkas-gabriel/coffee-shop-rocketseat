import { MapPin } from "@phosphor-icons/react";
import image  from "../../assets/delivery.png";
import { Bullet, Container, DeliveryInfoContainer, InfoHeader } from "./styles";

export function DeliveryConfirmation(){
    return (
        <Container>
            <section>
                <InfoHeader>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </InfoHeader>
                <DeliveryInfoContainer>
                    <section>
                        <Bullet className="purple">
                            <MapPin size={16} weight="fill"/>
                        </Bullet>
                        <div>
                            <p>Entrega em <strong>Rua Porto Alegre, 1701</strong></p>
                            <p>Autran Nunes, Porto Alegre, RS</p>
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
                            <p><strong>Cartão de Crédito</strong></p>
                        </div>
                    </section>
                </DeliveryInfoContainer>
            </section>
            <img src={image} alt="" />
        </Container>
    );
}