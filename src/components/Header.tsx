import { Container } from "@mantine/core"

const Header = () => {
  return (
    <Container>
      <div className="tc">
        <div className="w5 center">
          <img
            className="br4 h-100 w-100 dib"
            src="/img/webtoon.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </Container>
  )
}
export { Header }
