const paths = {
  airplane:'<path d="m2 15 8-3V4a2 2 0 0 1 4 0v8l8 3v3l-8-2v3l2 2v1l-4-1-4 1v-1l2-2v-3l-8 2z"/>',
  wifi:'<path d="M2 8c5.5-5 14.5-5 20 0M5 11.5c4-3.5 10-3.5 14 0M8.5 15c2-1.8 5-1.8 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/>',
  bluetooth:'<path d="M12 2v20l6-5-12-10m0 10L18 7l-6-5"/>',
  cellular:'<rect x="3" y="16" width="3" height="5" rx=".5" fill="currentColor" stroke="none"/><rect x="8" y="12" width="3" height="9" rx=".5" fill="currentColor" stroke="none"/><rect x="13" y="8" width="3" height="13" rx=".5" fill="currentColor" stroke="none"/><rect x="18" y="3" width="3" height="18" rx=".5" fill="currentColor" stroke="none"/>',
  hotspot:'<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><path d="M6.5 6.5a8 8 0 0 0 0 11m11-11a8 8 0 0 1 0 11M3.5 3.5a12 12 0 0 0 0 17m17-17a12 12 0 0 1 0 17"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 8-3 8-3 10h18c0-2-3-2-3-10ZM10 21h4"/>',
  moon:'<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z" fill="currentColor" stroke="none"/>',
  hourglass:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  gear:'<path d="M10.2 2h3.6l.5 2.3 1.6.7 2-.9 2.6 2.6-.9 2  .7 1.6L22 10.8v3.5l-2.4.5-.7 1.6.9 2-2.6 2.6-2-.9-1.6.7-.5 2.2h-3.6l-.5-2.2-1.6-.7-2 .9-2.6-2.6.9-2-.7-1.6-2.2-.5v-3.5l2.2-.5.7-1.6-.9-2 2.6-2.6 2 .9 1.6-.7z" fill="currentColor" stroke="none"/><circle cx="12" cy="12.5" r="3" fill="#8e8e93" stroke="none"/>',
  screen:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>',
  sound:'<path d="M4 9v6h4l5 4V5L8 9H4Zm12-1a5 5 0 0 1 0 8m2-11a9 9 0 0 1 0 14"/>',
  lock:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  battery:'<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4M10 8l-2 5h4l-2 4"/>',
  hand:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  camera:'<rect x="2" y="6" width="20" height="15" rx="3"/><circle cx="12" cy="13.5" r="4"/><path d="M7 6l1-3h8l1 3"/>',
  app:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18"/>',
  heart:'<path d="M12 21S3 15 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12Z"/>',
  privacy:'<path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
  wallet:'<rect x="2" y="5" width="20" height="16" rx="3"/><path d="M2 9h20M16 14h3"/>',
  accessibility:'<circle cx="12" cy="4" r="2"/><path d="M3 9h18m-9 0v5m0 0-5 7m5-7 5 7"/>',
  update:'<path d="M20 12a8 8 0 1 1-2.5-5.8M20 3v5h-5"/>',
  keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M5 9h.01M9 9h.01M13 9h.01M17 9h.01M5 13h.01M9 13h.01M13 13h.01M17 13h.01M7 16h10"/>',
  about:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 19h2"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.app}</svg>`;
const item = (label, id, color, glyph, extra={}) => ({label,id,color,glyph,...extra});
const rootGroups = [
  [item('Chế độ máy bay','airplane','#ff9500','airplane',{type:'toggle'}),item('Wi-Fi','wifi','#007aff','wifi',{value:'Đã kết nối'}),item('Bluetooth','bluetooth','#007aff','bluetooth',{value:'Bật'}),item('Di động','cellular','#34c759','cellular'),item('Điểm truy cập cá nhân','hotspot','#34c759','hotspot')],
  [item('Thông báo','notifications','#ff3b30','bell'),item('Âm thanh & Cảm ứng','sounds','#ff2d55','sound'),item('Tập trung','focus','#5856d6','moon'),item('Thời gian sử dụng','screentime','#5856d6','hourglass')],
  [item('Cài đặt chung','general','#8e8e93','gear'),item('Trung tâm điều khiển','control','#8e8e93','app'),item('Màn hình & Độ sáng','display','#007aff','screen'),item('Màn hình chính & Thư viện ứng dụng','homescreen','#4f9cee','app'),item('Trợ năng','accessibility','#007aff','accessibility'),item('Hình nền','wallpaper','#31b46b','screen'),item('Chế độ chờ','standby','#262626','phone'),item('Siri','siri','#863cff','globe')],
  [item('Face ID & Mật mã','faceid','#33a8df','lock'),item('SOS khẩn cấp','sos','#ff3b30','heart'),item('Pin','battery','#34c759','battery'),item('Quyền riêng tư & Bảo mật','privacy','#007aff','privacy')],
  [item('App Store','appstore','#007aff','app'),item('Ví & Apple Pay','wallet','#111','wallet'),item('Ứng dụng','apps','#8e8e93','app')]
];
const R=(label,id,extra={})=>({label,id,...extra});
const pages={
  apple:{title:'Tài khoản Apple',groups:[{rows:[R('Đăng nhập vào iPhone','sign-in'),R('iCloud','icloud'),R('Phương tiện & Mục mua','purchases')]}]},
  wifi:{title:'Wi-Fi',groups:[{rows:[R('Wi-Fi','wifi-enabled',{type:'toggle',default:true})]},{title:'MẠNG',rows:[R('Mạng Wi-Fi','network',{value:'Đã kết nối'}),R('Hỏi để kết nối mạng','ask-network',{value:'Thông báo'}),R('Tự động kết nối điểm truy cập','auto-hotspot',{value:'Hỏi để kết nối'})]}]},
  bluetooth:{title:'Bluetooth',groups:[{rows:[R('Bluetooth','bluetooth-enabled',{type:'toggle',default:true})],footer:'Thiết bị này có thể được phát hiện khi Bluetooth được bật.'},{title:'THIẾT BỊ CỦA TÔI',rows:[R('Chưa có thiết bị được kết nối','devices')]}]},
  cellular:{title:'Di động',groups:[{rows:[R('Dữ liệu di động','cellular-enabled',{type:'toggle',default:true}),R('Tùy chọn dữ liệu di động','data-options'),R('Điểm truy cập cá nhân','hotspot')]}]},
  hotspot:{title:'Điểm truy cập cá nhân',groups:[{rows:[R('Cho phép người khác kết nối','hotspot-enabled',{type:'toggle'})],footer:'Chỉ là giao diện mô phỏng. Tùy chọn này không bật điểm truy cập của iPhone.'}]},
  notifications:{title:'Thông báo',groups:[{rows:[R('Hiển thị bản xem trước','previews',{value:'Khi được mở khóa'}),R('Tóm tắt theo lịch trình','summary',{type:'toggle'}),R('Hiển thị dưới dạng','notification-style')]}]},
  sounds:{title:'Âm thanh & Cảm ứng',groups:[{title:'ÂM LƯỢNG CHUÔNG VÀ CẢNH BÁO',range:'volume'},{rows:[R('Thay đổi bằng nút','buttons-volume',{type:'toggle'}),R('Nhạc chuông','ringtone',{value:'Phản chiếu'}),R('Âm báo tin nhắn','text-tone',{value:'Ghi chú'})]}]},
  focus:{title:'Tập trung',groups:[{rows:[R('Không làm phiền','dnd',{type:'toggle'}),R('Ngủ','sleep',{type:'toggle'}),R('Cá nhân','personal',{type:'toggle'}),R('Làm việc','work',{type:'toggle'})]}]},
  screentime:{title:'Thời gian sử dụng',groups:[{rows:[R('Hoạt động ứng dụng & trang web','app-activity',{type:'toggle'}),R('Thời gian nghỉ','downtime'),R('Giới hạn ứng dụng','app-limits')]}]},
  general:{title:'Cài đặt chung',groups:[{rows:[R('Giới thiệu','about'),R('Cập nhật phần mềm','software'),R('Dung lượng iPhone','storage'),R('AirDrop','airdrop'),R('AirPlay & Thông suốt','airplay'),R('Hình trong hình','pip'),R('CarPlay','carplay')]},{rows:[R('Ngày & Giờ','date'),R('Bàn phím','keyboard'),R('Phông chữ','fonts'),R('Ngôn ngữ & Vùng','language'),R('Từ điển','dictionary'),R('Chuyển hoặc đặt lại iPhone','reset')]}]},
  about:{title:'Giới thiệu',groups:[{rows:[R('Tên','device-name',{value:'iPhone'}),R('Phiên bản iOS','ios-version',{value:'26'}),R('Tên kiểu máy','model-name',{value:'iPhone 17 Pro Max'}),R('Số máy','model-number',{value:'Mô phỏng'})]},{rows:[R('Bài hát','songs',{value:'—'}),R('Video','videos',{value:'—'}),R('Ảnh','photos',{value:'—'}),R('Ứng dụng','application-count',{value:'—'})]}]},
  software:{title:'Cập nhật phần mềm',special:'update'},
  storage:{title:'Dung lượng iPhone',groups:[{rows:[R('Dung lượng','capacity',{value:'Mô phỏng'}),R('Khả dụng','available',{value:'—'})]}]},
  display:{title:'Màn hình & Độ sáng',groups:[{title:'GIAO DIỆN',rows:[R('Sáng','appearance-light',{type:'choice',group:'appearance',default:true}),R('Tối','appearance-dark',{type:'choice',group:'appearance'}),R('Tự động','appearance-auto',{type:'toggle'})]},{title:'ĐỘ SÁNG',range:'brightness'},{rows:[R('True Tone','true-tone',{type:'toggle',default:true}),R('Night Shift','night-shift'),R('Khóa tự động','auto-lock',{value:'30 giây'}),R('Nâng lên để bật','raise',{type:'toggle',default:true})]}]},
  battery:{title:'Pin',groups:[{rows:[R('Phần trăm pin','battery-percent',{type:'toggle',default:true}),R('Chế độ nguồn điện thấp','low-power',{type:'toggle'})]},{rows:[R('Tình trạng pin','battery-health'),R('Sạc','charging')]}]},
  privacy:{title:'Quyền riêng tư & Bảo mật',groups:[{rows:[R('Dịch vụ định vị','location'),R('Theo dõi','tracking'),R('Danh bạ','contacts'),R('Ảnh','photos-privacy'),R('Micro','mic'),R('Camera','camera-privacy')]},{rows:[R('Phân tích & Cải tiến','analytics'),R('Chế độ phong tỏa','lockdown')]}]},
  faceid:{title:'Face ID & Mật mã',groups:[{rows:[R('Mở khóa iPhone','unlock',{type:'toggle',default:true}),R('iTunes & App Store','face-store',{type:'toggle',default:true}),R('Tự động điền mật khẩu','autofill',{type:'toggle',default:true})]}]},
  apps:{title:'Ứng dụng',groups:[{rows:['App Store','Camera','Danh bạ','Ghi chú','Lịch','Safari','Tin nhắn','Điện thoại','Ảnh'].map(label=>R(label,'app-'+label))}]}
};
const state=(()=>{try{return JSON.parse(localStorage.getItem('ios-settings-demo')||'{}')}catch{return {}}})();
const save=()=>{try{localStorage.setItem('ios-settings-demo',JSON.stringify(state))}catch{}};
let stack=['root']; const viewport=document.getElementById('viewport');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function row(data,mode='detail'){
  const isToggle=data.type==='toggle', isChoice=data.type==='choice';
  const value=state[data.id]??data.default??false;
  const leading=data.glyph?`<span class="icon" style="background:${data.color}">${icon(data.glyph)}</span>`:'';
  const trailing=isToggle?`<span class="switch ${value?'on':''}" aria-hidden="true"></span>`:isChoice?(value?'<span class="check">✓</span>':''):`${data.value?`<span class="row-trailing">${escapeHTML(data.value)}</span>`:''}<span class="chevron"></span>`;
  return `<button class="row ${leading?'':'plain'}" data-id="${escapeHTML(data.id)}" data-action="${isToggle?'toggle':isChoice?'choice':'open'}" ${isToggle?`role="switch" aria-checked="${!!value}"`:''}><span class="row-main">${leading}<span class="row-label">${escapeHTML(data.label)}</span>${trailing}</span></button>`;
}
function group(g){return `<section class="group">${g.title?`<h2 class="group-title">${escapeHTML(g.title)}</h2>`:''}${g.range?`<div class="rows"><div class="range-wrap"><input type="range" min="0" max="100" value="${state[g.range]??(g.range==='brightness'?65:55)}" data-range="${g.range}" aria-label="${g.range==='brightness'?'Độ sáng':'Âm lượng'}"><div class="range-labels"><span>${g.range==='brightness'?'☀':'◖'}</span><span>${g.range==='brightness'?'☀':'◕'}</span></div></div></div>`:`<div class="rows">${g.rows.map(x=>row(x)).join('')}</div>`}${g.footer?`<p class="group-footer">${escapeHTML(g.footer)}</p>`:''}</section>`}
function rootPage(query=''){
  const search=`<div class="search-wrap"><label class="search">${icon('search')}<input id="search" type="search" placeholder="Tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" aria-label="Tìm kiếm cài đặt"></label></div>`;
  if(query.trim()){
    const q=query.toLocaleLowerCase('vi').trim(); const matches=rootGroups.flat().filter(x=>x.label.toLocaleLowerCase('vi').includes(q));
    return `<div class="page"><h1 class="large-title">Cài đặt</h1>${search}<section class="group search-results"><div class="rows">${matches.map(x=>row(x)).join('')||'<div class="empty">Không tìm thấy kết quả</div>'}</div></section></div>`;
  }
  return `<div class="page"><h1 class="large-title">Cài đặt</h1>${search}<section class="group"><div class="rows"><button class="row profile" data-id="apple" data-action="open"><span class="avatar"><svg viewBox="0 0 50 50"><circle cx="25" cy="17" r="9"/><path d="M8 43c1-12 10-17 17-17s16 5 17 17z"/></svg></span><span><span class="profile-name">Đăng nhập vào iPhone</span><br><span class="profile-sub">Thiết lập tài khoản Apple, iCloud và hơn thế nữa</span></span><span class="chevron"></span></button></div></section>${rootGroups.map(g=>group({rows:g})).join('')}<div class="footer-note">Giao diện mô phỏng · Các thay đổi chỉ lưu trong trang này</div></div>`;
}
function detailPage(id){
 const config=pages[id]||{title:labelFor(id),groups:[{rows:[R('Thông tin','info-'+id,{value:'Mô phỏng'})]}]};
 const prev=stack.length>1?(pages[stack[stack.length-2]]?.title||'Cài đặt'):'Cài đặt';
 const nav=`<nav class="detail-nav"><button class="back" id="back" aria-label="Quay lại"><span>${escapeHTML(prev)}</span></button><span>${escapeHTML(config.title)}</span></nav>`;
 if(config.special==='update')return `<div class="page">${nav}<h1 class="detail-title">Cập nhật phần mềm</h1><div class="center-detail"><div class="hero-glyph">${icon('update')}</div><h2>iOS 26</h2><p>Trang mô phỏng không thể kiểm tra bản cập nhật iOS.</p></div></div>`;
 return `<div class="page">${nav}<h1 class="detail-title">${escapeHTML(config.title)}</h1>${config.groups.map(group).join('')}<div class="note">Các điều khiển trong trang chỉ mô phỏng giao diện, không thay đổi cài đặt của iPhone.</div></div>`;
}
function labelFor(id){const all=[...rootGroups.flat(),...Object.values(pages).flatMap(p=>p.groups?.flatMap(g=>g.rows||[])||[])];return all.find(x=>x.id===id)?.label||id.replace(/^app-/,'')}
function render(keepScroll=false){const y=viewport.scrollTop;viewport.innerHTML=stack.at(-1)==='root'?rootPage():detailPage(stack.at(-1));viewport.scrollTop=keepScroll?y:0;document.body.classList.toggle('dark',state['appearance-dark']===true);document.querySelector('meta[name="theme-color"]').content=state['appearance-dark']===true?'#000000':'#f2f2f7'}
function openPage(id){stack.push(id);history.pushState({stack:[...stack]},'',`#${encodeURIComponent(id)}`);render()}
function back(){if(stack.length>1)history.back()}
viewport.addEventListener('click',e=>{
  if(e.target.closest('#back'))return back();
  const el=e.target.closest('[data-action]');if(!el)return;
  const {id,action}=el.dataset;
  if(action==='open')return openPage(id);
  if(action==='toggle'){state[id]=!(state[id]??findDefault(id));save();render(true)}
  if(action==='choice'){state['appearance-light']=id==='appearance-light';state['appearance-dark']=id==='appearance-dark';save();render(true)}
});
function findDefault(id){for(const p of Object.values(pages))for(const g of p.groups||[])for(const r of g.rows||[])if(r.id===id)return !!r.default;return false}
viewport.addEventListener('input',e=>{
 if(e.target.id==='search'){const value=e.target.value; const selection=e.target.selectionStart; const y=viewport.scrollTop;viewport.innerHTML=rootPage(value);viewport.scrollTop=y;const input=document.getElementById('search');input.focus();input.setSelectionRange(selection,selection)}
 if(e.target.dataset.range){state[e.target.dataset.range]=Number(e.target.value);save()}
});
window.addEventListener('popstate',e=>{stack=e.state?.stack||['root'];render()});
const clock=document.getElementById('clock');function updateClock(){const d=new Date();clock.textContent=`${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`};updateClock();setInterval(updateClock,30000);
history.replaceState({stack:['root']},'',location.pathname+location.search);render();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
