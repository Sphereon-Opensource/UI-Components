import React, {CSSProperties, FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'

export interface IProps {
  width?: number
  height?: number
  color?: string
  style?: CSSProperties
}

const SSIArrowDownIcon: FC<IProps> = (props: IProps): ReactElement => {
  const {width = 16, height = 8, color = fontColors.dark, style} = props

  return (
    <div style={{...style, width, height, display: 'flex'}}>
      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.03265 7.74886C8.14951 7.74175 8.26065 7.69465 8.34825 7.61511L15.3133 1.19499C15.367 1.1489 15.411 1.09224 15.4429 1.02837C15.4747 0.964504 15.4937 0.894731 15.4987 0.823204C15.5037 0.751676 15.4946 0.67985 15.4719 0.611995C15.4493 0.54414 15.4135 0.481647 15.3668 0.428216C15.3201 0.374784 15.2634 0.331504 15.2001 0.300961C15.1367 0.270419 15.068 0.253238 14.9981 0.250423C14.9281 0.247608 14.8583 0.259221 14.7928 0.28458C14.7273 0.309939 14.6675 0.348517 14.6168 0.398032L8 6.49492L1.38317 0.398032C1.33252 0.348517 1.27268 0.309939 1.20718 0.28458C1.14169 0.259221 1.07189 0.247597 1.00193 0.250412C0.931963 0.253227 0.863266 0.270419 0.799918 0.300961C0.736569 0.331504 0.679861 0.374784 0.633164 0.428216C0.586466 0.481647 0.550732 0.54414 0.528085 0.611995C0.505437 0.67985 0.496338 0.751676 0.501329 0.823204C0.506319 0.894731 0.525297 0.964504 0.557135 1.02837C0.588973 1.09224 0.633022 1.1489 0.686663 1.19499L7.65174 7.61511C7.70344 7.6621 7.76372 7.69811 7.82911 7.72107C7.89449 7.74403 7.96367 7.75348 8.03265 7.74886Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default SSIArrowDownIcon
