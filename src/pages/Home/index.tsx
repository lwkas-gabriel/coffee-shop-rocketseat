import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import image from "../../assets/copo-marca.png"
import { Container, InfoSection, Info, BulletsContainer, BulletContaier, Bullet } from "./styles";

export function Home(){
    return (
        <>
            <Container>
                <InfoSection>
                    <Info>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Info>
                    <BulletsContainer>
                        <BulletContaier>
                            <Bullet className="orange">
                                <ShoppingCart size={16} weight="fill" />
                            </Bullet>
                            <p>Compra simples e segura</p>
                        </BulletContaier>
                        <BulletContaier>
                            <Bullet className="black">
                                <Package size={16} weight="fill" />
                            </Bullet>
                            <p>Embalagem mantém o café intacto</p>
                        </BulletContaier>
                        <BulletContaier>
                            <Bullet className="yellow">
                                <Timer size={16} weight="fill" />
                            </Bullet>
                            <p>Entrega rápida e rastreada</p>
                        </BulletContaier>
                        <BulletContaier>
                            <Bullet className="purple">
                                <Coffee size={16} weight="fill" />
                            </Bullet>
                            <p>O café chega fresquinho até você</p>
                        </BulletContaier>
                    </BulletsContainer>
                </InfoSection>
                <img src={image} alt="" />
            </Container>
        </>
        
    );
}