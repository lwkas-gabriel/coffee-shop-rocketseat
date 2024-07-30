import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { ContainerMain, FormContainer, PaymentOptions, PaymentSelectionSection, SectionForm } from "./styles";

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
                        <span>
                            <h5>Pagamento</h5>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </span>
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

            <section>
                <h4>Cafés selecionados</h4>
                <div>
                    <h1>teste</h1>
                    <h1>teste2</h1>
                    <div>

                    </div>
                    <button>CONFIRMAR PEDIDO</button>
                </div>
            </section>
        </ContainerMain>
    );
}