import { Container } from "./style";
import { Minus, Plus } from '@phosphor-icons/react'

type Props = {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
  }

export function QualityCoffee({
    quantity,
    incrementQuantity,
    decrementQuantity,
} : Props){

    return(
        <Container>
            <button onClick={decrementQuantity}>
                <Minus size={18}/>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={18}/>
            </button>
        </Container>
    )
}