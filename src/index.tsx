import React from "react"
import ReactDOM from "react-dom/client"
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
    path: "/blog/:blogId",
    element: (
      <App>
        <BlogPost />
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
