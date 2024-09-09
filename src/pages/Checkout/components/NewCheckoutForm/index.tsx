import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { DeliveryInfoContainer, Input, PaymentOptions, PaymentSelectionSection } from "./styles";
import { useFormContext } from "react-hook-form";

export function NewCheckoutForm(){
    const { register, watch, setValue } = useFormContext();
    const paymentMethod = watch('paymentMethod');

    function handleSelectPaymentMethod(method: string) {
        setValue('paymentMethod', method); // Atualiza o valor no formulário
    }

    return(
        <>
            <DeliveryInfoContainer>
                <div>
                    <MapPinLine size={16} />
                    <div className="title">
                        <h5>Endereço de Entrega</h5>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <div className="first-section">
                        <Input id="cep" {...register('cep')} className="cep" type="text" placeholder="CEP"/>
                        <Input id="street" {...register('street')} type="text" placeholder="Rua"/>
                    </div>
                    <div className="second-section">
                        <Input id="houseNumber" {...register('houseNumber')} type="text" placeholder="Número"/>
                        <Input id="complement" {...register('complement')} className="complement" type="text" placeholder="Complemento"/>
                    </div>
                    <div  className="third-section">
                        <Input id="neighborhood" {...register('neighborhood')} type="text" placeholder="Bairro"/>
                        <Input id="city" {...register('city')} type="text" placeholder="Cidade"/>
                        <Input id="state" {...register('state')} type="text" placeholder="UF"/>
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
                    <div className={paymentMethod==="credit" ? "checked" : ""}>
                        <CreditCard className="purple-icon" size={16} />
                        <input type="radio" id="credit" {...register('paymentMethod')} onClick={() => handleSelectPaymentMethod("credit")} name="drone" value="credit" />
                        <label htmlFor="credit">Cartão de Crédito</label>
                    </div>

                    <div className={paymentMethod==="debit" ? "checked" : ""}>
                        <Bank className="purple-icon" size={16} />
                        <input type="radio" id="debit" {...register('paymentMethod')} onClick={() => handleSelectPaymentMethod("credit")} name="drone" value="debit" />
                        <label htmlFor="debit">Cartão de Débito</label>
                    </div>

                    <div className={paymentMethod==="cash" ? "checked" : ""}>
                        <Money className="purple-icon" size={16} />
                        <input type="radio" id="cash" {...register('paymentMethod')} onClick={() => handleSelectPaymentMethod("credit")} name="drone" value="cash" />
                        <label htmlFor="cash">Dinheiro</label>
                    </div>
                </PaymentOptions>   
            </PaymentSelectionSection>
        </>
    );
}