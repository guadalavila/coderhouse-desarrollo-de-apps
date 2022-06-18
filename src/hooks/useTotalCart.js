import { useSelector } from "react-redux";


function useTotalCart() {

    const { cart } = useSelector((state) => state.cart.value);

    const getTotal = () => {
        let value = 0;
        if (cart) {
            cart.forEach((element) => {
                value = value + element.price * element.quantity;
            });
        }
        return value;
    };

    return { getTotal } 

}

export default useTotalCart;