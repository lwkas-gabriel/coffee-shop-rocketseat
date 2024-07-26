import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import image from "../../assets/copo-marca.png"
import { Container, InfoSection, Info, BulletsContainer, BulletContaier, BulletVariationOrange, BulletVariationBlack, BulletVariationYellow, BulletVariationPurple } from "./styles";

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
                            <BulletVariationOrange>
                                <ShoppingCart size={16} weight="fill" />
                            </BulletVariationOrange>
                            <p>Compra simples e segura</p>
                        </BulletContaier>
                        <BulletContaier>
                            <BulletVariationBlack>
                                <Package size={16} weight="fill" />
                            </BulletVariationBlack>
                            <p>Embalagem mantém o café intacto</p>
                        </BulletContaier>
                        <BulletContaier>
                            <BulletVariationYellow>
                                <Timer size={16} weight="fill" />
                            </BulletVariationYellow>
                            <p>Entrega rápida e rastreada</p>
                        </BulletContaier>
                        <BulletContaier>
                            <BulletVariationPurple>
                                <Coffee size={16} weight="fill" />
                            </BulletVariationPurple>
                            <p>O café chega fresquinho até você</p>
                        </BulletContaier>
                    </BulletsContainer>
                </InfoSection>
                <img src={image} alt="" />
            </Container>
        </>
        
    );
}