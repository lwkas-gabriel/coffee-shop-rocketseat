import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { CheckoutPriceConfirmationContainer,
         CheckoutPriceContainer,
         ConfirmButton,
         ContainerMain,
         FormContainer, 
         Input, 
         PaymentOptions, 
         PaymentSelectionSection, 
         SectionForm, 
         TotalInfo 
        } from "./styles";
import { CoffeeQuantitySelector } from "./components/CoffeeQuantitySelector";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";


// const newCheckoutFormValidationSchema = zod.object({

// })

export interface CoffeeItemCheckout{
    id: number;
    img: string;
    name: string;
    quantity: number;
}

export function Checkout(){
    const { coffeeList, totalPrice } = useContext(CoffeeContext);

    function handleCreateNewCheckout(){

    }

    return (
        <ContainerMain>
            <SectionForm>
                <h4>Complete seu pedido</h4>
                <FormContainer>
                    <div>
                        <MapPinLine size={16} />
                        <div className="title">
                            <h5>Endereço de Entrega</h5>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <form action="" onSubmit={handleCreateNewCheckout}>
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
                    </form>
                </FormContainer>

                <PaymentSelectionSection>
                    <div>
                        <CurrencyDollar size={16}/>
                        <div>
                            <h5>Pagamento</h5>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <PaymentOptions>
                        <button>
                            <div>
                                <CreditCard size={16} />
                            </div>
                            Cartão de Crédito
                        </button>
                        <button>
                            <div>
                                <Bank size={16} />
                            </div>
                            Cartão de Débito
                        </button>
                        <button>
                            <div>
                                <Money size={16} />
                            </div>
                            Dinheiro
                        </button>
                    </PaymentOptions>
                </PaymentSelectionSection>
            </SectionForm>

            <CheckoutPriceContainer>
                <h4>Cafés selecionados</h4>
                <CheckoutPriceConfirmationContainer>
                    
                    <div className="container">
                        {coffeeList.map((coffee:CoffeeItemCheckout) => {
                            if(coffee.quantity != 0){
                                return <CoffeeQuantitySelector name={coffee.name} img={coffee.img} id={coffee.id} quantity={coffee.quantity}/>
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