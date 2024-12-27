const messages = [
  "Nhớ nhớ nhớ em!"
];

const heartButton = document.getElementById('heart-button');  // Khởi tạo nút trái tim
const button = document.getElementById('button');
const backgroundMusic = document.getElementById("backgroundMusic");
button.addEventListener("click", () => {
  backgroundMusic.play();
});
function generateRandomNotifications() {
  const notificationCount = 200;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = ` 
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn ngập bộ</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);

      // Chỉ hiển thị nút trái tim khi các thông báo đã được tạo ra
      if (i === notificationCount - 1) {
        heartButton.style.display = 'inline';  // Đảm bảo nút trái tim xuất hiện sau khi tất cả thông báo đã được tạo
      }
      if (i === notificationCount - 1) {
        console.log('Tạo xong thông báo, hiển thị nút trái tim');
        heartButton.style.display = 'inline';
      }
      
    }, i * 100);  // Tạo thông báo sau mỗi 200ms
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});
