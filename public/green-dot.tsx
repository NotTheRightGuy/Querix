export default function GreenDot() {
    return (
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_12_409)">
                <circle cx="16" cy="16.5" r="5" fill="#22C55E" />
            </g>
            <defs>
                <filter
                    id="filter0_d_12_409"
                    x="0"
                    y="0.5"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feMorphology
                        radius="4"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_12_409"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.171056 0 0 0 0 1 0 0 0 0 0.0361112 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_12_409"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_12_409"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
