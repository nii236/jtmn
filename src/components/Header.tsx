import { Box, Flex, Heading, Image, Paragraph } from "theme-ui"

const Header = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        gap: ["1rem", "2rem"],
      }}
      m={"1rem"}
    >
      <Box>
        <Heading as="h1" sx={{ textAlign: "center" }}>
          John Nguyen
        </Heading>
        <Paragraph sx={{ textAlign: "center", fontStyle: "oblique" }}>
          Chief Technology Officer, Software Engineer, Web3 Developer
        </Paragraph>
      </Box>
      <Box className="tc">
        <Box className="w5 center">
          <Image
            height={"100%"}
            width={"100%"}
            sx={{ borderRadius: "1rem" }}
            src="/img/webtoon.jpg"
            alt="avatar"
          />
        </Box>
      </Box>
    </Flex>
  )
}
export { Header }
