import { CadViewer } from "src/CadViewer"

export const WithoutBoard = () => {
  return (
    <CadViewer>
      <board width="10mm" height="10mm">
        <chip name="chip1" />
        <silkscreenrect
          height="1mm"
          width="1mm"
          layer="top"
          stroke="solid"
          strokeWidth="0.3mm"
        />
      </board>
    </CadViewer>
  )
}

export default {
  title: "WithoutBoard",
  component: WithoutBoard,
}
