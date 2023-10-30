import React from "react";

interface SSILoaderProps {
  size?: number
  color?: string
  strokeWidth?: number
  timeout?: number
  callback: (state?: any) => Promise<void>
}

export default class SSILoader extends React.Component<SSILoaderProps, any> {
  private strokeWidth = this.props.strokeWidth ?? 16
  private halfStrokeWidth = (this.strokeWidth / 2)
  private diameter = this.props.size ?? 200
  private radius = (this.diameter / 2)
  private diameterWithoutHalfStrokeWidth = (this.diameter - this.halfStrokeWidth)
  private radiusWithoutHalfStrokeWidth = (this.radius - this.halfStrokeWidth)
  private color = this.props.color ?? '#0B81FF'

  componentDidMount() {
    setTimeout(async (state?: any): Promise<void> => {
      await this.props.callback(state)
    }, this.props.timeout ?? 0)
  }

  render() {
    return (
        <div style={{ width: this.diameter, height: this.diameter }}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox={`0 0 ${this.diameter} ${this.diameter}`}
              fill="none"
              color={`${this.color}`}
          >
            <defs>
              <linearGradient id="spinner-secondHalf">
                <stop offset="0%" stopOpacity="0" stopColor="currentColor"/>
                <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
              </linearGradient>
              <linearGradient id="spinner-firstHalf">
                <stop offset="0%" stopOpacity="1" stopColor="currentColor"/>
                <stop offset="100%" stopOpacity="0.5" stopColor="currentColor"/>
              </linearGradient>
            </defs>

            <g strokeWidth={this.strokeWidth}>
              <path stroke="url(#spinner-secondHalf)"
                    d={`M ${this.halfStrokeWidth} ${this.radius} 
                    A ${this.radiusWithoutHalfStrokeWidth} ${this.radiusWithoutHalfStrokeWidth} 0 0 1 ${this.diameterWithoutHalfStrokeWidth} ${this.radius}`}/>
              <path stroke="url(#spinner-firstHalf)" d={`M ${this.diameterWithoutHalfStrokeWidth} ${this.radius} 
              A ${this.radiusWithoutHalfStrokeWidth} ${this.radiusWithoutHalfStrokeWidth} 0 0 1 ${this.halfStrokeWidth} ${this.radius}`}/>

              <path stroke="currentColor" strokeLinecap="round" d={`M ${this.halfStrokeWidth} ${this.radius} 
              A ${this.radiusWithoutHalfStrokeWidth} ${this.radiusWithoutHalfStrokeWidth} 0 0 1 ${this.halfStrokeWidth} ${this.radiusWithoutHalfStrokeWidth}`} />
            </g>

            <animateTransform from="0 0 0" to="360 0 0" attributeName="transform" type="rotate" repeatCount="indefinite" dur="1300ms"/>
          </svg>
        </div>
    )
  }
}
