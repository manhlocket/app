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
  'action-button':'<path d="M2 12h8m-3-3 3 3-3 3M12.5 21V7a5 5 0 0 1 5-5H22"/>',
  update:'<path d="M20 12a8 8 0 1 1-2.5-5.8M20 3v5h-5"/>',
  keyboard:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M5 9h.01M9 9h.01M13 9h.01M17 9h.01M5 13h.01M9 13h.01M13 13h.01M17 13h.01M7 16h10"/>',
  about:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 19h2"/>',
  'id-card':'<rect x="2.5" y="3" width="19" height="18" rx="2" fill="currentColor" stroke="none"/><circle cx="9" cy="10" r="2" stroke="#888"/><path d="M5.5 16c.6-2 5.9-2 6.6 0M15 8h4M15 12h4M15 16h4" stroke="#888"/>',
  'plus-circle':'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
  family:'<circle cx="8" cy="9" r="3" fill="#37a5fb" stroke="none"/><circle cx="16" cy="9" r="3" fill="#44da90" stroke="none"/><path d="M3 19c0-6 10-6 10 0m-2 0c0-6 10-6 10 0" stroke="#8680ee" stroke-width="3"/>',
  find:'<circle cx="12" cy="12" r="9" stroke="#40d075" stroke-width="3"/><circle cx="12" cy="12" r="5" stroke="#08a6ef" stroke-width="3"/><circle cx="12" cy="12" r="2" fill="#1873da" stroke="none"/>',
  'app-store':'<path d="M8 3l10 17M16 3 6 20M4 15h16" stroke-width="2.7"/>',
  'apple-logo':'<path d="M16.7 7.1c-2.1-.3-2.8.8-4.2.8s-2.1-1-4-.8C4.7 8 3.8 12 5.1 16.1c1 2.9 2.4 5 4.3 5 1.3 0 1.9-.8 3.4-.8 1.5 0 2.1.8 3.4.8 1.8 0 3.1-2.1 4.1-4.4-3.2-1.6-3.3-6-.4-7.7-.7-.8-2.1-1.4-3.2-1.4ZM12.8 6.4c-.1-2.3 1.7-4 4-4.4.2 2-1.4 4-4 4.4Z" fill="#000" stroke="none"/>',
  windows:'<path d="M2 3 11 2v9H2zm11-1L22 1v10h-9zM2 13h9v9l-9-1zm11 0h9v10l-9-1z" fill="#00a4ef" stroke="none"/>'
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
 notifications:['0044',112,388],sounds:['0044',112,550],focus:['0044',112,712],screentime:['0044',112,874],faceid:['0044',112,1139],sos:['0044',112,1301],privacy:['0044',112,1463],gamecenter:['0044',113,1730],icloud:['0044',113,1892],wallet:['0044',113,2054],apps:['0044',112,2321],developer:['0045',112,2354],
 about:['0061',112,1162],software:['0061',112,1327],storage:['0061',112,1492],warranty:['0061',112,1754],airdrop:['0061',112,2032],airplay:['0061',112,2197],pip:['0061',112,2362],screenshots:['0061',112,2527],carplay:['0061',112,2692],
 keyboard:['0062',112,1446],controllers:['0062',112,1611],'background-refresh':['0062',112,1776],date:['0062',112,1941],language:['0062',112,2106],fonts:['0062',112,2271],dictionary:['0062',112,2436],'autofill-password':['0062',112,2601],
 'tv-provider':['0063',112,1376],vpn:['0063',112,1646],legal:['0063',112,1916],reset:['0063',112,2178],
 tiktok:['0052',112,1060],messenger:['0052',112,1293],facebook:['0052',112,1688],'system-services':['0052',112,1912],
 'hero-wifi':['0048',118,438],'hero-bluetooth':['0049',118,438],'hero-cellular':['0050',118,438],'hero-gear':['0061',118,438]
};
const spriteUrl=([file,x,y])=>`./assets/sprites/${file}-${x}-${y}.png`;
const spriteStyle=sprite=>`background-image:url('${spriteUrl(sprite)}');background-size:100% 100%;background-position:center`;
const screenshotIcon=(file,y)=>({file,y});
const item = (label, id, color, glyph, extra={}) => ({label,id,color,glyph,sprite:sprites[id],...extra});
const rootGroups = [
  [item('Chế độ máy bay','airplane','#ff9939','airplane',{type:'toggle'}),item('Wi-Fi','wifi','#0a84ff','wifi',{value:'Mạnh Vũ'}),item('Bluetooth','bluetooth','#0a84ff','bluetooth',{value:'Bật'}),item('Di động','cellular','#30c85a','cellular'),item('Điểm truy cập cá nhân','hotspot','#30c85a','link'),item('Pin','battery','#30c85a','battery')],
  [item('Cài đặt chung','general','#98989e','gear'),item('Trợ năng','accessibility','#0a84ff','accessibility'),item('Apple Intelligence & Siri','siri','#242429','intelligence',{sprite:null,referenceIcon:true}),item('Camera','camera','#8e8e93','camera'),item('Chế độ chờ','standby','#1c1c1e','screen'),item('Hình nền','wallpaper','#11add1','screen'),item('Màn hình & Độ sáng','display','#0a84ff','screen'),item('Màn hình chính & Thư viện ứng dụng','homescreen','#0a84ff','phone'),item('Nút Tác vụ','action-button','#0a84ff','action-button'),item('Tìm kiếm','search-settings','#8e8e93','search'),item('Trung tâm điều khiển','control','#8e8e93','app')],
  [item('Thông báo','notifications','#ff3b48','bell'),item('Âm thanh & Cảm ứng','sounds','#ff2d55','sound'),item('Tập trung','focus','#5856d6','moon'),item('Thời gian sử dụng','screentime','#5856d6','hourglass')],
  [item('Face ID & Mật mã','faceid','#34c759','lock'),item('SOS khẩn cấp','sos','#ff3b30','heart'),item('Quyền riêng tư & Bảo mật','privacy','#007aff','privacy')],
  [item('Game Center','gamecenter','#999','app'),item('iCloud','icloud','#5aa0ed','globe'),item('Ví & Apple Pay','wallet','#222','wallet')],
  [item('Ứng dụng','apps','#5856d6','app')],
  [item('Nhà phát triển','developer','#8e8e93','app')]
];
const detailIcons={about:['phone','#a1a1a7'],software:['gear','#a1a1a7'],storage:['storage','#a1a1a7'],warranty:['heart','#fff'],airdrop:['wifi','#fff'],airplay:['screen','#0a84ff'],pip:['screen','#242427'],screenshots:['camera','#a1a1a7'],carplay:['game','#30c85a'],keyboard:['keyboard','#a1a1a7'],controllers:['game','#a1a1a7'],date:['calendar','#0a84ff'],language:['globe','#0a84ff'],fonts:['app','#a1a1a7'],dictionary:['app','#0a84ff'],wifi:['wifi','#0a84ff'],bluetooth:['bluetooth','#0a84ff'],hotspot:['link','#30c85a'],cellular:['cellular','#30c85a']};
const R=(label,id,extra={})=>({label,id,...(detailIcons[id]?{glyph:detailIcons[id][0],color:detailIcons[id][1]}:{}),sprite:sprites[id],...extra});
const S=(label,id,file,y,extra={})=>R(label,id,{...extra,shot:screenshotIcon(file,y)});
const pages={
  apple:{title:'Tài khoản Apple',groups:[{rows:[R('Thông tin cá nhân','personal-info',{glyph:'id-card',color:'#a1a1a7'}),R('Đăng nhập & Bảo mật','sign-in',{glyph:'privacy',color:'#a1a1a7'}),R('Thanh toán & Giao hàng','shipping',{glyph:'wallet',color:'#a1a1a7'}),R('Đăng ký','subscription',{glyph:'plus-circle',color:'#a1a1a7'})]},{rows:[R('iCloud','icloud',{value:'50 GB'}),R('Gia đình','family',{glyph:'family',color:'#fff',value:'Thiết lập'}),R('Tìm','find',{glyph:'find',color:'#fff'}),R('Phương tiện & Mục mua','purchases',{glyph:'app-store',color:'#0a84ff'}),R('Đăng nhập bằng Apple','sign-in-apple',{glyph:'apple-logo',color:'#fff'})]},{rows:[R('oe oe','this-iphone',{glyph:'phone',color:'#243c7b',subtitle:'iPhone 16 Pro này'}),R('iPhone','other-iphone',{glyph:'phone',color:'#243c7b',subtitle:'iPhone 14 Pro Max'}),R('iPhone (2)','third-iphone',{glyph:'phone',color:'#476c7d',subtitle:'iPhone X'}),R('Windows','windows',{glyph:'windows',color:'#252525',subtitle:'Windows'})]},{rows:[R('Xác minh khóa liên hệ','contact-key',{glyph:'privacy',color:'#a1a1a7',value:'Tắt'})]},{rows:[R('Đăng xuất','signout',{accent:true})]}]},
  wifi:{title:'Wi-Fi',groups:[{rows:[R('Wi-Fi','wifi-enabled',{type:'toggle',default:true})]},{title:'MẠNG',rows:[R('Mạng Wi-Fi','network',{value:'Đã kết nối'}),R('Hỏi để kết nối mạng','ask-network',{value:'Thông báo'}),R('Tự động kết nối điểm truy cập','auto-hotspot',{value:'Hỏi để kết nối'})]}]},
  bluetooth:{title:'Bluetooth',groups:[{rows:[R('Bluetooth','bluetooth-enabled',{type:'toggle',default:true})],footer:'Thiết bị này có thể được phát hiện khi Bluetooth được bật.'},{title:'THIẾT BỊ CỦA TÔI',rows:[R('Chưa có thiết bị được kết nối','devices')]}]},
  cellular:{title:'Di động',groups:[{rows:[R('Dữ liệu di động','cellular-enabled',{type:'toggle',default:true}),R('Tùy chọn dữ liệu di động','data-options'),R('Điểm truy cập cá nhân','hotspot')]}]},
  hotspot:{title:'Điểm truy cập cá nhân',groups:[{rows:[R('Cho phép người khác kết nối','hotspot-enabled',{type:'toggle'})],footer:'Chỉ là giao diện mô phỏng. Tùy chọn này không bật điểm truy cập của iPhone.'}]},
  notifications:{title:'Thông báo',groups:[{rows:[R('Hiển thị bản xem trước','previews',{value:'Khi được mở khóa'}),R('Tóm tắt theo lịch trình','summary',{type:'toggle'}),R('Hiển thị dưới dạng','notification-style')]}]},
  sounds:{title:'Âm thanh & Cảm ứng',groups:[{title:'ÂM LƯỢNG CHUÔNG VÀ CẢNH BÁO',range:'volume'},{rows:[R('Thay đổi bằng nút','buttons-volume',{type:'toggle'}),R('Nhạc chuông','ringtone',{value:'Phản chiếu'}),R('Âm báo tin nhắn','text-tone',{value:'Ghi chú'})]}]},
  focus:{title:'Tập trung',groups:[{rows:[R('Không làm phiền','dnd',{type:'toggle'}),R('Ngủ','sleep',{type:'toggle'}),R('Cá nhân','personal',{type:'toggle'}),R('Làm việc','work',{type:'toggle'})]}]},
  screentime:{title:'Thời gian sử dụng',groups:[{rows:[R('Hoạt động ứng dụng & trang web','app-activity',{type:'toggle'}),R('Thời gian nghỉ','downtime'),R('Giới hạn ứng dụng','app-limits')]}]},
  general:{title:'Cài đặt chung',groups:[{rows:[R('Giới thiệu','about'),R('Cập nhật phần mềm','software'),R('Dung lượng iPhone','storage'),R('AirDrop','airdrop'),R('AirPlay & Thông suốt','airplay'),R('Hình trong hình','pip'),R('CarPlay','carplay')]},{rows:[R('Ngày & Giờ','date'),R('Bàn phím','keyboard'),R('Phông chữ','fonts'),R('Ngôn ngữ & Vùng','language'),R('Từ điển','dictionary'),R('Chuyển hoặc đặt lại iPhone','reset')]}]},
  about:{title:'Giới thiệu',groups:[{rows:[R('Tên','device-name',{value:'oe oe'}),R('Phiên bản iOS','ios-version',{value:'26.6'}),R('Tên máy','model-name',{value:'iPhone 16 Pro'}),R('Số máy','model-number',{value:'MYMC3LL/A'}),R('Số sê-ri','serial',{value:'DK0FKGV6C1'})]},{rows:[R('Bài hát','songs',{value:'0'}),R('Video','videos',{value:'319'}),R('Ảnh','photos',{value:'3.932'}),R('Ứng dụng','application-count',{value:'49'}),R('Dung lượng','capacity',{value:'128 GB'}),R('Khả dụng','available',{value:'30,94 GB'})]},{rows:[R('Địa chỉ Wi-Fi','wifi-address',{value:'74:42:18:7F:D2:AC'}),R('Bluetooth','bluetooth-address',{value:'74:42:18:77:38:56'}),R('Vi chương trình modem','firmware',{value:'2.70.01'}),R('SEID','seid'),R('EID','eid',{value:'89049032007408885100201704913267',subtitle:'89049032007408885100201704913267'}),R('Khóa mạng','carrier-lock',{value:'Không giới hạn SIM'})]},{title:'eSIM',rows:[R('Mạng','carrier-name',{value:'Viettel'}),R('Nhà cung cấp','carrier-version',{value:'Viettel 70.0'}),R('IMEI2','imei2',{value:'35 890660 205481 5'}),R('ICCID','iccid',{value:'89840480009419250637'})]},{title:'SIM khả dụng',rows:[R('IMEI','imei',{value:'35 890660 213525 9'})]},{rows:[R('Cài đặt tin cậy chứng nhận','trust')]}]},
  software:{title:'Cập nhật phần mềm',special:'update'},
  storage:{title:'Dung lượng iPhone',groups:[{rows:[R('Dung lượng','capacity',{value:'Mô phỏng'}),R('Khả dụng','available',{value:'—'})]}]},
  display:{title:'Màn hình & Độ sáng',groups:[{title:'GIAO DIỆN',rows:[R('Sáng','appearance-light',{type:'choice',group:'appearance'}),R('Tối','appearance-dark',{type:'choice',group:'appearance',default:true}),R('Tự động','appearance-auto',{type:'toggle'})]},{title:'ĐỘ SÁNG',range:'brightness'},{rows:[R('True Tone','true-tone',{type:'toggle',default:true}),R('Night Shift','night-shift'),R('Khóa tự động','auto-lock',{value:'30 giây'}),R('Nâng lên để bật','raise',{type:'toggle',default:true})]}]},
  battery:{title:'Pin',groups:[{rows:[R('Phần trăm pin','battery-percent',{type:'toggle',default:true}),R('Chế độ nguồn điện thấp','low-power',{type:'toggle'})]},{rows:[R('Tình trạng pin','battery-health'),R('Sạc','charging')]}]},
  privacy:{title:'Quyền riêng tư & Bảo mật',groups:[{rows:[R('Dịch vụ định vị','location'),R('Theo dõi','tracking'),R('Danh bạ','contacts'),R('Ảnh','photos-privacy'),R('Micro','mic'),R('Camera','camera-privacy')]},{rows:[R('Phân tích & Cải tiến','analytics'),R('Chế độ phong tỏa','lockdown')]}]},
  faceid:{title:'Face ID & Mật mã',groups:[{rows:[R('Mở khóa iPhone','unlock',{type:'toggle',default:true}),R('iTunes & App Store','face-store',{type:'toggle',default:true}),R('Tự động điền mật khẩu','autofill',{type:'toggle',default:true})]}]},
  apps:{title:'Ứng dụng',groups:[{rows:['App Store','Camera','Danh bạ','Ghi chú','Lịch','Safari','Tin nhắn','Điện thoại','Ảnh'].map(label=>R(label,'app-'+label))}]}
};
Object.assign(pages,{
 accessibility:{title:'Trợ năng',groups:[
  {title:'Nhìn',rows:[S('VoiceOver','voiceover',4035,1306,{value:'Tắt'}),S('Thu phóng','zoom',4035,1471,{value:'Tắt'}),S('Phóng to văn bản','large-text',4035,1636,{value:'Tắt'}),S('Màn hình & Cỡ chữ','text-display',4035,1801),S('Chuyển động','motion',4035,1966),S('Đọc & Nói','spoken-content',4035,2131),S('Mô tả âm thanh','audio-descriptions',4035,2296,{value:'Tắt'})]},
  {title:'Thể chất và Vận động',rows:[S('Cảm ứng','touch',4036,595),S('Face ID & Sự chú ý','attention',4036,760),S('Điều khiển công tắc','switch-control',4036,925,{value:'Tắt'}),S('Khẩu lệnh','voice-control',4036,1090,{value:'Tắt'}),S('Theo dõi mắt','eye-tracking',4036,1255,{value:'Tắt'}),S('Theo dõi đầu','head-tracking',4036,1420,{value:'Tắt'}),S('Nút sườn','side-button',4036,1585),S('Điều khiển camera','camera-control',4036,1750),S('Điều khiển thiết bị ở gần','nearby-device-control',4036,1915)]},
  {title:'Nghe',rows:[S('Thiết bị nghe','hearing-devices',4037,540),S('Trung tâm điều khiển Nghe','hearing-control',4037,705),S('Nhận biết âm thanh','sound-recognition',4037,870,{value:'Tắt'}),S('Âm thanh & Hình ảnh','audio-visual',4037,1035),S('Phụ đề & Chú thích','subtitles',4037,1200),S('Chú thích trực tiếp','live-captions',4037,1365),S('Cảm ứng nhạc','music-haptics',4037,1530,{value:'Tắt'})]},
  {title:'Lời nói',rows:[S('Lời nói trực tiếp','live-speech',4037,1861,{value:'Tắt'}),S('Giọng nói cá nhân','personal-voice',4037,2026),S('Phím tắt giọng nói','vocal-shortcuts',4037,2191,{value:'Tắt'})]},
  {title:'Phụ kiện',rows:[S('Bàn phím & Nhập liệu','keyboards-input',4038,798),S('Apple TV Remote','apple-tv-remote',4038,963),S('AirPods','airpods',4038,1128)]},
  {title:'Cài đặt chung',rows:[S('Truy cập được hướng dẫn','guided-access',4038,1624,{value:'Tắt'}),S('Truy cập được hỗ trợ','assistive-access',4038,1789),S('Siri','accessibility-siri',4038,1954),S('Phím tắt trợ năng','accessibility-shortcut',4038,2119,{value:'Thiết bị nghe MFi'}),S('Cài đặt theo ứng dụng','per-app-settings',4038,2284),S('Chia sẻ cài đặt Trợ năng','share-accessibility',4038,2449)]}
 ]},
 siri:{title:'Apple Intelligence & Siri',groups:[
  {title:'Yêu cầu Siri',rows:[R('Ngôn ngữ','siri-language',{value:'Tiếng Việt'}),R('Nói với Siri','talk-to-siri'),R('Cho phép Siri khi bị khóa','siri-locked',{type:'toggle',default:true}),R('Giọng nói','siri-voice',{value:'Tiếng Việt (Giọng nói 1)'}),R('Phản hồi của Siri','siri-responses'),R('Gác máy cuộc gọi','hang-up',{value:'Tắt'}),R('Thông báo cuộc gọi','announce-calls'),R('Đọc thông báo','announce-notifications'),R('Nhắn tin bằng Siri','message-siri'),R('Lịch sử Siri & Đọc chính tả','siri-history'),R('Thông tin của tôi','my-siri-info',{value:'Đỗ Viết Mạnh'})],footer:'Dữ liệu nhập bằng giọng nói được xử lý trên iPhone, nhưng bản chép lại các yêu cầu của bạn được gửi đến Apple. Siri & Quyền riêng tư...'},
  {title:'Gợi ý',rows:[R('Gợi ý ứng dụng trước khi tìm kiếm','suggest-apps',{type:'toggle',default:true}),R('Đặt lại các gợi ý bị ẩn','reset-suggestions',{accent:true}),R('Cho phép thông báo','siri-notifications',{type:'toggle',default:true}),R('Trong Thư viện ứng dụng','siri-app-library',{type:'toggle',default:true}),R('Hiển thị khi đang chia sẻ','siri-sharing',{type:'toggle',default:true}),R('Hiển thị các gợi ý nghe','siri-listening',{type:'toggle',default:true})],footer:'Apple có thể đưa ra các gợi ý trong Tìm kiếm, trên Màn hình chính và Màn hình khóa, khi chia sẻ hoặc khi bạn có thể muốn nghe phương tiện.'},
  {title:'Apple Intelligence và Quyền truy cập ứng dụng của Siri',rows:[S('Ứng dụng thu nhỏ','app-clips',4041,1943),R('Ứng dụng','apps')],footer:'Apple Intelligence được xây dựng cho quyền riêng tư. Dữ liệu của bạn không được chia sẻ với Apple. Apple Intelligence & Quyền riêng tư...'}
 ]}
});
for(const g of pages.about.groups)for(const r of g.rows||[]){
 if(['model-name','model-number','serial','songs','videos','photos','application-count','capacity','available','wifi-address','bluetooth-address','firmware','eid','carrier-lock','carrier-name','carrier-version','imei','imei2','iccid'].includes(r.id))r.plainValue=true;
 if(r.value!==undefined||r.id==='seid')r.editable=true;
}
Object.assign(pages,{
 'wifi-network':{title:'Mạnh Vũ',groups:[{rows:[R('Tự động kết nối','auto-join',{type:'toggle',default:true}),R('Mật khẩu','network-password',{value:'••••••••',editable:true})]},{rows:[R('Địa chỉ Wi-Fi riêng tư','private-address',{value:'Cố định'}),R('Giới hạn theo dõi địa chỉ IP','limit-ip',{type:'toggle',default:true})]},{rows:[R('Định cấu hình IP','config-ip',{value:'Tự động'}),R('Định cấu hình DNS','config-dns',{value:'Tự động'}),R('HTTP Proxy','proxy',{value:'Tắt'})]}]},
 'data-options':{title:'Tùy chọn dữ liệu di động',groups:[{rows:[R('Chuyển vùng dữ liệu','roaming',{type:'toggle'}),R('Thoại & dữ liệu','voice-data',{value:'5G tự động'}),R('Chế độ dữ liệu','data-mode',{value:'Tiêu chuẩn'})]}]},
 'network-selection':{title:'Lựa chọn mạng',groups:[{rows:[R('Tự động','auto-network',{type:'toggle',default:true})]},{title:'MẠNG',rows:[R('VinaPhone','carrier-vn',{type:'choice',default:true})]}]},
 'battery-health':{title:'Tình trạng pin & Sạc',groups:[{rows:[R('Dung lượng tối đa','maximum-capacity',{value:'Chưa xác minh',plainValue:true}),R('Sạc pin được tối ưu hóa','optimized-charge',{type:'toggle',default:true})]}]},
 'icloud':{title:'iCloud',groups:[{rows:[R('Dung lượng iCloud','icloud-storage',{value:'50 GB'}),R('Ảnh','icloud-photos'),R('iCloud Drive','icloud-drive',{type:'toggle',default:true}),R('Sao lưu iCloud','icloud-backup',{type:'toggle',default:true})]}]},
 'ios-version':{title:'Phiên bản iOS',groups:[{rows:[R('iOS 26.6','ios-build',{value:'Bản mô phỏng'})]}]},
 'all-data':{title:'Dữ liệu di động',groups:[{rows:[R('TikTok','tiktok',{value:'482 MB'}),R('Messenger','messenger',{value:'244 MB'}),R('Điểm truy cập cá nhân','hotspot-usage',{value:'219 MB'}),R('Facebook','facebook',{value:'157 MB'}),R('Dịch vụ hệ thống','system-services',{value:'58,8 MB'}),R('Wi-Fi Assist','wifi-assist',{value:'570 KB'})]}]}
});
const state=(()=>{try{return JSON.parse(localStorage.getItem('ios-settings-demo')||'{}')}catch{return {}}})();
const save=()=>{try{localStorage.setItem('ios-settings-demo',JSON.stringify(state))}catch{}};
let stack=['root'];let scrollOffsets=[0],swipeCompleting=false; const viewport=document.getElementById('viewport');
const searchDock=document.getElementById('search-dock');
searchDock.innerHTML=`<label class="search">${icon('search')}<input id="search" type="search" placeholder="Tìm kiếm" autocomplete="off" aria-label="Tìm kiếm cài đặt"></label>`;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const accountName=()=>state.accountName||'quan chuy dio';
const accountDisplayName=()=>state.accountDisplayName||'Đỗ Viết Mạnh';
const accountEmail=()=>state.accountEmail||'dovietmanh2006@gmail.com';
const accountAvatar=()=>/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(state.accountAvatar||'')?state.accountAvatar:'';
const avatarMarkup=className=>accountAvatar()?`<img class="avatar ${className}" src="${accountAvatar()}" alt="" draggable="false">`:`<span class="avatar ${className}">${className==='account-initials'?'DM':''}</span>`;
function liquidSwitch(on){return `<span class="switch liquid-switch ${on?'on':''}" style="--thumb-x:${on?'20px':'0px'};--liquid-progress:${on?'100%':'0%'}" aria-hidden="true"><span class="lt-indicator"></span><span class="lt-knockout"><span class="lt-indicator--masked"><span class="lt-mask"></span></span></span><span class="lt-wrapper"><span class="lt-liquids"><span class="lt-liquid__shadow"></span><span class="lt-liquid__track"></span></span></span><span class="lt-knob"><span class="lt-knob__shadow"></span><span class="lt-knob__cover"></span></span></span>`}
function row(data,mode='detail'){
  const isToggle=data.type==='toggle', isChoice=data.type==='choice';
  const value=state[data.id]??data.default??false;
  const glyph=data.appIcon||data.glyph;
  const leading=data.shot?`<span class="icon screenshot-icon" style="background-image:url('./assets/reference-${data.shot.file}.png');background-position:-30px -${(data.shot.y/3).toFixed(2)}px" aria-hidden="true"></span>`:data.referenceIcon?'<span class="icon intelligence-reference" aria-hidden="true"></span>':data.sprite?`<img class="icon native-icon" src="${spriteUrl(data.sprite)}" alt="" draggable="false">`:glyph?`<span class="icon ${data.appIcon?'brand-'+data.appIcon:''}" style="background:${data.color||'#242429'}">${data.appIcon==='facebook'?'<b>f</b>':data.appIcon==='tiktok'?'<b>♪</b>':data.appIcon==='messenger'?'<b>ϟ</b>':icon(glyph)}</span>`:'';
  const display=data.editable?(state[data.id]?(data.id.includes('password')?'••••••••':state[data.id]):data.value):data.value;
  const subtitle=data.id==='eid'?(state.eid??data.subtitle):data.subtitle;
  const trailing=isToggle?liquidSwitch(!!value):isChoice?(value?'<span class="check">✓</span>':''):`${display?`<span class="row-trailing">${escapeHTML(display)}</span>`:''}${data.plainValue?'':'<span class="chevron"></span>'}`;
  const action=isToggle?'toggle':isChoice?'choice':data.editable?'edit':data.plainValue?'copy':'open';
  return `<button class="row ${leading?'':'plain'} ${subtitle?'two-line':''} ${data.accent?'accent':''}" data-id="${escapeHTML(data.id)}" data-action="${action}" ${data.plainValue?`data-value="${escapeHTML(data.value)}"`:''} ${isToggle?`role="switch" aria-checked="${!!value}"`:''}><span class="row-main">${leading}<span class="row-label">${escapeHTML(data.label)}${subtitle?`<small>${escapeHTML(subtitle)}</small>`:''}</span>${trailing}</span></button>`;
}
function group(g){return `<section class="group">${g.title?`<h2 class="group-title">${escapeHTML(g.title)}</h2>`:''}${g.range?`<div class="rows"><div class="range-wrap"><input type="range" min="0" max="100" value="${state[g.range]??(g.range==='brightness'?65:55)}" data-range="${g.range}" aria-label="${g.range==='brightness'?'Độ sáng':'Âm lượng'}"><div class="range-labels"><span>${g.range==='brightness'?'☀':'◖'}</span><span>${g.range==='brightness'?'☀':'◕'}</span></div></div></div>`:`<div class="rows">${g.rows.map(x=>row(x)).join('')}</div>`}${g.footer?`<p class="group-footer">${escapeHTML(g.footer)}</p>`:''}</section>`}
function rootPage(query=''){
  if(query.trim()){
    const q=query.toLocaleLowerCase('vi').trim(); const matches=rootGroups.flat().filter(x=>x.label.toLocaleLowerCase('vi').includes(q));
    return `<div class="page root-page"><div class="compact-header">Cài đặt</div><h1 class="large-title">Cài đặt</h1><section class="group search-results"><div class="rows">${matches.map(x=>row(x)).join('')||'<div class="empty">Không tìm thấy kết quả</div>'}</div></section></div>`;
  }
  return `<div class="page root-page"><div class="compact-header">Cài đặt</div><h1 class="large-title">Cài đặt</h1><section class="group"><div class="rows account-card"><button class="row profile" data-id="apple" data-action="open" aria-label="Tài khoản Apple; nhấn giữ để sửa hồ sơ">${avatarMarkup('native-avatar')}<span><span class="profile-name">${escapeHTML(accountName())}</span><br><span class="profile-sub">Tài khoản Apple, iCloud, v.v.</span></span><span class="chevron"></span></button></div></section>${rootGroups.map(g=>group({rows:g})).join('')}</div>`;
}
const heroData={
 wifi:['wifi','#0a84ff','Wi-Fi','Kết nối vào Wi-Fi, xem các mạng khả dụng, cũng như quản lý cài đặt để kết nối mạng và điểm truy cập ở gần.'],
 bluetooth:['bluetooth','#0a84ff','Bluetooth','Kết nối với các phụ kiện mà bạn có thể sử dụng cùng những hoạt động như nghe nhạc, gọi điện thoại và chơi trò chơi.'],
 cellular:['cellular','#30c85a','Di động','Tìm hiểu xem bạn đang sử dụng bao nhiêu dữ liệu, đặt giới hạn dữ liệu, cùng quản lý các cài đặt cho nhà cung cấp và cuộc gọi Wi-Fi.'],
 hotspot:['link','#30c85a','Điểm truy cập cá nhân','Điểm truy cập cá nhân cho phép bạn chia sẻ kết nối internet di động từ iPhone của mình đến các thiết bị ở gần.'],
 general:['gear','#8e8e93','Cài đặt chung','Quản lý thiết lập và tùy chọn tổng thể của bạn cho iPhone, từ phiên bản cập nhật phần mềm, ngôn ngữ thiết bị, CarPlay, AirDrop, v.v.']
};
function hero(data){const sprite=sprites['hero-'+data[0]];return `<div class="hero-card"><div class="hero-icon ${sprite?'native-hero':''}" style="${sprite?spriteStyle(sprite):`background:${data[1]}`}">${sprite?'':icon(data[0])}</div><h1>${escapeHTML(data[2])}</h1><p>${escapeHTML(data[3])} <span>Tìm hiểu thêm...</span></p></div>`}
function bluetoothDevice(label,connected=false){return `<button class="row bluetooth-device" data-id="${escapeHTML(label)}" data-action="open"><span class="row-main"><span class="row-label">${escapeHTML(label)}</span><span class="row-trailing">${connected?'Đã kết nối':'Không kết nối'}</span><span class="bluetooth-info" aria-hidden="true">i</span></span></button>`}
function detailContent(id,config){
 if(id==='apple'||id==='about')return (config.groups||[]).map(group).join('');
 if(id==='wifi')return `<section class="hero-card settings-hero-with-switch"><div class="hero-icon native-hero" style="${spriteStyle(sprites['hero-wifi'])}"></div><h1>Wi-Fi</h1><p>Kết nối vào Wi-Fi, xem các mạng khả dụng, cũng như quản lý cài đặt để kết nối mạng và điểm truy cập ở gần. <span>Tìm hiểu thêm...</span></p><div class="hero-toggle">${row(R('Wi-Fi','wifi-enabled',{type:'toggle',default:true}))}</div></section><h2 class="inline-section-title wifi-section-title">Mạng <span class="bluetooth-spinner" aria-hidden="true"></span></h2>${group({rows:[R('Khác...','other-networks')]})}${group({rows:[R('Hỏi để kết nối mạng','ask-network',{value:'Thông báo'})],footer:'Các mạng đã biết sẽ được kết nối tự động. Nếu không có sẵn mạng đã biết nào, bạn sẽ được thông báo về các mạng có sẵn.'})}${group({rows:[R('Tự động kết nối điểm truy cập','auto-hotspot',{subtitle:'Hỏi để kết nối'})],footer:'Cho phép thiết bị này tự động phát hiện điểm truy cập cá nhân ở gần khi không có mạng Wi-Fi nào khả dụng.'})}`;
 if(id==='accessibility')return `<section class="hero-card accessibility-hero"><div class="hero-icon screenshot-hero" style="background-image:url('./assets/reference-4035.png')"></div><h1>Trợ năng</h1><p>Cá nhân hóa iPhone sao cho phù hợp nhất với bạn nhờ các tính năng trợ năng cho thị giác, vận động, thính giác, lời nói và nhận thức. <span>Tìm hiểu thêm...</span></p></section>${config.groups.map(group).join('')}`;
 if(id==='siri')return `<section class="hero-card settings-hero-with-switch siri-hero"><div class="hero-icon screenshot-hero" style="background-image:url('./assets/reference-4039.png')"></div><h1>Apple Intelligence & Siri</h1><p>Một hệ thống trí tuệ cá nhân được tích hợp sâu vào iPhone, các ứng dụng và Siri. <span>Tìm hiểu thêm...</span></p><div class="hero-toggle">${row(R('Apple Intelligence','apple-intelligence-enabled',{type:'toggle'}))}</div></section><p class="hero-followup">Đã đến lúc trải nghiệm thế hệ trí tuệ tiếp theo, hiện được tích hợp vào phần lõi của iOS nhằm mang đến cho bạn giải pháp trí tuệ mạnh mẽ và cá nhân hóa.</p>${config.groups.map(group).join('')}`;
 if(id==='bluetooth')return `<section class="bluetooth-hero"><div class="hero-icon native-hero" style="${spriteStyle(sprites['hero-bluetooth'])}"></div><h1>Bluetooth</h1><p>Kết nối với các phụ kiện mà bạn có thể sử dụng cho những hoạt động như truyền phát nhạc, gọi điện thoại và chơi trò chơi.</p><p class="learn-more">Tìm hiểu thêm...</p><div class="bluetooth-hero-toggle">${row(R('Bluetooth','bluetooth-enabled',{type:'toggle',default:true}))}</div></section><p class="bluetooth-footnote">Có thể tìm thấy iPhone này với tên “oe oe” trong khi Cài đặt Bluetooth được mở.</p><h2 class="bluetooth-heading">Thiết bị của tôi</h2><section class="group bluetooth-list"><div class="rows">${[['AB4085'],['BOSS ELAC'],['NP AUDIO'],['omoda'],['Xiaomi Smart Band 10 FB91',true],['Xiaomi Smart Band 9 5...'],['😎😎✌️✌️']].map(([name,connected])=>bluetoothDevice(name,connected)).join('')}</div></section><h2 class="bluetooth-heading other-devices">Các thiết bị khác <span class="bluetooth-spinner" aria-hidden="true"></span></h2><p class="bluetooth-footnote bluetooth-footer">Để ghép đôi Apple Watch với iPhone của bạn, hãy đi tới <span>Ứng dụng Apple Watch.</span></p>`;
  if(id==='cellular')return `${hero(heroData.cellular)}${group({rows:[R('Dữ liệu di động','cellular-enabled',{type:'toggle',default:true}),R('Tùy chọn dữ liệu di động','data-options',{value:'Chuyển vùng: Tắt'}),R('Điểm truy cập cá nhân','hotspot',{value:'Bật'})],footer:'Tắt dữ liệu di động để truyền tất cả dữ liệu qua Wi-Fi, bao gồm email, duyệt web và thông báo đẩy.'})}<h2 class="inline-section-title">VinaPhone</h2>${group({rows:[R('Lựa chọn mạng','network-selection',{value:'VinaPhone'}),R('Số của tôi','my-number'),R('Cuộc gọi Wi-Fi','wifi-calling',{value:'Tắt'}),R('Cuộc gọi trên thiết bị khác','other-calls',{value:'Khi ở gần'}),R('Dịch vụ nhà cung cấp','carrier-services'),R('PIN của SIM','sim-pin'),R('Ứng dụng của SIM','sim-apps')]})}${group({rows:[R('Thêm eSIM','esim',{accent:true})]})}<h2 class="inline-section-title">DỮ LIỆU DI ĐỘNG</h2>${group({rows:[R('Đến hiện tại','current-data',{value:'1,33 GB',plainValue:true}),R('Chuyển vùng đến hiện tại','roaming-data',{value:'0 KB',plainValue:true}),R('TikTok','tiktok',{subtitle:'482 MB',type:'toggle',default:true,appIcon:'tiktok'}),R('Messenger','messenger',{subtitle:'244 MB',type:'toggle',default:true,appIcon:'messenger'}),R('Điểm truy cập cá nhân','hotspot-usage',{value:'219 MB',appIcon:'hotspot'}),R('Facebook','facebook',{subtitle:'157 MB',type:'toggle',default:true,appIcon:'facebook'}),R('Dịch vụ hệ thống','system-services',{value:'58,8 MB',appIcon:'gear'}),R('Hiển thị tất cả','all-data')]})}${group({rows:[R('Wi-Fi Assist','wifi-assist',{subtitle:'570 KB',type:'toggle',default:true})],footer:'Tự động sử dụng dữ liệu di động khi tín hiệu kết nối Wi-Fi kém.'})}${group({rows:[R('iCloud Drive','icloud-drive',{type:'toggle',default:true})],footer:'Sử dụng mạng di động để chuyển tài liệu và dữ liệu khi không có kết nối Wi-Fi.'})}${group({rows:[R('Sao lưu iCloud','icloud-backup',{type:'toggle',default:true})],footer:'Sử dụng mạng di động của bạn để tự động sao lưu vào iCloud khi không có kết nối Wi-Fi.'})}<h2 class="inline-section-title">THỜI GIAN GỌI</h2>${group({rows:[R('Đến hiện tại','calls-current',{value:'10 phút',plainValue:true}),R('Thời lượng','calls-lifetime',{value:'10 phút',plainValue:true})]})}<h2 class="inline-section-title">THỐNG KÊ SỬ DỤNG DI ĐỘNG</h2>${group({rows:[R('Bật thống kê sử dụng di động','usage-enabled',{type:'toggle',default:true}),R('Đặt lại số liệu thống kê','reset-usage',{accent:true})],footer:'Đặt lại sau cùng: 10:43 ngày 20 thg 9, 2026'})}`;
  if(id==='hotspot')return `${hero(heroData.hotspot)}${group({rows:[R('Cho phép người khác kết nối','hotspot-enabled',{type:'toggle',default:true}),R('Mật khẩu Wi-Fi','hotspot-password',{value:'••••••••',editable:true})],footer:'Cho phép người dùng hoặc thiết bị khác không được đăng nhập vào iCloud tìm kiếm mạng được chia sẻ “iPhone” khi bạn ở trong cài đặt Điểm truy cập cá nhân.'})}${group({rows:[R('Tăng tối đa khả năng tương thích','compatibility',{type:'toggle'})],footer:'Khi bật tùy chọn này, hiệu năng internet có thể bị giảm đối với các thiết bị được kết nối vào điểm truy cập của bạn.'})}${group({rows:[R('Sử dụng dữ liệu','hotspot-usage',{value:'219 MB'})]})}<div class="connection-help"><div>${icon('wifi')}<span><b>ĐỂ KẾT NỐI BẰNG WI-FI</b><br>Chọn “iPhone” từ cài đặt Wi-Fi trên máy tính hoặc thiết bị khác của bạn.</span></div><div>${icon('bluetooth')}<span><b>ĐỂ KẾT NỐI BẰNG BLUETOOTH</b><br>Ghép đôi iPhone với máy tính, sau đó kết nối qua Bluetooth.</span></div><div>${icon('link')}<span><b>ĐỂ KẾT NỐI BẰNG USB</b><br>Cắm iPhone vào máy tính và chọn kết nối mạng.</span></div></div>`;
 if(id==='general')return `${hero(heroData.general)}${group({rows:[R('Giới thiệu','about'),R('Cập nhật phần mềm','software'),R('Dung lượng iPhone','storage')]})}${group({rows:[R('AppleCare & Bảo hành','warranty')]})}${group({rows:[R('AirDrop','airdrop'),R('AirPlay & Thông suốt','airplay'),R('Hình trong hình','pip'),R('Chụp ảnh màn hình','screenshots'),R('CarPlay','carplay')]})}${group({rows:[R('Bàn phím','keyboard'),R('Bộ điều khiển trò chơi','controllers'),R('Làm mới ứng dụng trong nền','background-refresh'),R('Ngày & Giờ','date'),R('Ngôn ngữ & Vùng','language'),R('Phông chữ','fonts'),R('Từ điển','dictionary'),R('Tự động điền & Mật khẩu','autofill-password')]})}${group({rows:[R('Nhà cung cấp TV','tv-provider'),R('Quản lý VPN & thiết bị','vpn')]})}${group({rows:[R('Pháp lý & Quy định','legal'),R('Chuyển hoặc đặt lại iPhone','reset')]})}`;
  if(id==='battery')return `<div class="battery-summary"><div class="battery-percent">40<span>%</span></div><div class="battery-sub">Lần gần nhất sạc đến 100%: <span>06:47</span></div><div class="battery-track"><span></span></div></div><h2 class="inline-section-title">Sử dụng hàng ngày</h2><section class="group"><div class="battery-usage rows"><b>Hôm nay, bạn sử dụng nhiều pin hơn bình thường, tính đến 19:25.</b><div class="usage-stats"><span>Trung bình<strong>62%</strong></span><span>Hôm nay<strong>82%</strong></span></div><div class="battery-chart">${[0,0,34,74,62,67,55,39].map((h,i)=>`<div class="chart-col"><i style="height:${h}px;${i===7?'background:#ff9f38':''}"></i><small>${['T5','T6','T7','CN','T2','T3','T4','T5'][i]}</small></div>`).join('')}</div><p class="chart-key">● Cả ngày&nbsp;&nbsp; ● Hàng ngày, tính đến 19:25</p><h3>Ứng dụng và hoạt động hệ thống</h3>${[['eFootball™','Bật màn hình hơn 58ph','34%'],['Messenger','Bật màn hình: 7ph · Nền: 24ph','10%'],['Facebook','Bật màn hình: 8ph · Nền: 13ph','10%']].map(([name,sub,n],i)=>`<div class="battery-app"><span class="app-mark native-app" style="${spriteStyle([['0059',112,1981],['0059',112,2166],['0059',112,2412]][i])}"></span><span>${name}<small>${sub}</small></span><em>❕ ${n}</em><span class="chevron"></span></div>`).join('')}${row(R('Xem tất cả mức sử dụng pin','all-battery'))}</div></section>${group({rows:[R('Tình trạng pin & Sạc','battery-health',{value:'Chưa xác minh'}),R('Phần trăm pin','battery-percent',{type:'toggle'}),R('Chế độ nguồn điện thấp','low-power',{type:'toggle'})],footer:'iPhone sẽ tạm thời giảm một số hoạt động trong nền, tốc độ xử lý và độ sáng màn hình khi bật Chế độ nguồn điện thấp.'})}`;
 return `<h1 class="detail-title">${escapeHTML(config.title)}</h1>${(config.groups||[]).map(group).join('')}`;
}
function detailPage(id){
 const config=pages[id]||{title:labelFor(id),groups:[{rows:[R('Thông tin','info-'+id,{value:'Mô phỏng'})]}]};
 const nav=`<nav class="detail-nav"><button class="back" id="back" aria-label="Quay lại"></button><span>${escapeHTML(config.title)}</span>${id==='wifi'?'<button class="wifi-edit" type="button" data-action="wifi-edit">Sửa</button>':''}</nav>`;
 if(config.special==='update')return `<div class="page detail-page">${nav}<div class="center-detail"><div class="hero-glyph">${icon('update')}</div><h2>iOS 26</h2><p>Trang này chỉ mô phỏng giao diện.</p></div></div>`;
 return `<div class="page detail-page ${id==='apple'?'apple-page':id==='bluetooth'?'bluetooth-page':id==='about'?'about-page':id==='wifi'?'wifi-page':id==='accessibility'?'accessibility-page':id==='siri'?'siri-page':''}">${nav}${id==='apple'?`<div class="apple-head" aria-label="Nhấn giữ để sửa hồ sơ">${avatarMarkup('account-initials')}<h1>${escapeHTML(accountDisplayName())}</h1><p>${escapeHTML(accountEmail())}</p></div>`:''}${detailContent(id,config)}</div>`;
}
function labelFor(id){const all=[...rootGroups.flat(),...Object.values(pages).flatMap(p=>p.groups?.flatMap(g=>g.rows||[])||[])];return all.find(x=>x.id===id)?.label||id.replace(/^app-/,'')}
const pageCache=[];
let slideToken=0,enterAnimation=null,enterTransitionEnd=null;
function makePage(id){const holder=document.createElement('div');holder.innerHTML=id==='root'?rootPage(searchDock.querySelector('input')?.value||''):detailPage(id);return holder.firstElementChild}
function render(keepScroll=false,direction=''){
 const navigation=direction==='back-swipe'?'back':direction;
 const y=viewport.scrollTop,oldPage=viewport.firstElementChild,animated=!!direction&&direction!=='back-swipe'&&(direction==='forward'||!matchMedia('(prefers-reduced-motion: reduce)').matches);
 const token=++slideToken;enterAnimation?.cancel();enterAnimation=null;if(enterTransitionEnd){viewport.removeEventListener('transitionend',enterTransitionEnd);enterTransitionEnd=null}viewport.classList.remove('is-entering');viewport.style.transition='';viewport.style.transform='';
 document.querySelectorAll('.outgoing').forEach(ghost=>ghost.remove());
 const depth=stack.length-1;
 if(navigation==='forward'&&oldPage)pageCache[depth-1]=oldPage;
 const cached=navigation==='back'?pageCache[depth]:null;
 const nextPage=cached||makePage(stack[depth]);
 if(navigation==='back')pageCache.length=depth;
 if(animated&&oldPage){
  oldPage.classList.remove('enter-forward','enter-back');
  const ghost=document.createElement('div');
  ghost.className='outgoing leave-'+direction;ghost.setAttribute('aria-hidden','true');
  ghost.append(oldPage);document.querySelector('.app').append(ghost);ghost.scrollTop=y;
  ghost.addEventListener('animationend',()=>ghost.remove(),{once:true});
  setTimeout(()=>ghost.remove(),direction==='forward'?620:430);
 }
 viewport.replaceChildren(nextPage);
 viewport.scrollTop=keepScroll?y:navigation==='back'?(scrollOffsets[depth]||0):0;
 searchDock.hidden=stack[depth]!=='root'||(animated&&navigation==='back');
 if(stack[depth]==='root'&&animated&&navigation==='back')setTimeout(()=>{if(stack.length===1)searchDock.hidden=false},340);
 document.body.classList.toggle('light',state['appearance-light']===true);document.querySelector('meta[name="theme-color"]').content=state['appearance-light']===true?'#f2f2f7':'#000000';
 nextPage.classList.remove('enter-forward','enter-back');
 if(animated&&direction==='forward'){
  viewport.classList.add('is-entering');
  const finish=()=>{if(slideToken!==token)return;enterAnimation?.cancel();enterAnimation=null;if(enterTransitionEnd){viewport.removeEventListener('transitionend',enterTransitionEnd);enterTransitionEnd=null}viewport.classList.remove('is-entering');viewport.style.transition='';viewport.style.transform=''};
  if(typeof viewport.animate==='function'){
   enterAnimation=viewport.animate([{transform:'translate3d(100%,0,0)'},{transform:'translate3d(0,0,0)'}],{duration:450,easing:'cubic-bezier(.22,.74,.2,1)',fill:'both'});
   enterAnimation.onfinish=finish
  }else{
   viewport.style.transition='none';viewport.style.transform='translate3d(100%,0,0)';void viewport.offsetWidth;
   requestAnimationFrame(()=>requestAnimationFrame(()=>{if(slideToken!==token)return;viewport.style.transition='transform .45s cubic-bezier(.22,.74,.2,1)';viewport.style.transform='translate3d(0,0,0)'}));
   enterTransitionEnd=e=>{if(e.target===viewport&&e.propertyName==='transform')finish()};viewport.addEventListener('transitionend',enterTransitionEnd)
  }
  setTimeout(finish,550)
 }
 updateScrollHeader()
}
function openPage(id){scrollOffsets[stack.length-1]=viewport.scrollTop;stack.push(id);scrollOffsets.push(0);history.pushState({stack:[...stack]},'',`#${encodeURIComponent(id)}`);render(false,'forward')}
function back(){if(stack.length>1){scrollOffsets[stack.length-1]=viewport.scrollTop;history.back()}}
function showEdit(id){
 const title=labelFor(id),aboutRow=stack.at(-1)==='about'?pages.about.groups.flatMap(g=>g.rows||[]).find(r=>r.id===id):null;
 const initial=state[id]??aboutRow?.value??aboutRow?.subtitle??'';
 const shell=document.createElement('div');shell.className='sheet-overlay';
 shell.innerHTML=`<div class="sheet-backdrop" data-close="1"></div><div class="sheet" role="dialog" aria-modal="true" aria-label="${escapeHTML(title)}"><div class="sheet-handle"></div><h2>${escapeHTML(title)}</h2><p>Giá trị này chỉ lưu trên thiết bị của bạn.</p><input type="text" id="sheet-value" placeholder="Nhập ${escapeHTML(title.toLowerCase())}" autocomplete="off" value="${escapeHTML(initial)}"><button type="button" id="sheet-save">Lưu</button><button type="button" data-close="1">Hủy</button></div>`;
 document.querySelector('.app').append(shell);shell.querySelector('input').focus();
 shell.addEventListener('click',e=>{if(e.target.closest('[data-close]'))shell.remove();if(e.target.id==='sheet-save'){state[id]=shell.querySelector('input').value;save();shell.remove();render(true)}})
}
function showAccountEdit(){
 if(document.querySelector('.sheet-overlay'))return;
 const shell=document.createElement('div');shell.className='sheet-overlay';
 shell.innerHTML=`<div class="sheet-backdrop" data-close="1"></div><div class="sheet account-sheet" role="dialog" aria-modal="true" aria-label="Sửa tài khoản Apple"><div class="sheet-handle"></div><h2>Sửa tài khoản Apple</h2><label class="account-photo">${avatarMarkup('native-avatar')}<span>Thay ảnh đại diện</span><input type="file" id="account-photo" accept="image/*" aria-label="Chọn ảnh đại diện"></label><label class="account-field">Tên ở Cài đặt<input id="account-name" maxlength="80" value="${escapeHTML(accountName())}"></label><label class="account-field">Tên tài khoản<input id="account-display-name" maxlength="80" value="${escapeHTML(accountDisplayName())}"></label><label class="account-field">Email<input id="account-email" type="email" maxlength="120" value="${escapeHTML(accountEmail())}"></label><button type="button" id="account-save">Lưu</button><button type="button" data-close="1">Hủy</button></div>`;
 document.querySelector('.app').append(shell);
 let previewURL='';
 const close=()=>{if(previewURL)URL.revokeObjectURL(previewURL);shell.remove()};
 const photo=shell.querySelector('#account-photo');
 photo.addEventListener('change',()=>{if(previewURL)URL.revokeObjectURL(previewURL);const file=photo.files?.[0];if(!file)return;previewURL=URL.createObjectURL(file);const avatar=shell.querySelector('.account-photo .avatar');avatar.replaceWith(Object.assign(document.createElement('img'),{className:'avatar native-avatar',src:previewURL,alt:''}))});
 shell.addEventListener('click',async e=>{
  if(e.target.closest('[data-close]'))return close();
  if(e.target.id!=='account-save')return;
  const file=photo.files?.[0];
  if(file){
   try{
    const img=new Image();
    await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;img.src=previewURL});
    const side=Math.min(img.naturalWidth,img.naturalHeight);if(!side)throw Error('invalid image');
    const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
    canvas.getContext('2d').drawImage(img,(img.naturalWidth-side)/2,(img.naturalHeight-side)/2,side,side,0,0,256,256);
    state.accountAvatar=canvas.toDataURL('image/jpeg',.86);
   }catch{return toast('Không thể đọc ảnh này')}
  }
  state.accountName=shell.querySelector('#account-name').value.trim()||'quan chuy dio';
  state.accountDisplayName=shell.querySelector('#account-display-name').value.trim()||'Đỗ Viết Mạnh';
  state.accountEmail=shell.querySelector('#account-email').value.trim()||'dovietmanh2006@gmail.com';
  save();close();if(stack.length>1)pageCache[0]=makePage('root');render(true)
 });
}
function toast(message){document.querySelector('.toast')?.remove();const el=document.createElement('div');el.className='toast';el.textContent=message;document.querySelector('.app').append(el);setTimeout(()=>el.remove(),1600)}
function setSwitchState(row,on){const id=row.dataset.id,previous=state[id]??findDefault(id),control=row.querySelector('.switch');row.setAttribute('aria-checked',String(on));control?.classList.toggle('on',on);control?.style.setProperty('--thumb-x',on?'20px':'0px');control?.style.setProperty('--liquid-progress',on?'100%':'0%');if(previous===on)return;state[id]=on;save();if(id==='wifi-enabled'||id==='bluetooth-enabled'||id==='cellular-enabled')setTimeout(()=>render(true),650)}
let accountHoldTimer=null,accountHoldStart=null,ignoreAccountClick=false;
const clearAccountHold=()=>{clearTimeout(accountHoldTimer);accountHoldTimer=null;accountHoldStart=null};
viewport.addEventListener('pointerdown',e=>{
 const target=e.target.closest('.profile[data-id="apple"],.apple-head');
 if(!target||(e.pointerType==='mouse'&&e.button!==0))return;
 clearAccountHold();accountHoldStart={x:e.clientX,y:e.clientY};
 accountHoldTimer=setTimeout(()=>{accountHoldTimer=null;accountHoldStart=null;ignoreAccountClick=true;setTimeout(()=>{ignoreAccountClick=false},850);showAccountEdit()},520)
});
viewport.addEventListener('pointermove',e=>{if(accountHoldStart&&Math.hypot(e.clientX-accountHoldStart.x,e.clientY-accountHoldStart.y)>12)clearAccountHold()});
viewport.addEventListener('pointerup',clearAccountHold);viewport.addEventListener('pointercancel',clearAccountHold);
viewport.addEventListener('contextmenu',e=>{if(e.target.closest('.profile[data-id="apple"],.apple-head')){e.preventDefault();clearAccountHold();ignoreAccountClick=true;setTimeout(()=>{ignoreAccountClick=false},850);showAccountEdit()}});
viewport.addEventListener('click',e=>{if(ignoreAccountClick&&e.target.closest('.profile[data-id="apple"],.apple-head')){e.stopImmediatePropagation();e.preventDefault();ignoreAccountClick=false}},{capture:true});
let switchGesture=null,ignoreSwitchClick=null;
viewport.addEventListener('pointerdown',e=>{const switchEl=e.target.closest('.switch');if(!switchEl||(e.pointerType==='mouse'&&e.button!==0))return;const row=switchEl.closest('[data-action="toggle"]');if(!row)return;
 const on=switchEl.classList.contains('on'),travel=Math.max(20,switchEl.getBoundingClientRect().width-31);
 switchGesture={pointerId:e.pointerId,element:switchEl,row,startX:e.clientX,position:on?travel:0,travel,on,dragged:false};switchEl.style.setProperty('--thumb-x',`${switchGesture.position}px`);switchEl.classList.add('is-dragging','is-active');switchEl.setPointerCapture?.(e.pointerId)
});
viewport.addEventListener('pointermove',e=>{const gesture=switchGesture;if(!gesture||e.pointerId!==gesture.pointerId)return;const dx=e.clientX-gesture.startX;if(Math.abs(dx)>5)gesture.dragged=true;if(!gesture.dragged)return;
 gesture.position=Math.min(gesture.travel,Math.max(0,(gesture.on?gesture.travel:0)+dx));gesture.element.style.setProperty('--thumb-x',`${gesture.position}px`);gesture.element.style.setProperty('--liquid-progress',`${Math.round(gesture.position/gesture.travel*100)}%`);
 if(gesture.position<=1||gesture.position>=gesture.travel-1)gesture.element.classList.toggle('on',gesture.position>=gesture.travel-1);e.preventDefault()
});
function endSwitchGesture(e,cancelled=false){const gesture=switchGesture;if(!gesture||e.pointerId!==gesture.pointerId)return;switchGesture=null;
 if(gesture.dragged){ignoreSwitchClick=gesture.row;setTimeout(()=>{if(ignoreSwitchClick===gesture.row)ignoreSwitchClick=null},0)}
 gesture.element.classList.remove('is-dragging','is-active');
 if(cancelled){gesture.element.classList.toggle('on',gesture.on);gesture.element.style.setProperty('--thumb-x',gesture.on?'20px':'0px');gesture.element.style.setProperty('--liquid-progress',gesture.on?'100%':'0%');return}
 if(gesture.dragged)setSwitchState(gesture.row,gesture.position>=gesture.travel/2)
}
viewport.addEventListener('pointerup',e=>endSwitchGesture(e));viewport.addEventListener('pointercancel',e=>endSwitchGesture(e,true));
viewport.addEventListener('click',e=>{
  if(e.target.closest('#back'))return back();
  const el=e.target.closest('[data-action]');if(!el)return;
  const {id,action}=el.dataset;
  if(action==='open')return openPage(id);
  if(action==='wifi-edit')return toast('Không có mạng Wi-Fi đã lưu');
  if(action==='edit')return showEdit(id);
  if(action==='copy'){navigator.clipboard?.writeText(el.dataset.value).then(()=>toast('Đã sao chép')).catch(()=>toast(el.dataset.value));return}
  if(action==='toggle'){if(ignoreSwitchClick===el){ignoreSwitchClick=null;return}setSwitchState(el,!(state[id]??findDefault(id)));return}
  if(action==='choice'){state['appearance-light']=id==='appearance-light';state['appearance-dark']=id==='appearance-dark';save();render(true)}
});
function findDefault(id){for(const p of Object.values(pages))for(const g of p.groups||[])for(const r of g.rows||[])if(r.id===id)return !!r.default;return false}
searchDock.addEventListener('input',e=>{if(e.target.id!=='search')return;const y=viewport.scrollTop;viewport.replaceChildren(makePage('root'));viewport.scrollTop=y;updateScrollHeader()});
viewport.addEventListener('input',e=>{if(e.target.dataset.range){state[e.target.dataset.range]=Number(e.target.value);save()}});
function updateScrollHeader(){
 const page=viewport.firstElementChild;if(!page)return;
 const y=viewport.scrollTop;page.classList.toggle('scrolled',y>75);
 if(page.classList.contains('root-page'))page.style.setProperty('--compact-opacity',Math.min(1,Math.max(0,(y-65)/75)).toFixed(3));
}
viewport.addEventListener('scroll',updateScrollHeader,{passive:true});
let edgeGesture=null;
function resetSwipe(){viewport.style.transition='';viewport.style.transform='';viewport.style.boxShadow='';viewport.style.willChange=''}
function paintSwipe(gesture){gesture.frame=0;if(edgeGesture!==gesture)return;viewport.style.transform=`translate3d(${gesture.progress}px,0,0)`}
viewport.addEventListener('touchstart',e=>{if(stack.length>1&&e.touches.length===1&&e.touches[0].clientX<36&&!swipeCompleting&&!viewport.classList.contains('is-entering'))edgeGesture={x:e.touches[0].clientX,y:e.touches[0].clientY,width:viewport.clientWidth,started:performance.now(),active:false,frame:0,progress:0}},{passive:true});
viewport.addEventListener('touchmove',e=>{const gesture=edgeGesture;if(!gesture||e.touches.length!==1)return;const dx=e.touches[0].clientX-gesture.x,dy=e.touches[0].clientY-gesture.y;
 if(!gesture.active){if(Math.abs(dy)>12&&Math.abs(dy)>Math.abs(dx)){edgeGesture=null;return}if(dx<=12||dx<=Math.abs(dy)*1.3)return;
  gesture.active=true;document.querySelector('.outgoing')?.remove();const under=document.createElement('div');under.className='swipe-under';under.append(pageCache[stack.length-2]||makePage(stack.at(-2)));document.querySelector('.app').append(under);under.scrollTop=scrollOffsets[stack.length-2]||0;gesture.under=under;
  viewport.style.transition='none';viewport.style.willChange='transform';viewport.style.boxShadow='-18px 0 35px #0008'
 }
 gesture.progress=Math.min(Math.max(dx,0),gesture.width);if(!gesture.frame)gesture.frame=requestAnimationFrame(()=>paintSwipe(gesture));e.preventDefault()
},{passive:false});
viewport.addEventListener('touchend',e=>{const gesture=edgeGesture;if(!gesture)return;edgeGesture=null;if(gesture.frame)cancelAnimationFrame(gesture.frame);if(!gesture.active)return;
 const dx=e.changedTouches[0].clientX-gesture.x,elapsed=Math.max(performance.now()-gesture.started,1),complete=dx>Math.min(90,gesture.width*.24)||(dx>40&&dx/elapsed>.55);
 const duration=Math.max(160,Math.min(300,(complete?gesture.width-Math.max(dx,0):Math.max(dx,0))*.65));
 viewport.style.transition=`transform ${duration}ms cubic-bezier(.25,.78,.25,1)`;
 viewport.style.transform=complete?'translate3d(100%,0,0)':'translate3d(0,0,0)';
 let settled=false;const finish=()=>{if(settled)return;settled=true;viewport.removeEventListener('transitionend',onEnd);if(complete){swipeCompleting=true;back()}else{resetSwipe();gesture.under.remove()}};
 const onEnd=e=>{if(e.target===viewport&&e.propertyName==='transform')finish()};viewport.addEventListener('transitionend',onEnd);setTimeout(finish,duration+55)
},{passive:true});
viewport.addEventListener('touchcancel',()=>{if(edgeGesture?.frame)cancelAnimationFrame(edgeGesture.frame);edgeGesture?.under?.remove();edgeGesture=null;resetSwipe()},{passive:true});
window.addEventListener('popstate',e=>{const previousLength=stack.length,wasSwipe=swipeCompleting;swipeCompleting=false;stack=[...(e.state?.stack||['root'])];if(stack.length<previousLength)scrollOffsets.length=stack.length;while(scrollOffsets.length<stack.length)scrollOffsets.push(0);resetSwipe();render(false,wasSwipe?'back-swipe':stack.length<previousLength?'back':'forward');document.querySelector('.swipe-under')?.remove();updateScrollHeader()});
history.replaceState({stack:['root']},'',location.pathname+location.search);render();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=34').catch(()=>{}));
