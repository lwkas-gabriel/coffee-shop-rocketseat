import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { CheckoutPriceConfirmationContainer, CheckoutPriceContainer, ConfirmButton, ContainerMain, FormContainer, PaymentOptions, PaymentSelectionSection, SectionForm, TotalInfo } from "./styles";
import { CoffeeQuantitySelector } from "./components/CoffeeQuantitySelector";

export function Checkout(){
    return (
        <ContainerMain>
            <SectionForm>
                <h4>Complete seu pedido</h4>
                <FormContainer>
                    <div>
                        <MapPinLine size={16} />
                        <div>
                            <h5>Endereço de Entrega</h5>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <form action="">

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
                        <CoffeeQuantitySelector />
                        <CoffeeQuantitySelector />
                        <CoffeeQuantitySelector />
                    </div>
                    
                    <TotalInfo>
                        <span>
                            <p>Total de Itens</p>
                            <p>R$ 29,70</p>
                        </span>

                        <span>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </span>

                        <span>
                            <p><strong>Total</strong></p>
                            <p><strong>R$ 33,20</strong></p>
                        </span>
                        
                    </TotalInfo>
                    <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
                </CheckoutPriceConfirmationContainer>
            </CheckoutPriceContainer>

        </ContainerMain>
    );
}