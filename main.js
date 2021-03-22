// JSON 語法
// var json = '{ "名稱" : "喇叭", "價格" : 1, "星星數" : 5, "售出量" : 40 }';
// 在 JS 內要使用 JSON 必須先轉為物件
// 將 json 轉為 JS 的 object

// 線上 JSON
var link = "https://datacenter.taichung.gov.tw/Swagger/OpenData/2072c001-c06e-4276-bbf1-84f3b113c38c?limit=1000";
// 取得線上 JSON 將資料載入至網頁 - AJAX

// 常數
const getData = {
    data() {
        return {
            datas: ""
        }
    },
    mounted() {

        // 定義 XHR 物件
        var xhr = new XMLHttpRequest();

        // XHR 物件.開啟("取得"，連結)
        xhr.open("GET", link);

        // XHR 物件 送出
        xhr.send();

        // XHR 物件 載入完成後
        xhr.onload = () => {

            // JSON = XHR.要求文字
            var json = xhr.responseText;

            // 將 JSON 轉為 Object
            var obj = JSON.parse(j);

            console.log(o);
        }
    }
};

// 安裝
Vue.createApp(getData).mount("#data");