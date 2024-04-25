import React, {CSSProperties, FC} from 'react'

export type Props = {
  height?: number
  width?: number
  style?: CSSProperties
}

const WarningImage: FC<Props> = (props: Props): JSX.Element => {
  const {height = 162, width = 233, style} = props;

  return (
    <div style={{...style, height, width}}>
      <svg width="100%" height="100%" viewBox="0 0 233 162" fill="none">
        <g clipPath="url(#clip0_7923_5726)">
          <path
            d="M196.364 155.109C197.282 155.158 197.789 154.164 197.094 153.585L197.025 153.345C197.034 153.326 197.043 153.307 197.052 153.288C197.6 152.149 199.107 151.61 200.415 152.082C204.551 153.574 200.184 157.001 200.512 159.32C200.627 160.12 204.223 160.164 204.019 160.95C205.931 157.305 206.936 153.324 206.935 149.322C206.934 148.316 206.871 147.311 206.741 146.307C206.635 145.487 206.488 144.672 206.298 143.864C205.273 139.496 203.054 135.337 199.854 131.863C198.317 131.13 199.255 129.984 198.48 128.611C198.201 128.116 195.718 128.105 195.615 127.562C195.726 127.575 197.331 126.121 196.801 125.402C196.452 124.929 196.56 124.327 197.009 123.923C197.052 123.883 197.094 123.841 197.132 123.796C198.456 122.23 200.281 122.503 201.234 124.63C203.269 125.526 203.29 127.011 202.042 128.44C201.248 129.349 201.139 130.579 200.442 131.553C200.514 131.633 200.589 131.71 200.66 131.79C201.976 133.261 203.114 134.841 204.073 136.502C203.802 134.656 204.201 132.432 204.882 130.998C205.663 129.353 207.134 127.969 208.421 126.546C209.959 124.846 213.089 125.617 213.361 127.769C213.363 127.79 213.366 127.811 213.368 127.831C213.178 127.925 212.991 128.025 212.809 128.13C211.77 128.729 212.13 130.134 213.361 130.299L213.389 130.303C213.321 130.901 210.888 132.784 210.716 133.367C212.361 138.909 211.13 139.641 206.068 139.733L205.802 140.063C206.282 141.266 206.668 142.498 206.958 143.746C207.231 144.904 207.421 146.075 207.527 147.25C207.66 148.734 207.649 150.225 207.506 151.706L207.515 151.653C207.878 150.022 208.893 148.498 210.367 147.442C212.563 145.868 215.666 145.288 218.034 144.022C219.175 143.413 220.637 144.199 220.438 145.353L220.428 145.408C220.076 145.533 219.731 145.678 219.399 145.841C219.208 145.935 219.022 146.034 218.839 146.14C217.8 146.739 218.161 148.144 219.392 148.309L219.42 148.312C219.44 148.315 219.457 148.317 219.477 148.32C218.873 149.573 213.111 151.341 212.056 152.345C211.03 157.185 211.534 157.041 206.811 155.633H206.808C206.292 157.595 205.539 159.511 204.57 161.338L196.568 161.34C196.539 161.262 196.513 161.182 196.487 161.105C197.227 161.145 197.973 161.107 198.701 160.989C198.107 160.354 197.513 159.714 196.919 159.078C196.905 159.066 196.894 159.053 196.882 159.041L196.873 159.031L196.049 156.666C196.114 156.141 196.22 155.621 196.364 155.109L196.364 155.108V155.109V155.109Z"
            fill="#F2F2F2"
          />
          <path
            d="M111.797 161.283L40.9838 161.304C37.4263 161.305 34.2397 159.702 32.4598 157.016C31.5698 155.672 31.1247 154.199 31.1241 152.725C31.1236 151.251 31.5677 149.777 32.4564 148.433L67.8405 92.2542C69.6184 89.5666 72.8038 87.9615 76.3612 87.9604C79.9187 87.9594 83.1054 89.5625 84.8854 92.2491L120.319 148.413C121.206 149.753 121.65 151.225 121.65 152.698C121.65 154.171 121.206 155.645 120.317 156.989C118.54 159.677 115.354 161.282 111.797 161.283H111.797H111.797ZM32.0143 152.724C32.0142 154.065 39.8281 151.174 40.6377 152.396C42.2569 154.84 37.7469 160.531 40.9835 160.53C40.9835 160.53 117.931 159.047 119.548 156.602C120.357 155.38 120.761 154.038 120.76 152.698C120.76 151.357 120.355 150.016 119.545 148.794L84.1117 92.6296C82.497 90.1926 79.5981 88.7341 76.3615 88.7351C73.1265 88.736 32.0144 151.382 32.0143 152.724H32.0143Z"
            fill="#D2D2D2"
          />
          <path
            d="M112.583 160.508C111.696 162.058 153.268 161.582 153.759 161.582C153.759 161.582 165.444 161.356 165.69 160.985C165.813 160.799 165.874 160.596 165.874 160.392C165.874 160.189 165.812 159.985 165.689 159.799L160.309 151.271C160.063 150.901 159.623 150.679 159.132 150.679C159.111 150.679 159.081 150.695 159.042 150.725C151.864 156.32 143.018 160.018 133.393 160.143C123.158 160.275 112.64 160.41 112.583 160.508H112.583Z"
            fill="#D2D2D2"
          />
          <path
            d="M3.32406e-08 161.539C0.000102174 161.795 0.235562 162 0.528674 162L232.472 161.93C232.765 161.93 233 161.725 233 161.469C233 161.213 232.764 161.008 232.471 161.008L0.52831 161.078C0.235198 161.078 -0.000102107 161.284 3.32406e-08 161.539H3.32406e-08Z"
            fill="#CCCCCC"
          />
          <path d="M179.358 159.302L175.341 159.303L173.425 145.791L179.353 145.79L179.358 159.302Z" fill="#9E616A" />
          <path
            d="M165.596 159.227C165.471 159.41 165.405 160.003 165.405 160.217C165.406 160.874 166.016 161.406 166.769 161.405L179.208 161.402C179.722 161.402 180.138 161.038 180.138 160.59L180.138 160.139C180.138 160.139 180.752 158.781 179.485 157.108C179.485 157.108 177.911 158.419 175.557 156.368L174.863 155.271L169.842 158.476L167.058 158.776C166.449 158.842 165.909 158.766 165.596 159.227H165.596Z"
            fill="#757B93"
          />
          <path d="M163.956 147.746L160.151 148.869L153.375 136.604L158.99 134.947L163.956 147.746Z" fill="#9E616A" />
          <path
            d="M150.892 151.518C150.841 151.727 150.996 152.307 151.075 152.51C151.316 153.132 152.09 153.465 152.803 153.255L164.586 149.777C165.072 149.633 165.333 149.173 165.169 148.748L165.003 148.321C165.003 148.321 165.086 146.863 163.271 145.632C163.271 145.632 162.261 147.313 159.278 146.027L158.218 145.183L154.639 149.622L152.112 150.683C151.559 150.915 151.02 150.995 150.892 151.518L150.892 151.518Z"
            fill="#757B93"
          />
          <path
            d="M157.752 69.363L149.961 91.866L140.764 112.107L155.325 141.013L160.724 138.919L154.263 112.365L167.811 94.3461L174.134 150.596L179.533 150.332L186.856 82.436L187.9 67.6533L157.752 69.363Z"
            fill="#757B93"
          />
          <path
            d="M181.281 19.5146L169.882 21.3495L168.984 25.7976L162.086 28.6777L158.499 61.3831C158.499 61.3831 152.502 68.1874 157.302 70.279L187.9 67.6535C187.9 67.6535 189.398 62.8158 187.898 62.3569C186.398 61.8979 186.393 50.3428 186.393 50.3428L193.284 26.5752L183.083 23.4386L181.281 19.5146Z"
            fill="#E6E6E6"
          />
          <path
            d="M174.558 19.4285C179.642 19.4285 183.763 15.8343 183.763 11.4005C183.763 6.96681 179.642 3.37256 174.558 3.37256C169.474 3.37256 165.353 6.96681 165.353 11.4005C165.353 15.8343 169.474 19.4285 174.558 19.4285Z"
            fill="#9E616A"
          />
          <path
            d="M180.654 12.5923C179.919 12.943 180.616 14.6174 180.157 14.7622C179.626 14.9295 177.691 13.0088 177.667 10.8574C177.66 10.2063 177.832 9.89363 177.667 9.12163C177.451 8.1118 176.787 6.92074 176.173 6.95235C175.809 6.9711 175.454 7.41993 175.427 7.82047C175.39 8.38184 176.015 8.60279 175.925 8.90518C175.754 9.48115 173.128 9.8788 172.194 8.90631C171.461 8.14389 172.023 6.80527 171.695 6.73673C171.454 6.68621 171.194 7.4232 170.203 8.25599C169.83 8.56975 169.274 9.03638 168.959 8.90728C168.505 8.72073 168.835 7.40598 168.71 7.38855C168.606 7.37411 168.541 8.29822 167.964 9.12456C167.223 10.1862 165.693 11.0045 164.98 10.6443C164.542 10.4236 164.508 9.80921 164.481 9.34258C164.426 8.35953 162.788 6.09832 163.212 5.04669C164.074 2.9063 165.552 4.41507 166.221 3.70077C167.126 2.73378 167.937 3.25369 169.454 2.18099C170.936 1.13307 170.949 0.0798251 171.941 0.0105123C172.835 -0.0519063 173.153 0.779429 174.18 0.660753C175.051 0.56022 175.241 -0.0845681 175.922 0.00930782C176.545 0.0952516 176.586 0.663275 177.415 0.876748C177.944 1.01303 178.06 0.815774 178.659 0.876372C179.905 1.00246 180.741 1.99214 180.898 2.17753C181.502 2.89222 181.268 3.1936 181.894 3.91301C182.434 4.5334 183.63 4.26995 184.08 4.57981C185.549 5.59227 186.181 7.45943 186.194 9.58756C186.202 11.076 185.98 11.8281 185.483 13.7068C185.106 15.1335 183.36 16.977 182.397 17.7991C182.139 18.0198 181.414 18.6384 180.905 18.4505C180.422 18.2724 180.407 17.4715 180.407 17.3658C180.404 17.0021 180.516 16.5521 181.401 15.4127C182.331 14.2159 182.701 14.0793 182.644 13.6765C182.545 12.9646 181.239 12.3127 180.653 12.5923H180.654Z"
            fill="#757B93"
          />
          <path
            d="M148.545 87.439C148.259 89.5315 149.264 91.3566 150.791 91.5156C152.318 91.6747 153.788 90.1073 154.074 88.0148C154.2 87.0988 154.077 86.2341 153.772 85.5379L154.859 76.6581L150.07 76.3022L149.507 85.0937C149.023 85.7077 148.671 86.523 148.545 87.439H148.545H148.545Z"
            fill="#9E616A"
          />
          <path
            d="M162.31 28.4663C162.31 28.4663 159.829 28.4971 158.187 31.2952C157.314 32.782 152.644 60.5864 152.644 60.5864L148.341 83.3634L155.67 83.3956L161.38 61.8252L166.184 49.3148L162.31 28.4663L162.31 28.4663Z"
            fill="#E6E6E6"
          />
          <path
            d="M182.933 84.0966C182.232 86.1132 182.855 88.0636 184.327 88.4531C185.798 88.8425 187.56 87.5236 188.262 85.5071C188.569 84.6244 188.622 83.7543 188.461 83.0223L191.312 74.4452L186.668 73.3643L184.351 81.9343C183.751 82.4649 183.24 83.2139 182.933 84.0966V84.0966Z"
            fill="#9E616A"
          />
          <path
            d="M188.034 26.969C188.034 26.969 191.633 24.6132 194.634 28.2752C197.636 31.9372 198.848 62.0248 198.848 62.0248L190.455 80.6034L184.155 78.7738L190.146 56.0098L179.639 38.7451L188.034 26.969H188.034Z"
            fill="#E6E6E6"
          />
          <path
            d="M97.0243 148.894C114.929 148.894 129.443 136.235 129.443 120.62C129.443 105.005 114.929 92.3467 97.0243 92.3467C79.1201 92.3467 64.6058 105.005 64.6058 120.62C64.6058 136.235 79.1201 148.894 97.0243 148.894Z"
            fill="#FF3403"
          />
          <path
            d="M97.0302 137.952C98.6741 137.952 100.007 136.79 100.007 135.356C100.007 133.923 98.6741 132.76 97.0302 132.76C95.3862 132.76 94.0536 133.923 94.0536 135.356C94.0536 136.79 95.3862 137.952 97.0302 137.952Z"
            fill="white"
          />
          <path
            d="M97.0174 103.288C96.744 104.873 97.2339 105.204 97.2366 112.036C97.2393 118.867 98.8646 128.026 97.0272 128.026C95.1899 128.027 94.5179 109.125 88.138 107.452C80.637 105.485 97.9026 98.1586 97.0174 103.288Z"
            fill="white"
          />
          <path
            d="M53.5141 135.055L50.5852 140.453C54.126 138.238 59.6566 136.329 64.0577 135.307C59.957 133.579 54.9392 130.794 51.9415 128.036L53.6261 133.739C33.8757 130.231 19.6926 117.017 19.6866 101.88L18.9732 101.666C18.9795 117.477 32.9663 131.473 53.5141 135.055V135.055Z"
            fill="#D2D2D2"
          />
        </g>
        <defs>
          <clipPath id="clip0_7923_5726">
            <rect width="100%" height="100%" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default WarningImage