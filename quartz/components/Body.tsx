import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import SpeedInsightsConstructor from "./SpeedInsights"

const SpeedInsights = SpeedInsightsConstructor()

const Body: QuartzComponent = (props: QuartzComponentProps) => {
  const { children, ...restProps } = props
  return (
    <div id="quartz-body">
      {children}
      <SpeedInsights {...restProps} children={[]} />
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
