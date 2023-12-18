import {gradientsColors} from '@sphereon/ui-components.core'

type Gradient = 100 | 200

export const gradientColors: Record<Gradient, string> = {
  100: `linear-gradient(135deg, ${gradientsColors[100].primaryColor} 0%, ${gradientsColors[100].secondaryColor} 100%)`,
  200: `linear-gradient(135deg, ${gradientsColors[200].primaryColor} 0%, ${gradientsColors[200].secondaryColor} 100%)`,
}
