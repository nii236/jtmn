import { Flex, Box, Link } from "theme-ui"

export const TopButton = () => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: ["block", "block", "none"],
          alignItems: "center",
          borderStyle: "solid",
          borderRadius: "0.5rem",
          borderWidth: "1px",
          borderColor: "primary",
          margin: "1rem",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Link variant="term" href="#">
          Back to top
        </Link>
      </Box>
    </Flex>
  )
}
