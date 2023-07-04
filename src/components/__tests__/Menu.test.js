import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { RESTAURANT_MENU } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_MENU)
        }
    })
})

test("Add Items to Cart", async () => {
    const resMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantMenu />
                <Header />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(resMenu.getByTestId("menu")))

    const addBtn = resMenu.getAllByTestId("add-item")

    fireEvent.click(addBtn[0])
    fireEvent.click(addBtn[1])

    const cart = resMenu.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart - 2")
})