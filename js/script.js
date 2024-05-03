document.addEventListener("DOMContentLoaded", function() {
    // Background images for each button
    const backgroundImages = {
        1: 'url(assets/HG_1.jpg)',
        2: 'url(assets/HG_2.jpg)',
        3: 'url(assets/HG_3.jpg)',
        4: 'url(assets/HG_4.jpg)'
    };

    // Style configurations for each button
    const buttonStyles = {
        1: { border: '0.5vw solid #FFD742', color: '#FFD742' }, // for Blue
        2: { border: '0.5vw solid #814182', color: '#814182' }, // for Grey
        3: { border: '0.5vw solid #0D3880', color: '#0D3880' }, // for Red
        4: { border: '0.5vw solid #DF063A', color: '#DF063A' }  // for Green
    };

    // Function to set active elements and styles
    function setActive(activeIndex) {
        console.log(`Button ${activeIndex} clicked`); // Debugging log
        const desButton = document.querySelector('.des-button');
        document.querySelector('.expander-background').style.backgroundImage = backgroundImages[activeIndex];
        desButton.style.border = buttonStyles[activeIndex].border;
        desButton.style.color = buttonStyles[activeIndex].color;
        desButton.style.stroke = buttonStyles[activeIndex].color;

        ['slogan', 'car', 'text'].forEach(type => {
            for (let i = 1; i <= 4; i++) {
                document.getElementById(`${type}-${i}`).style.display = (i === activeIndex) ? 'block' : 'none';
            }
        });
    }

    // Adding event listeners to each button
    ['btn-blue', 'btn-grey', 'btn-red', 'btn-green'].forEach((buttonId, index) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() { setActive(index + 1); });
            console.log(`Event listener attached to ${buttonId}`);
        } else {
            console.log(`Error: Button not found - ${buttonId}`);
        }
    });
});
