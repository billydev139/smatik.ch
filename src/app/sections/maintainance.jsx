"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MaintenancePage = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container} className="">
        {/* Logo Section */}
        <div style={styles.logo} className="flex justify-center">
        <svg
width="152"
height="40"
viewBox="0 0 152 40"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clipPath="url(#clip0_40_9922)">
  <path
    d="M48.2408 16.264C45.2213 15.0503 42.9552 14.1347 42.9552 11.8731C42.9552 9.99508 44.2134 8.94827 46.5733 8.94827C49.0587 8.94827 51.8923 9.61797 54.942 10.9574V5.06119C51.3239 3.84749 48.9331 3.38477 46.3229 3.38477C40.7535 3.38477 37.734 6.14918 37.734 11.5415C37.734 17.4376 41.6358 19.1498 46.2928 20.7406C49.7518 22.1602 50.9146 23.3338 50.9146 25.2974C50.9146 27.3867 49.782 28.2222 46.8872 28.2222C43.8073 28.2222 40.4086 27.3011 37.9835 25.8403V31.9023C40.9427 33.2417 43.5831 33.7857 46.9508 33.7857C52.7705 33.7857 56.1382 30.901 56.1382 25.5033C56.1382 21.1979 53.9977 18.4389 48.2392 16.264H48.2408Z"
    fill="white"
  />
  <path
    d="M81.6831 10.8719C78.569 10.8719 76.0836 13.4196 75.1703 18.062H75.11C74.7006 13.4196 72.6245 10.8719 69.4158 10.8719C66.2071 10.8719 63.8163 13.4651 62.9332 18.062H62.8728L63.4069 11.456H58.5616V33.1964H63.4069V22.0336C63.4069 18.5648 65.1348 16.3032 67.2451 16.3032C69.477 16.3032 70.829 18.3123 70.829 21.9068V33.1953H75.6742V22.0325C75.6742 18.5637 77.4054 16.3021 79.5125 16.3021C81.6195 16.3021 83.1003 18.3112 83.1003 21.9057V33.1942H87.9456V20.692C87.9456 14.4642 85.5548 10.8687 81.6831 10.8687V10.8719Z"
    fill="white"
  />
  <path
    d="M99.0502 10.8716C96.7539 10.8716 94.2049 11.4958 91.4047 12.7095V18.2275C93.7956 16.7678 96.0266 16.0569 98.0423 16.0569C100.842 16.0569 102.32 17.5621 102.353 20.4024H96.8453C92.632 20.4024 90.2419 22.8298 90.2419 27.1741C90.2419 31.5185 92.3792 33.7845 95.9018 33.7845C99.4245 33.7845 101.816 31.317 102.824 26.6356H102.888L102.354 33.196H107.196V20.488C107.196 14.1345 104.366 10.8716 99.051 10.8716H99.0502ZM102.353 23.791C102.353 26.55 100.183 28.765 97.633 28.765C95.9018 28.765 94.9584 27.8037 94.9584 25.9659C94.9584 24.128 95.9361 23.0356 97.792 23.0356H102.353V23.791Z"
    fill="white"
  />
  <path
    d="M119.402 28.0563C117.106 28.0563 116.224 26.8025 116.224 23.5396V16.9337H122.99V11.4558H116.224V6.85889H114.118L114.087 7.19157C113.459 10.1164 111.602 12.1255 109.082 12.5438L108.863 12.5839V16.9337H111.383V24.6677C111.383 30.9811 113.519 33.7856 118.305 33.7856C119.972 33.7856 121.605 33.4486 123.276 32.7789V27.2208C121.828 27.8049 120.507 28.0563 119.404 28.0563H119.402Z"
    fill="white"
  />
  <path
    d="M126.109 11.4561V33.1964H130.954V11.4561H126.109ZM128.53 2.96777C126.802 2.96777 125.574 4.26708 125.574 6.14939C125.574 8.03171 126.802 9.36678 128.53 9.36678C130.257 9.36678 131.519 8.07289 131.519 6.14939C131.519 4.2259 130.261 2.96777 128.53 2.96777Z"
    fill="white"
  />
  <path
    d="M150.303 27.0941C149.61 24.3752 148.413 22.7042 146.181 22.326L144.386 21.9934V21.9077C148.572 20.8653 150.429 16.8471 150.618 11.4548H145.613C145.393 16.3031 143.976 19.9442 141.116 19.9442H139.134V2.84619L134.289 3.92877V33.1962H139.134V24.6667H141.21C143.252 24.6667 144.734 25.6279 145.362 28.2612L146.525 33.1951H152L150.303 27.0931V27.0941Z"
    fill="white"
  />
  <path
    d="M3.52917 25.1187V15.7451C3.52917 11.6543 5.53105 8.0392 8.46986 6.82333L24.1033 0.356058C27.8673 -1.20116 31.6867 2.54505 31.677 7.78345C31.6704 11.1731 30.0094 14.164 27.5737 15.1718L3.52917 25.1187Z"
    fill="#FFB522"
  />
  <path
    d="M0 32.2361C0 28.8399 1.66266 25.8382 4.10242 24.8282L28.1682 14.8716L28.1502 24.2777C28.1421 28.3599 26.1418 31.962 23.2087 33.1746L7.57289 39.6429C3.81539 41.1991 0 37.4669 0 32.2361Z"
    fill="#FF621D"
  />
</g>
<defs>
  <clipPath id="clip0_40_9922">
    <rect width="152" height="40" fill="white" />
  </clipPath>
</defs>
</svg>
        </div>

        {/* Title and Subtitle */}
        <div style={styles.title}>We’re Still</div>
        <div style={styles.highlightedTitle}>Cooking Our Website</div>
        <div style={styles.subtitle}>
          We are going to launch our website very soon. Stay Tuned.
        </div>

        {/* Social Media Links */}
    
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }

        @keyframes backgroundAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        div[style] {
          background: linear-gradient(270deg, #000000, #333333);
          background-size: 400% 400%;
          animation: backgroundAnimation 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    position: "relative",
  },
  container: {
    maxWidth: "800px",
    padding: "20px",
  },
  logo: {
    marginBottom: "20px",
  },
  logoImage: {
    width: "150px", // Adjust width based on your logo
  },
  title: {
    fontSize: "2rem",
    fontWeight: "400",
  },
  highlightedTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#FFA500", // Orange color for emphasis
  },
  subtitle: {
    fontSize: "1rem",
    color: "#aaa",
    marginTop: "10px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  icon: {
    margin: "0 10px",
  },
};

export default MaintenancePage;
