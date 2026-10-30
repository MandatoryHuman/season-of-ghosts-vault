import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

/**
 * Vercel Speed Insights component for Quartz.
 * This component injects the Speed Insights tracking script.
 */
const SpeedInsights: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };`,
        }}
      />
      <script defer src="/_vercel/speed-insights/script.js" />
    </>
  )
}

export default (() => SpeedInsights) satisfies QuartzComponentConstructor
