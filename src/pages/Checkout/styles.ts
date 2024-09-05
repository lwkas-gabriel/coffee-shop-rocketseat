import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 140px;
    gap: 32px;
    line-height: 130%;

    @media (max-width:1100px){
        align-items: center;
        flex-direction: column;
    }
`

export const SectionForm = styled.section`
    width: 640px;
    max-width: 90%;
    display: flex;
    flex-direction: column;

    h4{
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        font-size: 18px;
    }

`


export const Input = styled.input`
        height: 42px;
        padding-left: 12px;
        background-color: ${props => props.theme["base-button"]};
        border: transparent;
        border-radius: 4px;
        color: ${props => props.theme["base-text"]};
        font-size: 14px;
        //min-width: 200px;

        &:focus{
            outline: none;
            box-shadow: 0 0 0 1px ${props => props.theme["yellow-dark"]};
        }

        @media (max-width: 560px) {
            width: 100%;
        }
`

export const FormContainer = styled.div`
    padding: 40px;
    margin: 15px 0 12px 0;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};

    div{
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: ${props => props.theme["yellow-dark"]};

        .title{
            display: flex;
            flex-direction: column;
            
            h5{
                font-size: 16px;
                color: ${props => props.theme["base-subtitle"]};
            }

            p{
                font-size: 14px;
                color: ${props => props.theme["base-text"]};
            }
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap:1rem;
        margin-top: 32px;
        flex-wrap: wrap;

        .first-section{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            min-width: 100%;

            .cep{
                max-width: 200px;
            }
        }

        .second-section{
            display: flex;
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 100%;

            :last-child{
                flex: 1;
            }
        }

        .third-section{
            display: flex;
            flex-direction: row;
            width: 100%;

            :first-child{
                max-width: 200px;
            }

            :nth-child(2){
                flex: 1;
            }

            :last-child{
                width: 60px;
            }
        }

        @media (max-width: 560px) {
            .first-section{
                .cep{
                    max-width: 100%;
                }
            }

            .third-section{
                flex-direction: column;

                :first-child{
                    max-width: 100%;
                }

                :nth-child(2){
                    flex: none;
                    width: 100%;
                }

                :last-child{
                    width: 100%;
                }
            }
        }
    }
`

export const PaymentSelectionSection = styled.div`
    max-width: 100%;
    border-radius: 6px;
    background-color: ${props => props.theme["base-card"]};
    padding: 40px;

    div{
        display: flex;
        color: ${props => props.theme["purple"]};
        gap: 12px;

        div{
            display: flex;
            flex-direction: column;

            h5{
                font-size: 16px;
                font-weight: 400;
                color: ${props => props.theme["base-subtitle"]};
            }

            p{
                font-size: 14px;
                color: ${props => props.theme["base-text"]};
            }
        }
    }
`

export const PaymentOptions = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    gap: 12px;
    border: none;

    div{
        display: flex;
        align-items: center;
        color: black;
        background-color: ${props => props.theme["base-button"]};
        font-size: 12px;
        padding: 16px;
        border-radius: 6px;
        transition: .5s;

        &:hover{
            background-color: ${props => props.theme["base-hover"]};
            color: ${props => props.theme["base-subtitle"]};
        }

        &.checked{
            border: 1px solid ${props => props.theme.purple};
            background-color: ${props => props.theme["purple-light"]};
        }

        .purple-icon{
            color: ${props => props.theme["purple"]};
        }

        input[type="radio"]{
            display: none;
            appearance: none;
        }
    }
`

export const CheckoutPriceContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 448px;
    flex-grow: 1;

    h4{
        font-family: "Baloo 2";
        font-size: 18px;
        color: ${props => props.theme["base-subtitle"]};

    }

    @media (max-width:800px){
        align-items: center;
    }


`

export const CheckoutPriceConfirmationContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 40px;
    margin-top: 15px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    .container{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

`

export const TotalInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;

    span{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`

export const ConfirmButton = styled.button`
    width: 100%;
    border-radius: 6px;
    border: none;
    padding: 12px 0 12px 0;
    color: ${props => props.theme["white"]};
    background-color: ${props => props.theme["yellow"]};
    margin-top: 24px;
    transition: 0.5s;

    &:hover{
        background-color: ${props => props.theme["yellow-dark"]};
    }
`

