const paths = {
  airplane:'<path d="m2 15 8-3V4a2 2 0 0 1 4 0v8l8 3v3l-8-2v3l2 2v1l-4-1-4 1v-1l2-2v-3l-8 2z"/>',
  wifi:'<path d="M2 8c5.5-5 14.5-5 20 0M5 11.5c4-3.5 10-3.5 14 0M8.5 15c2-1.8 5-1.8 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/>',
  bluetooth:'<path d="M12 2v20l6-5-12-10m0 10L18 7l-6-5"/>',
  cellular:'<rect x="3" y="16" width="3" height="5" rx=".5" fill="currentColor" stroke="none"/><rect x="8" y="12" width="3" height="9" rx=".5" fill="currentColor" stroke="none"/><rect x="13" y="8" width="3" height="13" rx=".5" fill="currentColor" stroke="none"/><rect x="18" y="3" width="3" height="18" rx=".5" fill="currentColor" stroke="none"/>',
  hotspot:'<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><path d="M6.5 6.5a8 8 0 0 0 0 11m11-11a8 8 0 0 1 0 11M3.5 3.5a12 12 0 0 0 0 17m17-17a12 12 0 0 1 0 17"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 8-3 8-3 10h18c0-2-3-2-3-10ZM10 21h4"/>',
  moon:'<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z" fill="currentColor" stroke="none"/>',
  hourglass:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  gear:'<path d="M10.3 2.3h3.4l.55 2.1 1.5.62 1.9-1.05 2.4 2.4L19 8.3l.63 1.5 2.07.55v3.4l-2.07.55-.63 1.5 1.05 1.9-2.4 2.4-1.9-1.05-1.5.62-.55 2.1h-3.4l-.55-2.1-1.5-.62-1.9 1.05-2.4-2.4 1.05-1.9-.63-1.5-2.07-.55v-3.4l2.07-.55.63-1.5-1.05-1.9 2.4-2.4 1.9 1.05 1.5-.62z"/><circle cx="12" cy="12" r="3.2"/>',
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
  ,link:'<path d="M10 13a5 5 0 0 0 7.1 0l2.5-2.5a5 5 0 0 0-7.1-7.1L11 4.9M14 11a5 5 0 0 0-7.1 0l-2.5 2.5a5 5 0 0 0 7.1 7.1l1.5-1.5"/>',
  drive:'<path d="M3 18h18l-4-7H7zM8 7l4-4 4 4M12 3v11"/>',
  sim:'<path d="M6 2h8l4 4v16H6zM14 2v4h4M8 11h8M8 15h8"/>',
  storage:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 12h18M17 15h1"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M13 14h3"/>',
  game:'<path d="M7 8h10c2 0 3 1 4 4l1 5c.5 3-2 4-4 2l-3-3H9l-3 3c-2 2-4.5 1-4-2l1-5c1-3 2-4 4-4ZM6 12h5M8.5 9.5v5M16 11h.01M19 13h.01"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.app}</svg>`;
// Icons were extracted pixel for pixel from the supplied 3× screenshots.
// Source coordinates identify the corresponding standalone PNG assets.
const sprites={
 airplane:['0042',112,1510],wifi:['0042',112,1672],bluetooth:['0042',112,1834],cellular:['0042',112,1996],hotspot:['0042',112,2158],battery:['0042',112,2320],
 general:['0043',112,530],accessibility:['0043',112,692],camera:['0043',112,854],standby:['0043',112,1016],wallpaper:['0043',112,1178],display:['0043',112,1340],homescreen:['0043',112,1502],siri:['0043',112,1664],'search-settings':['0043',112,1826],control:['0043',112,1988],
 notifications:['0044',112,388],sounds:['0044',112,550],focus:['0044',112,712],screentime:['0044',112,874],faceid:['0044',112,1139],sos:['0044',112,1301],privacy:['0044',112,1463],gamecenter:['0044',112,1742],icloud:['0044',112,1911],wallet:['0044',112,2077],apps:['0044',112,2321],developer:['0045',112,2354],
 about:['0061',112,1162],software:['0061',112,1327],storage:['0061',112,1492],warranty:['0061',112,1754],airdrop:['0061',112,2032],airplay:['0061',112,2197],pip:['0061',112,2362],screenshots:['0061',112,2527],carplay:['0061',112,2692],
 keyboard:['0062',112,1446],controllers:['0062',112,1611],'background-refresh':['0062',112,1776],date:['0062',112,1941],language:['0062',112,2106],fonts:['0062',112,2271],dictionary:['0062',112,2436],'autofill-password':['0062',112,2601],
 'tv-provider':['0063',112,1376],vpn:['0063',112,1646],legal:['0063',112,1916],reset:['0063',112,2178],
 tiktok:['0052',112,1060],messenger:['0052',112,1293],facebook:['0052',112,1688],'system-services':['0052',112,1912],
 'hero-wifi':['0048',118,438],'hero-bluetooth':['0049',118,438],'hero-cellular':['0050',118,438],'hero-gear':['0061',118,438]
};
const spriteStyle=([file,x,y])=>`background-image:url('./assets/sprites/${file}-${x}-${y}.png');background-size:100% 100%;background-position:center`;
const item = (label, id, color, glyph, extra={}) => ({label,id,color,glyph,sprite:sprites[id],...extra});
const rootGroups = [
  [item('Chế độ máy bay','airplane','#ff9939','airplane',{type:'toggle'}),item('Wi-Fi','wifi','#0a84ff','wifi',{value:'Mạnh Vũ'}),item('Bluetooth','bluetooth','#0a84ff','bluetooth',{value:'Bật'}),item('Di động','cellular','#30c85a','cellular'),item('Điểm truy cập cá nhân','hotspot','#30c85a','link'),item('Pin','battery','#30c85a','battery')],
  [item('Cài đặt chung','general','#98989e','gear'),item('Trợ năng','accessibility','#0a84ff','accessibility'),item('Camera','camera','#8e8e93','camera'),item('Chế độ chờ','standby','#1c1c1e','screen'),item('Hình nền','wallpaper','#11add1','screen'),item('Màn hình & Độ sáng','display','#0a84ff','screen'),item('Màn hình chính & Thư viện ứng dụng','homescreen','#0a84ff','phone'),item('Siri','siri','#542aa0','globe'),item('Tìm kiếm','search-settings','#8e8e93','search'),item('Trung tâm điều khiển','control','#8e8e93','app')],
  [item('Thông báo','notifications','#ff3b48','bell'),item('Âm thanh & Cảm ứng','sounds','#ff2d55','sound'),item('Tập trung','focus','#5856d6','moon'),item('Thời gian sử dụng','screentime','#5856d6','hourglass')],
  [item('Face ID & Mật mã','faceid','#34c759','lock'),item('SOS khẩn cấp','sos','#ff3b30','heart'),item('Quyền riêng tư & Bảo mật','privacy','#007aff','privacy')],
  [item('Game Center','gamecenter','#999','app'),item('iCloud','icloud','#5aa0ed','globe'),item('Ví & Apple Pay','wallet','#222','wallet')],
  [item('Ứng dụng','apps','#5856d6','app')],
  [item('Nhà phát triển','developer','#8e8e93','app')]
];
const detailIcons={about:['phone','#a1a1a7'],software:['gear','#a1a1a7'],storage:['storage','#a1a1a7'],warranty:['heart','#fff'],airdrop:['wifi','#fff'],airplay:['screen','#0a84ff'],pip:['screen','#242427'],screenshots:['camera','#a1a1a7'],carplay:['game','#30c85a'],keyboard:['keyboard','#a1a1a7'],controllers:['game','#a1a1a7'],date:['calendar','#0a84ff'],language:['globe','#0a84ff'],fonts:['app','#a1a1a7'],dictionary:['app','#0a84ff'],wifi:['wifi','#0a84ff'],bluetooth:['bluetooth','#0a84ff'],hotspot:['link','#30c85a'],cellular:['cellular','#30c85a']};
const R=(label,id,extra={})=>({label,id,...(detailIcons[id]?{glyph:detailIcons[id][0],color:detailIcons[id][1]}:{}),sprite:sprites[id],...extra});
const pages={
  apple:{title:'Tài khoản Apple',groups:[{rows:[R('Thông tin cá nhân','personal-info'),R('Đăng nhập & Bảo mật','sign-in'),R('Thanh toán & Giao hàng','shipping'),R('Đăng ký','subscription')]},{rows:[R('iCloud','icloud',{value:'5 GB'}),R('Gia đình','family',{value:'Thiết lập'}),R('Tìm','find'),R('Phương tiện & Mục mua','purchases'),R('Đăng nhập bằng Apple','sign-in-apple')]},{rows:[R('iPhone','this-iphone',{subtitle:'iPhone 17 Pro Max này'}),R('iPhone của bạn','other-iphone',{subtitle:'iPhone SE'}),R('iPhone','third-iphone',{subtitle:'iPhone 16 Pro'})]},{rows:[R('Xác minh khóa liên hệ','contact-key',{value:'Tắt'})]},{rows:[R('Đăng xuất','signout',{accent:true})]}]},
  wifi:{title:'Wi-Fi',groups:[{rows:[R('Wi-Fi','wifi-enabled',{type:'toggle',default:true})]},{title:'MẠNG',rows:[R('Mạng Wi-Fi','network',{value:'Đã kết nối'}),R('Hỏi để kết nối mạng','ask-network',{value:'Thông báo'}),R('Tự động kết nối điểm truy cập','auto-hotspot',{value:'Hỏi để kết nối'})]}]},
  bluetooth:{title:'Bluetooth',groups:[{rows:[R('Bluetooth','bluetooth-enabled',{type:'toggle',default:true})],footer:'Thiết bị này có thể được phát hiện khi Bluetooth được bật.'},{title:'THIẾT BỊ CỦA TÔI',rows:[R('Chưa có thiết bị được kết nối','devices')]}]},
  cellular:{title:'Di động',groups:[{rows:[R('Dữ liệu di động','cellular-enabled',{type:'toggle',default:true}),R('Tùy chọn dữ liệu di động','data-options'),R('Điểm truy cập cá nhân','hotspot')]}]},
  hotspot:{title:'Điểm truy cập cá nhân',groups:[{rows:[R('Cho phép người khác kết nối','hotspot-enabled',{type:'toggle'})],footer:'Chỉ là giao diện mô phỏng. Tùy chọn này không bật điểm truy cập của iPhone.'}]},
  notifications:{title:'Thông báo',groups:[{rows:[R('Hiển thị bản xem trước','previews',{value:'Khi được mở khóa'}),R('Tóm tắt theo lịch trình','summary',{type:'toggle'}),R('Hiển thị dưới dạng','notification-style')]}]},
  sounds:{title:'Âm thanh & Cảm ứng',groups:[{title:'ÂM LƯỢNG CHUÔNG VÀ CẢNH BÁO',range:'volume'},{rows:[R('Thay đổi bằng nút','buttons-volume',{type:'toggle'}),R('Nhạc chuông','ringtone',{value:'Phản chiếu'}),R('Âm báo tin nhắn','text-tone',{value:'Ghi chú'})]}]},
  focus:{title:'Tập trung',groups:[{rows:[R('Không làm phiền','dnd',{type:'toggle'}),R('Ngủ','sleep',{type:'toggle'}),R('Cá nhân','personal',{type:'toggle'}),R('Làm việc','work',{type:'toggle'})]}]},
  screentime:{title:'Thời gian sử dụng',groups:[{rows:[R('Hoạt động ứng dụng & trang web','app-activity',{type:'toggle'}),R('Thời gian nghỉ','downtime'),R('Giới hạn ứng dụng','app-limits')]}]},
  general:{title:'Cài đặt chung',groups:[{rows:[R('Giới thiệu','about'),R('Cập nhật phần mềm','software'),R('Dung lượng iPhone','storage'),R('AirDrop','airdrop'),R('AirPlay & Thông suốt','airplay'),R('Hình trong hình','pip'),R('CarPlay','carplay')]},{rows:[R('Ngày & Giờ','date'),R('Bàn phím','keyboard'),R('Phông chữ','fonts'),R('Ngôn ngữ & Vùng','language'),R('Từ điển','dictionary'),R('Chuyển hoặc đặt lại iPhone','reset')]}]},
  about:{title:'Giới thiệu',groups:[{rows:[R('Tên','device-name',{value:'iPhone'}),R('Phiên bản iOS','ios-version',{value:'26.5.2'}),R('Tên máy','model-name',{value:'iPhone 17 Pro Max'}),R('Số máy','model-number',{value:'••••••••'}),R('Số sê-ri','serial',{value:'••••••••'})]},{rows:[R('Gói bảo hành đã hết hạn','warranty')]},{rows:[R('Lịch sử linh kiện & dịch vụ','parts')]},{rows:[R('Bài hát','songs',{value:'0'}),R('Video','videos',{value:'0'}),R('Ảnh','photos',{value:'71'}),R('Ứng dụng','application-count',{value:'19'}),R('Dung lượng','capacity',{value:'128 GB'}),R('Khả dụng','available',{value:'72,49 GB'})]},{rows:[R('Địa chỉ Wi-Fi','wifi-address',{value:'••:••:••:••:••:••'}),R('Bluetooth','bluetooth-address',{value:'••:••:••:••:••:••'}),R('Vi chương trình modem','firmware',{value:'4.51.04'}),R('SEID','seid'),R('EID','eid',{value:'••••••••••••••••'}),R('Khóa mạng','carrier-lock',{value:'Không giới hạn SIM'})]},{title:'SIM VẬT LÝ',rows:[R('Mạng','carrier-name',{value:'VinaPhone'}),R('Nhà cung cấp','carrier-version',{value:'VinaPhone 70.0'}),R('IMEI','imei',{value:'•• •••••• •••••• •'}),R('ICCID','iccid',{value:'••••••••••••••••••••'})]},{title:'SIM KHẢ DỤNG',rows:[R('IMEI2','imei2',{value:'•• •••••• •••••• •'})]},{rows:[R('Cài đặt tin cậy chứng nhận','trust')]}]},
  software:{title:'Cập nhật phần mềm',special:'update'},
  storage:{title:'Dung lượng iPhone',groups:[{rows:[R('Dung lượng','capacity',{value:'Mô phỏng'}),R('Khả dụng','available',{value:'—'})]}]},
  display:{title:'Màn hình & Độ sáng',groups:[{title:'GIAO DIỆN',rows:[R('Sáng','appearance-light',{type:'choice',group:'appearance'}),R('Tối','appearance-dark',{type:'choice',group:'appearance',default:true}),R('Tự động','appearance-auto',{type:'toggle'})]},{title:'ĐỘ SÁNG',range:'brightness'},{rows:[R('True Tone','true-tone',{type:'toggle',default:true}),R('Night Shift','night-shift'),R('Khóa tự động','auto-lock',{value:'30 giây'}),R('Nâng lên để bật','raise',{type:'toggle',default:true})]}]},
  battery:{title:'Pin',groups:[{rows:[R('Phần trăm pin','battery-percent',{type:'toggle',default:true}),R('Chế độ nguồn điện thấp','low-power',{type:'toggle'})]},{rows:[R('Tình trạng pin','battery-health'),R('Sạc','charging')]}]},
  privacy:{title:'Quyền riêng tư & Bảo mật',groups:[{rows:[R('Dịch vụ định vị','location'),R('Theo dõi','tracking'),R('Danh bạ','contacts'),R('Ảnh','photos-privacy'),R('Micro','mic'),R('Camera','camera-privacy')]},{rows:[R('Phân tích & Cải tiến','analytics'),R('Chế độ phong tỏa','lockdown')]}]},
  faceid:{title:'Face ID & Mật mã',groups:[{rows:[R('Mở khóa iPhone','unlock',{type:'toggle',default:true}),R('iTunes & App Store','face-store',{type:'toggle',default:true}),R('Tự động điền mật khẩu','autofill',{type:'toggle',default:true})]}]},
  apps:{title:'Ứng dụng',groups:[{rows:['App Store','Camera','Danh bạ','Ghi chú','Lịch','Safari','Tin nhắn','Điện thoại','Ảnh'].map(label=>R(label,'app-'+label))}]}
};
for(const g of pages.about.groups)for(const r of g.rows||[]){
 if(['model-name','songs','videos','photos','application-count','capacity','available','firmware','carrier-lock','carrier-name','carrier-version'].includes(r.id))r.plainValue=true;
 if(['model-number','serial','wifi-address','bluetooth-address','eid','imei','iccid','imei2'].includes(r.id))r.editable=true;
}
Object.assign(pages,{
 'wifi-network':{title:'Mạnh Vũ',groups:[{rows:[R('Tự động kết nối','auto-join',{type:'toggle',default:true}),R('Mật khẩu','network-password',{value:'••••••••',editable:true})]},{rows:[R('Địa chỉ Wi-Fi riêng tư','private-address',{value:'Cố định'}),R('Giới hạn theo dõi địa chỉ IP','limit-ip',{type:'toggle',default:true})]},{rows:[R('Định cấu hình IP','config-ip',{value:'Tự động'}),R('Định cấu hình DNS','config-dns',{value:'Tự động'}),R('HTTP Proxy','proxy',{value:'Tắt'})]}]},
 'data-options':{title:'Tùy chọn dữ liệu di động',groups:[{rows:[R('Chuyển vùng dữ liệu','roaming',{type:'toggle'}),R('Thoại & dữ liệu','voice-data',{value:'5G tự động'}),R('Chế độ dữ liệu','data-mode',{value:'Tiêu chuẩn'})]}]},
 'network-selection':{title:'Lựa chọn mạng',groups:[{rows:[R('Tự động','auto-network',{type:'toggle',default:true})]},{title:'MẠNG',rows:[R('VinaPhone','carrier-vn',{type:'choice',default:true})]}]},
 'battery-health':{title:'Tình trạng pin & Sạc',groups:[{rows:[R('Dung lượng tối đa','maximum-capacity',{value:'Chưa xác minh',plainValue:true}),R('Sạc pin được tối ưu hóa','optimized-charge',{type:'toggle',default:true})]}]},
 'icloud':{title:'iCloud',groups:[{rows:[R('Dung lượng iCloud','icloud-storage',{value:'5 GB'}),R('Ảnh','icloud-photos'),R('iCloud Drive','icloud-drive',{type:'toggle',default:true}),R('Sao lưu iCloud','icloud-backup',{type:'toggle',default:true})]}]},
 'ios-version':{title:'Phiên bản iOS',groups:[{rows:[R('iOS 26.5.2','ios-build',{value:'Bản mô phỏng'})]}]},
 'all-data':{title:'Dữ liệu di động',groups:[{rows:[R('TikTok','tiktok',{value:'482 MB'}),R('Messenger','messenger',{value:'244 MB'}),R('Điểm truy cập cá nhân','hotspot-usage',{value:'219 MB'}),R('Facebook','facebook',{value:'157 MB'}),R('Dịch vụ hệ thống','system-services',{value:'58,8 MB'}),R('Wi-Fi Assist','wifi-assist',{value:'570 KB'})]}]}
});
const state=(()=>{try{return JSON.parse(localStorage.getItem('ios-settings-demo')||'{}')}catch{return {}}})();
const save=()=>{try{localStorage.setItem('ios-settings-demo',JSON.stringify(state))}catch{}};
let stack=['root'];let scrollOffsets=[0],swipeCompleting=false; const viewport=document.getElementById('viewport');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function row(data,mode='detail'){
  const isToggle=data.type==='toggle', isChoice=data.type==='choice';
  const value=state[data.id]??data.default??false;
  const glyph=data.appIcon||data.glyph;
  const leading=data.sprite?`<span class="icon native-icon" style="${spriteStyle(data.sprite)}" aria-hidden="true"></span>`:glyph?`<span class="icon ${data.appIcon?'brand-'+data.appIcon:''}" style="background:${data.color||'#242429'}">${data.appIcon==='facebook'?'<b>f</b>':data.appIcon==='tiktok'?'<b>♪</b>':data.appIcon==='messenger'?'<b>ϟ</b>':icon(glyph)}</span>`:'';
  const display=data.editable?(state[data.id]?(data.id.includes('password')?'••••••••':state[data.id]):data.value):data.value;
  const trailing=isToggle?`<span class="switch ${value?'on':''}" aria-hidden="true"></span>`:isChoice?(value?'<span class="check">✓</span>':''):`${display?`<span class="row-trailing">${escapeHTML(display)}</span>`:''}${data.plainValue?'':'<span class="chevron"></span>'}`;
  const action=isToggle?'toggle':isChoice?'choice':data.editable?'edit':data.plainValue?'copy':'open';
  return `<button class="row ${leading?'':'plain'} ${data.subtitle?'two-line':''} ${data.accent?'accent':''}" data-id="${escapeHTML(data.id)}" data-action="${action}" ${data.plainValue?`data-value="${escapeHTML(data.value)}"`:''} ${isToggle?`role="switch" aria-checked="${!!value}"`:''}><span class="row-main">${leading}<span class="row-label">${escapeHTML(data.label)}${data.subtitle?`<small>${escapeHTML(data.subtitle)}</small>`:''}</span>${trailing}</span></button>`;
}
function group(g){return `<section class="group">${g.title?`<h2 class="group-title">${escapeHTML(g.title)}</h2>`:''}${g.range?`<div class="rows"><div class="range-wrap"><input type="range" min="0" max="100" value="${state[g.range]??(g.range==='brightness'?65:55)}" data-range="${g.range}" aria-label="${g.range==='brightness'?'Độ sáng':'Âm lượng'}"><div class="range-labels"><span>${g.range==='brightness'?'☀':'◖'}</span><span>${g.range==='brightness'?'☀':'◕'}</span></div></div></div>`:`<div class="rows">${g.rows.map(x=>row(x)).join('')}</div>`}${g.footer?`<p class="group-footer">${escapeHTML(g.footer)}</p>`:''}</section>`}
function rootPage(query=''){
  const search=`<div class="search-wrap"><label class="search">${icon('search')}<input id="search" type="search" placeholder="Tìm kiếm" autocomplete="off" value="${escapeHTML(query)}" aria-label="Tìm kiếm cài đặt"></label></div>`;
  if(query.trim()){
    const q=query.toLocaleLowerCase('vi').trim(); const matches=rootGroups.flat().filter(x=>x.label.toLocaleLowerCase('vi').includes(q));
    return `<div class="page root-page"><div class="compact-header">Cài đặt</div><h1 class="large-title">Cài đặt</h1>${search}<section class="group search-results"><div class="rows">${matches.map(x=>row(x)).join('')||'<div class="empty">Không tìm thấy kết quả</div>'}</div></section></div>`;
  }
  return `<div class="page root-page"><div class="compact-header">Cài đặt</div><h1 class="large-title">Cài đặt</h1>${search}<section class="group"><div class="rows account-card"><button class="row profile" data-id="apple" data-action="open"><span class="avatar native-avatar"></span><span><span class="profile-name">quan chuy dio</span><br><span class="profile-sub">Tài khoản Apple, iCloud, v.v.</span></span><span class="chevron"></span></button>${row(R('Dung Lượng iCloud Gần Đầy','icloud',{value:'❶'}))}</div></section><section class="group"><div class="rows">${row(R('Hoàn tất sửa chữa pin của bạn','battery-repair',{value:'❶'}))}${row(R('Hoàn tất sửa chữa camera của bạn','camera-repair',{value:'❶'}))}</div></section>${rootGroups.map(g=>group({rows:g})).join('')}<div class="footer-note">Giao diện mô phỏng</div></div>`;
}
const heroData={
 wifi:['wifi','#0a84ff','Wi-Fi','Kết nối vào Wi-Fi, xem các mạng khả dụng, cũng như quản lý cài đặt để kết nối mạng và điểm truy cập ở gần.'],
 bluetooth:['bluetooth','#0a84ff','Bluetooth','Kết nối với các phụ kiện mà bạn có thể sử dụng cùng những hoạt động như nghe nhạc, gọi điện thoại và chơi trò chơi.'],
 cellular:['cellular','#30c85a','Di động','Tìm hiểu xem bạn đang sử dụng bao nhiêu dữ liệu, đặt giới hạn dữ liệu, cùng quản lý các cài đặt cho nhà cung cấp và cuộc gọi Wi-Fi.'],
 hotspot:['link','#30c85a','Điểm truy cập cá nhân','Điểm truy cập cá nhân cho phép bạn chia sẻ kết nối internet di động từ iPhone của mình đến các thiết bị ở gần.'],
 general:['gear','#8e8e93','Cài đặt chung','Quản lý thiết lập và tùy chọn tổng thể của bạn cho iPhone, từ phiên bản cập nhật phần mềm, ngôn ngữ thiết bị, CarPlay, AirDrop, v.v.']
};
function hero(data){const sprite=sprites['hero-'+data[0]];return `<div class="hero-card"><div class="hero-icon ${sprite?'native-hero':''}" style="${sprite?spriteStyle(sprite):`background:${data[1]}`}">${sprite?'':icon(data[0])}</div><h1>${escapeHTML(data[2])}</h1><p>${escapeHTML(data[3])} <span>Tìm hiểu thêm...</span></p></div>`}
function detailContent(id,config){
 if(id==='wifi')return `${hero(heroData.wifi)}${group({rows:[R('Wi-Fi','wifi-enabled',{type:'toggle',default:true}),R('✓  Mạnh Vũ','wifi-network',{value:'ⓘ'})]})}<h2 class="inline-section-title">Mạng ⌁</h2>${group({rows:[R('Khác...','other-networks')]})}${group({rows:[R('Hỏi để kết nối mạng','ask-network',{value:'Thông báo'})],footer:'Các mạng đã biết sẽ được kết nối tự động. Nếu không có sẵn mạng đã biết nào, bạn sẽ được thông báo về các mạng có sẵn.'})}${group({rows:[R('Tự động kết nối điểm truy cập','auto-hotspot',{value:'Hỏi để kết nối'})]})}`;
 if(id==='bluetooth')return `${hero(heroData.bluetooth)}${group({rows:[R('Bluetooth','bluetooth-enabled',{type:'toggle',default:true})],footer:'Các thiết bị đã ghép nối với iPhone này có thể được tìm thấy ở đây.'})}<h2 class="inline-section-title">THIẾT BỊ CỦA TÔI</h2>${group({rows:[R('Xbox Wireless Controller','controller',{value:'Không kết nối'})]})}<h2 class="inline-section-title">CÁC THIẾT BỊ KHÁC ⌁</h2>`;
  if(id==='cellular')return `${hero(heroData.cellular)}${group({rows:[R('Dữ liệu di động','cellular-enabled',{type:'toggle',default:true}),R('Tùy chọn dữ liệu di động','data-options',{value:'Chuyển vùng: Tắt'}),R('Điểm truy cập cá nhân','hotspot',{value:'Bật'})],footer:'Tắt dữ liệu di động để truyền tất cả dữ liệu qua Wi-Fi, bao gồm email, duyệt web và thông báo đẩy.'})}<h2 class="inline-section-title">VinaPhone</h2>${group({rows:[R('Lựa chọn mạng','network-selection',{value:'VinaPhone'}),R('Số của tôi','my-number'),R('Cuộc gọi Wi-Fi','wifi-calling',{value:'Tắt'}),R('Cuộc gọi trên thiết bị khác','other-calls',{value:'Khi ở gần'}),R('Dịch vụ nhà cung cấp','carrier-services'),R('PIN của SIM','sim-pin'),R('Ứng dụng của SIM','sim-apps')]})}${group({rows:[R('Thêm eSIM','esim',{accent:true})]})}<h2 class="inline-section-title">DỮ LIỆU DI ĐỘNG</h2>${group({rows:[R('Đến hiện tại','current-data',{value:'1,33 GB',plainValue:true}),R('Chuyển vùng đến hiện tại','roaming-data',{value:'0 KB',plainValue:true}),R('TikTok','tiktok',{subtitle:'482 MB',type:'toggle',default:true,appIcon:'tiktok'}),R('Messenger','messenger',{subtitle:'244 MB',type:'toggle',default:true,appIcon:'messenger'}),R('Điểm truy cập cá nhân','hotspot-usage',{value:'219 MB',appIcon:'hotspot'}),R('Facebook','facebook',{subtitle:'157 MB',type:'toggle',default:true,appIcon:'facebook'}),R('Dịch vụ hệ thống','system-services',{value:'58,8 MB',appIcon:'gear'}),R('Hiển thị tất cả','all-data')]})}${group({rows:[R('Wi-Fi Assist','wifi-assist',{subtitle:'570 KB',type:'toggle',default:true})],footer:'Tự động sử dụng dữ liệu di động khi tín hiệu kết nối Wi-Fi kém.'})}${group({rows:[R('iCloud Drive','icloud-drive',{type:'toggle',default:true})],footer:'Sử dụng mạng di động để chuyển tài liệu và dữ liệu khi không có kết nối Wi-Fi.'})}${group({rows:[R('Sao lưu iCloud','icloud-backup',{type:'toggle',default:true})],footer:'Sử dụng mạng di động của bạn để tự động sao lưu vào iCloud khi không có kết nối Wi-Fi.'})}<h2 class="inline-section-title">THỜI GIAN GỌI</h2>${group({rows:[R('Đến hiện tại','calls-current',{value:'10 phút',plainValue:true}),R('Thời lượng','calls-lifetime',{value:'10 phút',plainValue:true})]})}<h2 class="inline-section-title">THỐNG KÊ SỬ DỤNG DI ĐỘNG</h2>${group({rows:[R('Bật thống kê sử dụng di động','usage-enabled',{type:'toggle',default:true}),R('Đặt lại số liệu thống kê','reset-usage',{accent:true})],footer:'Đặt lại sau cùng: 10:43 ngày 20 thg 9, 2026'})}`;
  if(id==='hotspot')return `${hero(heroData.hotspot)}${group({rows:[R('Cho phép người khác kết nối','hotspot-enabled',{type:'toggle',default:true}),R('Mật khẩu Wi-Fi','hotspot-password',{value:'••••••••',editable:true})],footer:'Cho phép người dùng hoặc thiết bị khác không được đăng nhập vào iCloud tìm kiếm mạng được chia sẻ “iPhone” khi bạn ở trong cài đặt Điểm truy cập cá nhân.'})}${group({rows:[R('Tăng tối đa khả năng tương thích','compatibility',{type:'toggle'})],footer:'Khi bật tùy chọn này, hiệu năng internet có thể bị giảm đối với các thiết bị được kết nối vào điểm truy cập của bạn.'})}${group({rows:[R('Sử dụng dữ liệu','hotspot-usage',{value:'219 MB'})]})}<div class="connection-help"><div>${icon('wifi')}<span><b>ĐỂ KẾT NỐI BẰNG WI-FI</b><br>Chọn “iPhone” từ cài đặt Wi-Fi trên máy tính hoặc thiết bị khác của bạn.</span></div><div>${icon('bluetooth')}<span><b>ĐỂ KẾT NỐI BẰNG BLUETOOTH</b><br>Ghép đôi iPhone với máy tính, sau đó kết nối qua Bluetooth.</span></div><div>${icon('link')}<span><b>ĐỂ KẾT NỐI BẰNG USB</b><br>Cắm iPhone vào máy tính và chọn kết nối mạng.</span></div></div>`;
 if(id==='general')return `${hero(heroData.general)}${group({rows:[R('Giới thiệu','about'),R('Cập nhật phần mềm','software'),R('Dung lượng iPhone','storage')]})}${group({rows:[R('AppleCare & Bảo hành','warranty')]})}${group({rows:[R('AirDrop','airdrop'),R('AirPlay & Thông suốt','airplay'),R('Hình trong hình','pip'),R('Chụp ảnh màn hình','screenshots'),R('CarPlay','carplay')]})}${group({rows:[R('Bàn phím','keyboard'),R('Bộ điều khiển trò chơi','controllers'),R('Làm mới ứng dụng trong nền','background-refresh'),R('Ngày & Giờ','date'),R('Ngôn ngữ & Vùng','language'),R('Phông chữ','fonts'),R('Từ điển','dictionary'),R('Tự động điền & Mật khẩu','autofill-password')]})}${group({rows:[R('Nhà cung cấp TV','tv-provider'),R('Quản lý VPN & thiết bị','vpn')]})}${group({rows:[R('Pháp lý & Quy định','legal'),R('Chuyển hoặc đặt lại iPhone','reset')]})}`;
  if(id==='battery')return `<div class="battery-summary"><div class="battery-percent">40<span>%</span></div><div class="battery-sub">Lần gần nhất sạc đến 100%: <span>06:47</span></div><div class="battery-track"><span></span></div></div><h2 class="inline-section-title">Sử dụng hàng ngày</h2><section class="group"><div class="battery-usage rows"><b>Hôm nay, bạn sử dụng nhiều pin hơn bình thường, tính đến 19:25.</b><div class="usage-stats"><span>Trung bình<strong>62%</strong></span><span>Hôm nay<strong>82%</strong></span></div><div class="battery-chart">${[0,0,34,74,62,67,55,39].map((h,i)=>`<div class="chart-col"><i style="height:${h}px;${i===7?'background:#ff9f38':''}"></i><small>${['T5','T6','T7','CN','T2','T3','T4','T5'][i]}</small></div>`).join('')}</div><p class="chart-key">● Cả ngày&nbsp;&nbsp; ● Hàng ngày, tính đến 19:25</p><h3>Ứng dụng và hoạt động hệ thống</h3>${[['eFootball™','Bật màn hình hơn 58ph','34%'],['Messenger','Bật màn hình: 7ph · Nền: 24ph','10%'],['Facebook','Bật màn hình: 8ph · Nền: 13ph','10%']].map(([name,sub,n],i)=>`<div class="battery-app"><span class="app-mark native-app" style="${spriteStyle([['0059',112,1981],['0059',112,2166],['0059',112,2412]][i])}"></span><span>${name}<small>${sub}</small></span><em>❕ ${n}</em><span class="chevron"></span></div>`).join('')}${row(R('Xem tất cả mức sử dụng pin','all-battery'))}</div></section>${group({rows:[R('Tình trạng pin & Sạc','battery-health',{value:'Chưa xác minh'}),R('Phần trăm pin','battery-percent',{type:'toggle'}),R('Chế độ nguồn điện thấp','low-power',{type:'toggle'})],footer:'iPhone sẽ tạm thời giảm một số hoạt động trong nền, tốc độ xử lý và độ sáng màn hình khi bật Chế độ nguồn điện thấp.'})}`;
 return `<h1 class="detail-title">${escapeHTML(config.title)}</h1>${(config.groups||[]).map(group).join('')}`;
}
function detailPage(id){
 const config=pages[id]||{title:labelFor(id),groups:[{rows:[R('Thông tin','info-'+id,{value:'Mô phỏng'})]}]};
 const nav=`<nav class="detail-nav"><button class="back" id="back" aria-label="Quay lại"></button><span>${escapeHTML(config.title)}</span></nav>`;
 if(config.special==='update')return `<div class="page detail-page">${nav}<div class="center-detail"><div class="hero-glyph">${icon('update')}</div><h2>iOS 26</h2><p>Trang này chỉ mô phỏng giao diện.</p></div></div>`;
 return `<div class="page detail-page">${nav}${id==='apple'?`<div class="apple-head"><span class="avatar native-avatar"></span><h1>quan chuy dio</h1><p>Tài khoản Apple</p></div>`:''}${detailContent(id,config)}</div>`;
}
function labelFor(id){const all=[...rootGroups.flat(),...Object.values(pages).flatMap(p=>p.groups?.flatMap(g=>g.rows||[])||[])];return all.find(x=>x.id===id)?.label||id.replace(/^app-/,'')}
function render(keepScroll=false,direction=''){
 const y=viewport.scrollTop, animated=!!direction&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.querySelector('.outgoing')?.remove();
 if(animated&&viewport.firstElementChild){const ghost=document.createElement('div');ghost.className='outgoing leave-'+direction;ghost.setAttribute('aria-hidden','true');const body=document.createElement('div');body.className='outgoing-inner';body.innerHTML=viewport.innerHTML;body.style.transform=`translateY(-${y}px)`;ghost.append(body);document.querySelector('.app').append(ghost);setTimeout(()=>ghost.remove(),450)}
 viewport.innerHTML=stack.at(-1)==='root'?rootPage():detailPage(stack.at(-1));viewport.scrollTop=keepScroll?y:0;
 document.body.classList.toggle('light',state['appearance-light']===true);document.querySelector('meta[name="theme-color"]').content=state['appearance-light']===true?'#f2f2f7':'#000000';
 if(animated){const page=viewport.firstElementChild;page.classList.add('enter-'+direction);page.addEventListener('animationend',()=>page.classList.remove('enter-'+direction),{once:true})}
 updateScrollHeader()
}
function openPage(id){scrollOffsets[stack.length-1]=viewport.scrollTop;stack.push(id);scrollOffsets.push(0);history.pushState({stack:[...stack]},'',`#${encodeURIComponent(id)}`);render(false,'forward')}
function back(){if(stack.length>1){scrollOffsets[stack.length-1]=viewport.scrollTop;history.back()}}
function showEdit(id){const title=labelFor(id),shell=document.createElement('div');shell.className='sheet-overlay';shell.innerHTML=`<div class="sheet-backdrop" data-close="1"></div><div class="sheet" role="dialog" aria-modal="true" aria-label="${escapeHTML(title)}"><div class="sheet-handle"></div><h2>${escapeHTML(title)}</h2><p>Giá trị này chỉ lưu trên thiết bị của bạn.</p><input type="text" id="sheet-value" placeholder="Nhập ${escapeHTML(title.toLowerCase())}" autocomplete="off" value="${escapeHTML(state[id]||'')}"><button type="button" id="sheet-save">Lưu</button><button type="button" data-close="1">Hủy</button></div>`;document.querySelector('.app').append(shell);shell.querySelector('input').focus();shell.addEventListener('click',e=>{if(e.target.closest('[data-close]'))shell.remove();if(e.target.id==='sheet-save'){state[id]=shell.querySelector('input').value;save();shell.remove();render(true)}})}
function toast(message){document.querySelector('.toast')?.remove();const el=document.createElement('div');el.className='toast';el.textContent=message;document.querySelector('.app').append(el);setTimeout(()=>el.remove(),1600)}
viewport.addEventListener('click',e=>{
  if(e.target.closest('#back'))return back();
  const el=e.target.closest('[data-action]');if(!el)return;
  const {id,action}=el.dataset;
  if(action==='open')return openPage(id);
  if(action==='edit')return showEdit(id);
  if(action==='copy'){navigator.clipboard?.writeText(el.dataset.value).then(()=>toast('Đã sao chép')).catch(()=>toast(el.dataset.value));return}
  if(action==='toggle'){state[id]=!(state[id]??findDefault(id));save();el.setAttribute('aria-checked',String(state[id]));el.querySelector('.switch')?.classList.toggle('on',state[id]);if(id==='wifi-enabled'||id==='bluetooth-enabled'||id==='cellular-enabled')setTimeout(()=>render(true),280);return}
  if(action==='choice'){state['appearance-light']=id==='appearance-light';state['appearance-dark']=id==='appearance-dark';save();render(true)}
});
function findDefault(id){for(const p of Object.values(pages))for(const g of p.groups||[])for(const r of g.rows||[])if(r.id===id)return !!r.default;return false}
viewport.addEventListener('input',e=>{
 if(e.target.id==='search'){const value=e.target.value; const selection=e.target.selectionStart; const y=viewport.scrollTop;viewport.innerHTML=rootPage(value);viewport.scrollTop=y;const input=document.getElementById('search');input.focus();input.setSelectionRange(selection,selection)}
 if(e.target.dataset.range){state[e.target.dataset.range]=Number(e.target.value);save()}
});
function updateScrollHeader(){viewport.firstElementChild?.classList.toggle('scrolled',viewport.scrollTop>75)}
viewport.addEventListener('scroll',updateScrollHeader,{passive:true});
let edgeGesture=null;
viewport.addEventListener('touchstart',e=>{if(stack.length>1&&e.touches.length===1&&e.touches[0].clientX<36&&!swipeCompleting)edgeGesture={x:e.touches[0].clientX,y:e.touches[0].clientY,active:false}},{passive:true});
viewport.addEventListener('touchmove',e=>{if(!edgeGesture)return;const dx=e.touches[0].clientX-edgeGesture.x,dy=e.touches[0].clientY-edgeGesture.y;if(dx>12&&dx>Math.abs(dy)*1.3){
 if(!edgeGesture.active){edgeGesture.active=true;document.querySelector('.outgoing')?.remove();const previous=stack.at(-2),under=document.createElement('div');under.className='swipe-under';const inner=document.createElement('div');inner.className='swipe-under-inner';inner.innerHTML=previous==='root'?rootPage():detailPage(previous);inner.style.transform=`translateY(-${scrollOffsets[stack.length-2]||0}px)`;under.append(inner);document.querySelector('.app').append(under);edgeGesture.under=under}
 const x=Math.min(dx,viewport.clientWidth);viewport.style.transition='none';viewport.style.transform=`translateX(${x}px)`;viewport.style.boxShadow='-18px 0 35px #0008';edgeGesture.under.style.transform=`translateX(${-25+x/viewport.clientWidth*25}%)`;e.preventDefault()
}},{passive:false});
viewport.addEventListener('touchend',e=>{if(!edgeGesture)return;const dx=e.changedTouches[0].clientX-edgeGesture.x,gesture=edgeGesture;edgeGesture=null;if(!gesture.active)return;const complete=dx>Math.min(90,viewport.clientWidth*.24);
 viewport.style.transition='transform .26s cubic-bezier(.2,.8,.2,1)';gesture.under.style.transition='transform .26s cubic-bezier(.2,.8,.2,1)';viewport.style.transform=complete?'translateX(100%)':'translateX(0)';gesture.under.style.transform=complete?'translateX(0)':'translateX(-25%)';
 setTimeout(()=>{if(complete){swipeCompleting=true;back()}else{viewport.style.transition='';viewport.style.transform='';viewport.style.boxShadow='';gesture.under.remove()}},260)
},{passive:true});
viewport.addEventListener('touchcancel',()=>{edgeGesture?.under?.remove();edgeGesture=null;viewport.style.transition='';viewport.style.transform='';viewport.style.boxShadow=''},{passive:true});
window.addEventListener('popstate',e=>{const previousLength=stack.length,wasSwipe=swipeCompleting;swipeCompleting=false;stack=e.state?.stack||['root'];if(stack.length<previousLength)scrollOffsets.length=stack.length;while(scrollOffsets.length<stack.length)scrollOffsets.push(0);viewport.style.transition='';viewport.style.transform='';viewport.style.boxShadow='';document.querySelector('.swipe-under')?.remove();render(false,wasSwipe?'':stack.length<previousLength?'back':'forward');viewport.scrollTop=scrollOffsets[stack.length-1]||0;updateScrollHeader()});
history.replaceState({stack:['root']},'',location.pathname+location.search);render();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
