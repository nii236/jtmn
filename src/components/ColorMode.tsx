import { Button, useColorMode } from "theme-ui"
const modes = ["light", "dark", "deep", "swiss"]

export const ColorMode = (props: any) => {
  const [mode, setMode] = useColorMode()

  return (
    <Button
      variant="secondary"
      sx={{ margin: "1rem", cursor: "pointer" }}
      {...props}
      onClick={(e) => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    >
      Theme: {mode}
    </Button>
  )
}
