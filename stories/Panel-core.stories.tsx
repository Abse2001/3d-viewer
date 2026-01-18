import { Circuit } from "@tscircuit/core"
import { CadViewer } from "../src/CadViewer"
import mediumMachinePinUrl from "./assets/MediumMachinePin v2.glb?url"

const createCircuit = () => {
  const circuit = new Circuit()

  circuit.add(
    <panel panelizationMethod="tab-routing">
      <board width="10mm" height="10mm" name="B_breakout">
        <resistor name="R1" resistance="1k" footprint="0805" />
        <capacitor name="C1" capacitance="100nF" footprint="0805" />
        <led name="LED1" footprint="0805" />
        {/* <breakoutpoint connection=".R1 > .pin1" pcbX={-2} pcbY={-2} /> */}
      </board>
      <board width="10mm" height="10mm">
        <chip
          name="MediumMachinePin"
          footprint={
            <footprint>
              <hole diameter="1.5mm" pcbX={0} pcbY={0} />
            </footprint>
          }
          cadModel={{
            gltfUrl: mediumMachinePinUrl,
            rotationOffset: { x: 0, y: 0, z: 0 },
            positionOffset: { x: 0, y: 0, z: 0.8 },
            modelUnitToMmScale: 1000,
          }}
        />
      </board>
      {/* <board width="10mm" height="10mm" name="B_cutout">
        <cutout shape="circle" radius={1} pcbX={0} pcbY={0} />
      </board>
      <board width="10mm" height="10mm" name="B_fiducial">
        <fiducial name="F1" padDiameter="1mm" pcbX={0} pcbY={0} />
      </board>
      <board width="10mm" height="10mm" name="B_hole">
        <hole diameter={1} pcbX={0} pcbY={0} />
      </board>
      <board width="10mm" height="10mm" name="B_platedhole">
        <platedhole
          shape="circle"
          outerDiameter={2}
          holeDiameter={1}
          pcbX={0}
          pcbY={0}
        />
      </board>
      <board width="10mm" height="10mm" name="B_smtpad">
        <smtpad shape="rect" width={2} height={2} pcbX={0} pcbY={0} />
      </board>
      <board width="10mm" height="10mm" name="B_pcbnotedimension">
        <pcbnotedimension from={{ x: -2, y: -2 }} to={{ x: 2, y: 2 }} />
      </board>
      <board width="10mm" height="10mm" name="B_pcbnotepath">
        <pcbnotepath
          route={[
            { x: -2, y: -2 },
            { x: 2, y: 2 },
          ]}
        />
      </board>
      <board width="10mm" height="10mm" name="B_coppertext">
        <coppertext text="Cu" pcbX={0} pcbY={0} fontSize={1.5} />
      </board>
      <board width="10mm" height="10mm" name="B_pcbnoteline">
        <pcbnoteline x1={-2} y1={-2} x2={2} y2={2} />
      </board>
      <board width="10mm" height="10mm" name="B_pcbnoterect">
        <pcbnoterect width={4} height={4} />
      </board>
      <board width="10mm" height="10mm" name="B_pcbnotetext">
        <pcbnotetext text="Note" />
      </board>
      <board width="10mm" height="10mm" name="B_fabricationnotetext">
        <fabricationnotetext text="Fab Note" />
      </board>
      <board width="10mm" height="10mm" name="B_fabricationnoterect">
        <fabricationnoterect width={4} height={4} strokeWidth={0.2} />
      </board>
      <board width="10mm" height="10mm" name="B_fabricationnotepath">
        <fabricationnotepath
          route={[
            { x: -2, y: -2 },
            { x: 2, y: 2 },
          ]}
          strokeWidth={0.1}
        />
      </board>
      <board width="10mm" height="10mm" name="B_fabricationnotedimension">
        <fabricationnotedimension from={{ x: -2, y: -2 }} to={{ x: 2, y: 2 }} />
      </board>
            <board width="10mm" height="10mm" name="B_silkscreentext">
        <silkscreentext text="Silk" fontSize={1} />
      </board>
      <board width="10mm" height="10mm" name="B_silkscreenrect">
        <silkscreenrect width={4} height={4} />
      </board>
      <board width="10mm" height="10mm" name="B_silkscreenline">
        <silkscreenline x1={-2} y1={-2} x2={2} y2={2} strokeWidth={0.1} />
      </board>
      <board width="10mm" height="10mm" name="B_silkscreenpath">
        <silkscreenpath
          route={[
            { x: -2, y: -2 },
            { x: 0, y: 2 },
            { x: 2, y: -2 },
          ]}
        />
      </board>
      <board width="10mm" height="10mm" name="B_silkscreencircle">
        <silkscreencircle pcbX={0} pcbY={0} radius={2} />
      </board> */}
    </panel>,
  )

  return circuit.getCircuitJson()
}

export const panelCoreTest = () => {
  const circuitJson = createCircuit()
  return <CadViewer circuitJson={circuitJson as any} />
}

export default {
  title: "Panel Core test",
  component: panelCoreTest,
}
