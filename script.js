onload = () => {
  // Tìm các phần tử cần thiết
  const giftContainer = document.getElementById('gift-container');
  const giftLayer = document.getElementById('gift-layer');
  const message = document.querySelector('.message');
  
  // Xử lý sự kiện click vào hộp quà
  giftContainer.addEventListener('click', () => {
      // 1. Ẩn lớp hộp quà
      giftLayer.style.opacity = '0';
      
      // Đợi 1s cho hiệu ứng mờ dần (transition CSS) rồi mới ẩn hẳn và chạy hoa
      setTimeout(() => {
          giftLayer.style.display = 'none';
          
          // 2. Bắt đầu chạy hiệu ứng hoa (bằng cách xóa class not-loaded)
          document.body.classList.remove("not-loaded");
          
          // 3. Hẹn giờ hiện lời chúc sau khi hoa nở (tầm 6s sau)
          setTimeout(() => {
              if(message) {
                  message.style.opacity = 1;
              }
          }, 6000);
          
      }, 1000);
  });
};