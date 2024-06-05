import React from "react";
import Card from "react-bootstrap/Card";

const TutorialCard = ({ data }) => {
  const { id, title, media, rating, reviews, students } = data;
  return (
    <Card className="tutorial-card">
      <Card.Img
        variant="top"
        src={
          "https://media.istockphoto.com/id/1331029732/photo/close-up-of-a-male-doctor-hand-hold-a-silver-pen-and-showing-pad-in-hospital-doctor-giving.jpg?s=612x612&w=0&k=20&c=G9dcoctn0BMFgHx0t1A-d0nOOGPmConTlAQErP3rBbU="
        }
      />
      <Card.Body className="border-0">
        <Card.Title>
          <h5>{title}</h5>
        </Card.Title>
        <div className="star-d d-flex align-items-center gap-2">
          <span>
            <svg
              width="109"
              height="40"
              viewBox="0 0 109 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.09375 0.5625C8.21875 0.3125 8.375 0.15625 8.625 0.0625C8.875 0 9.09375 0 9.34375 0.0625C9.59375 0.15625 9.78125 0.3125 9.90625 0.5625L11.9375 4.6875L16.5 5.34375C16.75 5.40625 16.9688 5.53125 17.125 5.71875C17.2812 5.9375 17.3438 6.15625 17.3438 6.40625C17.3438 6.65625 17.25 6.875 17.0625 7.0625L13.75 10.2812L14.5312 14.8438C14.5625 15.0938 14.5 15.3438 14.375 15.5625C14.25 15.7812 14.0625 15.9062 13.8125 15.9688C13.5625 16.0312 13.3125 16 13.0938 15.875L9 13.75L4.90625 15.875C4.65625 16 4.4375 16.0312 4.1875 15.9688C3.9375 15.9062 3.71875 15.7812 3.59375 15.5625C3.46875 15.3438 3.40625 15.0938 3.46875 14.8438L4.25 10.2812L0.9375 7.0625C0.75 6.875 0.625 6.65625 0.625 6.40625C0.625 6.15625 0.6875 5.9375 0.84375 5.71875C1 5.53125 1.21875 5.40625 1.5 5.34375L6.0625 4.6875L8.09375 0.5625ZM30.8937 0.5625C31.0187 0.3125 31.175 0.15625 31.425 0.0625C31.675 0 31.8937 0 32.1437 0.0625C32.3937 0.15625 32.5812 0.3125 32.7062 0.5625L34.7375 4.6875L39.3 5.34375C39.55 5.40625 39.7687 5.53125 39.925 5.71875C40.0812 5.9375 40.1437 6.15625 40.1437 6.40625C40.1437 6.65625 40.05 6.875 39.8625 7.0625L36.55 10.2812L37.3312 14.8438C37.3625 15.0938 37.3 15.3438 37.175 15.5625C37.05 15.7812 36.8625 15.9062 36.6125 15.9688C36.3625 16.0312 36.1125 16 35.8937 15.875L31.8 13.75L27.7062 15.875C27.4562 16 27.2375 16.0312 26.9875 15.9688C26.7375 15.9062 26.5187 15.7812 26.3937 15.5625C26.2687 15.3438 26.2062 15.0938 26.2687 14.8438L27.05 10.2812L23.7375 7.0625C23.55 6.875 23.425 6.65625 23.425 6.40625C23.425 6.15625 23.4875 5.9375 23.6437 5.71875C23.8 5.53125 24.0187 5.40625 24.3 5.34375L28.8625 4.6875L30.8937 0.5625ZM53.6937 0.5625C53.8187 0.3125 53.975 0.15625 54.225 0.0625C54.475 0 54.6937 0 54.9437 0.0625C55.1937 0.15625 55.3812 0.3125 55.5062 0.5625L57.5375 4.6875L62.1 5.34375C62.35 5.40625 62.5687 5.53125 62.725 5.71875C62.8812 5.9375 62.9437 6.15625 62.9437 6.40625C62.9437 6.65625 62.85 6.875 62.6625 7.0625L59.35 10.2812L60.1312 14.8438C60.1625 15.0938 60.1 15.3438 59.975 15.5625C59.85 15.7812 59.6625 15.9062 59.4125 15.9688C59.1625 16.0312 58.9125 16 58.6937 15.875L54.6 13.75L50.5062 15.875C50.2562 16 50.0375 16.0312 49.7875 15.9688C49.5375 15.9062 49.3187 15.7812 49.1937 15.5625C49.0687 15.3438 49.0062 15.0938 49.0687 14.8438L49.85 10.2812L46.5375 7.0625C46.35 6.875 46.225 6.65625 46.225 6.40625C46.225 6.15625 46.2875 5.9375 46.4437 5.71875C46.6 5.53125 46.8187 5.40625 47.1 5.34375L51.6625 4.6875L53.6937 0.5625ZM76.4938 0.5625C76.6188 0.3125 76.775 0.15625 77.025 0.0625C77.275 0 77.4938 0 77.7438 0.0625C77.9938 0.15625 78.1813 0.3125 78.3063 0.5625L80.3375 4.6875L84.9 5.34375C85.15 5.40625 85.3688 5.53125 85.525 5.71875C85.6813 5.9375 85.7438 6.15625 85.7438 6.40625C85.7438 6.65625 85.65 6.875 85.4625 7.0625L82.15 10.2812L82.9313 14.8438C82.9625 15.0938 82.9 15.3438 82.775 15.5625C82.65 15.7812 82.4625 15.9062 82.2125 15.9688C81.9625 16.0312 81.7125 16 81.4938 15.875L77.4 13.75L73.3063 15.875C73.0563 16 72.8375 16.0312 72.5875 15.9688C72.3375 15.9062 72.1188 15.7812 71.9938 15.5625C71.8688 15.3438 71.8063 15.0938 71.8688 14.8438L72.65 10.2812L69.3375 7.0625C69.15 6.875 69.025 6.65625 69.025 6.40625C69.025 6.15625 69.0875 5.9375 69.2438 5.71875C69.4 5.53125 69.6188 5.40625 69.9 5.34375L74.4625 4.6875L76.4938 0.5625ZM99.2937 0.5625C99.4187 0.3125 99.575 0.15625 99.825 0.0625C100.075 0 100.294 0 100.544 0.0625C100.794 0.15625 100.981 0.3125 101.106 0.5625L103.137 4.6875L107.7 5.34375C107.95 5.40625 108.169 5.53125 108.325 5.71875C108.481 5.9375 108.544 6.15625 108.544 6.40625C108.544 6.65625 108.45 6.875 108.262 7.0625L104.95 10.2812L105.731 14.8438C105.762 15.0938 105.7 15.3438 105.575 15.5625C105.45 15.7812 105.262 15.9062 105.012 15.9688C104.762 16.0312 104.512 16 104.294 15.875L100.2 13.75L96.1062 15.875C95.8562 16 95.6375 16.0312 95.3875 15.9688C95.1375 15.9062 94.9187 15.7812 94.7937 15.5625C94.6687 15.3438 94.6062 15.0938 94.6687 14.8438L95.45 10.2812L92.1375 7.0625C91.95 6.875 91.825 6.65625 91.825 6.40625C91.825 6.15625 91.8875 5.9375 92.0437 5.71875C92.2 5.53125 92.4187 5.40625 92.7 5.34375L97.2625 4.6875L99.2937 0.5625Z"
                fill="#FFCE1F"
              />
            </svg>
          </span>
          <p className="small-text m-0">
            {rating} ({reviews} reviews)
          </p>
        </div>
        <Card.Text className="small-text">
          <h6>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_601)">
                <path
                  d="M10 4.03906C13.8212 4.03906 17.2865 6.12968 19.8435 9.52541C20.0522 9.80361 20.0522 10.1923 19.8435 10.4705C17.2865 13.8703 13.8212 15.9609 10 15.9609C6.17879 15.9609 2.71351 13.8703 0.15649 10.4746C-0.0521622 10.1964 -0.0521622 9.8077 0.15649 9.5295C2.71351 6.12968 6.17879 4.03906 10 4.03906ZM9.72589 14.1976C12.2625 14.3572 14.3572 12.2665 14.1976 9.72588C14.0667 7.63117 12.3688 5.9333 10.2741 5.80238C7.73755 5.64283 5.64284 7.73345 5.80239 10.2741C5.9374 12.3647 7.63527 14.0626 9.72589 14.1976ZM9.85272 12.2584C11.2192 12.3443 12.3484 11.2192 12.2584 9.85271C12.1888 8.72353 11.2724 7.81118 10.1432 7.73754C8.77672 7.65162 7.64754 8.77671 7.73755 10.1432C7.81119 11.2765 8.72763 12.1888 9.85272 12.2584Z"
                  fill="#B5C3CB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_601">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(-1 0 0 1 20 0)"
                  />
                </clipPath>
              </defs>
            </svg>{" "}
            {students} students watched
          </h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TutorialCard;
