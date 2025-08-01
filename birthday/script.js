 function startSurprise() {
      const mailbox = document.getElementById('mailbox');
      const fullImage = document.getElementById('fullImage');

      // Show mailbox
      mailbox.classList.add('show');

      setTimeout(() => {
        mailbox.classList.remove('show');
        // Show image
        fullImage.classList.add('show');

        // Start flower rain
        createFlowerRain();
      }, 2000);
    }

    function createFlowerRain() {
      const numberOfFlowers = 20;
      for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(flower);

        setTimeout(() => {
          flower.remove();
        }, 6000);
      }

      setInterval(() => {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(flower);

        setTimeout(() => {
          flower.remove();
        }, 6000);
      }, 100);
    }