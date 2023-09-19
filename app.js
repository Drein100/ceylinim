const anniversaryDate = new Date("2023-02-01");
        
        function calculateTimeSinceAnniversary() {
            const now = new Date();
            const timeDifference = now - anniversaryDate;
            const seconds = Math.floor(timeDifference / 1000) % 60;
            const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
            const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            document.getElementById("result").innerText = `${days} gün.. \n ${hours} saat.. \n ${minutes} dakika.. \n ${seconds} saniye..`;
        }
        calculateTimeSinceAnniversary();
        setInterval(calculateTimeSinceAnniversary, 1000);

        const modal = document.getElementById('myModal');
        const openModalButtons = document.querySelectorAll('.open-modal');
        const closeModalButtons = document.querySelectorAll('.modal-close');
        let targetLink = null;
      
        function toggleModal() {
          modal.classList.toggle('hidden');
        }
      
        openModalButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            targetLink = e.currentTarget.href;
            toggleModal();
          });
        });
      
        closeModalButtons.forEach(button => {
          button.addEventListener('click', toggleModal);
        });
      
  
      
        // "Eminim" butonuna tıklandığında belirtilen linki açma işlemi
        const confirmBtn = document.getElementById('confirmBtn');
        confirmBtn.addEventListener('click', () => {
          window.location.href = targetLink;
        });

        