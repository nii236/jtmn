import { Header } from "./components/Header"
import { Box, Container, Flex } from "theme-ui"
import "./App.css"

import { ColorMode } from "./components/ColorMode"

import { TerminalContainer } from "./components/Terminal"

function App() {
  return (
    <Container p="1rem" sx={{ maxWidth: "75rem" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Box sx={{ alignSelf: ["center", "end"] }}>
          <ColorMode />
        </Box>
        <Flex
          sx={{ justifyContent: "center", flexDirection: ["column", "row"] }}
        >
          <Box>
            <Header />
          </Box>
          <Box sx={{ alignSelf: "flex-end", width: "100%" }}>
            <TerminalContainer />
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
