import React from "react";

function About(props) {
  return (
    <>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                <b>About FlipTxt</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
              
Welcome to our versatile online text transformation tool! Our website provides a user-friendly platform for effortless text manipulation. Whether you need to convert text to uppercase, lowercase, copy it, clear it, or perform various other transformations, we've got you covered. Easily convert your text to uppercase with a single click. Perfect for when you need to make your text stand out or comply with certain formatting requirements
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                About FlipTxt
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
               Lowercase Conversion: Transform your text to lowercase effortlessly. Ideal for creating a more casual or consistent look in your content.
<br />
Copy Text Functionality: Copying text has never been simpler. Our intuitive interface allows you to duplicate your transformed text with just one click, saving you time and effort.
<br />
Clear Text Option: Start fresh with our clear text option. Quickly remove all content from the input area to begin a new transformation or input.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                About FlipTxt
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}>
                User-Friendly Interface: Our website features a clean and user-friendly interface, ensuring a seamless experience for users of all levels of technical expertise.
<br />
Responsive Design: Access our text transformation tool from any device, whether it's a desktop, tablet, or smartphone. Our responsive design ensures a consistent and enjoyable user experience across various platforms.
<br />
Fast and Efficient: Enjoy quick and efficient text transformations without any delays. Our website is designed to deliver speedy results, enhancing your productivity.
<br />
Secure and Private: Rest easy knowing that your text transformations are secure and private. We prioritize the confidentiality of your content and do not store any data beyond the duration of your session.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
