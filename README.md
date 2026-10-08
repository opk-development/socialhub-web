# socialhub-web

หน้ารวมลิงก์โซเชียล เบา เร็ว ไม่มี dependency (HTML + CSS + JavaScript ล้วน)

## เพิ่มเว็บใหม่
1. วางไฟล์ไอคอน `.svg` ใน `assets/icons/` (หรือใช้ลิงก์ https://...svg ตรงๆ)
2. เปิด `src/links.js` แล้วเพิ่มบรรทัด:
   `{ name: "ชื่อ", url: "https://...", icon: "assets/icons/ชื่อ.svg" }`

## เผยแพร่บน GitHub Pages
Push โปรเจกต์ขึ้น repo → Settings → Pages → Deploy from a branch → `main` / `(root)`

## โครงสร้าง
```
index.html
src/        style.css, links.js (ตั้งค่า), app.js
assets/     buttons/ icons/ images/ vectors/
```
