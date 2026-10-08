/* ===== ตั้งค่าเว็บ + รายการลิงก์ (แก้ไฟล์นี้ไฟล์เดียว) =====
   เพิ่มเว็บใหม่: คัดลอกบรรทัดใดบรรทัดหนึ่งแล้วแก้ name / url / icon
   - icon เป็นพาธในโฟลเดอร์ assets/icons/xxx.svg หรือลิงก์ https://...svg ก็ได้
   - ลำดับในรายการ = ลำดับที่แสดงบนหน้าเว็บ */
window.SOCIALHUB = {
  title: "SocialHub",
  subtitle: "ติดตามเราได้ทุกช่องทาง",
  footer: "",
  links: [
    { name: "Instagram", url: "https://www.instagram.com/yourname", icon: "assets/icons/instagram.svg" },
    { name: "Facebook",  url: "https://www.facebook.com/yourname",  icon: "assets/icons/facebook.svg" },
    { name: "Telegram",  url: "https://t.me/yourname",              icon: "assets/icons/telegram.svg" },
    { name: "Line",      url: "https://line.me/ti/p/~yourid",       icon: "assets/icons/line.svg" },
    { name: "GitHub",    url: "https://github.com/yourname",        icon: "assets/icons/github.svg" },
    { name: "TikTok",    url: "https://www.tiktok.com/@yourname",   icon: "assets/icons/tiktok.svg" },
    { name: "YouTube",   url: "https://www.youtube.com/@yourname",  icon: "assets/icons/youtube.svg" }
  ]
};
