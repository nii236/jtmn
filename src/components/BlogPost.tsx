import {
  Flex,
  Box,
  Heading,
  Theme,
  useThemeUI,
  BaseStyles,
  Text,
  Paragraph,
} from "theme-ui"
import { BlogPostData } from "../blogs/blog"
import { RouterLink } from "./RouterLink"
import { MDXProvider, useMDXComponents } from "@mdx-js/react"
import { useThemedStylesWithMdx } from "@theme-ui/mdx"
import { ThemeProvider } from "theme-ui"
import { MDXComponents } from "mdx/types"
import Markdown from "markdown-to-jsx"
import { useParams } from "react-router-dom"
import blog1data from "../blogs/01.json"
import blog1body from "../blogs/01.md?raw"
import blog2data from "../blogs/02.json"
import blog2body from "../blogs/02.md?raw"
import blog3data from "../blogs/03.json"
import blog3body from "../blogs/03.md?raw"
import blog4data from "../blogs/04.json"
import blog4body from "../blogs/04.md?raw"
import { formatDistance, parseISO } from "date-fns"
const blogs: { [key: number]: { data: BlogPostData; body: string } } = {
  1: {
    data: blog1data,
    body: blog1body,
  },
  2: {
    data: blog2data,
    body: blog2body,
  },
  3: {
    data: blog3data,
    body: blog3body,
  },
  4: {
    data: blog4data,
    body: blog4body,
  },
}
export const BlogPost = () => {
  let { blogId } = useParams()
  if (!blogId) return null
  const data = blogs[parseInt(blogId, 10)].data
  const body = blogs[parseInt(blogId, 10)].body
  return (
    <Box
      marginX={["0rem", "2rem"]}
      marginY={["2rem", "1rem"]}
      p={["0rem", "1rem"]}
    >
      <Text>
        <RouterLink to="/">{"<-"} Back</RouterLink>
      </Text>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        <Heading as="p">Thought #{blogId}</Heading>
        <Heading as="h1">{data.title}</Heading>
        <Paragraph as="i">
          {" "}
          {formatDistance(parseISO(data.date), new Date(), { addSuffix: true })}
        </Paragraph>
        <Paragraph as="p">{data.readLength} read</Paragraph>
      </Flex>
      <BaseStyles>
        <Markdown children={body}></Markdown>
      </BaseStyles>
    </Box>
  )
}
