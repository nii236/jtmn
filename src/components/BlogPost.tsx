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
import blog1data from "../blogs/1.json"
import blog1body from "../blogs/1.md?raw"
import blog2data from "../blogs/2.json"
import blog2body from "../blogs/2.md?raw"
import { format, formatDistance, parse, parseISO } from "date-fns"
const blogs: { [key: number]: { data: BlogPostData; body: string } } = {
  1: {
    data: blog1data,
    body: blog1body,
  },
  2: {
    data: blog2data,
    body: blog2body,
  },
}
export const BlogPost = () => {
  let { blogId } = useParams()
  if (!blogId) return null
  const data = blogs[parseInt(blogId, 10)].data
  const body = blogs[parseInt(blogId, 10)].body
  return (
    <Box marginY={["2rem", "1rem"]} p={["0rem", "1rem"]}>
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
