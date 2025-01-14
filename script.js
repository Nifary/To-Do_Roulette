const roulette = document.querySelector('.roulette');
    const count = document.getElementById('pity')
    const txt = document.getElementById('texto')
    const spinButton = document.getElementById('spinButton');
    const cmt = document.getElementById('cmt')
    let counter = 0
    let counterNgocog = 0
    let counterNgoding = 0
    spinButton.addEventListener('click', () => {

      counter++
      txt.innerHTML = "......"

      count.innerHTML = counter + 'x'
      if (counter > 5 && counter <= 10) {
        cmt.innerHTML = "Spin terus aja bang, sampe dapet scroll FB"
      }
      else if (counter > 10) {
        cmt.innerHTML = "Yahaha belom dapet2 jg scroll FBnya, tandanya disuruh ngoding bang"
      }
      roulette.style = 'rotate(0deg)'

      setTimeout(() => {
        const randomAngle = Math.floor(Math.random() * 1800) + 720;

        roulette.style.transition = 'transform 3s ease-out';
        roulette.style.transform = `rotate(${randomAngle}deg)`;

        spinButton.style.display = "none"
        setTimeout(() => {
          nbt = randomAngle % 360
          if (nbt < 26) {
            cmt.innerHTML = " "
            counter = 0
            counterNgoding = 0
            counterNgocog = 0
            var result = 'Scroll FB'
            txt.innerHTML = "Mantap, lanjut " + result;
          } else if (
            nbt >= 26 && nbt < 180) {
            var result = 'Ngoding, Ngocog standing'
            counterNgocog++
            if (counterNgocog > 1) {
              txt.innerHTML = 'Ngocog lagi, Kocog terus batangnya bang'
            }
            else {
              txt.innerHTML = result
            }
          }
          else {
            counterNgoding++
            if (counterNgoding > 2) {
              txt.innerHTML = "Ngoding bang, ngoding. Males bener dah";
            } else {
              var result = 'Nyalakan PC mu, buka VSCode, Saatnya ngoding'
              txt.innerHTML = result;
            }

          }
        }, 3000)
      }, 0)
      setTimeout(() => {
        spinButton.style.display = "block"
      }, 4000);
    });