import React, { useState } from "react"
import Terminal, {
  ColorMode as TermColor,
  TerminalInput,
} from "react-terminal-ui"
import { Box, Paragraph, Text, Link, Flex, useColorMode } from "theme-ui"
import { TopButton } from "./BackToTopButton"

const ContactText = [
  <Box sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      Timezone: GMT+8 (Australia)
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      Email:{" "}
      <Link variant="term" target="_blank" href="mailto:john@jtmn.dev">
        john@jtmn.dev
      </Link>
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      Website:{" "}
      <Link variant="term" target="_blank" href="https://jtmn.dev">
        https://jtmn.dev
      </Link>
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      Telegram:{" "}
      <Link variant="term" target="_blank" href="https://t.me/nii236">
        https://t.me/nii236
      </Link>
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      GitHub:{" "}
      <Link variant="term" target="_blank" href="https://github.com/nii236">
        https://github.com/nii236
      </Link>
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      LinkedIn:{" "}
      <Link
        variant="term"
        target="_blank"
        href="https://linkedin.com/johnnguyen236"
      >
        https://linkedin.com/johnnguyen236
      </Link>
    </Paragraph>
    <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
      Calendly:{" "}
      <Link
        variant="term"
        target="_blank"
        href="https://calendly.com/jtmn/30min"
      >
        https://calendly.com/jtmn/30min
      </Link>
    </Paragraph>
  </Box>,
]

const ContractsText = [
  <Flex
    sx={{
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      gap: "0.5rem",
      flexDirection: "column",
    }}
  >
    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://bscscan.com/address/0xc99cfaa8f5d9bd9050182f29b83cc9888c5846c4#code"
        >
          Pausable ERC20 tokens
        </Link>
      </Paragraph>
      <Paragraph>
        Simple pre-minted ERC20 with a supply cap and admin functions to pause
        transfers.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0x651D4424F34e6e918D8e4D2Da4dF3DEbDAe83D0C"
        >
          Stakable ERC721 tokens
        </Link>
      </Paragraph>
      <Paragraph>
        Stake NFTs to use assets in-game, with an escape hatch (tracked via
        address mappings) to allow withdraws trustlessly.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0x17f5655c7d834e4772171f30e7315bbc3221f1ee"
        >
          Achievements ERC1155 tokens
        </Link>
      </Paragraph>
      <Paragraph>
        Badges to reward users for early adoption and participation with
        server-side signature based minting.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0xEe53F6fbFfC8EB14f35f3CC894372809951A2299"
        >
          Deposit Locking ERC721 tokens
        </Link>
      </Paragraph>
      <Paragraph>
        Immutable X supported NFT collection with L1 server-side signature based
        minting.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0x7fc8375d667A63cEB0E0460D91B382c9fAA57535"
        >
          On-chain reservations
        </Link>
      </Paragraph>
      <Paragraph>
        Pre-sale and whitelisting mechanism to prepare for NFT PFP launch using
        finite state machines.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0x27609c4daC1Ca06f308110FAc2535DdCB75dd833"
        >
          Supply Driven Pricing
        </Link>
      </Paragraph>
      <Paragraph>
        PFP NFT minting contract taking stablecoins while setting dynamic
        pricing based on remaining unminted token supply.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://bscscan.com/address/0x6476dB7cFfeeBf7Cc47Ed8D4996d1D60608AAf95"
        >
          Centralised Signature-based Withdrawals
        </Link>
      </Paragraph>
      <Paragraph>
        Server-side signatures to allow user withdrawals of ERC20 tokens, with
        nonces to prevent replay attacks.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://bscscan.com/address/0xd8e7f2e2d274ed9c121bf8520ebc4f6671a936ab"
        >
          Self-service Token Redemptions
        </Link>
      </Paragraph>
      <Paragraph>
        System that accepts ERC20 tokens and returns back stablecoins.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://bscscan.com/address/0x768F80c7B256cf921F8C557CeC9D0Bd97766f253"
        >
          Two Token Yield Farming
        </Link>
      </Paragraph>
      <Paragraph>
        Lock Uniswap V2 style tokens to receive a stream of another ERC20 token.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://etherscan.io/address/0x2be514fa401319eab56e3f1aeacd5c810ec481fc"
        >
          Community Funding System
        </Link>
      </Paragraph>
      <Paragraph>
        DAO funding contract to mint DAO tokens after transfer of a stablecoin
        into the contract.
      </Paragraph>
    </Box>

    <Box>
      <Paragraph>
        <Link
          target="_blank"
          href="https://bscscan.com/address/0x425b85515f589fbafba6637ffbf2ec3d17296482"
        >
          Battle Betting and Boosting system
        </Link>
      </Paragraph>
      <Paragraph>
        ERC1155 for accounting for sweepstakes style betting with ERC20 and
        native token support.
      </Paragraph>
    </Box>
  </Flex>,
]

const AboutText = [
  <Flex
    sx={{
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      gap: "1rem",
      flexDirection: "column",
    }}
  >
    <Paragraph>
      I am a technical and strategic founder developer experienced in web3,
      software engineering and building startups over the past 10 years.{" "}
      <Text color="secondary">
        I operate at the senior software engineer to CTO level
      </Text>{" "}
      depending on the size of the organisation, and am able to develop a
      company's "zero to one".
    </Paragraph>
    <Paragraph>
      My web3 origin story started almost ten years ago, when{" "}
      <Text color="secondary">I bartered Bitcoin for malaria tablets</Text> (in
      real life) while deployed in Ghana, West Africa in 2012 for a
      commissioning project at a gold mine.
    </Paragraph>
    <Paragraph>
      <Text color="secondary">
        I founded and grew Ninja Syndicate into a large team of 50+ Web 3.0
        builders in Australia
      </Text>
      , who were focused on developing a platform for Metaverse Gaming. Ninja
      Syndicate's main product was Supremacy, a metaverse/gamefi product that
      tied MOBA style gaming with spectator sports, MMO, RTS and social
      elements.
    </Paragraph>
    <Box>
      <Paragraph>With the invaluable help of others, I have:</Paragraph>
      <Paragraph as="li">
        Launched a token sale generating over{" "}
        <Text color="secondary">4.5M USD in revenue.</Text>
      </Paragraph>
      <Paragraph as="li">
        Founded two software companies{" "}
        <Text color="secondary">growing to 50+ staff.</Text>
      </Paragraph>
      <Paragraph as="li">
        Mentored and trained{" "}
        <Text color="secondary">15+ full stack software engineers.</Text>
      </Paragraph>
      <Paragraph as="li">
        Launched a GameFi product with{" "}
        <Text color="secondary">17k+ community.</Text>
      </Paragraph>
      <Paragraph as="li">
        Written smart contracts reaching a{" "}
        <Text color="secondary">TVL of $500k USD.</Text>
      </Paragraph>
      <Paragraph as="li">
        Ran a tech business podcast reaching{" "}
        <Text color="secondary">100+ episodes.</Text>
      </Paragraph>
    </Box>
    <Paragraph>
      <Text color="secondary">
        I'm looking to contribute to cutting edge software projects
      </Text>{" "}
      with cool problems to solve. I look forward to collaborating with a
      remote-first, technical and engaging team.
    </Paragraph>
  </Flex>,
]

const ProjectsText = [
  <Flex
    sx={{
      flexDirection: "column",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      gap: "0.5rem",
    }}
  >
    <Box>
      <Paragraph>
        <Link
          variant="term"
          target="_blank"
          href="https://xsyn-pricefeed.jtmn.dev/api/transfers/mainnet/sups"
        >
          Xsyn Pricefeed
        </Link>
      </Paragraph>
      <Paragraph>
        Indexer, scraper and API serving 100% on-chain sourced, chain-link
        based, grass fed price feeds, ERC20 transactions and ERC721 ownership
        changes.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          variant="term"
          target="_blank"
          href="https://passport.xsyn.io/login"
        >
          Xsyn Passport
        </Link>
      </Paragraph>
      <Paragraph>
        Web3 identity management, ERC20/721/1155 minting and transaction
        platform for bridging web2 and web3 games.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link variant="term" target="_blank" href="https://supremacy.game/">
          Supremacy: Battle Arena
        </Link>
      </Paragraph>
      <Paragraph>
        Metaverse and gamefi product that tied MOBA style gaming with spectator
        sports, MMO, RTS and social elements.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          variant="term"
          target="_blank"
          href="https://www.waifuprotocol.com/"
        >
          Waifu Protocol
        </Link>
      </Paragraph>
      <Paragraph>
        PFP project with on-chain reservation, dynamic supply driven pricing and
        AI generated anime girls.
      </Paragraph>
    </Box>
    <Box>
      <Paragraph>
        <Link
          variant="term"
          target="_blank"
          href="https://www.latitude28produce.com/"
        >
          Latitude 28 Proof Of Steak
        </Link>
      </Paragraph>
      <Paragraph>
        Supply chain and logistics tracking using merkle roots to create fraud
        resistant tracking of steak exports.{" "}
      </Paragraph>
    </Box>
  </Flex>,
]

const HelpText = [
  <Box sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
    <Paragraph>Welcome. Supported commands:</Paragraph>
    <Paragraph as="ul">
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        about
      </Paragraph>
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        cv
      </Paragraph>
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        projects
      </Paragraph>
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        contracts
      </Paragraph>
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        contact
      </Paragraph>
      <Paragraph as={"li"} sx={{ listStyleType: "none" }}>
        help
      </Paragraph>
    </Paragraph>
  </Box>,
]

const TerminalContainer = () => {
  const [terminalLineData, setTerminalLineData] =
    useState<JSX.Element[]>(HelpText)
  const handleAbout = (ld: JSX.Element[]) => {
    ld.push(...AboutText)
    setTerminalLineData(ld)
  }
  const handleCV = (ld: JSX.Element[]) => {
    ld.push(
      <div>
        Opening new tab... click{" "}
        <Link target="_blank" href="/doc/john_nguyen_cv.pdf">
          here
        </Link>{" "}
        if it doesn't open.
      </div>
    )
    setTerminalLineData(ld)
    setTimeout(() => {
      window.open("/doc/john_nguyen_cv.pdf", "_blank")
    }, 2000)
  }
  const handleProjects = (ld: JSX.Element[]) => {
    ld.push(...ProjectsText)
    setTerminalLineData(ld)
  }
  const handleClear = (ld: JSX.Element[]) => {
    setTerminalLineData([])
  }
  const handleContracts = (ld: JSX.Element[]) => {
    ld.push(...ContractsText)
    setTerminalLineData(ld)
  }
  const handleContact = (ld: JSX.Element[]) => {
    ld.push(...ContactText)
    setTerminalLineData(ld)
  }
  const handleHelp = (ld: JSX.Element[]) => {
    ld.push(...HelpText)
    setTerminalLineData(ld)
  }
  const handleUnrecognised = (ld: JSX.Element[]) => {
    ld.push(<Paragraph>Unrecognized command</Paragraph>)
    setTerminalLineData(ld)
  }
  const onInput = (input: string) => {
    let ld = [...terminalLineData]
    ld.push(
      <TerminalInput>
        <Text sx={{ color: "primary", fontFamily: "Ubuntu Mono" }}>
          {input}
        </Text>
      </TerminalInput>
    )
    if (input.toLocaleLowerCase().trim() === "cv") {
      handleCV(ld)
    } else if (input.toLocaleLowerCase().trim() === "about") {
      handleAbout(ld)
    } else if (input.toLocaleLowerCase().trim() === "contracts") {
      handleContracts(ld)
    } else if (input.toLocaleLowerCase().trim() === "contact") {
      handleContact(ld)
    } else if (input.toLocaleLowerCase().trim() === "clear") {
      handleClear(ld)
    } else if (input.toLocaleLowerCase().trim() === "projects") {
      handleProjects(ld)
    } else if (input.toLocaleLowerCase().trim() === "help") {
      handleHelp(ld)
    } else if (input) {
      handleUnrecognised(ld)
    }
  }

  const commands = [
    "cv",
    "about",
    "contracts",
    "contact",
    "clear",
    "projects",
    "help",
  ]

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        {commands.map((c) => {
          return <ShortcutButton key={c} command={c} onInput={onInput} />
        })}
      </Flex>
      <TerminalController onInput={onInput} text={terminalLineData} />
    </Flex>
  )
}
const ShortcutButton = (props: {
  command: string
  onInput: (input: string) => void
}) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        borderWidth: "0.1px",
        borderStyle: "dashed",
        padding: "0.5rem",
      }}
      onClick={() => {
        props.onInput(props.command)
      }}
    >
      {props.command}
    </Box>
  )
}
const TerminalController = (props: {
  text: JSX.Element[]
  onInput: (input: string) => void
}) => {
  const [mode] = useColorMode()

  return (
    <Box>
      <Terminal
        colorMode={
          mode === "light" || mode === "swiss"
            ? TermColor.Light
            : TermColor.Dark
        }
        onInput={(input) => props.onInput(input)}
      >
        {props.text.map((el, i) => (
          <React.Fragment key={i}>{el}</React.Fragment>
        ))}
      </Terminal>
      <TopButton />
    </Box>
  )
}

export { TerminalContainer }
