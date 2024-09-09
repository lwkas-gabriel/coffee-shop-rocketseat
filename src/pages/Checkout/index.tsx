import { CheckoutPriceConfirmationContainer,
         CheckoutPriceContainer,
         ConfirmButton,
         ContainerMain,
         SectionForm, 
         TotalInfo 
        } from "./styles";
import * as zod from "zod";
import { CoffeeQuantitySelector } from "./components/CoffeeQuantitySelector";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { NewCheckoutForm } from "./components/NewCheckoutForm";
import { useNavigate } from 'react-router-dom';


// const newCheckoutFormValidationSchema = zod.object({

// })

export interface CoffeeItemCheckout{
    id: number;
    img: string;
    name: string;
    quantity: number;
    price: number;
}

const newCheckoutFormValidationSchema = zod.object({
    cep: zod.string().regex(/^[0-9]{5}-?[0-9]{3}$/, { message: 'CEP inválido' }),
    street: zod.string().min(1, { message: 'O campo Rua é obrigatório!' }),
    houseNumber: zod.union([
      zod.string().min(1, { message: 'Número é obrigatório e não pode estar vazio' }),
      zod.number().gt(0, { message: 'Número deve ser maior que 0' })
    ]),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, { message: 'Bairro é obrigatório' }),
    city: zod.string().min(1, { message: 'Cidade é obrigatória' }),
    state: zod.string().length(2, { message: 'Estado deve ter exatamente 2 caracteres' }),
    paymentMethod: zod.enum(['credit', 'debit', 'pix'], { 
      errorMap: () => ({ message: 'Selecione uma forma de pagamento!' }) 
    }),
  });

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>;

export function Checkout(){
    const { coffeeList, totalPrice } = useContext(CoffeeContext);
    const navigate = useNavigate();

    const newCheckoutForm = useForm<NewCheckoutFormData>({
        resolver: zodResolver(newCheckoutFormValidationSchema),
        defaultValues: {
          cep: '',
          street: '',
          houseNumber: '',
          complement: '',
          neighborhood: '',
          city: '',
          state: '',
          paymentMethod: undefined,
        },
      });

    const { handleSubmit, reset } = newCheckoutForm;


    function handleCreateNewCheckout(data: NewCheckoutFormData){
        console.log(data); // Processa os dados do formulário
        reset();
        navigate('/delivery-confirmation'); // Redireciona para a rota '/x'
    }

    return (
        <ContainerMain>
            <SectionForm>
                <h4>Complete seu pedido</h4>
                <form action="" onSubmit={handleSubmit(handleCreateNewCheckout)}>
                    <FormProvider {...newCheckoutForm}>
                        <NewCheckoutForm />
                    </FormProvider>
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