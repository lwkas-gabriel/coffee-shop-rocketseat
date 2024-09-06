import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { CheckoutPriceConfirmationContainer,
         CheckoutPriceContainer,
         ConfirmButton,
         ContainerMain,
         DeliveryInfoContainer,
         Input, 
         PaymentOptions, 
         PaymentSelectionSection, 
         SectionForm, 
         TotalInfo 
        } from "./styles";
import { CoffeeQuantitySelector } from "./components/CoffeeQuantitySelector";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext, useState } from "react";


// const newCheckoutFormValidationSchema = zod.object({

// })

export interface CoffeeItemCheckout{
    id: number;
    img: string;
    name: string;
    quantity: number;
    price: number;
}

export function Checkout(){
    const { coffeeList, totalPrice } = useContext(CoffeeContext);
    const [isChecked, setChecked] = useState("");

    function handleCreateNewCheckout(){

    }

    return (
        <ContainerMain>
            <SectionForm>
                <h4>Complete seu pedido</h4>
                <form action="" onSubmit={handleCreateNewCheckout}>
                    <DeliveryInfoContainer>
                        <div>
                            <MapPinLine size={16} />
                            <div className="title">
                                <h5>Endereço de Entrega</h5>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                            <div className="first-section">
                                <Input className="cep" type="text" placeholder="CEP"/>
                                <Input type="text" placeholder="Rua"/>
                            </div>
                            <div className="second-section">
                                <Input type="text" placeholder="Número"/>
                                <Input className="complement" type="text" placeholder="Complemento"/>
                            </div>
                            <div  className="third-section">
                                <Input type="text" placeholder="Bairro"/>
                                <Input type="text" placeholder="Cidade"/>
                                <Input type="text" placeholder="UF"/>
                            </div>
                    </DeliveryInfoContainer>

                    <PaymentSelectionSection>
                        <div>
                            <CurrencyDollar size={16}/>
                            <div>
                                <h5>Pagamento</h5>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </div>
                        <PaymentOptions>
                            <div className={isChecked==="credit" ? "checked" : ""} onClick={() => setChecked("credit")}>
                                <CreditCard className="purple-icon" size={16} />
                                <input type="radio" id="credit" name="drone" value="credit" />
                                <label htmlFor="credit">Cartão de Crédito</label>
                            </div>

                            <div className={isChecked==="debit" ? "checked" : ""}>
                                <Bank className="purple-icon" size={16} />
                                <input type="radio" id="debit" name="drone" value="debit" onClick={() => setChecked("debit")} />
                                <label htmlFor="debit">Cartão de Débito</label>
                            </div>

                            <div className={isChecked==="cash" ? "checked" : ""} onClick={() => setChecked("cash")}>
                                <Money className="purple-icon" size={16} />
                                <input type="radio" id="cash" name="drone" value="cash" />
                                <label htmlFor="cash">Dinheiro</label>
                            </div>
                        </PaymentOptions>
                    </PaymentSelectionSection>
                </form>
            </SectionForm>

            <CheckoutPriceContainer>
                <h4>Cafés selecionados</h4>
                <CheckoutPriceConfirmationContainer>
                    <div className="container">
                        {coffeeList.map((coffee:CoffeeItemCheckout) => {
                            if(coffee.quantity != 0){
                                return <CoffeeQuantitySelector key={coffee.id} name={coffee.name} img={coffee.img} id={coffee.id} quantity={coffee.quantity} price={coffee.price}/>
                            }
                        })}
                        {/* <CoffeeQuantitySelector />
                        <CoffeeQuantitySelector />
                        <CoffeeQuantitySelector /> */}
                    </div>
                    
                    <TotalInfo>
                        <span>
                            <p>Total de Itens</p>
                            <p>R$ {totalPrice.toFixed(2)}</p>
                        </span>

                        <span>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </span>

                        <span>
                            <p><strong>Total</strong></p>
                            <p><strong>R$ {(totalPrice+3.5).toFixed(2)}</strong></p>
                        </span>
                        
                    </TotalInfo>
                    <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
                </CheckoutPriceConfirmationContainer>
            </CheckoutPriceContainer>

        </ContainerMain>
    );
}