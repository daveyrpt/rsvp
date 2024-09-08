        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("slides");
            const dots = document.getElementsByClassName("dot");
            const textContainer = document.querySelector(".text-container");
            
            const textPositions = [
                { top: '60%', left: '50%', color: '#fff' },
                { top: '20%', left: '50%', color: '#21130d' },
                { top: '30%', left: '50%', color: '#C2185B' }
            ];
            
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            
            if (textContainer) {
                const position = textPositions[slideIndex - 1];
                textContainer.style.top = position.top;
                textContainer.style.left = position.left;
                textContainer.style.color = position.color;
            }
            
            setTimeout(showSlides, 5000);
        }