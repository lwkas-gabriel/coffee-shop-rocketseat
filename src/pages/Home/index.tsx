import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import image from "../../assets/copo-marca.png"
import { BannerSection, InfoSection, Info, BulletsContainer, BulletContaier, Bullet, StoreSection, MainContainer, CardsContainer } from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";
import { CoffeeEntity } from "../../reducers/coffees/actions"

export function Home(){
    const { coffeeList } = useContext(CoffeeContext);

    return (
        <>
            <MainContainer>
                <BannerSection>
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
                </BannerSection>
                <StoreSection>
                    <h2>Nossos Cafés</h2>
                    <CardsContainer>
                        {coffeeList.map((coffee:CoffeeEntity) => {
                            return (
                                <CoffeeCard
                                    key={coffee.id}
                                    id={coffee.id}
                                    name={coffee.name}
                                    img={coffee.img}
                                    tags={coffee.tags}
                                    description={coffee.description}
                                    price={coffee.price}
                                    quantity={coffee.quantity}
                                />  
                            );
                        })}
                    </CardsContainer>
                </StoreSection>
            </MainContainer>
        </>
        
    );
}