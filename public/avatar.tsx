export default function Avatar() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            shape-rendering="auto"
            width="42"
            height="42"
            className="rounded-full"
        >
            <mask id="viewboxMask">
                <rect
                    width="100"
                    height="100"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    fill="#fff"
                />
            </mask>
            <g mask="url(#viewboxMask)">
                <rect fill="#1c799f" width="100" height="100" x="0" y="0" />
                <g transform="matrix(1.2 0 0 1.2 -10 -10)">
                    <g transform="translate(40, 24) rotate(-27 50 50)">
                        <path d="m50 7 50 86.6H0L50 7Z" fill="#0a5b83" />
                    </g>
                </g>
                <g transform="matrix(.8 0 0 .8 10 10)">
                    <g transform="translate(-38, 9) rotate(-91 50 50)">
                        <path d="M0 0h100v100H0V0Z" fill="#f88c49" />
                    </g>
                </g>
                <g transform="matrix(.4 0 0 .4 30 30)">
                    <g transform="translate(11, -1) rotate(-23 50 50)">
                        <path d="M0 0h100v100H0V0Z" fill="#f1f4dc" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
