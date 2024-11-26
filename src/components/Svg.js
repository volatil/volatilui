export default function Svg({ icono, color, className, style }) {
    const elsvg = {
        // GENERAL
        "logo": <svg className={ className } style={ style } viewBox="0 0 225 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.5021 1.22266L22.9724 12.1043H20.1512V21.7769H15.6445C15.6356 21.7457 15.626 21.7124 15.6151 21.6761H15.6172L15.6094 21.6573C15.4704 21.1999 15.1311 20.269 13.7515 17.1729L12.9376 15.2082C14.104 14.6619 14.9119 13.4774 14.9119 12.1043C14.9119 10.2123 13.3781 8.6786 11.4862 8.6786C9.59421 8.6786 8.06048 10.2123 8.06048 12.1043C8.06048 13.5012 8.89658 14.7028 10.0956 15.236L9.67353 16.1928L9.67272 16.1927L7.14653 21.7769H2.82117V12.1043H0L11.5021 1.22266Z" fill="var( --azulClaro )"/> <path d="M38.2491 20.5482C36.8691 20.5482 35.7192 20.4598 34.7992 20.2829C33.8792 20.0883 33.1273 19.7786 32.5435 19.354C31.9774 18.9294 31.5439 18.3633 31.2431 17.6556C30.9601 16.948 30.7655 16.0634 30.6593 15.0019C30.5532 13.9404 30.5001 12.6754 30.5001 11.207C30.5001 9.7386 30.5532 8.47364 30.6593 7.41214C30.7655 6.35063 30.9601 5.46605 31.2431 4.75838C31.5439 4.05071 31.9774 3.48457 32.5435 3.05997C33.1273 2.63537 33.8792 2.33461 34.7992 2.15769C35.7192 1.96308 36.8691 1.86578 38.2491 1.86578C38.7798 1.86578 39.3283 1.88347 39.8944 1.91886C40.4605 1.95424 41.009 2.00731 41.5397 2.07808C42.0705 2.14885 42.5216 2.23731 42.8931 2.34346V5.66065C42.3447 5.60758 41.8405 5.56335 41.3805 5.52797C40.9382 5.47489 40.549 5.44835 40.2128 5.44835C39.8767 5.43066 39.5936 5.42182 39.3636 5.42182C38.5498 5.42182 37.8775 5.4572 37.3468 5.52797C36.8337 5.58104 36.4268 5.71373 36.1261 5.92603C35.8253 6.13833 35.6042 6.45678 35.4626 6.88138C35.3211 7.28829 35.2238 7.84558 35.1707 8.55325C35.1353 9.24323 35.1176 10.1278 35.1176 11.207C35.1176 12.2685 35.1353 13.1531 35.1707 13.8608C35.2238 14.5684 35.3211 15.1346 35.4626 15.5592C35.6042 15.9838 35.8253 16.3022 36.1261 16.5145C36.4268 16.7091 36.8337 16.8418 37.3468 16.9126C37.8775 16.9657 38.5498 16.9922 39.3636 16.9922C39.9121 16.9922 40.5313 16.9745 41.2213 16.9391C41.9113 16.8861 42.5039 16.8241 42.9993 16.7534V20.1502C42.6101 20.2209 42.1412 20.2829 41.5928 20.3359C41.0444 20.4067 40.4782 20.4598 39.8944 20.4952C39.3283 20.5305 38.7798 20.5482 38.2491 20.5482ZM51.765 20.5482C50.562 20.5482 49.5624 20.4775 48.7662 20.3359C47.9701 20.1944 47.3421 19.9644 46.8821 19.646C46.4221 19.3275 46.0859 18.9029 45.8736 18.3722C45.6613 17.8414 45.5198 17.178 45.449 16.3818C45.396 15.5857 45.3694 14.6392 45.3694 13.5423C45.3694 12.4454 45.396 11.5078 45.449 10.7293C45.5198 9.93321 45.6613 9.26977 45.8736 8.73901C46.0859 8.20826 46.4221 7.78366 46.8821 7.46521C47.3421 7.14676 47.9701 6.92561 48.7662 6.80177C49.5624 6.66024 50.562 6.58947 51.765 6.58947C52.9857 6.58947 53.9941 6.66024 54.7903 6.80177C55.5864 6.92561 56.2145 7.14676 56.6744 7.46521C57.1344 7.78366 57.4706 8.20826 57.6829 8.73901C57.8952 9.26977 58.0279 9.93321 58.0809 10.7293C58.1517 11.5078 58.1871 12.4454 58.1871 13.5423C58.1871 14.6392 58.1517 15.5857 58.0809 16.3818C58.0279 17.178 57.8952 17.8414 57.6829 18.3722C57.4706 18.9029 57.1344 19.3275 56.6744 19.646C56.2145 19.9644 55.5864 20.1944 54.7903 20.3359C53.9941 20.4775 52.9857 20.5482 51.765 20.5482ZM51.765 17.3107C52.2957 17.3107 52.7115 17.2753 53.0123 17.2045C53.313 17.1337 53.5253 16.9745 53.6492 16.7268C53.773 16.4791 53.8438 16.0988 53.8615 15.5857C53.8968 15.0727 53.9145 14.3915 53.9145 13.5423C53.9145 12.6931 53.8968 12.0208 53.8615 11.5255C53.8438 11.0301 53.773 10.6586 53.6492 10.4109C53.5253 10.1632 53.313 10.004 53.0123 9.93321C52.7115 9.86244 52.2957 9.82705 51.765 9.82705C51.2342 9.82705 50.8185 9.86244 50.5177 9.93321C50.2347 10.004 50.0312 10.1632 49.9074 10.4109C49.7835 10.6586 49.7039 11.0301 49.6685 11.5255C49.6508 12.0208 49.642 12.6931 49.642 13.5423C49.642 14.3915 49.6508 15.0727 49.6685 15.5857C49.7039 16.0988 49.7835 16.4791 49.9074 16.7268C50.0312 16.9745 50.2347 17.1337 50.5177 17.2045C50.8185 17.2753 51.2342 17.3107 51.765 17.3107ZM61.033 20.3359V6.80177H65.0667L65.1729 8.4471H65.4117C65.6771 7.98712 66.0044 7.62444 66.3936 7.35906C66.7828 7.07599 67.2251 6.88138 67.7205 6.77523C68.2159 6.65139 68.7555 6.58947 69.3393 6.58947C70.2416 6.58947 70.9581 6.70447 71.4888 6.93446C72.0373 7.16445 72.453 7.50059 72.7361 7.94289C73.0192 8.38518 73.2049 8.93362 73.2934 9.58822C73.3995 10.2428 73.4526 11.0036 73.4526 11.8704V20.3359H69.1801V13.1708C69.1801 12.4454 69.1624 11.8793 69.127 11.4724C69.0916 11.0478 69.012 10.7382 68.8882 10.5436C68.7643 10.349 68.5697 10.234 68.3043 10.1986C68.0566 10.1455 67.7205 10.119 67.2959 10.119C66.8536 10.119 66.4909 10.172 66.2079 10.2782C65.9425 10.3667 65.739 10.5259 65.5975 10.7559C65.4737 10.9859 65.3852 11.3132 65.3321 11.7378C65.2967 12.1447 65.279 12.6577 65.279 13.2769V20.3359H61.033ZM81.9664 20.5482C81.4003 20.5482 80.7811 20.5305 80.1088 20.4952C79.4542 20.4598 78.8084 20.4156 78.1715 20.3625C77.5523 20.3094 76.995 20.2475 76.4997 20.1767V17.178C76.7827 17.1957 77.1012 17.2222 77.455 17.2576C77.8266 17.293 78.2069 17.3195 78.5961 17.3372C78.9854 17.3549 79.3569 17.3726 79.7107 17.3903C80.0822 17.3903 80.4184 17.3903 80.7191 17.3903C81.5507 17.3903 82.1433 17.3637 82.4972 17.3107C82.8687 17.2576 83.0987 17.1514 83.1871 16.9922C83.2933 16.8153 83.3464 16.5853 83.3464 16.3022C83.3464 16.0192 83.311 15.8157 83.2402 15.6919C83.1871 15.568 83.0633 15.4796 82.8687 15.4265C82.6918 15.3734 82.3822 15.3203 81.9399 15.2673L78.7819 14.8692C78.0212 14.763 77.4462 14.5419 77.057 14.2058C76.6677 13.8519 76.4024 13.3831 76.2608 12.7993C76.137 12.1977 76.0751 11.4989 76.0751 10.7028C76.0751 9.76513 76.2166 9.03093 76.4997 8.50018C76.7827 7.95173 77.172 7.54482 77.6673 7.27945C78.1804 6.99638 78.7819 6.81062 79.4719 6.72216C80.1796 6.6337 80.9314 6.58947 81.7276 6.58947C82.2937 6.58947 82.8775 6.60716 83.4791 6.64255C84.0806 6.67793 84.6556 6.731 85.204 6.80177C85.7524 6.85485 86.2036 6.91677 86.5574 6.98753V9.95974C86.1151 9.92436 85.6463 9.88898 85.1509 9.85359C84.6732 9.81821 84.2133 9.79167 83.771 9.77398C83.3287 9.75629 82.9572 9.74744 82.6564 9.74744C81.9487 9.74744 81.4003 9.76513 81.0111 9.80052C80.6395 9.8359 80.383 9.92436 80.2415 10.0659C80.1176 10.2074 80.0557 10.4374 80.0557 10.7559C80.0557 11.0036 80.0734 11.1982 80.1088 11.3397C80.1619 11.4635 80.2769 11.552 80.4538 11.6051C80.6307 11.6581 80.9049 11.7112 81.2764 11.7643L84.4609 12.1624C85.0625 12.2331 85.5755 12.3747 86.0001 12.587C86.4247 12.7993 86.7432 13.1796 86.9555 13.7281C87.1855 14.2765 87.3005 15.0992 87.3005 16.1961C87.3005 17.1868 87.1678 17.9741 86.9024 18.5579C86.6547 19.1241 86.292 19.5575 85.8144 19.8583C85.3367 20.1413 84.7706 20.3271 84.116 20.4156C83.4791 20.504 82.7625 20.5482 81.9664 20.5482ZM96.2967 20.5482C95.0229 20.5482 93.9702 20.4686 93.1387 20.3094C92.3072 20.1502 91.6438 19.9025 91.1484 19.5663C90.6707 19.2125 90.3081 18.7614 90.0604 18.2129C89.8304 17.6645 89.68 17.0099 89.6092 16.2491C89.5562 15.4884 89.5296 14.6038 89.5296 13.5954C89.5296 12.3747 89.5827 11.322 89.6889 10.4374C89.8127 9.55283 90.0781 8.82747 90.485 8.26134C90.8919 7.6952 91.5199 7.27945 92.3691 7.01407C93.236 6.731 94.4037 6.58947 95.8721 6.58947C97.0575 6.58947 98.0217 6.67793 98.7647 6.85485C99.5078 7.01407 100.092 7.2706 100.516 7.62444C100.958 7.96058 101.268 8.40287 101.445 8.95131C101.64 9.49976 101.763 10.1632 101.817 10.9416C101.87 11.7024 101.896 12.587 101.896 13.5954V14.6304H93.7491C93.7491 15.2319 93.7756 15.7184 93.8287 16.0899C93.8818 16.4438 94.0233 16.7091 94.2533 16.8861C94.4833 17.063 94.8371 17.1868 95.3148 17.2576C95.7925 17.3107 96.4559 17.3372 97.3051 17.3372C97.6413 17.3372 98.0393 17.3283 98.4993 17.3107C98.9593 17.293 99.437 17.2664 99.9324 17.231C100.445 17.1957 100.923 17.1603 101.365 17.1249V20.0971C100.976 20.1856 100.498 20.2652 99.9324 20.3359C99.3839 20.4067 98.7912 20.4598 98.1543 20.4952C97.5174 20.5305 96.8982 20.5482 96.2967 20.5482ZM97.889 12.8523V12.4277C97.889 11.7908 97.8536 11.2866 97.7828 10.9151C97.7297 10.5436 97.6236 10.2693 97.4644 10.0924C97.3228 9.89782 97.1194 9.77398 96.854 9.72091C96.5886 9.66783 96.2525 9.64129 95.8456 9.64129C95.3856 9.64129 95.0141 9.67668 94.731 9.74744C94.4656 9.80052 94.2622 9.92436 94.1206 10.119C93.9791 10.3136 93.8818 10.5966 93.8287 10.9682C93.7756 11.3397 93.7491 11.8262 93.7491 12.4277H98.3401L97.889 12.8523ZM104.753 20.3359V6.80177H108.786L108.893 9.11054H109.131C109.379 8.45595 109.689 7.94289 110.06 7.57136C110.449 7.19983 110.918 6.9433 111.467 6.80177C112.015 6.66024 112.652 6.58947 113.377 6.58947V10.4905C112.263 10.4905 111.387 10.632 110.75 10.9151C110.113 11.1982 109.662 11.6847 109.397 12.3747C109.131 13.0469 108.999 13.9935 108.999 15.2142V20.3359H104.753ZM115.584 4.04186V0.618514H119.963V4.04186H115.584ZM113.435 25.6435V22.6712C114.125 22.6712 114.62 22.6182 114.921 22.512C115.239 22.4236 115.434 22.2732 115.505 22.0609C115.593 21.8663 115.637 21.6009 115.637 21.2648V6.80177H119.936V20.3359C119.936 21.5567 119.848 22.5209 119.671 23.2285C119.494 23.9362 119.167 24.4581 118.689 24.7943C118.229 25.1481 117.566 25.3781 116.699 25.4842C115.85 25.5904 114.761 25.6435 113.435 25.6435ZM129.546 20.5482C128.273 20.5482 127.22 20.4686 126.388 20.3094C125.557 20.1502 124.894 19.9025 124.398 19.5663C123.92 19.2125 123.558 18.7614 123.31 18.2129C123.08 17.6645 122.93 17.0099 122.859 16.2491C122.806 15.4884 122.779 14.6038 122.779 13.5954C122.779 12.3747 122.832 11.322 122.939 10.4374C123.062 9.55283 123.328 8.82747 123.735 8.26134C124.142 7.6952 124.77 7.27945 125.619 7.01407C126.486 6.731 127.653 6.58947 129.122 6.58947C130.307 6.58947 131.271 6.67793 132.014 6.85485C132.757 7.01407 133.341 7.2706 133.766 7.62444C134.208 7.96058 134.518 8.40287 134.695 8.95131C134.889 9.49976 135.013 10.1632 135.066 10.9416C135.119 11.7024 135.146 12.587 135.146 13.5954V14.6304H126.999C126.999 15.2319 127.025 15.7184 127.078 16.0899C127.132 16.4438 127.273 16.7091 127.503 16.8861C127.733 17.063 128.087 17.1868 128.565 17.2576C129.042 17.3107 129.706 17.3372 130.555 17.3372C130.891 17.3372 131.289 17.3283 131.749 17.3107C132.209 17.293 132.687 17.2664 133.182 17.231C133.695 17.1957 134.173 17.1603 134.615 17.1249V20.0971C134.226 20.1856 133.748 20.2652 133.182 20.3359C132.634 20.4067 132.041 20.4598 131.404 20.4952C130.767 20.5305 130.148 20.5482 129.546 20.5482ZM131.139 12.8523V12.4277C131.139 11.7908 131.103 11.2866 131.033 10.9151C130.979 10.5436 130.873 10.2693 130.714 10.0924C130.573 9.89782 130.369 9.77398 130.104 9.72091C129.838 9.66783 129.502 9.64129 129.095 9.64129C128.635 9.64129 128.264 9.67668 127.981 9.74744C127.715 9.80052 127.512 9.92436 127.37 10.119C127.229 10.3136 127.132 10.5966 127.078 10.9682C127.025 11.3397 126.999 11.8262 126.999 12.4277H131.59L131.139 12.8523ZM144.953 20.3359V2.07808H151.349C152.977 2.07808 154.303 2.16654 155.33 2.34346C156.356 2.50268 157.161 2.78575 157.744 3.19266C158.328 3.58188 158.744 4.13032 158.992 4.83799C159.257 5.52797 159.425 6.39486 159.496 7.43867C159.567 8.48248 159.602 9.7386 159.602 11.207C159.602 12.6754 159.567 13.9315 159.496 14.9753C159.425 16.0192 159.257 16.8949 158.992 17.6026C158.744 18.2925 158.328 18.841 157.744 19.2479C157.161 19.6371 156.356 19.9202 155.33 20.0971C154.303 20.2563 152.977 20.3359 151.349 20.3359H144.953ZM149.571 16.7799H151.243C151.968 16.7799 152.561 16.7622 153.021 16.7268C153.481 16.6738 153.843 16.5676 154.109 16.4084C154.392 16.2315 154.587 15.9484 154.693 15.5592C154.816 15.1523 154.887 14.6038 154.905 13.9138C154.94 13.2062 154.958 12.3039 154.958 11.207C154.958 10.1101 154.94 9.21669 154.905 8.52671C154.887 7.81904 154.816 7.2706 154.693 6.88138C154.569 6.47447 154.374 6.18256 154.109 6.00564C153.843 5.82873 153.481 5.72258 153.021 5.68719C152.561 5.65181 151.968 5.63412 151.243 5.63412H149.571V16.7799ZM162.647 4.04186V0.618514H167.026V4.04186H162.647ZM162.7 20.3359V6.80177H166.999V20.3359H162.7ZM175.707 25.8027C175.141 25.8027 174.548 25.785 173.929 25.7496C173.327 25.7319 172.761 25.6965 172.23 25.6435C171.7 25.5904 171.257 25.5285 170.904 25.4577V22.512C171.275 22.5297 171.673 22.5386 172.098 22.5386C172.522 22.5562 172.947 22.5651 173.372 22.5651C173.814 22.5651 174.23 22.5651 174.619 22.5651C175.486 22.5651 176.158 22.5297 176.636 22.4589C177.131 22.4059 177.494 22.2732 177.724 22.0609C177.971 21.8663 178.122 21.5655 178.175 21.1586C178.228 20.7694 178.255 20.2386 178.255 19.5663V18.611H178.042C177.777 19.071 177.45 19.4248 177.06 19.6725C176.689 19.9025 176.273 20.0617 175.813 20.1502C175.353 20.2386 174.858 20.2829 174.327 20.2829C173.513 20.2829 172.823 20.1767 172.257 19.9644C171.691 19.7344 171.222 19.3717 170.851 18.8764C170.497 18.3633 170.24 17.6645 170.081 16.7799C169.922 15.8953 169.842 14.7896 169.842 13.4627C169.842 12.1181 169.922 11.0036 170.081 10.119C170.258 9.23438 170.523 8.53556 170.877 8.0225C171.231 7.50944 171.691 7.14676 172.257 6.93446C172.823 6.70447 173.504 6.58947 174.3 6.58947C174.796 6.58947 175.282 6.64255 175.76 6.7487C176.255 6.83715 176.706 7.01407 177.113 7.27945C177.538 7.54482 177.883 7.93404 178.148 8.4471H178.361L178.467 6.80177H182.527V18.7968C182.527 19.9821 182.465 21.0171 182.341 21.9017C182.217 22.7862 181.934 23.5116 181.492 24.0777C181.067 24.6616 180.395 25.095 179.475 25.3781C178.573 25.6611 177.317 25.8027 175.707 25.8027ZM176.185 16.8064C176.698 16.8064 177.087 16.7534 177.352 16.6472C177.635 16.5234 177.839 16.3111 177.963 16.0103C178.086 15.7272 178.166 15.3823 178.201 14.9753C178.237 14.5507 178.255 14.0465 178.255 13.4627C178.255 12.8966 178.237 12.4012 178.201 11.9766C178.184 11.552 178.104 11.207 177.963 10.9416C177.839 10.6055 177.635 10.3843 177.352 10.2782C177.087 10.1544 176.698 10.0924 176.185 10.0924C175.707 10.0924 175.327 10.1278 175.043 10.1986C174.76 10.2517 174.548 10.3843 174.407 10.5966C174.283 10.8089 174.203 11.1451 174.168 11.6051C174.132 12.0651 174.115 12.6843 174.115 13.4627C174.115 14.2411 174.132 14.8515 174.168 15.2938C174.203 15.7361 174.283 16.0722 174.407 16.3022C174.548 16.5145 174.76 16.6561 175.043 16.7268C175.327 16.7799 175.707 16.8064 176.185 16.8064ZM185.764 4.04186V0.618514H190.142V4.04186H185.764ZM185.817 20.3359V6.80177H190.116V20.3359H185.817ZM194.763 20.3359V10.0394H192.295V6.80177H194.763V2.87421H199.062V6.80177H202.008V10.0394H199.062V20.3359H194.763ZM207.248 20.5482C206.399 20.5482 205.683 20.4156 205.099 20.1502C204.515 19.8848 204.073 19.4514 203.772 18.8498C203.489 18.2483 203.347 17.461 203.347 16.488C203.347 15.4619 203.462 14.648 203.692 14.0465C203.94 13.4273 204.373 12.985 204.993 12.7197C205.612 12.4543 206.488 12.3216 207.62 12.3216C207.779 12.3216 208 12.3304 208.283 12.3481C208.584 12.3481 208.92 12.357 209.292 12.3747C209.663 12.3747 210.035 12.3835 210.406 12.4012C210.778 12.4012 211.114 12.41 211.415 12.4277V11.9235C211.415 11.4105 211.37 11.0124 211.282 10.7293C211.211 10.4463 211.061 10.2428 210.831 10.119C210.619 9.97743 210.291 9.89782 209.849 9.88013C209.407 9.84475 208.823 9.82705 208.097 9.82705C207.691 9.82705 207.239 9.8359 206.744 9.85359C206.266 9.87128 205.789 9.89782 205.311 9.93321C204.851 9.9509 204.462 9.97743 204.143 10.0128V7.01407C204.869 6.89023 205.683 6.79293 206.585 6.72216C207.505 6.6337 208.469 6.58947 209.477 6.58947C210.61 6.58947 211.547 6.66024 212.29 6.80177C213.051 6.9433 213.662 7.16445 214.121 7.46521C214.581 7.74828 214.918 8.11096 215.13 8.55325C215.36 8.99554 215.51 9.51745 215.581 10.119C215.652 10.7205 215.687 11.4016 215.687 12.1624V20.3359H211.6L211.494 18.7437H211.282C210.946 19.2744 210.557 19.6725 210.114 19.9379C209.672 20.2032 209.203 20.3713 208.708 20.4421C208.212 20.5129 207.726 20.5482 207.248 20.5482ZM209.265 17.523C209.584 17.523 209.858 17.5053 210.088 17.4699C210.335 17.4168 210.539 17.3372 210.698 17.231C210.875 17.1072 211.017 16.9568 211.123 16.7799C211.211 16.5853 211.282 16.3465 211.335 16.0634C211.388 15.7803 211.415 15.4442 211.415 15.055V14.5507H208.947C208.504 14.5507 208.168 14.5861 207.938 14.6569C207.708 14.71 207.549 14.8515 207.461 15.0815C207.39 15.2938 207.354 15.6299 207.354 16.0899C207.354 16.4791 207.399 16.7799 207.487 16.9922C207.576 17.2045 207.752 17.346 208.018 17.4168C208.301 17.4876 208.717 17.523 209.265 17.523ZM218.989 20.3359V0.618514H223.288V20.3359H218.989Z" fill="white"/> </svg> ,
        "isotipo": <svg className={ className } style={ style } viewBox="0 0 71 63" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M35.2546 0L70.4118 33.3529H61.7647V63H47.9513C47.9242 62.9044 47.8946 62.8024 47.8612 62.6912H47.8677L47.8438 62.6335C47.4178 61.2316 46.3778 58.3782 42.1494 48.8884L39.6547 42.8667C43.2297 41.1921 45.7059 37.5617 45.7059 33.3529C45.7059 27.5539 41.0049 22.8529 35.2059 22.8529C29.4069 22.8529 24.7059 27.5539 24.7059 33.3529C24.7059 37.6345 27.2686 41.3176 30.9438 42.9519L29.65 45.8845L29.6475 45.884L21.9046 63H8.64706V33.3529H0L35.2546 0Z" fill="var( --azulClaro )"/> </svg> ,
        
        // LOGIN
        "correo": <svg xmlns="http://www.w3.org/2000/svg" className={ className } style={ style } viewBox="0 0 24 24"><g fill="none" stroke={ color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg> ,
        "password": <svg xmlns="http://www.w3.org/2000/svg" className={ className } style={ style } viewBox="0 0 24 24"><g fill="none" stroke={ color } strokeWidth="1.5"><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"/><path strokeLinecap="round" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2"/></g></svg> ,
        
        // BUTTONS
        "check": <svg className={ className } style={ style } viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.650635 5.57967L2.82835 3.40195L7.18329 7.75689L14.8048 0.135376L16.9825 2.31309L7.18379 12.1118L0.650635 5.57967Z" fill={ color } /> </svg> ,
        "plus": <svg className={ className } style={ style } viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.719788 8.49664V5.69203H14.1872V8.49664H0.719788ZM5.95857 0.347412H8.94839V13.8677H5.95857V0.347412Z" fill={ color }/></svg> ,
        "equis": <svg className={ className } style={ style } viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.192 0.343994L5.949 4.58599L1.707 0.343994L0.292999 1.75799L4.535 5.99999L0.292999 10.242L1.707 11.656L5.949 7.41399L10.192 11.656L11.606 10.242L7.364 5.99999L11.606 1.75799L10.192 0.343994Z" fill={ color } /></svg> ,
        "basurero": <svg className={ className } style={ style } viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.15956 0.486877C5.82362 0.486877 4.75037 1.44825 4.75037 2.61053V2.86875H2.04233C1.66638 2.86875 1.36003 3.13406 1.36003 3.45964V4.05053H0.677734V5.23231H2.04233V14.0956C2.04233 15.0677 2.96684 15.8683 4.08922 15.8683H12.2768C13.3992 15.8683 14.3237 15.0677 14.3237 14.0956V5.23231H15.6883V4.05053H15.006V3.45964C15.006 3.13406 14.6996 2.86875 14.3237 2.86875H11.6156V2.60994C11.6156 1.44825 10.5424 0.486877 9.20645 0.486877H7.15956ZM7.15956 1.70529H9.20645C9.75502 1.70529 10.2087 2.09291 10.2087 2.60994V2.86875H6.15658V2.60994C6.15658 2.09291 6.61031 1.70588 7.15888 1.70588L7.15956 1.70529ZM3.40692 5.23231H6.9037C6.9883 5.23999 7.07223 5.25063 7.15956 5.25063H9.20645C9.29379 5.25063 9.37703 5.23999 9.46232 5.23231H12.9591V14.0956C12.9591 14.4283 12.6609 14.6865 12.2768 14.6865H4.08922C3.70509 14.6865 3.40692 14.4283 3.40692 14.0956V5.23231ZM4.77152 6.41409V13.5048H6.13611V6.41409H4.77152ZM7.50071 6.41409V13.5048H8.8653V6.41409H7.50071ZM10.2299 6.41409V13.5048H11.5945V6.41409H10.2299Z" fill={ color } /></svg> ,
        "modificar": <svg className={ className } style={ style } viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.7086 16.5245C2.20277 16.5245 1.76989 16.3706 1.40999 16.0627C1.05008 15.7549 0.869815 15.3843 0.869202 14.9511V3.93729C0.869202 3.5046 1.04946 3.13433 1.40999 2.82646C1.77051 2.5186 2.20338 2.36441 2.7086 2.36388H10.9169L9.07752 3.93729H2.7086V14.9511H15.5844V9.48354L17.4238 7.91013V14.9511C17.4238 15.3838 17.2438 15.7543 16.8839 16.0627C16.524 16.3711 16.0908 16.525 15.5844 16.5245H2.7086ZM6.3874 11.8043V8.46082L14.8256 1.24283C15.0096 1.08549 15.2165 0.967488 15.4464 0.888818C15.6764 0.810148 15.9063 0.770813 16.1362 0.770813C16.3815 0.770813 16.6154 0.810148 16.8379 0.888818C17.0605 0.967488 17.2635 1.08549 17.4468 1.24283L18.7344 2.36388C18.903 2.52122 19.0333 2.69509 19.1252 2.88547C19.2172 3.07585 19.2632 3.26912 19.2632 3.46527C19.2632 3.66142 19.2212 3.85495 19.1372 4.04585C19.0532 4.23676 18.9189 4.41036 18.7344 4.56665L10.2961 11.8043H6.3874ZM8.2268 10.2309H9.51438L14.8486 5.66803L14.2048 5.11734L13.5381 4.56665L8.2268 9.10985V10.2309Z" fill={ color } /></svg> ,
        "eye": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill={ color } d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg> ,
        "lupa": <svg className={ className } style={ style } viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16L11 11M1 6.83333C1 7.59938 1.15088 8.35792 1.44404 9.06565C1.73719 9.77339 2.16687 10.4164 2.70854 10.9581C3.25022 11.4998 3.89328 11.9295 4.60101 12.2226C5.30875 12.5158 6.06729 12.6667 6.83333 12.6667C7.59938 12.6667 8.35792 12.5158 9.06565 12.2226C9.77339 11.9295 10.4164 11.4998 10.9581 10.9581C11.4998 10.4164 11.9295 9.77339 12.2226 9.06565C12.5158 8.35792 12.6667 7.59938 12.6667 6.83333C12.6667 6.06729 12.5158 5.30875 12.2226 4.60101C11.9295 3.89328 11.4998 3.25022 10.9581 2.70854C10.4164 2.16687 9.77339 1.73719 9.06565 1.44404C8.35792 1.15088 7.59938 1 6.83333 1C6.06729 1 5.30875 1.15088 4.60101 1.44404C3.89328 1.73719 3.25022 2.16687 2.70854 2.70854C2.16687 3.25022 1.73719 3.89328 1.44404 4.60101C1.15088 5.30875 1 6.06729 1 6.83333Z" stroke={ color } strokeWidth="0.833333"/></svg> ,
        "baneado": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill={ color } fillRule="evenodd" d="M11.323 12.383a5.5 5.5 0 0 1-7.706-7.706zm1.06-1.06L4.677 3.617a5.5 5.5 0 0 1 7.706 7.706M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clipRule="evenodd"/></svg> ,
        "exclamacion": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path fill={ color } d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64v256c0 17.7 14.3 32 32 32s32-14.3 32-32zM64 480a40 40 0 1 0 0-80a40 40 0 1 0 0 80"/></svg> ,
        "upload": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17"><path fill={ color } d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> ,
        
        // ERROR 404
        "error": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill={ color } d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"/></svg> ,
        
        // NAV
        "arrow_derecha": <svg className={ className } style={ style } viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 13L7 7L1 1" stroke={ color } strokeWidth="0.923077" strokeLinecap="round" strokeLinejoin="round"/> </svg> ,
        "nav_visitas_resumen": <svg className={ className } style={ style } viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 12.4667V9.06667H3.4V12.4667H0ZM1.13333 10.2V11.3333H2.26667V10.2H1.13333ZM0 7.93333V4.53333H3.4V7.93333H0ZM1.13333 5.66667V6.8H2.26667V5.66667H1.13333ZM0 3.4V0H3.4V3.4H0ZM1.13333 1.13333V2.26667H2.26667V1.13333H1.13333ZM5.66667 6.8V5.66667H15.8667V6.8H5.66667ZM13.6 10.2V11.3333H5.66667V10.2H13.6ZM5.66667 1.13333H18.1333V2.26667H5.66667V1.13333ZM0 17V13.6H3.4V17H0ZM1.13333 14.7333V15.8667H2.26667V14.7333H1.13333ZM5.66667 15.8667V14.7333H15.8667V15.8667H5.66667Z" fill="white" /> </svg> ,
        "nav_visitas_activas": <svg className={ className } style={ style } viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.5601 0.607099C10.3428 0.230698 9.94255 0 9.50673 0C9.0709 0 8.67189 0.230698 8.45457 0.607099L0.16322 15.1763C0.0563842 15.3602 0 15.5701 0 15.784C0 15.9979 0.0563842 16.2078 0.16322 16.3917C0.392414 16.7681 0.792612 17 1.21537 17H17.7981C18.2339 17 18.6341 16.7693 18.8395 16.3929C18.9427 16.2079 18.9979 15.9991 18.9999 15.7862C19.002 15.5733 18.9509 15.3633 18.8514 15.1763L10.5601 0.607099ZM10.718 14.5667H8.29663V12.1347H10.718V14.5667ZM10.718 10.9193H8.29663V6.05521H10.718V10.9193Z" fill="white" /> </svg> ,
        "nav_estadisticas": <svg className={ className } style={ style } viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.0502 0H16.1502C15.6255 0 15.2002 0.585474 15.2002 1.30769V15.6923C15.2002 16.4145 15.6255 17 16.1502 17H18.0502C18.5749 17 19.0002 16.4145 19.0002 15.6923V1.30769C19.0002 0.585474 18.5749 0 18.0502 0Z" fill="white"/> <path d="M10.4501 7.84509H8.5501C8.02543 7.84509 7.6001 8.43057 7.6001 9.15279V15.6912C7.6001 16.4135 8.02543 16.9989 8.5501 16.9989H10.4501C10.9748 16.9989 11.4001 16.4135 11.4001 15.6912V9.15279C11.4001 8.43057 10.9748 7.84509 10.4501 7.84509Z" fill="white"/> <path d="M2.85 2.61539H0.95C0.42533 2.61539 0 3.20086 0 3.92308V15.6923C0 16.4145 0.42533 17 0.95 17H2.85C3.37467 17 3.8 16.4145 3.8 15.6923V3.92308C3.8 3.20086 3.37467 2.61539 2.85 2.61539Z" fill="white"/> </svg> ,
        "nav_preguntas_frecuentes": <svg className={ className } style={ style } viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.875 3.1875H15.9375V13.8125H13.8125V17L10.625 13.8125H6.375L7.4375 12.75H11.0649L12.75 14.4351V12.75H14.875V3.1875ZM6.375 11.6875L3.1875 14.875V11.6875H0V0H13.8125V11.6875H6.375ZM1.0625 10.625H4.25V12.3101L5.93506 10.625H12.75V1.0625H1.0625V10.625ZM6.375 9.5625V8.5H7.4375V9.5625H6.375ZM6.90625 3.1875C6.75684 3.1875 6.61849 3.21517 6.49121 3.27051C6.36393 3.32585 6.25325 3.40055 6.15918 3.49463C6.0651 3.5887 5.98763 3.70215 5.92676 3.83496C5.86588 3.96777 5.83822 4.10612 5.84375 4.25H4.78125C4.78125 3.95671 4.83659 3.68278 4.94727 3.42822C5.05794 3.17367 5.21012 2.94678 5.40381 2.74756C5.59749 2.54834 5.82161 2.39616 6.07617 2.29102C6.33073 2.18587 6.60742 2.13053 6.90625 2.125C7.19954 2.125 7.47347 2.18034 7.72803 2.29102C7.98258 2.40169 8.20947 2.55387 8.40869 2.74756C8.60791 2.94124 8.76009 3.16536 8.86523 3.41992C8.97038 3.67448 9.02572 3.95117 9.03125 4.25C9.03125 4.50456 8.99251 4.72868 8.91504 4.92236C8.83756 5.11605 8.73519 5.2959 8.60791 5.46191C8.48063 5.62793 8.33675 5.78564 8.17627 5.93506C8.01579 6.08447 7.85254 6.24495 7.68652 6.4165C7.57585 6.52718 7.50667 6.64339 7.479 6.76514C7.45133 6.88688 7.43473 7.01693 7.4292 7.15527V7.28809C7.4292 7.33236 7.43197 7.38216 7.4375 7.4375H6.375V7.03906C6.375 6.78451 6.41374 6.56038 6.49121 6.3667C6.56868 6.17301 6.66553 5.9987 6.78174 5.84375C6.89795 5.6888 7.02799 5.55046 7.17187 5.42871C7.31575 5.30697 7.44303 5.18245 7.55371 5.05518C7.66439 4.9279 7.764 4.80339 7.85254 4.68164C7.94108 4.5599 7.97982 4.41602 7.96875 4.25C7.96875 4.10059 7.94108 3.96224 7.88574 3.83496C7.8304 3.70768 7.7557 3.59701 7.66162 3.50293C7.56754 3.40885 7.4541 3.33138 7.32129 3.27051C7.18848 3.20964 7.05013 3.18197 6.90625 3.1875Z" fill="white"/> </svg> ,
        "nav_objetos_perdidos": <svg className={ className } style={ style } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><g fill="none" stroke={ color } strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 4h-9a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-7 0v-.5a2.5 2.5 0 1 1 5 0V4"/><path d="M5.5 7.5A1.5 1.5 0 1 1 7 9v.5m.002 2a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"/></g></svg> ,
        "logout": <svg className={ className } style={ style } viewBox="0 0 26 30" fill={ color } xmlns="http://www.w3.org/2000/svg"> <path d="M24.1429 11.25H20.9857C20.6143 11.25 20.2429 11.0625 19.8714 10.875L17.4571 8.4375C17.0857 7.875 16.3429 7.5 15.4143 7.5H14.8571C16.9 7.5 18.5714 5.8125 18.5714 3.75C18.5714 1.6875 16.9 0 14.8571 0C12.8143 0 11.1429 1.6875 11.1429 3.75C11.1429 5.0625 11.8857 6.375 13 6.9375L12.6286 7.5H8.91429C6.87143 7.5 4.64286 8.4375 3.34286 10.3125L2.22857 11.8125C1.48571 12.5625 1.85714 13.6875 2.6 14.25C3.34286 14.625 4.27143 14.4375 4.82857 13.6875L5.75714 12.375C6.31429 11.625 7.05714 11.25 7.98571 11.25H9.47143L8.17143 14.25C7.61429 15.375 7.42857 16.5 7.42857 17.8125V21.5625C7.42857 22.125 7.05714 22.5 6.5 22.5H1.85714C0.742857 22.5 0 23.25 0 24.375C0 25.5 0.742857 26.25 1.85714 26.25H8.35714C9.84286 26.25 11.1429 24.9375 11.1429 23.4375V18.75L18.2 27.1875C19.3143 28.875 21.3571 30 23.4 30H25.0714L15.0429 17.4375C14.4857 16.6875 14.6714 15.9375 15.0429 15L16.1571 12.1875L17.4571 13.6875C18.2 14.4375 19.3143 15 20.4286 15H24.1429C25.2571 15 26 14.25 26 13.125C26 12 25.2571 11.25 24.1429 11.25Z" fill={ color }/> </svg> ,
        
        // VARIOS
        "patente": <svg className={ className } style={ style } viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.38642 4.49874H15.6338M9.38642 7.14321H15.6338M9.38642 9.7881H15.6338M17.4962 12.5354V1.96086C17.4962 1.62432 17.3625 1.30156 17.1245 1.06359C16.8866 0.825616 16.5638 0.691925 16.2273 0.691925H2.26894C1.9324 0.691925 1.60964 0.825616 1.37166 1.06359C1.13369 1.30156 1 1.62432 1 1.96086V12.5354C1 12.8719 1.13369 13.1947 1.37166 13.4326C1.60964 13.6706 1.9324 13.8043 2.26894 13.8043H16.2273C16.5638 13.8043 16.8866 13.6706 17.1245 13.4326C17.3625 13.1947 17.4962 12.8719 17.4962 12.5354Z" stroke={ color } strokeWidth="1"/> <path d="M7.36922 9.7881H2.96262C2.96262 9.7881 2.84587 7.46594 5.16634 7.46594C7.47623 7.46594 7.37006 9.7881 7.37006 9.7881H7.36922Z" stroke={ color } strokeWidth="1"/> <path d="M5.16595 6.67244C5.76631 6.67244 6.253 6.18575 6.253 5.58538C6.253 4.98501 5.76631 4.49832 5.16595 4.49832C4.56558 4.49832 4.07889 4.98501 4.07889 5.58538C4.07889 6.18575 4.56558 6.67244 5.16595 6.67244Z" stroke={ color } strokeWidth="1"/> </svg> ,
        "nombre": <svg className={ className } style={ style } viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.61364 7.61364C8.62327 7.61364 9.59155 7.21256 10.3055 6.49864C11.0194 5.78473 11.4205 4.81645 11.4205 3.80682C11.4205 2.79719 11.0194 1.82891 10.3055 1.11499C9.59155 0.401074 8.62327 0 7.61364 0C6.60401 0 5.63573 0.401074 4.92181 1.11499C4.20789 1.82891 3.80682 2.79719 3.80682 3.80682C3.80682 4.81645 4.20789 5.78473 4.92181 6.49864C5.63573 7.21256 6.60401 7.61364 7.61364 7.61364ZM10.1515 3.80682C10.1515 4.47991 9.88413 5.12542 9.40819 5.60137C8.93224 6.07731 8.28672 6.3447 7.61364 6.3447C6.94055 6.3447 6.29503 6.07731 5.81908 5.60137C5.34314 5.12542 5.07576 4.47991 5.07576 3.80682C5.07576 3.13373 5.34314 2.48821 5.81908 2.01227C6.29503 1.53632 6.94055 1.26894 7.61364 1.26894C8.28672 1.26894 8.93224 1.53632 9.40819 2.01227C9.88413 2.48821 10.1515 3.13373 10.1515 3.80682ZM15.2273 13.9583C15.2273 15.2273 13.9583 15.2273 13.9583 15.2273H1.26894C1.26894 15.2273 0 15.2273 0 13.9583C0 12.6894 1.26894 8.88258 7.61364 8.88258C13.9583 8.88258 15.2273 12.6894 15.2273 13.9583ZM13.9583 13.9533C13.9571 13.6411 13.7629 12.7021 12.9026 11.8417C12.0752 11.0144 10.5182 10.1515 7.61364 10.1515C4.70903 10.1515 3.15205 11.0144 2.3247 11.8417C1.46436 12.7021 1.27148 13.6411 1.26894 13.9533H13.9583Z" fill={ color } /></svg> ,
        "motivo": <svg className={ className } style={ style } viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0V1.66667H0V0H15ZM0 10H7.5V8.33333H0V10ZM0 5.83333H15V4.16667H0V5.83333Z" fill={ color } /></svg> ,
        "ingreso": <svg className={ className } style={ style } viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.72603 8.13333H0.6427V6.1H5.72603V4.06667L8.77603 7.11667L5.72603 10.1667V8.13333ZM15.8927 0V13.2167L9.7927 16.2667V13.2167H3.6927V9.15H4.70937V12.2H9.7927V3.05L13.8594 1.01667H4.70937V5.08333H3.6927V0H15.8927Z" fill={ color } /></svg> ,
        "salida": <svg className={ className } style={ style } viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8642 10.1667V8.13333H7.78085V6.1H12.8642V4.06667L15.9142 7.11667L12.8642 10.1667ZM11.8475 9.15V13.2167H6.76418V16.2667L0.664185 13.2167V0H11.8475V5.08333H10.8309V1.01667H2.69752L6.76418 3.05V12.2H10.8309V9.15H11.8475Z" fill={ color } /></svg> ,
        "accion": <svg className={ className } style={ style } viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50256 6.07576V11.1515M9.50256 11.9975V13.6894M9.50256 1L17.9622 16.2273H1.04297L9.50256 1Z" stroke={ color } /></svg> ,
        "imagen": <svg className={ className } style={ style } viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.6667 96C7.73333 96 5.22311 94.9564 3.136 92.8693C1.04889 90.7822 0.00355556 88.2702 0 85.3333V10.6667C0 7.73333 1.04533 5.22311 3.136 3.136C5.22667 1.04889 7.73689 0.00355556 10.6667 0H85.3333C88.2667 0 90.7787 1.04533 92.8693 3.136C94.96 5.22667 96.0036 7.73689 96 10.6667V85.3333C96 88.2667 94.9564 90.7787 92.8693 92.8693C90.7822 94.96 88.2702 96.0036 85.3333 96H10.6667ZM10.6667 85.3333H85.3333V10.6667H10.6667V85.3333ZM16 74.6667H80L60 48L44 69.3333L32 53.3333L16 74.6667Z" fill={ color } /> </svg> ,
        "calendar": <svg className={ className } style={ style } viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.12015 0C3.22226 0 3.32018 0.0405624 3.39239 0.112764C3.46459 0.184965 3.50515 0.282892 3.50515 0.385V1.10495H7.6395V0.38995C7.6395 0.287842 7.68006 0.189915 7.75226 0.117714C7.82447 0.0455124 7.92239 0.00495 8.0245 0.00495C8.12661 0.00495 8.22453 0.0455124 8.29674 0.117714C8.36894 0.189915 8.4095 0.287842 8.4095 0.38995V1.10495H9.9C10.1916 1.10495 10.4713 1.22077 10.6776 1.42694C10.8839 1.63311 10.9999 1.91276 11 2.2044V9.90055C10.9999 10.1922 10.8839 10.4718 10.6776 10.678C10.4713 10.8842 10.1916 11 9.9 11H1.1C0.808357 11 0.528651 10.8842 0.322377 10.678C0.116103 10.4718 0.000145821 10.1922 0 9.90055L0 2.2044C0.000145821 1.91276 0.116103 1.63311 0.322377 1.42694C0.528651 1.22077 0.808357 1.10495 1.1 1.10495H2.73515V0.38445C2.7353 0.282437 2.77592 0.184652 2.84811 0.112569C2.92029 0.0404868 3.01814 -1.04095e-07 3.12015 0ZM0.77 4.2581V9.90055C0.77 9.94389 0.778536 9.9868 0.79512 10.0268C0.811704 10.0669 0.836011 10.1033 0.866655 10.1339C0.897298 10.1645 0.933677 10.1888 0.973714 10.2054C1.01375 10.222 1.05666 10.2306 1.1 10.2306H9.9C9.94334 10.2306 9.98625 10.222 10.0263 10.2054C10.0663 10.1888 10.1027 10.1645 10.1333 10.1339C10.164 10.1033 10.1883 10.0669 10.2049 10.0268C10.2215 9.9868 10.23 9.94389 10.23 9.90055V4.2658L0.77 4.2581ZM3.66685 8.04045V8.95675H2.75V8.04045H3.66685ZM5.95815 8.04045V8.95675H5.04185V8.04045H5.95815ZM8.25 8.04045V8.95675H7.33315V8.04045H8.25ZM3.66685 5.8531V6.7694H2.75V5.8531H3.66685ZM5.95815 5.8531V6.7694H5.04185V5.8531H5.95815ZM8.25 5.8531V6.7694H7.33315V5.8531H8.25ZM2.73515 1.8744H1.1C1.05666 1.8744 1.01375 1.88294 0.973714 1.89952C0.933677 1.9161 0.897298 1.94041 0.866655 1.97105C0.836011 2.0017 0.811704 2.03808 0.79512 2.07811C0.778536 2.11815 0.77 2.16106 0.77 2.2044V3.48865L10.23 3.49635V2.2044C10.23 2.16106 10.2215 2.11815 10.2049 2.07811C10.1883 2.03808 10.164 2.0017 10.1333 1.97105C10.1027 1.94041 10.0663 1.9161 10.0263 1.89952C9.98625 1.88294 9.94334 1.8744 9.9 1.8744H8.4095V2.38535C8.4095 2.48746 8.36894 2.58538 8.29674 2.65759C8.22453 2.72979 8.12661 2.77035 8.0245 2.77035C7.92239 2.77035 7.82447 2.72979 7.75226 2.65759C7.68006 2.58538 7.6395 2.48746 7.6395 2.38535V1.8744H3.50515V2.3804C3.50515 2.48251 3.46459 2.58043 3.39239 2.65264C3.32018 2.72484 3.22226 2.7654 3.12015 2.7654C3.01804 2.7654 2.92012 2.72484 2.84791 2.65264C2.77571 2.58043 2.73515 2.48251 2.73515 2.3804V1.8744Z" fill={ color } /> </svg> ,
        "pin": <svg className={ className } style={ style } viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.52417 5.17583C2.87581 5.52746 3.35272 5.725 3.85 5.725C4.09623 5.725 4.34005 5.6765 4.56753 5.58227C4.79502 5.48805 5.00172 5.34994 5.17583 5.17583C5.34994 5.00172 5.48805 4.79502 5.58227 4.56753C5.6765 4.34005 5.725 4.09623 5.725 3.85C5.725 3.35272 5.52746 2.87581 5.17583 2.52417C4.82419 2.17254 4.34728 1.975 3.85 1.975C3.35272 1.975 2.87581 2.17254 2.52417 2.52417C2.17254 2.87581 1.975 3.35272 1.975 3.85C1.975 4.34728 2.17254 4.82419 2.52417 5.17583ZM3.85 10.233C3.78538 10.1556 3.71386 10.0689 3.63667 9.97378C3.28217 9.53699 2.81033 8.92603 2.33948 8.22816C1.86767 7.52887 1.40303 6.75139 1.05786 5.98093C0.709761 5.20391 0.5 4.47071 0.5 3.85C0.5 2.96152 0.852945 2.10944 1.48119 1.48119C2.10944 0.852945 2.96152 0.5 3.85 0.5C4.73848 0.5 5.59056 0.852945 6.21881 1.48119C6.84705 2.10944 7.2 2.96152 7.2 3.85C7.2 4.47071 6.99024 5.20391 6.64214 5.98093C6.29697 6.75139 5.83233 7.52887 5.36052 8.22816C4.88967 8.92603 4.41783 9.53699 4.06333 9.97378C3.98614 10.0689 3.91462 10.1556 3.85 10.233Z" stroke={ color } /> </svg> ,
        
        // PREGUNTAS FRECUENTES
        "faq_arrow_down": <svg className={ className } style={ style } viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.89952 0.973617L7.53277 6.60686L13.166 0.973618" stroke={ color } strokeWidth="1.87775" strokeLinecap="round" strokeLinejoin="round"/> </svg> ,
    }
    
    return ( elsvg[ icono ] || "icono no especificado" )
}