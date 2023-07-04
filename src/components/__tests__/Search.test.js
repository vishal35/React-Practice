import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_Data } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_Data)
        },
    })
})

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer")
    expect(shimmer.children.length).toBe(15)
})

test("Restaurant should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getAllByTestId("search-btn")))
    const resList = body.getByTestId("rest-list")
    expect(resList.children.length).toBe(15)
})

test("Search for String(food) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getAllByTestId("search-btn")))

    const input = body.getByTestId("search-input")

    fireEvent.change(input, {
        target: {
            value: "pizza"
        }
    })
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)

    const resList = body.getByTestId("rest-list")

    expect(resList.children.length).toBe(4)
})