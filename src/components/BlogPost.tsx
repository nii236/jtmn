import { Flex, Box, Heading } from "theme-ui"
import { BlogPostData } from "../blogs/blog"
import { RouterLink } from "./RouterLink"
import { useEffect, useState } from "react"
import Markdown from "markdown-to-jsx"

export const BlogPost = (props: { data: BlogPostData; body: any }) => {
  console.log(props.body)
  return (
    <Flex>
      <Box>
        <RouterLink to="/">Back</RouterLink>
        <Heading>{props.data.title}</Heading>
        {/* <Markdown>{props.body.content}</Markdown> */}
      </Box>
    </Flex>
  )
}
