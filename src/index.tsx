import React from "react"
import ReactDOM from "react-dom/client"
import blog1data from "./blogs/1.json"
// eslint-disable-next-line import/no-webpack-loader-syntax
import blog1body from "!!raw-loader!./blogs/1.md"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "theme-ui"
import { theme } from "./theme"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BlogPost } from "./components/BlogPost"
import { TerminalContainer } from "./components/Terminal"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <TerminalContainer />
      </App>
    ),
  },
  {
    path: "/blog/:blog_id",
    element: (
      <App>
        <BlogPost data={blog1data} body={blog1body} />
      </App>
    ),
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
