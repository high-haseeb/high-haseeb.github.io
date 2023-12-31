export function IconWrapper({ children, title, props }) {
  // const animationProps = "transition ease-linear duration-[2000]"
  return (
    <div
      className={`flex flex-col justify-center itmes-center w-[70px] ${props}`}
    >
      <div className="border-4 dark:border-whiteC border-blackC flex justify-center items-center h-[70px] transition-all">
        {children}
      </div>
      <h1 className="text-sm font-bold border-t-4 dark:border-whiteC border-blackC mt-2 w-auto">
        {title}
      </h1>
    </div>
  );
}

export function Arrow() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="fill-blackC dark:fill-whiteC">
        <g id="code" clip-path="url(#clip0_6_2)">
          <rect id="rect" x="9" y="79" width="83" height="13" />
          <g id="arrow_down">
            <g id="Vector">
              <path d="M37.7224 27L37.7224 74H24.7224L24.7224 27H37.7224Z" />
              <path d="M30.7224 8L45.4449 27.5H16L30.7224 8Z" />
            </g>
            <g id="Vector_2">
              <path d="M76.4449 27L76.4449 74H63.4449L63.4449 27H76.4449Z" />
              <path d="M69.4449 8L84.1673 27.5H54.7224L69.4449 8Z" />
            </g>
          </g>
          <g id="arrow_up">
            <g id="Vector">
              <path d="M37.7224 27L37.7224 74H24.7224L24.7224 27H37.7224Z" />
              <path d="M30.7224 8L45.4449 27.5H16L30.7224 8Z" />
            </g>
            <g id="Vector_2">
              <path d="M76.4449 27L76.4449 74H63.4449L63.4449 27H76.4449Z" />
              <path d="M69.4449 8L84.1673 27.5H54.7224L69.4449 8Z" />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6_2">
          <rect width="100" height="100" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function Tea() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all"
    >
      <g id="code" className="fill-blackC dark:fill-whiteC">
        <path
          id="base"
          d="M19.1926 50.8H81.7019C83.0807 50.8 84 51.76 84 53.2C84 60.4 82.6211 67.6 79.8634 73.84C77.1056 80.08 73.4286 84.88 68.8323 88.72C68.3727 89.2 67.913 89.2 67.4534 89.2H77.1056C78.4845 89.2 79.4037 90.16 79.4037 91.6C79.4037 93.04 78.4845 94 77.1056 94H31.1429C29.764 94 28.8447 93.04 28.8447 91.6C28.8447 90.16 29.764 89.2 31.1429 89.2H40.795C40.3354 89.2 39.8758 89.2 39.4161 88.72C35.2795 85.36 31.6025 81.04 28.8447 75.28H28.3851C21.0311 75.28 16.8944 72.4 14.1367 70.48C11.3789 67.6 9.54037 64.24 9.54037 60.88C9.54037 55.12 14.1367 50.8 19.1926 50.8ZM31.6025 70H76.1863C78.0248 65.68 78.9441 60.88 78.9441 55.6H28.3851C28.8447 60.88 29.764 65.68 31.6025 70ZM17.8137 66.64C19.1925 68.08 21.9503 69.52 26.5466 70C25.1677 65.68 24.2484 60.88 23.7888 56.08H19.1926C16.8944 56.08 15.0559 58 15.0559 60.4C15.0559 62.32 15.5155 64.72 17.8137 66.64Z"
        />
        <path id="fill" d="M25.5 53H81L78 71H30L25.5 53Z" />
        <g id="flames_1">
          <rect id="Rectangle 1" x="37" y="22" width="6" height="23" />
          <rect id="Rectangle 2" x="50" y="10" width="6" height="35" />
          <rect id="Rectangle 3" x="62" y="27" width="6" height="18" />
        </g>
        <g id="flames_2" className="">
          <rect id="Rectangle 1_2" x="37" y="69" width="6" height="23" />
          <rect id="Rectangle 2_2" x="50" y="57" width="6" height="35" />
          <rect id="Rectangle 3_2" x="62" y="74" width="6" height="18" />
        </g>
      </g>
    </svg>
  );
}
export function Code() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="code" >
        <rect width="100" height="100" />
        <g className="fill-blackC dark:fill-whiteC">
          <path
            id="right"
            d="M13.3906 57.2997V49.7997L43.3906 36.5895V45.2188L22.8509 53.4645L23.1278 53.017V54.0824L22.8509 53.6349L43.3906 61.8807V70.5099L13.3906 57.2997Z"
          />
          <path
            id="left"
            d="M84.3906 57.2997L54.3906 70.5099V61.8807L74.9304 53.6349L74.6534 54.0824V53.017L74.9304 53.4645L54.3906 45.2188V36.5895L84.3906 49.7997V57.2997Z"
          />
          <path
            id="center"
            d="M60.6278 25.3182L46.5653 77.5625H38.7457L52.8082 25.3182H60.6278Z"
          />
        </g>
      </g>
    </svg>
  );
}
export function Heart() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="code" className="fill-blackC dark:fill-whiteC">
        <path
          id="heart"
          d="M34.1696 6.00166C20.5779 5.78288 18 27.2657 18 27.2657C18 27.2657 18.0201 37.6194 49.0116 58.343V59C49.1794 58.8891 49.334 58.7836 49.5 58.6731C49.6663 58.7836 49.8205 58.8888 49.9884 59V58.343C80.98 37.619 81 27.2657 81 27.2657C81 27.2657 76.6537 -8.93664 49.5 13.1484C43.2609 8.07394 38.2242 6.0669 34.1696 6.00166Z"
        />
        <path
          id="bolt"
          d="M31.1739 6L33.5573 10.3173H26L38.7546 35L33.0849 13.7808H41L36.2355 6H31.1739Z"
          className="fill-whiteC dark:fill-blackC"
        />
        <g id="handright">
          <path
            id="path4875"
            d="M51.297 75.25C51.3962 70.0641 54.4465 65.5801 58.8967 63.3L58.8877 63.2825L79.3513 52.7145C79.4956 52.6404 79.6444 52.5772 79.7932 52.5205C79.8743 52.49 79.9555 52.4682 80.0389 52.442C80.102 52.4224 80.1651 52.4028 80.2283 52.3854C80.3523 52.3527 80.4763 52.3287 80.6002 52.3113C80.6183 52.3091 80.6386 52.3047 80.6566 52.3004C81.387 52.1979 82.1288 52.2938 82.8051 52.5554V52.5401C83.6708 52.8737 84.426 53.4906 84.8972 54.3429C85.9591 56.2655 85.2016 58.6786 83.2131 59.7054L67.8559 67.6357C67.6485 67.7534 67.5042 67.9605 67.5042 68.209C67.5042 68.5752 67.8153 68.8739 68.1963 68.8739C68.3225 68.8739 68.4353 68.8346 68.5345 68.7758L68.5367 68.7823L83.8579 60.8694C86.5159 59.4983 87.5236 56.2917 86.1033 53.7216C85.4 52.4464 84.2006 51.533 82.8051 51.1407V29.9633C82.8051 27.7834 84.647 26.0003 86.9014 26.0003C89.1559 26.0003 91 27.7834 91 29.9633V62.6046V63.1343V63.7207C91 63.7207 91.0203 66.9142 87.7175 68.5665L69.6166 81.8855V93.5521H51.288V75.2522L51.297 75.25Z"
          />
        </g>
        <g id="handleft">
          <path
            id="path4871"
            d="M47.844 75.25C47.7448 70.0641 44.6946 65.5801 40.242 63.3L40.2511 63.2825L19.7875 52.7145C19.6432 52.6404 19.4967 52.5772 19.3479 52.5205C19.2667 52.49 19.1833 52.4682 19.1021 52.442C19.039 52.4224 18.9759 52.4028 18.9105 52.3854C18.7888 52.3527 18.6648 52.3287 18.5408 52.3113C18.5227 52.3091 18.5025 52.3047 18.4844 52.3004C17.754 52.1979 17.0123 52.2938 16.3359 52.5554V52.5401C15.4702 52.8737 14.715 53.4906 14.2416 54.3429C13.182 56.2655 13.9372 58.6786 15.9256 59.7054L31.2851 67.6357C31.4926 67.7534 31.6346 67.9605 31.6346 68.209C31.6346 68.5752 31.3257 68.8739 30.9447 68.8739C30.8185 68.8739 30.7058 68.8346 30.6043 68.7758V68.7823L15.2831 60.8694C12.6251 59.4983 11.6174 56.2917 13.0377 53.7216C13.7411 52.4464 14.9382 51.533 16.3359 51.1407V29.9633C16.3359 27.7834 14.4918 26.0003 12.2396 26.0003C9.98517 26.0003 8.13878 27.7834 8.13878 29.9633V62.6046V63.1343V63.7207C8.13878 63.7207 8.12074 66.9142 11.4212 68.5665L29.5244 81.8855V93.5521H47.853V75.2522L47.844 75.25Z"
          />
        </g>
      </g>
    </svg>
  );
}
export function Title({ args }) {
  return (
    <div
      className={`w-full text-8xl  font-bold  border-t-4 dark:border-whiteC border-blackC ${args}`}
    >
      <p className="text-xs  mt-1 pl-1 mb-[-4px] ">PRODUCT DESCRIPTION</p>
      <p className="tracking-tighter mb-[-15px] ">Haseeb </p>
      <p className="tracking-tighter flex border-b-4 dark:border-whiteC border-blackC">
        Khalid
        <span className="text-6xl justify-self-start">&#174;</span>
      </p>
    </div>
  );
}
